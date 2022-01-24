/**
 * Get indexed measurement data by race, gender, and type (adult/B/C)
 * @param {string} race
 * @param {string} gender
 * @param {string} type
 * @return {Object}
 */
function getDiagnosesData (race, gender, type) {
    var result = {};
    for (var key in measurement_reference_data) {
        result[key] = {
            mean: measurement_reference_data[key][race][gender][type]['mean'],
            sd: measurement_reference_data[key][race][gender][type]['sd'],
            m_type: measurement_reference_data[key]['type'],
            nodes: measurement_reference_data[key]['nodes'],

            //coords

            meaning_large: measurement_reference_data[key]['meaning']['large'],
            meaning_normal: measurement_reference_data[key]['meaning']['normal'],
            meaning_small: measurement_reference_data[key]['meaning']['small'],

        };
    }

    return result;
}

/**
 * Get diagnosis text by type
 * @param {Object} calculatedValues
 * @param {Object} json_data
 * @param {array} measurement_array
 * @param {number[]} thresholds
 * @param {string[]} deviationLabels
 * @param {string[]} severityLabels
 * @param {string[]} cssLabels
 * @return {Object}
 */
function updateDiagnosisText2(
    calculatedValues,
    json_data,
    measurement_array,
    thresholds,
    deviationLabels,
    severityLabels,
    cssLabels
) {
    var result_point = 0;

    for (var i in measurement_array) {
        // var nodes = json_data[measurement_array[i]].nodes;
        // console.log(measurement_array[i]);

        // replaces patient measurement value with precalculatedValue if exists
        var itemCalculatedValue = null;
        var key = measurement_array[i]["item"];
        if (typeof (calculatedValues[key]) !== 'undefined') {
            itemCalculatedValue = calculatedValues[key];
        }

        // if pre calculated value not exists - calculate it
        if (itemCalculatedValue === null) {
            itemCalculatedValue = calculate_measurement(json_data, measurement_array[i]["item"]);
        }

        // calculate difference between actual value and mean value, get standard deviation value and direction for measurement
        var diff = itemCalculatedValue - json_data[measurement_array[i]["item"]].mean;
        var sd = json_data[measurement_array[i]["item"]].sd;
        // var direction = measurement_reference_data[measurement_array[i]].direction; //@todo why?
        var direction = measurement_array[i]["direction"];

        var measurementResultPoints = calculateResultPointsBySdDiff(diff, sd, direction);
        result_point += measurementResultPoints;
    }

    return getStateByDeviationPointsAndThresholds(result_point, thresholds, deviationLabels, severityLabels, cssLabels);

}

/**
 * Calculate points of deviation by diff between actual and mean values, standard deviation value and direction (direct or opposite)
 * @param {number} diff diff between actual and mean values
 * @param {number} sd standard deviation
 * @param {boolean} direction true for direct and false for opposite
 * @return {number} deviation points 0-3 from normal state to max deviation
 */
function calculateResultPointsBySdDiff(diff, sd, direction) {

    var maxMultiplier = 3;
    var directionKoeff = direction ? 1 : -1;
    var diffKoeff = diff >= 0 ? 1 : -1;

    var diffMultiplier = Math.floor((Math.abs(diff) / Math.abs(sd)));
    diffMultiplier = Math.min(diffMultiplier, maxMultiplier);

    return diffMultiplier * directionKoeff * diffKoeff;
}

/**
 * Get the deviation label
 * @param {number} deviationPoints deviation sum, calculated by measurement the current param is depends on
 * @param {number[]} thresholds - to classify degree of deviation
 * @param {string[]} deviationLabels - labels for deviation to lower values, normal state, deviation to upper values
 * @param {string[]} severityLabels - labels for deviation severity [normal, mild, moderate, severe]
 * @param {string[]} cssClasses - css classes by severity
 * @return {Object} title and html classes to display the result
 */
function getStateByDeviationPointsAndThresholds(
    deviationPoints,
    thresholds,
    deviationLabels,
    severityLabels,
    cssClasses
) {
    var directionToUpper = deviationPoints >= 0;
    var deviationPointsAbs = Math.abs(deviationPoints);

    var deviationLevel = thresholds.length + 1; //as default we set deviation level to max

    for (var i = 0; i < thresholds.length; i++) {
        if (deviationPointsAbs < thresholds[i]) {
            deviationLevel = i;
            break;
        }
    }

    var resultStr = '';
    if (deviationLevel === 0) {
        resultStr = deviationLabels[1];
    } else {
        resultStr = directionToUpper ? deviationLabels[2] : deviationLabels[0];
    }
    var resultSeverity = severityLabels[deviationLevel];
    var resultClass = cssClasses[deviationLevel];

    return {
        result_str: resultStr,
        severity: resultSeverity,
        class: resultClass,
    }

}


function updateDiagnosisText(measurement_array, threshold_1, threshold_2, threshold_3, result_1, result_2, result_3) {
    var result_point = 0;
    for (var i in measurement_array) {

        var nodes = measurement_reference_data[measurement_array[i]].nodes;
        var diff = measurement_reference_data[measurement_array[i]].result(nodes[0], nodes[1], nodes[2], nodes[3], nodes[4], nodes[5], nodes[6], nodes[7], nodes[8], nodes[9], nodes[10], nodes[11], nodes[12], nodes[13], nodes[14], nodes[15]) - measurement_reference_data[measurement_array[i]].asian.male.adult.mean;

        var sd = measurement_reference_data[measurement_array[i]].asian.male.adult.sd
        var direction = measurement_reference_data[measurement_array[i]].direction;


        if (diff > 3 * sd) {
            if (direction) {
                result_point += 3;
            } else {
                result_point += (-3);
            }
        } else if ((3 * sd) > (diff) && (diff) > (2 * sd)) {
            if (direction) {
                result_point += 2;
            } else {
                result_point += (-2);
            }
        } else if ((2 * sd) > (diff) && (diff) > (1 * sd)) {
            if (direction) {
                result_point += 1;
            } else {
                result_point += (-1);
            }
        } else if (((-1) * sd) > (diff) && (diff) > ((-2) * sd)) {
            if (direction) {
                result_point += (-1);
            } else {
                result_point += 1;
            }
        } else if (((-2) * sd) > (diff) && (diff) > ((-3) * sd)) {
            if (direction) {
                result_point += (-2);
            } else {
                result_point += 2;
            }
        } else if ((-3) * sd > diff) {
            if (direction) {
                result_point += (-3);
            } else {
                result_point += 3;
            }
        }

    }

    var upper_ref_1 = threshold_1, lower_ref_1 = (-threshold_1);
    var upper_ref_2 = threshold_2, lower_ref_2 = (-threshold_2);
    var upper_ref_3 = threshold_3, lower_ref_3 = (-threshold_3);
    var result_str = "";
    var severity = "";
    var severity_class = "";

    // console.log(result_point);

    if (result_point >= upper_ref_3) {
        // console.log("case 1");
        result_str = result_1;
        severity = "(severe)";
        severity_class = "severe";

    } else if (upper_ref_3 > result_point && result_point >= upper_ref_2) {
        // console.log("case 2");
        result_str = result_1;
        severity = "(moderate)";
        severity_class = "moderate";

    } else if (upper_ref_2 > result_point && result_point >= upper_ref_1) {
        // console.log("case 3");
        result_str = result_1;
        severity = "(mild)";
        severity_class = "mild";

    } else if (upper_ref_1 > result_point && result_point > lower_ref_1) {
        // console.log("case 4");
        result_str = result_2;
        severity = "";
        severity_class = "normal";

    } else if (lower_ref_1 >= result_point && result_point > lower_ref_2) {
        // console.log("case 5");
        result_str = result_3;
        severity = "(mild)";
        severity_class = "mild";

    } else if (lower_ref_2 >= result_point && result_point > lower_ref_3) {
        // console.log("case 6");
        result_str = result_3;
        severity = "(moderate)";
        severity_class = "moderate";

    } else if (lower_ref_3 >= result_point) {
        // console.log("case 7");
        result_str = result_3;
        severity = "(severe)";
        severity_class = "severe";

    } else {
        // console.log("case 8");
    }


    return {"result_str": result_str, "severity": severity, "severity_class": severity_class};
}


function calculate_measurement(json_data, measurement_name) {
    var item = json_data[measurement_name];
    // console.log(measurement_name);
    var nodes = item.nodes;
    var m_type = item.m_type;
    var measurement_1 = item.measurement_1;
    var measurement_2 = item.measurement_2;
    var measurement_3 = item.measurement_3;

    // console.log(nodes);
    // console.log(m_type);
    // console.log(measurement_1)

    // angle_AB_CD
    // angle_AB_CD_unsigned
    // angle_ABC
    // distance_AB
    // distance_A_BC
    // distance_A_BC_signed
    // distance_AB_horizontal
    // distance_AB_vertical
    // distance_A_to_B_vertical(Cy)
    // distance_A_to_B_perp_CD
    // distance_AB_along_CD
    // distance_AB_perp_CD
    // Result1+Result2
    // Result1-Result2
    // Result1+Result2+Result3
    // Result1/Result2
    // (Result1/Result2)*100

    switch (m_type) {
        case "angle_AB_CD":
            return angle_vectors(point(nodes[0]), point(nodes[1]), point(nodes[2]), point(nodes[3])).toFixed(2);
            break;
        case "angle_AB_CD_unsigned":
            if (angle_vectors(point(nodes[0]), point(nodes[1]), point(nodes[2]), point(nodes[3])).toFixed(2) < 0) {
                return (360 + angle_vectors(point(nodes[0]), point(nodes[1]), point(nodes[2]), point(nodes[3]))).toFixed(2);
            } else {
                return angle_vectors(point(nodes[0]), point(nodes[1]), point(nodes[2]), point(nodes[3])).toFixed(2);
            }
            break;
        case "(angle_AB_CD)-90":
            return (angle_vectors(point(nodes[0]), point(nodes[1]), point(nodes[2]), point(nodes[3])) - 90).toFixed(2);
            break;
        case "angle_ABC":
            return angle(point(nodes[0]), point(nodes[1]), point(nodes[2])).toFixed(2);
            break;
        case "distance_AB":
            return (pointToPointDistance(point(nodes[0]).coordinates, point(nodes[1]).coordinates) * mm_px_ratio).toFixed(2);
            break;
        case "distance_A_BC":
            return (pointLineDistance(point(nodes[0]).coordinates, point(nodes[1]).coordinates, point(nodes[2]).coordinates) * mm_px_ratio).toFixed(2);
        case "distance_A_BC_signed":
            return (pointToRickettsELine(point(nodes[1]), point(nodes[2]), point(nodes[0])) * mm_px_ratio).toFixed(2);
        case "distance_AB_horizontal":
            if ((point(nodes[1]).coordinates.x - point(nodes[0]).coordinates.x) < 0) {
                return (-(point(nodes[1]).coordinates.x - point(nodes[0]).coordinates.x) * mm_px_ratio).toFixed(2);
            } else {
                return ((point(nodes[1]).coordinates.x - point(nodes[0]).coordinates.x) * mm_px_ratio).toFixed(2);
            }
        case "distance_AB_vertical":
            if ((point(nodes[1]).coordinates.y - point(nodes[0]).coordinates.y) < 0) {
                return (-(point(nodes[1]).coordinates.y - point(nodes[0]).coordinates.y) * mm_px_ratio).toFixed(2);
            } else {
                return ((point(nodes[1]).coordinates.y - point(nodes[0]).coordinates.y) * mm_px_ratio).toFixed(2);
            }
        case "distance_A_to_B_vertical(Cy)":
            return ((point(nodes[0]).coordinates.x - point(nodes[1]).coordinates.x) * mm_px_ratio).toFixed(2);
        // case "distance_AB_along_CD":
        //     console.log("distance_AB_along_CD");
        //     var cd_to_hor = angle_vectors({"coordinates":{"x":0,"y":0}},{"coordinates":{"x":100,"y":0}},point(nodes[3]),point(nodes[2]))
        //     console.log(rotate(point(nodes[0]).coordinates, point('S').coordinates, cd_to_hor));
        //     console.log(rotate(point(nodes[1]).coordinates, point('S').coordinates, cd_to_hor));
        //     return((rotate(point(nodes[0]).coordinates, point('S').coordinates, cd_to_hor)[0]-rotate(point(nodes[1]).coordinates, point('S').coordinates, cd_to_hor)[0])*mm_px_ratio).toFixed(2);

        case "Result1+Result2+Result3":
            var result_1, result_2, result_3 = 0;

            $.each(json_data, function (key, value) {

                if (measurement_1 == key) {
                    result_1 = Number(calculate_measurement(json_data, key));
                } else if (measurement_2 == key) {
                    result_2 = Number(calculate_measurement(json_data, key));
                } else if (measurement_3 == key) {
                    result_3 = Number(calculate_measurement(json_data, key));
                }

            });
            // for(var i in json_data){
            //   if(measurement_1 == json_data[i].item){
            //     result_1 = Number(calculate_measurement(json_data, data[i]));
            //   }else if(measurement_2 == data[i].item){
            //     result_2 = Number(calculate_measurement(data, data[i]));
            //   }else if(measurement_3 == data[i].item){
            //     result_3 = Number(calculate_measurement(data, data[i]));
            //   }
            // }
            // console.log("result:"+(result_1 + result_2 + result_3).toFixed(2));

            return (result_1 + result_2 + result_3).toFixed(2);


        case "distance_AB_along_CD":

            var sp_point1 = getSpPoint(point(nodes[2]), point(nodes[3]), point(nodes[0]));  //U6Mesial
            var sp_point2 = getSpPoint(point(nodes[2]), point(nodes[3]), point(nodes[1]));  //L6Mesial

            if ((sp_point2.x - sp_point1.x) * (point(nodes[3]).coordinates.x - point(nodes[2]).coordinates.x) > 0) {

                return (pointToPointDistance(sp_point1, sp_point2) * mm_px_ratio).toFixed(2);
            } else {
                return (-pointToPointDistance(sp_point1, sp_point2) * mm_px_ratio).toFixed(2);
            }

        case "distance_AB_perp_CD":

            var dc_to_ab = angle_vectors(point(nodes[3]), point(nodes[2]), point(nodes[1]), point(nodes[0]));

            var distance_AB = (pointToPointDistance(point(nodes[1]).coordinates, point(nodes[0]).coordinates));

            var radians = (Math.PI / 180) * dc_to_ab,
                cos = Math.cos(radians),
                sin = Math.sin(radians);


            return (distance_AB * sin * mm_px_ratio).toFixed(2);


        case "distance_A_to_B_perp_CD":


            var sp_point = getSpPoint(point(nodes[2]), point(nodes[3]), point(nodes[1]));

            if (sp_point.x - point(nodes[1]).coordinates.x != 0) {
                var slope = (sp_point.y - point(nodes[1]).coordinates.y) / (sp_point.x - point(nodes[1]).coordinates.x)
                var y = point("Me").coordinates.y;
                var x = (y - point(nodes[1]).coordinates.y) / slope + point(nodes[1]).coordinates.x;
                var E = {"coordinates": {"x": x, "y": y}};
            } else {
                var E = {"coordinates": {"x": point(nodes[1]).coordinates.x, "y": point("Me").coordinates.y}};
            }

            if ((point(nodes[1]).coordinates.x - x) == 0) {
                return ((point(nodes[0]).coordinates.x - x) * mm_px_ratio).toFixed(2);

            } else if ((point(nodes[1]).coordinates.x - x) > 0) {
                return (pointToRickettsELine(point(nodes[1]), E, point(nodes[0])) * mm_px_ratio).toFixed(2);
            } else {
                return (-pointToRickettsELine(point(nodes[1]), E, point(nodes[0])) * mm_px_ratio).toFixed(2);
            }


        default:
            console.log("measurement_calculate_default");

    }


}



function diagnose(race, gender, type) {
    // var sk_mx_mn_ap = 0;
    // var sk_mx_ap = 0;
    // var sk_mn_ap = 0;
    // var sk_chin_ap = 0;
    // var sk_v = 0;
    // var dt_ap_r = 0;
    // var dt_u1_ap = 0;
    // var dt_l1_ap = 0;
    // var dt_u1_v = 0;
    // var st_u_lip = 0;
    // var st_l_lip = 0;

    var sk_mx_mn_ap_array = [
        {
            "item": "ANB",
            "direction": true
            // large being class II, small being class III
        },
        {
            "item": "APDI",
            "direction": false
            // large being class III, small being class II
        },
        // {
        //   "item": "Wits appraisal",
        //   "direction": true
        //   // large being class II, small being class III
        // }

    ];
    var sk_mx_ap_array = [
        {
            "item": "SNA",
            "direction": true
            //large being protrusive maxilla
        },
        {
            "item": "A to N-Perp(FH)",
            "direction": true
            //large being protrusive maxilla
        }
    ];
    var sk_mn_ap_array = [
        {
            "item": "SNB",
            "direction": true
            //large being protrusive mandible
        },
        {
            "item": "B to N-Perp(FH)",
            "direction": true
            //large being protrusive mandible
        }
    ];
    var sk_chin_ap_array = [
        {
            "item": "Pog to N-Perp(FH)",
            "direction": true
            //large being protrusive chin
        },
        {
            "item": "Facial angle",
            "direction": true
            //large being protrusive chin
        }
    ];
    var sk_v_array = [
        {
            "item": "Bjork sum",
            "direction": true
            //large being hyperdivergent
        },
        {
            "item": "FMA",
            "direction": true
            //large being hyperdivergent
        },
        // {
        //   "item": "Lower gonial angle",
        //   "direction": true
        //   //large being hyperdivergent
        // },
        {
            "item": "Facial height ratio(PFH/AFH)",
            "direction": false
            //large being hypodivergent
        }
    ];
    var dt_ap_array = [
        {
            "item": "Angle Classification",
            "direction": true
            //large being class III
        },
    ];
    var dt_oj_array = [
        {
            "item": "Overjet",
            "direction": true
            //large being large overjet
        }
    ];
    var dt_ob_array = [
        {
            "item": "Overbite",
            "direction": true
            //large being deep overbite
        }
    ];
    var dt_u1_array = [
        {
            "item": "U1 to SN",
            "direction": true
            //large being protrusion
        },
        {
            "item": "U1 to FH",
            "direction": true
            //large being protrusion
        }
    ];
    var dt_l1_array = [
        {
            "item": "IMPA",
            "direction": true
            //large being protrusion
        }
    ];
    var dt_iia_array = [
        {
            "item": "Interincisal angle",
            "direction": true
            //large being uprighted incisors
        }
    ];
    var dt_uid_array = [
        {
            "item": "Upper incisal display",
            "direction": true
            //large being gummy smile
        }
    ];
    var st_ul_array = [
        {
            "item": "Upper lip to E-plane",
            "direction": true
            //large being protrusion
        }
    ];
    var st_ll_array = [
        {
            "item": "Lower lip to E-plane",
            "direction": true
            //large being protrusion
        }
    ];

    var diagnosis_data = getDiagnosesData(race, gender);

    // console.log(diagnosis_data);
    // updateAnalysisTab(analysis);
    // console.log(diagnosis_data);
    // updateDiagnosisText2(measurement_array, json_data, threshold_1, threshold_2, threshold_3, result_1, result_2, result_3);
    var result_1 = updateDiagnosisText2(sk_mx_mn_ap_array, diagnosis_data, 2, 3, 4, "Skeletal Class II", "Skeletal Class I", "Skeletal Class III");
    // console.log(result_1);
    $("#sk_mx_mn_ap").text(result_1.result_str);
    $("#sk_mx_mn_ap_severity").text(result_1.severity);
    $("#sk_mx_mn_ap").addClass(result_1.severity_class);
    $("#sk_mx_mn_ap_severity").addClass(result_1.severity_class);


    var result_2 = updateDiagnosisText2(sk_mx_ap_array, diagnosis_data, 2, 3, 4, "Protrusion", "Normal", "Retrusion");
    // console.log(result_2);
    $("#sk_mx_ap").text(result_2.result_str);
    $("#sk_mx_ap_severity").text(result_2.severity);
    $("#sk_mx_ap").addClass(result_2.severity_class);
    $("#sk_mx_ap_severity").addClass(result_2.severity_class);

    var result_3 = updateDiagnosisText2(sk_mn_ap_array, diagnosis_data, 2, 3, 4, "Protrusion", "Normal", "Retrusion");
    // console.log(result_3);
    $("#sk_mn_ap").text(result_3.result_str);
    $("#sk_mn_ap_severity").text(result_3.severity);
    $("#sk_mn_ap").addClass(result_3.severity_class);
    $("#sk_mn_ap_severity").addClass(result_3.severity_class);

    var result_4 = updateDiagnosisText2(sk_chin_ap_array, diagnosis_data, 2, 3, 4, "Protrusion", "Normal", "Retrusion");
    // console.log(result_4);
    $("#sk_chin_ap").text(result_4.result_str);
    $("#sk_chin_ap_severity").text(result_4.severity);
    $("#sk_chin_ap").addClass(result_4.severity_class);
    $("#sk_chin_ap_severity").addClass(result_4.severity_class);

    var result_5 = updateDiagnosisText2(sk_v_array, diagnosis_data, 2, 3, 4, "Hyperdivergent(dolichocephalic) facial pattern", "Normodivergent(mesocephalic) facial pattern", "Hypodivergent(brachycephalic) facial pattern");
    // console.log(result_5);
    $("#sk_v").text(result_5.result_str);
    $("#sk_v_severity").text(result_5.severity);
    $("#sk_v").addClass(result_5.severity_class);
    $("#sk_v_severity").addClass(result_5.severity_class);


    var result_6 = updateDiagnosisText2(dt_ap_array, diagnosis_data, 1, 2, 3, "Class III molar relationship", "Class I molar relationship", "Class II molar relationship");
    // console.log(result_6);
    $("#dt_ap").text(result_6.result_str);
    $("#dt_ap_severity").text(result_6.severity);
    $("#dt_ap").addClass(result_6.severity_class);
    $("#dt_ap_severity").addClass(result_6.severity_class);

    var result_7 = updateDiagnosisText2(dt_oj_array, diagnosis_data, 1, 2, 3, "Large overjet", "Normal overjet", "Anterior crossbite");
    // console.log(result_7);
    $("#dt_oj").text(result_7.result_str);
    $("#dt_oj_severity").text(result_7.severity);
    $("#dt_oj").addClass(result_7.severity_class);
    $("#dt_oj_severity").addClass(result_7.severity_class);


    var result_8 = updateDiagnosisText2(dt_ob_array, diagnosis_data, 1, 2, 3, "Deep overbite", "Normal overbite", "Anterior openbite");
    // console.log(result_8);
    $("#dt_ob").text(result_8.result_str);
    $("#dt_ob_severity").text(result_8.severity);
    $("#dt_ob").addClass(result_8.severity_class);
    $("#dt_ob_severity").addClass(result_8.severity_class);


    var result_9 = updateDiagnosisText2(dt_u1_array, diagnosis_data, 1, 2, 3, "Labioversion", "Normal", "Linguoversion");
    // console.log(result_9);
    $("#dt_u1").text(result_9.result_str);
    $("#dt_u1_severity").text(result_9.severity);
    $("#dt_u1").addClass(result_9.severity_class);
    $("#dt_u1_severity").addClass(result_9.severity_class);

    var result_10 = updateDiagnosisText2(dt_l1_array, diagnosis_data, 1, 2, 3, "Labioversion", "Normal", "Linguoversion");
    // console.log(result_10);
    $("#dt_l1").text(result_10.result_str);
    $("#dt_l1_severity").text(result_10.severity);
    $("#dt_l1").addClass(result_10.severity_class);
    $("#dt_l1_severity").addClass(result_10.severity_class);


    var result_11 = updateDiagnosisText2(dt_iia_array, diagnosis_data, 1, 2, 3, "Large", "Normal", "Small");
    // console.log(result_11);
    $("#dt_iia").text(result_11.result_str);
    $("#dt_iia_severity").text(result_11.severity);
    $("#dt_iia").addClass(result_11.severity_class);
    $("#dt_iia_severity").addClass(result_11.severity_class);

    var result_12 = updateDiagnosisText2(dt_uid_array, diagnosis_data, 1, 2, 3, "Large (gummy smile)", "Normal", "Small (senile smile)");
    // console.log(result_12);
    $("#dt_uid").text(result_12.result_str);
    $("#dt_uid_severity").text(result_12.severity);
    $("#dt_uid").addClass(result_12.severity_class);
    $("#dt_uid_severity").addClass(result_12.severity_class);


    var result_13 = updateDiagnosisText2(st_ul_array, diagnosis_data, 1, 2, 3, "Protrusion", "Normal", "Retrusion");
    // console.log(result_13);
    $("#st_ul").text(result_13.result_str);
    $("#st_ul_severity").text(result_13.severity);
    $("#st_ul").addClass(result_13.severity_class);
    $("#st_ul_severity").addClass(result_13.severity_class);


    var result_14 = updateDiagnosisText2(st_ll_array, diagnosis_data, 1, 2, 3, "Protrusion", "Normal", "Retrusion");
    // console.log(result_14);
    $("#st_ll").text(result_14.result_str);
    $("#st_ll_severity").text(result_14.severity);
    $("#st_ll").addClass(result_14.severity_class);
    $("#st_ll_severity").addClass(result_14.severity_class);


    // var result_1 = updateDiagnosisText(sk_mx_mn_ap_array, 2, 3, 4, "Skeletal Class II", "Skeletal Class I","Skeletal Class III");
    // $("#sk_mx_mn_ap").text(result_1.result_str);
    // $("#sk_mx_mn_ap_severity").text(result_1.severity);
    // $("#sk_mx_mn_ap").addClass(result_1.severity_class);
    // $("#sk_mx_mn_ap_severity").addClass(result_1.severity_class);

    // var result_2 = updateDiagnosisText(sk_mx_ap_array, 2, 3, 4, "Protrusion", "Normal", "Retrusion");
    // $("#sk_mx_ap").text(result_2.result_str);
    // $("#sk_mx_ap_severity").text(result_2.severity);
    // $("#sk_mx_ap").addClass(result_2.severity_class);
    // $("#sk_mx_ap_severity").addClass(result_2.severity_class);

    // var result_3 = updateDiagnosisText(sk_mn_ap_array, 2, 3, 4, "Protrusion", "Normal", "Retrusion");
    // $("#sk_mn_ap").text(result_3.result_str);
    // $("#sk_mn_ap_severity").text(result_3.severity);
    // $("#sk_mn_ap").addClass(result_3.severity_class);
    // $("#sk_mn_ap_severity").addClass(result_3.severity_class);


    // var result_4 = updateDiagnosisText(sk_chin_ap_array, 2, 3, 4, "Protrusion", "Normal", "Retrusion");
    // $("#sk_chin_ap").text(result_4.result_str);
    // $("#sk_chin_ap_severity").text(result_4.severity);
    // $("#sk_chin_ap").addClass(result_4.severity_class);
    // $("#sk_chin_ap_severity").addClass(result_4.severity_class);

    // var result_5 = updateDiagnosisText(sk_v_array, 2, 4, 6, "Hyperdivergent(dolichocephalic) facial pattern", "Normodivergent(mesocephalic) facial pattern", "Hypodivergent(brachycephalic) facial pattern");
    // $("#sk_v").text(result_5.result_str);
    // $("#sk_v_severity").text(result_5.severity);
    // $("#sk_v").addClass(result_5.severity_class);
    // $("#sk_v_severity").addClass(result_5.severity_class);

    // var result_6 = updateDiagnosisText(dt_ap_array, 1, 2, 3, "Class III molar relationship", "Class I molar relationship", "Class II molar relationship");
    // $("#dt_ap").text(result_6.result_str);
    // $("#dt_ap_severity").text(result_6.severity);
    // $("#dt_ap").addClass(result_6.severity_class);
    // $("#dt_ap_severity").addClass(result_6.severity_class);

    // var result_7 = updateDiagnosisText(dt_oj_array, 1, 2, 3, "Large overjet", "Normal overjet", "Anterior crossbite");
    // $("#dt_oj").text(result_7.result_str);
    // $("#dt_oj_severity").text(result_7.severity);
    // $("#dt_oj").addClass(result_7.severity_class);
    // $("#dt_oj_severity").addClass(result_7.severity_class);

    // var result_8 = updateDiagnosisText(dt_ob_array, 1, 2, 3, "Deep overbite", "Normal overbite", "Anterior openbite");
    // $("#dt_ob").text(result_8.result_str);
    // $("#dt_ob_severity").text(result_8.severity);
    // $("#dt_ob").addClass(result_8.severity_class);
    // $("#dt_ob_severity").addClass(result_8.severity_class);

    // var result_9 = updateDiagnosisText(dt_u1_array, 1, 2, 3, "Labioversion", "Normal", "Linguoversion");
    // $("#dt_u1").text(result_9.result_str);
    // $("#dt_u1_severity").text(result_9.severity);
    // $("#dt_u1").addClass(result_9.severity_class);
    // $("#dt_u1_severity").addClass(result_9.severity_class);

    // var result_10 = updateDiagnosisText(dt_l1_array, 1, 2, 3, "Labioversion", "Normal", "Linguoversion");
    // $("#dt_l1").text(result_10.result_str);
    // $("#dt_l1_severity").text(result_10.severity);
    // $("#dt_l1").addClass(result_10.severity_class);
    // $("#dt_l1_severity").addClass(result_10.severity_class);

    // var result_11 = updateDiagnosisText(dt_iia_array, 1, 2, 3, "Large", "Normal", "Small");
    // $("#dt_iia").text(result_11.result_str);
    // $("#dt_iia_severity").text(result_11.severity);
    // $("#dt_iia").addClass(result_11.severity_class);
    // $("#dt_iia_severity").addClass(result_11.severity_class);

    // var result_12 = updateDiagnosisText(dt_uid_array, 1, 2, 3, "Large (gummy smile)", "Normal", "Small (senile smile)");
    // $("#dt_uid").text(result_12.result_str);
    // $("#dt_uid_severity").text(result_12.severity);
    // $("#dt_uid").addClass(result_12.severity_class);
    // $("#dt_uid_severity").addClass(result_12.severity_class);

    // var result_13 = updateDiagnosisText(st_ul_array, 1, 2, 3, "Protrusion", "Normal", "Retrusion");
    // $("#st_ul").text(result_13.result_str);
    // $("#st_ul_severity").text(result_13.severity);
    // $("#st_ul").addClass(result_13.severity_class);
    // $("#st_ul_severity").addClass(result_13.severity_class);

    // var result_14 = updateDiagnosisText(st_ll_array, 1, 2, 3, "Protrusion", "Normal", "Retrusion");
    // $("#st_ll").text(result_14.result_str);
    // $("#st_ll_severity").text(result_14.severity);
    // $("#st_ll").addClass(result_14.severity_class);
    // $("#st_ll_severity").addClass(result_14.severity_class);


}

