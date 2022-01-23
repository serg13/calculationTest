var analysis_dictionary = {
            "Downs" : ["Facial angle", "Angle of convexity", "Mandibular plane angle", "Y-axis", "A-B plane angle", "Cant of occlusal plane", "Interincisal angle", "Incisor occlusal plane angle", "Incisor mandibular plane angle", "Upper incisor to A-Pog line"], 
            "Steiner" : ["SNA", "SNB", "ANB", "Occlusal plane to SN angle", "Mandibular plane angle(Go-Gn to SN)", "U1 to NA(mm)", "U1 to NA(deg)", "L1 to NB(mm)", "L1 to NB(deg)", "Interincisal angle"],
            "Tweed" : ["FMA", "FMIA", "IMPA"],
            "Ricketts" : ["Facial axis","Facial depth","Mandibular plane angle(Ricketts)", "Facial taper", "Mandibular arc", "Convexity of Point A", "Palatal plane angle", "Denture height(Lower facial height)", "L1 to A-Pog(deg)", "L1 to A-Pog(mm)", "Upper molar to PtV", "Interincisal angle", "Lower lip to E-plane"],
            "McNamara" : ["A to N-Perp.","SNA(McNamara)", "Effective length of maxilla", "Effective length of mandible", "Maxillomandibular differential", "Lower anterior facial height", "Mandibular plane angle(McNamara)", "Facial axis angle", "Pog to N-Perp.", "Upper incisor to point A vertical", "L1 to A-Pog(McNamara)"],
            "Jarabak" : ["Saddle angle", "Articular angle", "Gonial angle", "Bjork sum", "Anterior cranial base length", "Posterior cranial base length", "Upper gonial angle", "Lower gonial angle", "Ramus height", "Body length", "Body to Ant. cranial base ratio", "SNA(Jarabak)", "SNB(Jarabak)", "ANB", "SN-GoMe", "Facial depth(Jarabak)", "Facial length on Y axis", "Y axis to SN", "Posterior facial height", "Anterior facial height", "Facial height ratio(PFH/AFH)", "Facial plane(Jarabak)", "Facial convexity", "Occlusal plane to Go-Me", "Interincisal angle", "U1 to SN", "U1 to facial plane(mm)", "Upper lip to E-plane", "Lower lip to E-plane"],
            "Kim" : ["A-B to mandibular plane", "Palatal plane angle", "ODI", "Facial angle", "A-B plane angle", "APDI", "Combination factor"],
            "yehyun" : ["A to N-Perp(FH)", "B to N-Perp(FH)", "Pog to N-Perp(FH)", "Angle Classification", "Overjet", "Overbite", "U1 to FH", "U1 to SN", "Upper incisal display"],
        }



var measurement_data = [

            {"measurement":"Saddle angle (deg)", "mean": 125.45, "sd" : 5.32, "result" : 0}, 
            {"measurement":"Articular angle (deg)", "mean": 147.68, "sd" : 5.25, "result" : 0}, 
            {"measurement":"Gonial angle (deg)", "mean": 124.31, "sd" : 5.36, "result" : 0}, 
            {"measurement":"Bjork sum (deg)", "mean": 397.16, "sd" : 6.63, "result" : 0}, 
            {"measurement":"Na-S (mm)", "mean": 69.35, "sd" : 3.61, "result" : 0}, 
            {"measurement":"Post. Cranial Base (mm)", "mean": 37.68, "sd" : 2.66, "result" : 0}, 
            {"measurement":"Gonial angle(Upper) (deg)", "mean": 46.20, "sd" : 3.26, "result" : 0}, 
            {"measurement":"Gonial angle(Lower) (deg)", "mean": 78.04, "sd" : 4.60, "result" : 0}, 
            {"measurement":"Ramus height (mm)", "mean": 49.07, "sd" : 4.86, "result" : 0}, 
            {"measurement":"Mn. body length", "mean": 74.97, "sd" : 4.89, "result" : 0}, 
            {"measurement":"Body to ACB", "mean": 1.08, "sd" : 0.03, "result" : 0}, 
            {"measurement":"SNA (deg)", "mean": 81.08, "sd" : 3.73, "result" : 0}, 
            {"measurement":"SNB (deg)", "mean": 78.01, "sd" : 3.81, "result" : 0}, 
            {"measurement":"ANB (deg)", "mean": 3.45, "sd" : 1.87, "result" : 0}, 
            {"measurement":"SN-GoGn (deg)", "mean": 34.29, "sd" : 6.40, "result" : 0}, 
            {"measurement":"Facial depth (mm)", "mean": 123.27, "sd" : 5.14, "result" : 0}, 
            {"measurement":"Facial length on Y-axis (mm)", "mean": 130.29, "sd" : 7.86, "result" : 0}, 
            {"measurement":"Y-axis to SN (deg)", "mean": 71.92, "sd" : 3.71, "result" : 0}, 
            {"measurement":"Facial axis (Ricketts) (deg)", "mean": 88.10, "sd" : 2.00, "result" : 0}, 
            {"measurement":"PFH (mm)", "mean": 82.76, "sd" : 5.33, "result" : 0}, 
            {"measurement":"AFH (mm)", "mean": 128.68, "sd" : 6.27, "result" : 0}, 
            {"measurement":"Facial height ratio", "mean": 65.30, "sd" : 8.75, "result" : 0}, 
            {"measurement":"Facial plane angle (deg)", "mean": 87.80, "sd" : 3.50, "result" : 0}, 
            {"measurement":"Facial convexity (deg)", "mean": 4.92, "sd" : 5.33, "result" : 0}, 
            {"measurement":"FMA (deg)", "mean": 29.63, "sd" : 5.66, "result" : 0}, 
            {"measurement":"FMIA (deg)", "mean": 56.77, "sd" : 5.96, "result" : 0}, 
            {"measurement":"IMPA (deg)", "mean": 91.62, "sd" : 5.23, "result" : 0}, 
            {"measurement":"FH to occ pl angle (deg)", "mean": 9.3, "sd" : 3.8, "result" : 0}, 
            {"measurement":"Occlusal plane to GoMe (deg)", "mean": 19.09, "sd" : 4.74, "result" : 0},
            {"measurement":"Interincisal angle (deg)", "mean": 125.44, "sd" : 9.21, "result" : 0},
            {"measurement":"U1 to FH (deg)", "mean": 113.80, "sd" : 6.37, "result" : 0},
            {"measurement":"U1 to SN (deg)", "mean": 105.28, "sd" : 6.64, "result" : 0},
            {"measurement":"U1 to facial plane (mm)", "mean": 9.90, "sd" : 3.04, "result" : 0},
            {"measurement":"L1 to mandibular plane (mm)", "mean": 46.40, "sd" : 3.58, "result" : 0},
            {"measurement":"L1 to facial plane (mm)", "mean": 5.87, "sd" : 2.93, "result" : 0},
            {"measurement":"Upper lip to E-plane", "mean": 0.86, "sd" : 2.36, "result" : 0},
            {"measurement":"Lower lip to E-plane", "mean": 2.00, "sd" : 3.00, "result" : 0},
            {"measurement":"U1 to NA(angular) (deg)", "mean": 24.00, "sd" : 4.00, "result" : 0},
            {"measurement":"U1 to NA(linear) (mm)", "mean": 5.00, "sd" : 2.00, "result" : 0},
            {"measurement":"L1 to NB(angular) (deg)", "mean": 29.00, "sd" : 5.00, "result" : 0},
            {"measurement":"L1 to NB(linear) (mm)", "mean": 6.00, "sd" : 2.00, "result" : 0},
            {"measurement":"L1 to A-Pog (mm)", "mean": 4.55, "sd" : 2.11, "result" : 0},
            {"measurement":"Pog to NB (mm)", "mean": 1.00, "sd" : 1.00, "result" : 0},
            {"measurement":"A-N Perp (mm)", "mean": 0.40, "sd" : 2.30, "result" : 0},
            {"measurement":"Pog-N Perp (mm)", "mean": -1.80, "sd" : 4.50, "result" : 0},
            {"measurement":"AB to Mand. plane (deg)", "mean": 69.30, "sd" : 2.54, "result" : 0},
            {"measurement":"Palatal plane angle (deg)", "mean": 1.20, "sd" : 4.72, "result" : 0},
            {"measurement":"ODI", "mean": 72.10, "sd" : 5.50, "result" : 0},
            {"measurement":"APDI", "mean": 85.74, "sd" : 4.02, "result" : 0},
            {"measurement":"A-B plane angle to Facial plane angle (deg)", "mean": -4.40, "sd" : 2.53, "result" : 0},
            {"measurement":"Combination factor", "mean": 157.90, "sd" : 6.52, "result" : 0},
            {"measurement":"Wits appraisal", "mean": -2.74, "sd" : 0.30, "result" : 0},
            {"measurement":"Nasolabial angle (deg)", "mean": 98.00, "sd" : 2.00, "result" : 0},
            {"measurement":"U1 to UOP (deg)", "mean": 55.00, "sd" : 2.50, "result" : 0},
            {"measurement":"L1 to occl pl (deg)", "mean": 66.00, "sd" : 2.50, "result" : 0},
            {"measurement":"OB", "mean": 2.50, "sd" : 1.00, "result" : 0},
            {"measurement":"OJ", "mean": 2.50, "sd" : 1.00, "result" : 0},
            {"measurement":"Y-axis to FH plane (deg)", "mean": 59, "sd" : 6.0, "result" : 0}

            ];


var measurement_reference_data={
    // follow Hellman dental age
    "Facial angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                                B: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                                C: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                                B: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                                C: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                                B: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                                C: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                                B: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                                C: {mean: 87.80, sd: 3.50, unit: "deg"}, 
                            }
                        },
                    analysis: ["Downs"],
                    meaning: {
                            "large": "Prominent chin, Skeletal Class III", 
                            "normal": "Normal Chin Prominence, Skeletal Class I",
                            "small": "Retruded chin position, Skeletal Class II"
                        }, 
                    type: "angle_4points",
                    nodes: ["Pog", "Na", "Po", "Or"],
                    direction: true, //true being protrusion, false being retrusion
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x - 40, y: crosspoint.y + 15};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },


                },

    "Facial depth": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                                B: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                                C: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                                B: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                                C: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                                B: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                                C: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                                B: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                                C: {mean: 87.80, sd: 3.60, unit: "deg"}, 
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                            "large": "Prominent chin, Skeletal Class III", 
                            "normal": "Normal Chin Prominence, Skeletal Class I",
                            "small": "Retruded chin position, Skeletal Class II"
                        }, 
                    type: "angle_4points",
                    nodes: ["Pog", "Na", "Po", "Or"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x - 40, y: crosspoint.y + 15};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },


                },

    "Angle of convexity": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 0, sd: 5.10, unit: "deg"}, 
                                B: {mean: 0, sd: 5.10, unit: "deg"}, 
                                C: {mean: 0, sd: 5.10, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 0, sd: 5.10, unit: "deg"}, 
                                B: {mean: 0, sd: 5.10, unit: "deg"}, 
                                C: {mean: 0, sd: 5.10, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 0, sd: 5.10, unit: "deg"}, 
                                B: {mean: 0, sd: 5.10, unit: "deg"}, 
                                C: {mean: 0, sd: 5.10, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 0, sd: 5.10, unit: "deg"}, 
                                B: {mean: 0, sd: 5.10, unit: "deg"}, 
                                C: {mean: 0, sd: 5.10, unit: "deg"}, 
                            }
                        },
                    analysis: ["Downs"],
                    meaning: {
                        "large": "Convex facial profile, Prominent maxilla", 
                        "normal": "Straight facial profile",
                        "small": "Concave facial profile, Prognathic profile"
                    },                     
                    type: "angle_4points",
                    nodes: ["Na", "A", "A", "Pog"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        return intersect(A, B, C, D);
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                }, 

    "Mandibular plane angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                                B: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                                C: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                                B: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                                C: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                                B: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                                C: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                                B: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                                C: {mean: 21.90, sd: 5.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Downs"],
                    meaning: {
                        "large": "Vertical growth pattern, Hyperdivergent",
                        "normal": "Normodivergent facial pattern", 
                        "small": "Horizontal growth pattern, Hypodivergent"
                    },                     
                    type: "angle_4points",
                    nodes: ["Po", "Or", "CorpusLeft", "Me"],
                    direction: true, //true being dolicho false being brachy
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "CorpusLeft", "landmark")].coordinates;                                
                        return {x: point.x , y: point.y + 15};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },      
                        
                },

    "Mandibular plane angle(Ricketts)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                                B: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                                C: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                                B: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                                C: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                                B: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                                C: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                                B: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                                C: {mean: 26.00, sd: 4.50, unit: "deg"}, 
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                        "large": "Vertical growth pattern, Hyperdivergent",
                        "normal": "Normodivergent facial pattern", 
                        "small": "Horizontal growth pattern, Hypodivergent"
                    },                     
                    type: "angle_4points",
                    nodes: ["Po", "Or", "CorpusLeft", "Me"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "CorpusLeft", "landmark")].coordinates;                                
                        return {x: point.x , y: point.y + 15};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },      
                        
                },

    "Y-axis": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                                B: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                                C: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                                B: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                                C: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                                B: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                                C: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                                B: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                                C: {mean: 59.00, sd: 6.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Downs"],
                    meaning: {
                        "large": "Downward and rearward position of the chin, vertical growth pattern", 
                        "normal": "Normal growth direction in x-y plane",
                        "small": "Upward and forward position of the chin, horizontal growth pattern"
                    }, 
                    type: "angle_4points",
                    nodes: ["Po", "Or", "S", "Gn"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x + 15, y: crosspoint.y + 15};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },    

                },
    "A-B plane angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                                B: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                                C: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                                B: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                                C: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                                B: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                                C: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                                B: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                                C: {mean: -4.40, sd: 2.53, unit: "deg"}, 
                            }
                        },
                    analysis: ["Downs"],
                    meaning: {
                        "large": "Class III malocclusion, or Class I with mandible prominence", 
                        "normal": "Normal upper and lower jaw relation relative to facial angle",
                        "small": "Class II malocclusion"
                    }, 
                    type: "angle_4points",
                    nodes: ["B", "A", "Pog", "Na"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "A", "landmark")].coordinates;                                
                        return {x: point.x , y: point.y - 20};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },

    "Cant of occlusal plane": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                                B: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                                C: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                                B: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                                C: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                                B: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                                C: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                                B: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                                C: {mean: 9.30, sd: 3.80, unit: "deg"}, 
                            }
                        },
                    analysis: ["Downs"],
                    meaning: {
                        "large": "Steep occlusal plane angle",
                        "normal": "Normal occlusal plane angle",
                        "small": "Flat occlusal plane angle"
                        },

                    type: "angle_4points",
                    nodes: ["Po", "Or", "post_occlusal_point", "ant_occlusal_point"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U6Mesial", "landmark")].coordinates;                                
                        return {x: point.x-50 , y: point.y};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },

    "Interincisal angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 135.40, sd: 5.80, unit: "deg"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 135.40, sd: 5.80, unit: "deg"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 124.38, sd: 7.94, unit: "deg"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 123.82, sd: 8.30, unit: "deg"}, 
                                
                            }
                        },
                    analysis: ["Downs"],
                    meaning: {
                        "large": "Uprighted interincisal angle",
                        "normal": "Normal angle between upper and lower incisors",
                        "small": "Proclined incisors, Dentoalveolar protrusion"
                        },
                    type: "angle_4points",
                    nodes: ["L1RootTip", "L1IncisalTip", "U1RootTip", "U1IncisalTip"],
                    direction: true, //false being protrusion, true being retrusion
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x + 30 , y: crosspoint.y + 15};
                    },
                    result: function(A, B, C, D){                                     
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },

    

    "Incisor occlusal plane angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                                B: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                                C: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                                B: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                                C: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                                B: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                                C: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                                B: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                                C: {mean: 14.50, sd: 3.50, unit: "deg"}, 
                            }
                        },
                    analysis: ["Downs"],
                    meaning: {
                        "large": "Proclined lower incisor relative to occlusal plane",
                        "normal": "Normal lower incisor angle relative to occlusal plane",
                        "small": "Retroclined lower incisor angle relative to occlusal plane"
                        },
                    type: "angle_4points",
                    nodes: ["post_occlusal_point", "ant_occlusal_point", "L1IncisalTip", "L1RootTip"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x - 40, y: crosspoint.y + 15};
                    },
                    result: function(A, B, C, D){                                 
                        return (angle_vectors(point(A),point(B),point(C),point(D))-90).toFixed(2);
                        },
                },



    "Incisor mandibular plane angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                                B: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                                C: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                                B: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                                C: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                                B: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                                C: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                                B: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                                C: {mean: 1.40, sd: 3.80, unit: "deg"}, 
                            }
                        },
                    analysis: ["Downs"],
                    meaning: {
                        "large": "Proclined lower incisor relative to mandible lower border",
                        "normal": "Normal lower incisor angle relative to mandible lower border",
                        "small": "Retroclined lower incisor relative to mandible lower border"
                        },
                    type: "angle_4points",
                    nodes: ["CorpusLeft", "Me", "L1IncisalTip", "L1RootTip"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x , y: crosspoint.y};
                    },
                    result: function(A, B, C, D){                                 
                        // console.log(angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2)-90);
                        return (angle_vectors(point(A),point(B),point(C),point(D))-90).toFixed(2);
                        },
                },


    "Upper incisor to A-Pog line": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                                B: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                                C: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                                B: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                                C: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                                B: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                                C: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                                B: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                                C: {mean: 2.70, sd: 1.80, unit: "deg"}, 
                            }
                        },
                    analysis: ["Downs"],
                    meaning: {
                        "large": "Protruded upper incisor",
                        "normal": "Normal A-P position of upper incisor",
                        "small": "Retruded upper incisor"
                        },
                    type: "point_to_line_distance",
                    nodes: ["A", "Pog", "U1IncisalTip"],
                    text_location: function(A, B, C){
                        var point = pointData[arrayObjectIndexOf(pointData, "U1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x -40 , y: point.y - 15};
                    },
                    result: function(A, B, C){           
                        // console.log(pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio.toFixed(2));                      
                        return (pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },



    "SNA": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 82.00, sd: 2.00, unit: "deg"}, 
                                B: {mean: 82.00, sd: 2.00, unit: "deg"}, 
                                C: {mean: 82.00, sd: 2.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 82.00, sd: 2.00, unit: "deg"}, 
                                B: {mean: 82.00, sd: 2.00, unit: "deg"}, 
                                C: {mean: 82.00, sd: 2.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 81.77, sd: 5.98, unit: "deg"}, 
                                B: {mean: 81.77, sd: 5.98, unit: "deg"}, 
                                C: {mean: 81.77, sd: 5.98, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 81.77, sd: 5.98, unit: "deg"}, 
                                B: {mean: 81.77, sd: 5.98, unit: "deg"}, 
                                C: {mean: 81.77, sd: 5.98, unit: "deg"}, 
                            }
                        },
                    analysis: ["Steiner"],
                    meaning: {
                        "large": "Protruded maxilla",
                        "normal": "Normal A-P position of maxilla",
                        "small": "Retruded maxilla"
                        },
                    type: "angle_3points",
                    nodes: ["S", "Na", "A"],
                    direction: true, //true being protrusion, false being retrusion
                    text_location: function(A, B, C){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x + 20 , y: b.y};
                    },

                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },
                },
    "SNB": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 80.00, sd: 2.00, unit: "deg"}, 
                                B: {mean: 80.00, sd: 2.00, unit: "deg"}, 
                                C: {mean: 80.00, sd: 2.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 80.00, sd: 2.00, unit: "deg"}, 
                                B: {mean: 80.00, sd: 2.00, unit: "deg"}, 
                                C: {mean: 80.00, sd: 2.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 80.22, sd: 5.31, unit: "deg"}, 
                                B: {mean: 80.22, sd: 5.31, unit: "deg"}, 
                                C: {mean: 80.22, sd: 5.31, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 80.22, sd: 5.31, unit: "deg"}, 
                                B: {mean: 80.22, sd: 5.31, unit: "deg"}, 
                                C: {mean: 80.22, sd: 5.31, unit: "deg"}, 
                            }
                        },
                    analysis: ["Steiner"],
                    meaning: {
                        "large": "Prognathic mandible",
                        "normal": "Normal A-P position of mandible",
                        "small": "Retruded mandible"
                        },
                    type: "angle_3points",
                    nodes: ["S", "Na", "B"],
                    direction: true, //true being protrusion, false being retrusion
                    text_location: function(A, B, C){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x + 20 , y: b.y + 20};
                    },                    
                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },
                },
    "ANB": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 2.00, sd: 2.00, unit: "deg"}, 
                                B: {mean: 2.00, sd: 2.00, unit: "deg"}, 
                                C: {mean: 2.00, sd: 2.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 2.00, sd: 2.00, unit: "deg"}, 
                                B: {mean: 2.00, sd: 2.00, unit: "deg"}, 
                                C: {mean: 2.00, sd: 2.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 1.78, sd: 2.02, unit: "deg"}, 
                                B: {mean: 1.78, sd: 2.02, unit: "deg"}, 
                                C: {mean: 1.78, sd: 2.02, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 1.78, sd: 2.02, unit: "deg"}, 
                                B: {mean: 1.78, sd: 2.02, unit: "deg"}, 
                                C: {mean: 1.78, sd: 2.02, unit: "deg"}, 
                            }
                        },
                    analysis: ["Steiner"],
                    meaning: {
                        "large": "Skeletal Class II",
                        "normal": "Skeletal Class I",
                        "small": "Skeletal Class III"
                        },
                    type: "angle_4points",
                    nodes: ["Na", "A", "Na", "B"],
                    direction: true, //true being Class II, false being Class III
                    text_location: function(A, B, C, D){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x + 20 , y: b.y + 40};
                    },
                    
                    result: function(A, B, C, D){                                 
                        // console.log(angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2)-90);
                        return (angle_vectors(point(A),point(B),point(C),point(D))).toFixed(2);
                        },
                },





    "Occlusal plane to SN angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 14.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 14.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 14.00, sd: 4.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 14.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 14.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 14.00, sd: 4.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 14.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 14.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 14.00, sd: 4.00, unit: "deg"},  
                            }, 
                            female: {
                                adult: {mean: 14.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 14.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 14.00, sd: 4.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Steiner"],
                    meaning: {
                        "large": "Steep occlusal plane angle",
                        "normal": "Normal occlusal plane angle",
                        "small": "Flat occlusal plane angle"
                        },

                    type: "angle_4points",
                    nodes: ["S", "Na", "post_occlusal_point", "ant_occlusal_point"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U6Mesial", "landmark")].coordinates;                                
                        return {x: point.x-50 , y: point.y};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },

    "Mandibular plane angle(Go-Gn to SN)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 32.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 32.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 32.00, sd: 4.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 32.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 32.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 32.00, sd: 4.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 32.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 32.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 32.00, sd: 4.00, unit: "deg"},  
                            }, 
                            female: {
                                adult: {mean: 32.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 32.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 32.00, sd: 4.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Steiner"],
                    meaning: {
                        "large": "Hyperdivergent facial pattern",
                        "normal": "Normodivergent facial pattern",
                        "small": "Hypodivergent facial pattern"
                        },

                    type: "angle_4points",
                    nodes: ["S", "Na", "Go", "Gn"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "Go", "landmark")].coordinates;                                
                        return {x: point.x-10 , y: point.y+20};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },

    "U1 to NA(mm)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                                B: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                                C: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                                B: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                                C: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                                B: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                                C: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                                B: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                                C: {mean: 4.00, sd: 3.00, unit: "mm"}, 
                            }
                        },
                    analysis: ["Steiner"],
                    meaning: {
                        "large": "Protruded upper incisor",
                        "normal": "normal A-P position of upper incisor",
                        "small": "Retruded upper incisor"
                        },
                    type: "point_to_line_distance",
                    nodes: ["Na", "A", "U1IncisalTip"],
                    text_location: function(A, B, C){
                        var point = pointData[arrayObjectIndexOf(pointData, "U1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x +35 , y: point.y-20};
                    },
                    result: function(A, B, C){           
                        // console.log(pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio.toFixed(2));                      
                        return (pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },

    "U1 to NA(deg)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 22.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 22.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 22.00, sd: 5.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 22.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 22.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 22.00, sd: 5.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 22.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 22.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 22.00, sd: 5.00, unit: "deg"},  
                            }, 
                            female: {
                                adult: {mean: 22.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 22.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 22.00, sd: 5.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Steiner"],
                    meaning: {
                        "large": "Proclined upper incisor",
                        "normal": "Normal upper incisor inclination",
                        "small": "Retroclined upper incisor"
                        },

                    type: "angle_4points",
                    nodes: ["U1RootTip", "U1IncisalTip", "Na", "A"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x+35 , y: point.y-45};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },


    "L1 to NB(mm)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 4.00, sd: 2.00, unit: "mm"}, 
                            }
                        },
                    analysis: ["Steiner"],
                    meaning: {
                        "large": "Protruded lower incisor",
                        "normal": "normal A-P position of lower incisor",
                        "small": "Retruded lower incisor"
                        },
                    type: "point_to_line_distance",
                    nodes: ["Na", "B", "L1IncisalTip"],
                    text_location: function(A, B, C){
                        var point = pointData[arrayObjectIndexOf(pointData, "L1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x +35 , y: point.y+25};
                    },
                    result: function(A, B, C){           
                        // console.log(pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio.toFixed(2));                      
                        return (pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },

    "L1 to NB(deg)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 25.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 25.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 25.00, sd: 5.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 25.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 25.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 25.00, sd: 5.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 25.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 25.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 25.00, sd: 5.00, unit: "deg"},  
                            }, 
                            female: {
                                adult: {mean: 25.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 25.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 25.00, sd: 5.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Steiner"],
                    meaning: {
                        "large": "Proclined lower incisor",
                        "normal": "Normal lower incisor inclination",
                        "small": "Retroclined lower incisor"
                        },

                    type: "angle_4points",
                    nodes: ["B", "Na", "L1RootTip", "L1IncisalTip"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "L1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x+35 , y: point.y+50};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },


    "FMA": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 25.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 25.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 25.00, sd: 4.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 25.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 25.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 25.00, sd: 4.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 25.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 25.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 25.00, sd: 4.00, unit: "deg"},  
                            }, 
                            female: {
                                adult: {mean: 25.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 25.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 25.00, sd: 4.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Tweed"],
                    meaning: {
                        "large": "Hyperdivergent facial pattern, Vertical growth pattern",
                        "normal": "Normodivergent facial pattern",
                        "small": "Hypodivergent facial pattern, Horizontal growth pattern"
                        },

                    type: "angle_4points",
                    nodes: ["Po", "Or", "CorpusLeft", "Me"],
                    direction: true, //true being dolicho false being brachy
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "CorpusLeft", "landmark")].coordinates;                                
                        return {x: point.x-10 , y: point.y-15};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },

    "FMIA": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 65.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 65.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 65.00, sd: 5.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 65.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 65.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 65.00, sd: 5.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 65.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 65.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 65.00, sd: 5.00, unit: "deg"},  
                            }, 
                            female: {
                                adult: {mean: 65.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 65.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 65.00, sd: 5.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Tweed"],
                    meaning: {
                        "large": "",
                        "normal": "",
                        "small": ""
                        },

                    type: "angle_4points",
                    nodes: ["L1RootTip", "L1IncisalTip", "Po", "Or"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x - 50, y: crosspoint.y + 15};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },


    "IMPA": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 90.00, sd: 5.50, unit: "deg"}, 
                                B: {mean: 90.00, sd: 5.50, unit: "deg"}, 
                                C: {mean: 90.00, sd: 5.50, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 90.00, sd: 5.50, unit: "deg"}, 
                                B: {mean: 90.00, sd: 5.50, unit: "deg"}, 
                                C: {mean: 90.00, sd: 5.50, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 90.00, sd: 5.50, unit: "deg"}, 
                                B: {mean: 90.00, sd: 5.50, unit: "deg"}, 
                                C: {mean: 90.00, sd: 5.50, unit: "deg"},  
                            }, 
                            female: {
                                adult: {mean: 90.00, sd: 5.50, unit: "deg"}, 
                                B: {mean: 90.00, sd: 5.50, unit: "deg"}, 
                                C: {mean: 90.00, sd: 5.50, unit: "deg"}, 
                            }
                        },
                    analysis: ["Tweed"],
                    meaning: {
                        "large": "Proclined lower incisor",
                        "normal": "Normal lower incisor inclination",
                        "small": "Retroclined lower incisor"
                        },

                    type: "angle_4points",
                    nodes: ["CorpusLeft", "Me", "L1IncisalTip", "L1RootTip"],
                    direction: true,
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x - 30, y: crosspoint.y - 30};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },


    "Facial axis": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                                B: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                                C: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                                B: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                                C: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                                B: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                                C: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                                B: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                                C: {mean: 90.00, sd: 3.50, unit: "deg"}, 
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                            "large": "Forward growing chin", 
                            "normal": "Normal chin growing direction",
                            "small": "Vertically growing chin"
                        }, 
                    type: "angle_4points",
                    nodes: ["Pt", "Gn", "Na", "Ba"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x - 10, y: crosspoint.y + 30};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                    },
                },

    "Facial taper": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 68.00, sd: 3.00, unit: "deg"}, 
                 
                            }, 
                            female: {
                                adult: {mean: 68.00, sd: 3.00, unit: "deg"}, 
                 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 68.00, sd: 3.00, unit: "deg"}, 
                 
                            }, 
                            female: {
                                adult: {mean: 68.00, sd: 3.00, unit: "deg"}, 
                 
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                            "large": "Large facial taper, Deepbite tendency", 
                            "normal": "Normal facial taper",
                            "small": "Small facial taper, Openbite tendency"
                        }, 
                    type: "angle_4points",
                    nodes: ["CorpusLeft", "Me", "A", "Pog"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x - 40, y: crosspoint.y - 30};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                    },
                },



    "Convexity of Point A": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 2.00, sd: 2.00, unit: "mm"}, 
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                        "large": "Skeletal Class II pattern",
                        "normal": "Skeletal Class I pattern",
                        "small": "Skeletal Class III pattern"
                        },
                    type: "point_to_line_distance",
                    nodes: ["Na", "Pog", "A"],
                    text_location: function(A, B, C){
                        var point = pointData[arrayObjectIndexOf(pointData, "A", "landmark")].coordinates;                                
                        return {x: point.x +10 , y: point.y};
                    },
                    result: function(A, B, C){           
                        // console.log(pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio.toFixed(2));                      
                        return (pointToRickettsELine(point(A),point(B),point(C))*mm_px_ratio).toFixed(2);
                        },
                },


    "L1 to A-Pog(deg)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 22.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 22.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 22.00, sd: 4.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 22.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 22.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 22.00, sd: 4.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 22.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 22.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 22.00, sd: 4.00, unit: "deg"},  
                            }, 
                            female: {
                                adult: {mean: 22.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 22.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 22.00, sd: 4.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                        "large": "Proclined lower incisor",
                        "normal": "Normal lower incisor inclination",
                        "small": "Retroclined lower incisor"
                        },

                    type: "angle_4points",
                    nodes: ["A", "Pog", "L1IncisalTip", "L1RootTip"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "L1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x+25 , y: point.y+35};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },



    "L1 to A-Pog(mm)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                                B: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                                C: {mean: 1.00, sd: 2.00, unit: "mm"}, 
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                        "large": "Protruded lower incisor",
                        "normal": "normal A-P position of lower incisor",
                        "small": "Retruded lower incisor"
                        },
                    type: "point_to_line_distance",
                    nodes: ["A", "Pog", "L1IncisalTip"],
                    text_location: function(A, B, C){
                        var point = pointData[arrayObjectIndexOf(pointData, "L1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x +25 , y: point.y+55};
                    },
                    result: function(A, B, C){           
                        // console.log(pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio.toFixed(2));                      
                        return (pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },

    "Upper molar to PtV": { 
                    // Age + 3 mm
                    caucasian: {
                            male: { 
                                adult: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                                B: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                                C: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                                B: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                                C: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                                B: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                                C: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                                B: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                                C: {mean: 21.10, sd: 3.00, unit: "mm"}, 
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                        "large": "Mesially migrated upper molar",
                        "normal": "Normal upper molar position (A-P direction)",
                        "small": "Distally positioned upper molar"
                        },
                    type: "distance_to_vertical_line",
                    nodes: ["Pt", "U6Distal", "U6Distal"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U6Distal", "landmark")].coordinates;                                
                        return {x: point.x -30 , y: point.y};
                    },
                    result: function(A, B, C, D){                                
                        return ((point(C).coordinates.x - point(A).coordinates.x)*mm_px_ratio).toFixed(2);
                        },      

                },



    "Upper lip to E-plane": { 
                    caucasian: {
                            male: { 
                                adult: {mean: -4.70, sd: 2.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: -4.70, sd: 2.00, unit: "mm"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 0.00, sd: 2.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 0.00, sd: 2.00, unit: "mm"}, 
                                
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                        "large": "Protruded upper lip ",
                        "normal": "Normal upper lip position",
                        "small": "Retruded upper lip"
                        },
                    type: "point_to_line_distance",
                    nodes: ["Prn", "SoftTissuePog", "UpperLip"],
                    direction: true,
                    text_location: function(A, B, C){
                        var point = pointData[arrayObjectIndexOf(pointData, "UpperLip", "landmark")].coordinates;                                
                        return {x: point.x +30 , y: point.y};
                    },
                    result: function(A, B, C){           
                        // console.log(pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio.toFixed(2));                      
                        return (pointToRickettsELine(point(A),point(B),point(C))*mm_px_ratio).toFixed(2);
                        },
                },


    "Lower lip to E-plane": { 
                    caucasian: {
                            male: { 
                                adult: {mean: -2.00, sd: 2.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: -2.00, sd: 2.00, unit: "mm"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 0.00, sd: 2.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 0.00, sd: 2.00, unit: "mm"}, 
                                
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                        "large": "Protruded lower lip ",
                        "normal": "Normal lower lip position",
                        "small": "Retruded lower lip"
                        },
                    type: "point_to_line_distance",
                    nodes: ["Prn", "SoftTissuePog", "LowerLip"],
                    direction: true,
                    text_location: function(A, B, C){
                        var point = pointData[arrayObjectIndexOf(pointData, "LowerLip", "landmark")].coordinates;                                
                        return {x: point.x +30 , y: point.y};
                    },
                    result: function(A, B, C){           
                        // console.log(pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio.toFixed(2));                      
                        return (pointToRickettsELine(point(A),point(B),point(C))*mm_px_ratio).toFixed(2);
                        },
                },

    "Mandibular arc": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                                B: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                                C: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                                B: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                                C: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                                B: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                                C: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                                B: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                                C: {mean: 26.00, sd: 2.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                        "large": "Acutely bent mandibular corpus and ramus",
                        "normal": "Normal mandibular bending", 
                        "small": "Obtusely bent mandibular corpus and ramus"
                    },                     
                    type: "angle_4points",
                    nodes: ["PM", "Xi", "Xi", "DC"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "Xi", "landmark")].coordinates;                                
                        return {x: point.x - 40 , y: point.y + 20};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },      
                        
                },


    "Denture height(Lower facial height)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                                B: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                                C: {mean: 47.00, sd: 4.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                        "large": "Skeletal openbite tendency",
                        "normal": "Normal lower facial height",
                        "small": "Skeletal deepbite tendency"
                        },
                    type: "angle_3points",
                    nodes: ["ANS", "Xi", "PM"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "Xi", "landmark")].coordinates;                                
                        return {x: point.x + 40 , y: point.y + 10};
                    },
                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },
                },


    "Palatal plane angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                                B: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                                C: {mean: 0.00, sd: 5.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                        "large": "Clockwisely rotated maxilla",
                        "normal": "Normal palatal plane angle", 
                        "small": "Counter-Clockwisely rotated maxilla"
                    },                     
                    type: "angle_4points",
                    nodes: ["Po", "Or", "PNS", "ANS"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "PNS", "landmark")].coordinates;                                
                        return {x: point.x + 30 , y: point.y - 15};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },      
                        
                },


    "A to N-Perp.": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 1.10, sd: 2.70, unit: "mm"}, 
                                B: {mean: 1.10, sd: 2.70, unit: "mm"}, 
                                C: {mean: 1.10, sd: 2.70, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 0.40, sd: 2.30, unit: "mm"}, 
                                B: {mean: 0.40, sd: 2.30, unit: "mm"}, 
                                C: {mean: 0.40, sd: 2.30, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 1.10, sd: 2.70, unit: "mm"}, 
                                B: {mean: 1.10, sd: 2.70, unit: "mm"}, 
                                C: {mean: 1.10, sd: 2.70, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 0.40, sd: 2.30, unit: "mm"}, 
                                B: {mean: 0.40, sd: 2.30, unit: "mm"}, 
                                C: {mean: 0.40, sd: 2.30, unit: "mm"}, 
                            }
                        },
                    analysis: ["McNamara"],
                    meaning: {
                        "large": "Protruded maxilla",
                        "normal": "Normal A-P position of maxilla", 
                        "small": "Retruded maxilla"
                    },                     
                    type: "distance_to_vertical_line",
                    nodes: ["Na", "Me", "A"],
                    direction: true, //true being protrusion, false being retrusion
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "A", "landmark")].coordinates;                                
                        return {x: point.x + 30 , y: point.y};
                    },
                    result: function(A, B, C, D){                                
                        return ((point(C).coordinates.x - point(A).coordinates.x)*mm_px_ratio).toFixed(2);
                        },      
                        
                },






    "SNA(McNamara)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 83.90, sd: 3.20, unit: "deg"}, 
                                B: {mean: 83.90, sd: 3.20, unit: "deg"}, 
                                C: {mean: 83.90, sd: 3.20, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 82.40, sd: 3.00, unit: "deg"}, 
                                B: {mean: 82.40, sd: 3.00, unit: "deg"}, 
                                C: {mean: 82.40, sd: 3.00, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 83.90, sd: 3.20, unit: "deg"}, 
                                B: {mean: 83.90, sd: 3.20, unit: "deg"}, 
                                C: {mean: 83.90, sd: 3.20, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 82.40, sd: 3.00, unit: "deg"}, 
                                B: {mean: 82.40, sd: 3.00, unit: "deg"}, 
                                C: {mean: 82.40, sd: 3.00, unit: "deg"}, 
                            }
                        },
                    analysis: ["McNamara"],
                    meaning: {
                        "large": "Protruded maxilla",
                        "normal": "Normal A-P position of maxilla",
                        "small": "Retruded maxilla"
                        },
                    type: "angle_3points",
                    nodes: ["S", "Na", "A"],
                    text_location: function(A, B, C){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x + 20 , y: b.y};
                    },
                    
                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },
                },

    "Effective length of maxilla": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 99.80, sd: 6.00, unit: "mm"}, 
                                B: {mean: 99.80, sd: 6.00, unit: "mm"}, 
                                C: {mean: 99.80, sd: 6.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 91.00, sd: 4.30, unit: "mm"}, 
                                B: {mean: 91.00, sd: 4.30, unit: "mm"}, 
                                C: {mean: 91.00, sd: 4.30, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 99.80, sd: 6.00, unit: "mm"}, 
                                B: {mean: 99.80, sd: 6.00, unit: "mm"}, 
                                C: {mean: 99.80, sd: 6.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 91.00, sd: 4.30, unit: "mm"}, 
                                B: {mean: 91.00, sd: 4.30, unit: "mm"}, 
                                C: {mean: 91.00, sd: 4.30, unit: "mm"}, 
                            }
                        },
                    analysis: ["McNamara"],
                    meaning: {
                        "large": "Large effective length of maxilla",
                        "normal": "Normal effective length of maxilla",
                        "small": "Small effective length of maxilla"
                        },
                    type: "point_to_point_distance",
                    nodes: ["Co", "A"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x , y: midpoint.y};
                    },
                    result: function(A, B, C, D){                                                                
                        return (pointToPointDistance(point(A).coordinates,point(B).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },

    "Effective length of mandible": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 134.30, sd: 6.80, unit: "mm"}, 
                                B: {mean: 134.30, sd: 6.80, unit: "mm"}, 
                                C: {mean: 134.30, sd: 6.80, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 120.20, sd: 5.30, unit: "mm"}, 
                                B: {mean: 120.20, sd: 5.30, unit: "mm"}, 
                                C: {mean: 120.20, sd: 5.30, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 134.30, sd: 6.80, unit: "mm"}, 
                                B: {mean: 134.30, sd: 6.80, unit: "mm"}, 
                                C: {mean: 134.30, sd: 6.80, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 120.20, sd: 5.30, unit: "mm"}, 
                                B: {mean: 120.20, sd: 5.30, unit: "mm"}, 
                                C: {mean: 120.20, sd: 5.30, unit: "mm"}, 
                            }
                        },
                    analysis: ["McNamara"],
                    meaning: {
                        "large": "Large effective length of mandible",
                        "normal": "Normal effective length of mandible",
                        "small": "Small effective length of mandible"
                        },
                    type: "point_to_point_distance",
                    nodes: ["Co", "Gn"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x , y: midpoint.y};
                    },
                    result: function(A, B, C, D){                                                                
                        return (pointToPointDistance(point(A).coordinates,point(B).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },


 
    "Maxillomandibular differential": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 34.50, sd: 4.00, unit: "mm"}, 
                                B: {mean: 34.50, sd: 4.00, unit: "mm"}, 
                                C: {mean: 34.50, sd: 4.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 29.20, sd: 3.30, unit: "mm"}, 
                                B: {mean: 29.20, sd: 3.30, unit: "mm"}, 
                                C: {mean: 29.20, sd: 3.30, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 34.50, sd: 4.00, unit: "mm"}, 
                                B: {mean: 34.50, sd: 4.00, unit: "mm"}, 
                                C: {mean: 34.50, sd: 4.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 29.20, sd: 3.30, unit: "mm"}, 
                                B: {mean: 29.20, sd: 3.30, unit: "mm"}, 
                                C: {mean: 29.20, sd: 3.30, unit: "mm"}, 
                            }
                        },
                    analysis: ["McNamara"],
                    meaning: {
                        "large": "Large mandiblar length relative to maxilla",
                        "normal": "Normal maxillomandibular length difference",
                        "small": "Small mandibular length relative maxilla"
                        },
                    type: "comparison",
                    nodes: ["Co", "A", "Co", "Gn"],
                    direction: true, //true being mn. prognathic, false being mn. retrognathic 
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var c = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var d = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        
                        var midpoint_1 = mid_point(a.coordinates, b.coordinates);
                        var midpoint_2 = mid_point(c.coordinates, d.coordinates);

                        var midpoint = mid_point(midpoint_1, midpoint_2);
                        
                        
                        return {x: midpoint.x , y: midpoint.y};
                    },
                    result: function(A, B, C, D){                                                                
                        return ((pointToPointDistance(point(C).coordinates,point(D).coordinates)-pointToPointDistance(point(A).coordinates,point(B).coordinates))*mm_px_ratio).toFixed(2);
                        },
                },


    "Lower anterior facial height": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 74.60, sd: 5.00, unit: "mm"}, 
                                B: {mean: 74.60, sd: 5.00, unit: "mm"}, 
                                C: {mean: 74.60, sd: 5.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 66.70, sd: 4.10, unit: "mm"}, 
                                B: {mean: 66.70, sd: 4.10, unit: "mm"}, 
                                C: {mean: 66.70, sd: 4.10, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 74.60, sd: 5.00, unit: "mm"}, 
                                B: {mean: 74.60, sd: 5.00, unit: "mm"}, 
                                C: {mean: 74.60, sd: 5.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 66.70, sd: 4.10, unit: "mm"}, 
                                B: {mean: 66.70, sd: 4.10, unit: "mm"}, 
                                C: {mean: 66.70, sd: 4.10, unit: "mm"}, 
                            }
                        },
                    analysis: ["McNamara"],
                    meaning: {
                        "large": "Excessive lower facial height, Openbite tendency",
                        "normal": "Normal lower facial height",
                        "small": "deficiency in lower facial height, Deepbite tendency"
                        },
                    type: "point_to_point_distance",
                    nodes: ["ANS", "Me"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                                                
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x , y: midpoint.y};
                    },
                    result: function(A, B, C, D){                                                                
                        return (pointToPointDistance(point(A).coordinates,point(B).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },

    "Mandibular plane angle(McNamara)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 21.30, sd: 3.90, unit: "deg"}, 
                                B: {mean: 21.30, sd: 3.90, unit: "deg"}, 
                                C: {mean: 21.30, sd: 3.90, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 22.70, sd: 4.30, unit: "deg"}, 
                                B: {mean: 22.70, sd: 4.30, unit: "deg"}, 
                                C: {mean: 22.70, sd: 4.30, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 21.30, sd: 3.90, unit: "deg"}, 
                                B: {mean: 21.30, sd: 3.90, unit: "deg"}, 
                                C: {mean: 21.30, sd: 3.90, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 22.70, sd: 4.30, unit: "deg"}, 
                                B: {mean: 22.70, sd: 4.30, unit: "deg"}, 
                                C: {mean: 22.70, sd: 4.30, unit: "deg"}, 
                            }
                        },
                    analysis: ["McNamara"],
                    meaning: {
                        "large": "Vertical growth pattern, Hyperdivergent",
                        "normal": "Normodivergent facial pattern", 
                        "small": "Horizontal growth pattern, Hypodivergent"
                    },                     
                    type: "angle_4points",
                    nodes: ["Po", "Or", "CorpusLeft", "Me"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "CorpusLeft", "landmark")].coordinates;                                
                        return {x: point.x , y: point.y + 15};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },      
                        
                },


    "Facial axis angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 0.50, sd: 3.50, unit: "deg"}, 
                                B: {mean: 0.50, sd: 3.50, unit: "deg"}, 
                                C: {mean: 0.50, sd: 3.50, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 0.20, sd: 3.20, unit: "deg"}, 
                                B: {mean: 0.20, sd: 3.20, unit: "deg"}, 
                                C: {mean: 0.20, sd: 3.20, unit: "deg"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 0.50, sd: 3.50, unit: "deg"}, 
                                B: {mean: 0.50, sd: 3.50, unit: "deg"}, 
                                C: {mean: 0.50, sd: 3.50, unit: "deg"}, 
                            }, 
                            female: {
                                adult: {mean: 0.20, sd: 3.20, unit: "deg"}, 
                                B: {mean: 0.20, sd: 3.20, unit: "deg"}, 
                                C: {mean: 0.20, sd: 3.20, unit: "deg"}, 
                            }
                        },
                    analysis: ["McNamara"],
                    meaning: {
                            "large": "Deficient vertical development of face", 
                            "normal": "Normal vertical development of face",
                            "small": "Excessive vertical development of face"
                        }, 
                    type: "angle_4points",
                    nodes: ["Pt", "Gn", "Na", "Ba"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x - 10, y: crosspoint.y + 30};
                    },
                    result: function(A, B, C, D){                                
                        return (angle_vectors(point(A),point(B),point(C),point(D))-90).toFixed(2);
                    },
                },

    "Pog to N-Perp.": { 
                    caucasian: {
                            male: { 
                                adult: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                                B: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                                C: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                                B: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                                C: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                                B: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                                C: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                                B: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                                C: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                            }
                        },
                    analysis: ["McNamara"],
                    meaning: {
                        "large": "Protruded chin point",
                        "normal": "Normal A-P position of chin", 
                        "small": "Retruded chin point"
                    },                     
                    type: "distance_to_vertical_line",
                    nodes: ["Na", "Me", "Pog"],
                    direction: true, //true being protrusion, false being retrusion
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "Pog", "landmark")].coordinates;                                
                        return {x: point.x + 30 , y: point.y};
                    },
                    result: function(A, B, C, D){                                
                        return ((point(C).coordinates.x - point(A).coordinates.x)*mm_px_ratio).toFixed(2);
                        },      
                        
                },



    "Pog to N-Perp(FH)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                                B: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                                C: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                                B: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                                C: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                                B: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                                C: {mean: -0.30, sd: 3.80, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                                B: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                                C: {mean: -1.80, sd: 4.50, unit: "mm"}, 
                            }
                        },
                    analysis: ["yehyun"],
                    meaning: {
                        "large": "Protruded chin point",
                        "normal": "Normal A-P position of chin", 
                        "small": "Retruded chin point"
                    },                     
                    type: "point_to_line_distance",
                    nodes: ["Po", "Or", "Na", "Pog"],
                    direction: true, //true being protrusion, false being retrusion
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "Pog", "landmark")].coordinates;                                
                        return {x: point.x + 30 , y: point.y};
                    },
                    result: function(A, B, C, D){ 
                        // distance from point D to line passing C and normal to AB.

                        var sp_point = getSpPoint(point(A), point(B), point(C));                                  
                        var slope = (sp_point.y-point(C).coordinates.y)/(sp_point.x-point(C).coordinates.x)                        
                        var y = point("Me").coordinates.y;                                                
                        var x = (y-point(C).coordinates.y)/slope + point(C).coordinates.x;                        
                        var E = {"coordinates": {"x": x, "y": y}};
                        
                        if((point(C).coordinates.x-x)>=0){
                            return (pointToRickettsELine(point(C),E, point(D))*mm_px_ratio).toFixed(2);
                        }else{
                            return (-pointToRickettsELine(point(C),E, point(D))*mm_px_ratio).toFixed(2);
                        }
                        },      
                        
                },





    "Upper incisor to point A vertical": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 5.30, sd: 2.00, unit: "mm"}, 
                                B: {mean: 5.30, sd: 2.00, unit: "mm"}, 
                                C: {mean: 5.30, sd: 2.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 5.40, sd: 1.70, unit: "mm"}, 
                                B: {mean: 5.40, sd: 1.70, unit: "mm"}, 
                                C: {mean: 5.40, sd: 1.70, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 5.30, sd: 2.00, unit: "mm"}, 
                                B: {mean: 5.30, sd: 2.00, unit: "mm"}, 
                                C: {mean: 5.30, sd: 2.00, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 5.40, sd: 1.70, unit: "mm"}, 
                                B: {mean: 5.40, sd: 1.70, unit: "mm"}, 
                                C: {mean: 5.40, sd: 1.70, unit: "mm"}, 
                            }
                        },
                    analysis: ["McNamara"],
                    meaning: {
                        "large": "Protruded upper incisor relative to maxilla",
                        "normal": "Normal A-P position of upper incisor relative to maxilla", 
                        "small": "Retruded upper incisor relative to maxilla"
                    },                     
                    type: "distance_to_vertical_line",
                    nodes: ["A", "U1IncisalTip", "U1IncisalTip"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x + 30 , y: point.y};
                    },
                    result: function(A, B, C, D){                                
                        return ((point(C).coordinates.x - point(A).coordinates.x)*mm_px_ratio).toFixed(2);
                        },      
                        
                },

    "L1 to A-Pog(McNamara)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 2.30, sd: 2.10, unit: "mm"}, 
                                B: {mean: 2.30, sd: 2.10, unit: "mm"}, 
                                C: {mean: 2.30, sd: 2.10, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 2.70, sd: 1.70, unit: "mm"}, 
                                B: {mean: 2.70, sd: 1.70, unit: "mm"}, 
                                C: {mean: 2.70, sd: 1.70, unit: "mm"}, 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 2.30, sd: 2.10, unit: "mm"}, 
                                B: {mean: 2.30, sd: 2.10, unit: "mm"}, 
                                C: {mean: 2.30, sd: 2.10, unit: "mm"}, 
                            }, 
                            female: {
                                adult: {mean: 2.70, sd: 1.70, unit: "mm"}, 
                                B: {mean: 2.70, sd: 1.70, unit: "mm"}, 
                                C: {mean: 2.70, sd: 1.70, unit: "mm"}, 
                            }
                        },
                    analysis: ["McNamara"],
                    meaning: {
                        "large": "Protruded lower incisor",
                        "normal": "normal A-P position of lower incisor",
                        "small": "Retruded lower incisor"
                        },
                    type: "point_to_line_distance",
                    nodes: ["A", "Pog", "L1IncisalTip"],
                    text_location: function(A, B, C){
                        var point = pointData[arrayObjectIndexOf(pointData, "L1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x +25 , y: point.y+55};
                    },
                    result: function(A, B, C){           
                        // console.log(pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio.toFixed(2));                      
                        return (pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },

    "Saddle angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 123.00, sd: 5.00, unit: "deg"},                   
                            }, 
                            female: {
                                adult: {mean: 123.00, sd: 5.00, unit: "deg"},                                 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 123.00, sd: 5.00, unit: "deg"},                                 
                            }, 
                            female: {
                                adult: {mean: 123.00, sd: 5.00, unit: "deg"},                                 
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Obtuse saddle angle",
                        "normal": "Normal saddle angle",
                        "small": "Acute saddle angle"
                        },
                    type: "angle_3points",
                    nodes: ["Na", "S", "Ar"],
                    text_location: function(A, B, C){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x + 10 , y: b.y - 10};
                    },
                    
                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },
                },

    "Articular angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 143.00, sd: 6.00, unit: "deg"},                   
                            }, 
                            female: {
                                adult: {mean: 143.00, sd: 6.00, unit: "deg"},                                 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 143.00, sd: 6.00, unit: "deg"},                                 
                            }, 
                            female: {
                                adult: {mean: 143.00, sd: 6.00, unit: "deg"},                                 
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Obtuse articular angle, Dolichocephalic facial type",
                        "normal": "Normal articular angle",
                        "small": "Acute articular angle"
                        },
                    type: "angle_3points",
                    nodes: ["S", "Ar", "const_Go"],
                    text_location: function(A, B, C){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x - 40 , y: b.y + 10};
                    },
                    
                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },
                },

    "Gonial angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 130.00, sd: 7.00, unit: "deg"},                   
                            }, 
                            female: {
                                adult: {mean: 130.00, sd: 7.00, unit: "deg"},                                 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 130.00, sd: 7.00, unit: "deg"},                                 
                            }, 
                            female: {
                                adult: {mean: 130.00, sd: 7.00, unit: "deg"},                                 
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Obtuse gonial angle, Skeletal Openbite tendency",
                        "normal": "Normal gonial angle",
                        "small": "Acute gonial angle"
                        },
                    type: "angle_3points",
                    nodes: ["Ar", "const_Go", "Me"],
                    text_location: function(A, B, C){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x - 30, y: b.y + 15};
                    },
                    
                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },
                },

    "Bjork sum": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 396.00, sd: 6.00, unit: "deg"},                   
                            }, 
                            female: {
                                adult: {mean: 396.00, sd: 6.00, unit: "deg"},                                 
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 396.00, sd: 6.00, unit: "deg"},                                 
                            }, 
                            female: {
                                adult: {mean: 396.00, sd: 6.00, unit: "deg"},                                 
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Hyperdivergent Skeletal Pattern",
                        "normal": "Normodivergent Skeletal Pattern",
                        "small": "Hypodivergent Skeletal Pattern"
                        },
                    type: "angle_5points",
                    nodes: ["Na", "S", "Ar", "const_Go", "Me"],
                    direction: true, //true being hyperdivergent, false being hypodivergent
                    text_location: function(A, B, C, D, E){
                        var a = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var c = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var d = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        
                        var crosspoint = intersect(a, b, c, d);
                        
                        return {x: crosspoint.x - 40 , y: crosspoint.y - 20};
                    },
                    result: function(A, B, C, D, E){                                                                
                        return (angle(point(A),point(B),point(C)) + angle(point(B),point(C),point(D)) + angle(point(C),point(D),point(E))).toFixed(2);
                        },
                },

    "Anterior cranial base length": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 71.00, sd: 3.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 71.00, sd: 3.00, unit: "mm"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 71.00, sd: 3.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 71.00, sd: 3.00, unit: "mm"}, 
                                
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Large anterior cranial base length",
                        "normal": "Normal anterior cranial base length",
                        "small": "Small anterior cranial base length"
                        },
                    type: "point_to_point_distance",
                    nodes: ["Na", "S"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x - 20 , y: midpoint.y - 10};
                    },
                    result: function(A, B, C, D){                                                                
                        return (pointToPointDistance(point(A).coordinates,point(B).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },

    "Posterior cranial base length": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 32.00, sd: 3.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 32.00, sd: 3.00, unit: "mm"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 32.00, sd: 3.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 32.00, sd: 3.00, unit: "mm"}, 
                                
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Large posterior cranial base length",
                        "normal": "Normal posterior cranial base length",
                        "small": "Small posterior cranial base length"
                        },
                    type: "point_to_point_distance",
                    nodes: ["S", "Ar"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x - 30 , y: midpoint.y };
                    },
                    result: function(A, B, C, D){                                                                
                        return (pointToPointDistance(point(A).coordinates,point(B).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },


    "Upper gonial angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 53.50, sd: 1.50, unit: "deg"},                   
                            }, 
                            female: {
                                adult: {mean: 53.50, sd: 1.50, unit: "deg"},                   
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 53.50, sd: 1.50, unit: "deg"},                   
                            }, 
                            female: {
                                adult: {mean: 53.50, sd: 1.50, unit: "deg"},                   
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Mandible is growing forward.",
                        "normal": "Normal upper gonial angle",
                        "small": "Mandible is growing down and backward."
                        },
                    type: "angle_3points",
                    nodes: ["Ar", "const_Go", "Na"],
                    text_location: function(A, B, C){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x , y: b.y - 45};
                        },    
                        
                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },
                },

    "Lower gonial angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 72.50, sd: 2.50, unit: "deg"},                   
                            }, 
                            female: {
                                adult: {mean: 72.50, sd: 2.50, unit: "deg"},                   
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 72.50, sd: 2.50, unit: "deg"},                   
                            }, 
                            female: {
                                adult: {mean: 72.50, sd: 2.50, unit: "deg"},                   
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Vertical grower",
                        "normal": "Normal lower gonial angle",
                        "small": "Sagittal grower"
                        },
                    type: "angle_3points",
                    nodes: ["Na", "const_Go", "Me"],
                    direction: true, //true being dolicho false being brachy
                    text_location: function(A, B, C){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x + 30 , y: b.y};
                    },
                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },
                },



    "Ramus height": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 44.00, sd: 5.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 44.00, sd: 5.00, unit: "mm"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 44.00, sd: 5.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 44.00, sd: 5.00, unit: "mm"}, 
                                
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Large ramus height",
                        "normal": "Normal ramus height",
                        "small": "Small ramus height"
                        },
                    type: "point_to_point_distance",
                    nodes: ["Ar", "const_Go"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x - 40 , y: midpoint.y };
                    },
                    result: function(A, B, C, D){                                                                
                        return (pointToPointDistance(point(A).coordinates,point(B).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },

    "Body length": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 71.00, sd: 5.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 71.00, sd: 5.00, unit: "mm"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 71.00, sd: 5.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 71.00, sd: 5.00, unit: "mm"}, 
                                
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Large mandibular body length",
                        "normal": "Normal mandibular body length",
                        "small": "Small mandibular body length"
                        },
                    type: "point_to_point_distance",
                    nodes: ["const_Go", "Me"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x , y: midpoint.y + 20};
                    },
                    result: function(A, B, C, D){                                                                
                        return (pointToPointDistance(point(A).coordinates,point(B).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },



    "Body to Ant. cranial base ratio": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 1.00, sd: 0.11, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 1.00, sd: 0.11, unit: "mm"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 1.00, sd: 0.11, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 1.00, sd: 0.11, unit: "mm"}, 
                                
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Large mandibular body length relative to cranium",
                        "normal": "Normal mandibular body length",
                        "small": "Small mandibular body length relative to cranium"
                        },
                    type: "comparison",
                    nodes: ["S", "Na", "const_Go", "Me"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x , y: midpoint.y + 45};
                    },
                    result: function(A, B, C, D){                                                                
                        return ((pointToPointDistance(point(C).coordinates,point(D).coordinates))/(pointToPointDistance(point(A).coordinates,point(B).coordinates))).toFixed(2);
                        },
                },

    "SNA(Jarabak)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 80.00, sd: 1.00, unit: "deg"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 80.00, sd: 1.00, unit: "deg"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 80.00, sd: 1.00, unit: "deg"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 80.00, sd: 1.00, unit: "deg"}, 
                                
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Protruded maxilla",
                        "normal": "Normal A-P position of maxilla",
                        "small": "Retruded maxilla"
                        },
                    type: "angle_3points",
                    nodes: ["S", "Na", "A"],
                    text_location: function(A, B, C){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x + 20 , y: b.y};
                    },

                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },
                },

    "SNB(Jarabak)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 78.00, sd: 1.00, unit: "deg"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 78.00, sd: 1.00, unit: "deg"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 78.00, sd: 1.00, unit: "deg"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 78.00, sd: 1.00, unit: "deg"}, 
                                
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Prognathic mandible",
                        "normal": "Normal A-P position of mandible",
                        "small": "Retruded mandible"
                        },
                    type: "angle_3points",
                    nodes: ["S", "Na", "B"],
                    text_location: function(A, B, C){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x + 20 , y: b.y + 20};
                    },                    
                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },
                },


    "SN-GoMe": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 32.00, sd: 5.00, unit: "deg"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 32.00, sd: 5.00, unit: "deg"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 32.00, sd: 5.00, unit: "deg"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 32.00, sd: 5.00, unit: "deg"}, 
                                
                            }
                        },
                    analysis: ["Ricketts"],
                    meaning: {
                        "large": "Vertical growth pattern, Hyperdivergent",
                        "normal": "Normodivergent facial pattern", 
                        "small": "Horizontal growth pattern, Hypodivergent"
                    },                     
                    type: "angle_4points",
                    nodes: ["S", "Na", "const_Go", "Me"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "CorpusLeft", "landmark")].coordinates;                                
                        return {x: point.x , y: point.y + 15};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },      
                        
                },


    "Facial depth(Jarabak)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 130.94, sd: 6.31, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 123.27, sd: 5.14, unit: "mm"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 130.94, sd: 6.31, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 123.27, sd: 5.14, unit: "mm"}, 
                                
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Large facial depth(Na-Go distance)",
                        "normal": "Normal facial depth(Na-Go distance)",
                        "small": "Small facial depth(Na-Go distance)"
                        },
                    type: "point_to_point_distance",
                    nodes: ["Na", "const_Go"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x , y: midpoint.y};
                    },
                    result: function(A, B, C, D){                                                                
                        return (pointToPointDistance(point(A).coordinates,point(B).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },


    "Facial length on Y axis": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 139.47, sd: 6.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 130.29, sd: 7.86, unit: "mm"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 139.47, sd: 6.00, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 130.29, sd: 7.86, unit: "mm"}, 
                                
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Large facial length on Y-axis(S-Gn)",
                        "normal": "Normal facial length on Y-axis(S-Gn)",
                        "small": "Small facial length on Y-axis(S-Gn)"
                        },
                    type: "point_to_point_distance",
                    nodes: ["S", "Gn"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x , y: midpoint.y};
                    },
                    result: function(A, B, C, D){                                                                
                        return (pointToPointDistance(point(A).coordinates,point(B).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },



    "Y axis to SN": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 66.00, sd: 2.00, unit: "deg"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 66.00, sd: 2.00, unit: "deg"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 66.00, sd: 2.00, unit: "deg"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 66.00, sd: 2.00, unit: "deg"}, 
                                
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Hyperdivergent, vertically excessive growth pattern",
                        "normal": "Normodivergent growth pattern",
                        "small": "Hypodivergent, horizontal growth pattern "
                        },

                    type: "angle_4points",
                    nodes: ["S", "Na", "S", "Gn"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "S", "landmark")].coordinates;                                
                        return {x: point.x+25 , y: point.y+20};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },


    "Posterior facial height": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 95.45, sd: 6.19, unit: "mm"}, 
                             
                            }, 
                            female: {
                                adult: {mean: 85.07, sd: 5.50, unit: "mm"}, 
                             
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 95.45, sd: 6.19, unit: "mm"}, 
                             
                            }, 
                            female: {
                                adult: {mean: 85.07, sd: 5.50, unit: "mm"}, 
                             
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Large posterior facial height",
                        "normal": "Normal posterior facial height",
                        "small": "Small posterior facial height"
                        },
                    type: "point_to_point_distance",
                    nodes: ["S", "const_Go"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x , y: midpoint.y};
                    },
                    result: function(A, B, C, D){                                                                
                        return (pointToPointDistance(point(A).coordinates,point(B).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },


    "Anterior facial height": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 136.02, sd: 5.57, unit: "mm"},                              
                            }, 
                            female: {
                                adult: {mean: 127.42, sd: 5.68, unit: "mm"},                              
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 136.02, sd: 5.57, unit: "mm"},                              
                            }, 
                            female: {
                                adult: {mean: 127.42, sd: 5.68, unit: "mm"},                              
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Large anterior facial height",
                        "normal": "Normal anterior facial height",
                        "small": "Small anterior facial height"
                        },
                    type: "point_to_point_distance",
                    nodes: ["Na", "Me"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        
                        var div_point = dividing_point(a.coordinates, b.coordinates, 2, 1);                        
                        
                        return {x: div_point.x -40 , y: div_point.y};
                        
                    },
                    result: function(A, B, C, D){                                                                
                        return (pointToPointDistance(point(A).coordinates,point(B).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },



    "Facial height ratio(PFH/AFH)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 70.24, sd: 4.68, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 66.82, sd: 4.25, unit: "mm"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 70.24, sd: 4.68, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: 66.82, sd: 4.25, unit: "mm"}, 
                                
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Hypodivergent(Horizontal) growth pattern",
                        "normal": "Normodivergent growth pattern",
                        "small": "Hyperdivergent(Vertical) growth pattern"
                        },
                    type: "comparison",
                    nodes: ["Na", "Me", "S", "const_Go"],
                    direction: false, //true being brachy, false being dolicho
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var c = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var d = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        
                        var midpoint_1 = mid_point(a.coordinates, b.coordinates);
                        var midpoint_2 = mid_point(c.coordinates, d.coordinates);

                        var midpoint = mid_point(midpoint_1, midpoint_2);
                        
                        
                        return {x: midpoint.x , y: midpoint.y};
                    },
                    result: function(A, B, C, D){                                                                
                        return (((pointToPointDistance(point(C).coordinates,point(D).coordinates)/pointToPointDistance(point(A).coordinates,point(B).coordinates)))*100).toFixed(2);
                        },
                },


    "Facial plane(Jarabak)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 81.50, sd: 3.50, unit: "deg"}, 
                           
                            }, 
                            female: {
                                adult: {mean: 81.50, sd: 3.50, unit: "deg"}, 
                           
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 81.50, sd: 3.50, unit: "deg"}, 
                           
                            }, 
                            female: {
                                adult: {mean: 81.50, sd: 3.50, unit: "deg"}, 
                           
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                            "large": "Prominent chin, Skeletal Class III", 
                            "normal": "Normal Chin Prominence, Skeletal Class I",
                            "small": "Retruded chin position, Skeletal Class II"
                        }, 
                    type: "angle_3points",
                    nodes: ["S", "Na", "Pog"],
                    text_location: function(A, B, C){                        
                        var b = pointData[arrayObjectIndexOf(pointData, B, "landmark")].coordinates;
                        return {x: b.x - 40 , y: b.y + 20};
                    },

                    result: function(A, B, C){                                                                
                        return angle(point(A),point(B),point(C)).toFixed(2);
                        },


                },


    "Occlusal plane to Go-Me": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 14.99, sd: 4.00, unit: "deg"}, 
                             
                            }, 
                            female: {
                                adult: {mean: 15.38, sd: 3.60, unit: "deg"}, 
                             
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 14.99, sd: 4.00, unit: "deg"}, 
                             
                            }, 
                            female: {
                                adult: {mean: 15.38, sd: 3.60, unit: "deg"}, 
                             
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Over-eruption of lower incisors or Under-eruption of lower molars",
                        "normal": "Normal vertical position of mandibular incisors and molars",
                        "small": "Under-eruption of lower incisors or Over-eruption of lower molars"
                        },

                    type: "angle_4points",
                    nodes: ["post_occlusal_point", "ant_occlusal_point", "const_Go", "Me"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U6Mesial", "landmark")].coordinates;                                
                        return {x: point.x-50 , y: point.y+25};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },

    "Facial convexity": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 1.30, sd: 2.40, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 1.90, sd: 2.41, unit: "deg"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 1.30, sd: 2.40, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 1.90, sd: 2.41, unit: "deg"}, 

                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Convex facial profile, Prominent maxilla", 
                        "normal": "Straight facial profile",
                        "small": "Concave facial profile, Prognathic profile"
                    },                     
                    type: "angle_4points",
                    nodes: ["Na", "A", "A", "Pog"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        return intersect(A, B, C, D);
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                }, 


    "U1 to SN": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 102.00, sd: 6.00, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 102.00, sd: 6.00, unit: "deg"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 108.73, sd: 5.71, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 106.90, sd: 6.03, unit: "deg"}, 

                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Proclined upper incisor",
                        "normal": "Normal upper incisor inclination",
                        "small": "Retroclined upper incisor"
                        },

                    type: "angle_4points",
                    nodes: ["U1RootTip", "U1IncisalTip", "Na", "S"],
                    direction: true,
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x+15 , y: point.y-45};
                    },
                    result: function(A, B, C, D){
                        if(angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2)<0){
                            return (360+angle_vectors(point(A),point(B),point(C),point(D))).toFixed(2);
                        }else{
                            return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);    
                        }                                                        
                        },
                },

    "U1 to facial plane(mm)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 5.00, sd: 2.00, unit: "mm"}, 
                        
                            }, 
                            female: {
                                adult: {mean: 5.00, sd: 2.00, unit: "mm"}, 
                        
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 8.83, sd: 2.97, unit: "mm"}, 
                        
                            }, 
                            female: {
                                adult: {mean: 8.94, sd: 3.03, unit: "mm"}, 
                        
                            }
                        },
                    analysis: ["Jarabak"],
                    meaning: {
                        "large": "Protruded upper incisor",
                        "normal": "normal A-P position of upper incisor",
                        "small": "Retruded upper incisor"
                        },
                    type: "point_to_line_distance",
                    nodes: ["Na", "Pog", "U1IncisalTip"],
                    text_location: function(A, B, C){
                        var point = pointData[arrayObjectIndexOf(pointData, "U1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x +15 , y: point.y-20};
                    },
                    result: function(A, B, C){           
                        // console.log(pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio.toFixed(2));                      
                        return (pointLineDistance(point(A).coordinates,point(B).coordinates,point(C).coordinates)*mm_px_ratio).toFixed(2);
                        },
                },



    "A-B to mandibular plane": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 69.30, sd: 2.47, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 69.30, sd: 2.54, unit: "deg"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 69.30, sd: 2.47, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 69.30, sd: 2.54, unit: "deg"}, 

                            }
                        },
                    analysis: ["Kim"],
                    meaning: {
                        "large": "Large AB to mand. plane angle",
                        "normal": "Normal AB to mand. plane angle",
                        "small": "Small AB to mand. plane angle"
                        },

                    type: "angle_4points",
                    nodes: ["CorpusLeft", "Me", "A", "B"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x - 40, y: crosspoint.y - 40};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },


    "Palatal plane angle": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 1.20, sd: 5.43, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 1.20, sd: 4.72, unit: "deg"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 1.20, sd: 5.43, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 1.20, sd: 4.72, unit: "deg"}, 

                            }
                        },
                    analysis: ["Kim"],
                    meaning: {
                        "large": "Palatal plane is rotated in clockwise direction.",
                        "normal": "Normal palatal plane angle",
                        "small": "Palatal plane is rotated in couter-clockwise direction"
                        },

                    type: "angle_4points",
                    nodes: ["Po", "Or", "PNS", "ANS"],
                    text_location: function(A, B, C, D){
                        var a = pointData[arrayObjectIndexOf(pointData, "PNS", "landmark")];
                        var b = pointData[arrayObjectIndexOf(pointData, "ANS", "landmark")];
                        
                        var midpoint = mid_point(a.coordinates, b.coordinates);
                        
                        
                        return {x: midpoint.x , y: midpoint.y - 15};
                    },
                    result: function(A, B, C, D){                                
                        return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);
                        },
                },


    "ODI": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 74.50, sd: 6.00, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 74.50, sd: 6.00, unit: "deg"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 73.35, sd: 5.91, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 72.15, sd: 5.49, unit: "deg"}, 

                            }
                        },
                    analysis: ["Kim"],
                    meaning: {
                        "large": "Deepbite tendency",
                        "normal": "Normal ODI",
                        "small": "Skeletal Openbite tendency"
                        },

                    type: "comparison",
                    nodes: ["CorpusLeft", "Me", "A", "B", "Po", "Or", "PNS", "ANS"],
                    text_location: function(A, B, C, D){
                        var A = pointData[arrayObjectIndexOf(pointData, A, "landmark")];
                        var B = pointData[arrayObjectIndexOf(pointData, B, "landmark")];
                        var C = pointData[arrayObjectIndexOf(pointData, C, "landmark")];
                        var D = pointData[arrayObjectIndexOf(pointData, D, "landmark")];
                        var crosspoint = intersect(A, B, C, D);
                        return {x: crosspoint.x - 40, y: crosspoint.y - 60};
                    },
                    result: function(A, B, C, D, E, F, G, H){                                
                        
                        return (angle_vectors(point(A),point(B),point(C),point(D))+angle_vectors(point(E),point(F),point(G),point(H))).toFixed(2);
                        },
                },


    "APDI": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 85.98, sd: 4.01, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 85.74, sd: 4.02, unit: "deg"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 85.98, sd: 4.01, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 85.74, sd: 4.02, unit: "deg"}, 

                            }
                        },
                    analysis: ["Kim"],
                    meaning: {
                        "large": "Skeletal Class III",
                        "normal": "Skeletal Class I",
                        "small": "Skeletal Class II"
                        },

                    type: "comparison",
                    nodes: ["Pog", "Na", "Po", "Or", "B", "A", "Pog", "Na","Po", "Or", "PNS", "ANS"],
                    direction: false, //true being Class II, false being Class III
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "A", "landmark")].coordinates;                                
                        return {x: point.x -40 , y: point.y};
                    },
                    result: function(A, B, C, D, E, F, G, H, I, J, K, L){                                
                        
                        return (angle_vectors(point(A),point(B),point(C),point(D))+angle_vectors(point(E),point(F),point(G),point(H))+angle_vectors(point(I),point(J),point(K),point(L))).toFixed(2);
                        },
                },


    "Combination factor": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 159.33, sd: 7.13, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 157.90, sd: 6.52, unit: "deg"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 159.33, sd: 7.13, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 157.90, sd: 6.52, unit: "deg"}, 

                            }
                        },
                    analysis: ["Kim"],
                    meaning: {
                        "large": "",
                        "normal": "",
                        "small": ""
                        },

                    type: "comparison",
                    nodes: ["CorpusLeft", "Me", "A", "B", "Pog", "Na", "Po", "Or", "B", "A", "Pog", "Na","Po", "Or", "PNS", "ANS"],
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U6Mesial", "landmark")].coordinates;                                
                        return {x: point.x - 100 , y: point.y + 20};
                    },
                    result: function(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P){                                
                        
                        return (angle_vectors(point(A),point(B),point(C),point(D))+angle_vectors(point(E),point(F),point(G),point(H))+angle_vectors(point(I),point(J),point(K),point(L))+(2*angle_vectors(point(M),point(N),point(O),point(P)))).toFixed(2);
                        },
                },

    "A to N-Perp(FH)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 1.10, sd: 2.70, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: 0.40, sd: 2.30, unit: "mm"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 1.10, sd: 2.70, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: 0.40, sd: 2.30, unit: "mm"}, 

                            }
                        },
                    analysis: ["yehyun"],
                    meaning: {
                        "large": "Protruded maxilla",
                        "normal": "Normal A-P position of maxilla", 
                        "small": "Retruded maxilla"
                    },                     
                    type: "point_to_line_distance",
                    nodes: ["Po", "Or","Na", "A"],
                    direction: true, //true being protrusion, false being retrusion
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "A", "landmark")].coordinates;                                
                        return {x: point.x + 30 , y: point.y};
                    },
                    result: function(A, B, C, D){ 
                        // distance from point D to line passing C and normal to AB.

                        var sp_point = getSpPoint(point(A), point(B), point(C));                                  
                        var slope = (sp_point.y-point(C).coordinates.y)/(sp_point.x-point(C).coordinates.x)                        
                        var y = point("Me").coordinates.y;                                                
                        var x = (y-point(C).coordinates.y)/slope + point(C).coordinates.x;                        
                        var E = {"coordinates": {"x": x, "y": y}};

                       

                        if((point(C).coordinates.x-x)>=0){
                       
                            return (pointToRickettsELine(point(C),E, point(D))*mm_px_ratio).toFixed(2);

                        }else{
                       
                            return (-pointToRickettsELine(point(C),E, point(D))*mm_px_ratio).toFixed(2);
                        }


                        // var lineData = [];
                        
                        // lineData.push(E);
                        // lineData.push(point("Na"));
                        
                        // var cardinalLineFunction = d3.svg.line()
                        //                       .x(function(d) { return d.coordinates.x; })
                        //                       .y(function(d) { return d.coordinates.y; })
                        //                       .interpolate("cardinal");


                        // var selection = d3.select(".svg_analysis_tracing");                        
                        // var paths = selection.append("path")
                        //                       // .attr("id", line_id)  
                        //                       .attr("class", "analaysis_lines")
                        //                       .attr("d", cardinalLineFunction(lineData))
                        //                       .attr("stroke", "red")
                        //                       .attr("stroke-width", 1)
                        //                       .attr("fill", "none");    
                        

                        
                        // return (pointToRickettsELine(point(C),E, point(D))*mm_px_ratio).toFixed(2);
                        },      
                        
                },


    "B to N-Perp(FH)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: -3.50, sd: 2.50, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: -3.50, sd: 2.50, unit: "mm"}, 
                                
                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: -3.50, sd: 2.50, unit: "mm"}, 
                                
                            }, 
                            female: {
                                adult: {mean: -3.50, sd: 2.50, unit: "mm"}, 
                                
                            }
                        },
                    analysis: ["yehyun"],
                    meaning: {
                        "large": "Protruded mandible",
                        "normal": "Normal A-P position of mandible", 
                        "small": "Retruded mandible"
                    },                     
                    type: "point_to_line_distance",
                    nodes: ["Po", "Or","Na", "B"],
                    direction: true, //true being protrusion, false being retrusion
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "B", "landmark")].coordinates;                                
                        return {x: point.x + 30 , y: point.y};
                    },
                    result: function(A, B, C, D){ 
                        // distance from point D to line passing C and normal to AB.

                        var sp_point = getSpPoint(point(A), point(B), point(C));                                  
                        var slope = (sp_point.y-point(C).coordinates.y)/(sp_point.x-point(C).coordinates.x)                        
                        var y = point("Me").coordinates.y;                                                
                        var x = (y-point(C).coordinates.y)/slope + point(C).coordinates.x;                        
                        var E = {"coordinates": {"x": x, "y": y}};
                        
                        if((point(C).coordinates.x-x)>=0){
                            return (pointToRickettsELine(point(C),E, point(D))*mm_px_ratio).toFixed(2);
                        }else{
                            return (-pointToRickettsELine(point(C),E, point(D))*mm_px_ratio).toFixed(2);
                        }
                        },      
                        
                },



    "Pog to N-Perp(FH)": { 
                    caucasian: {
                            male: { 
                                adult: {mean: -0.30, sd: 3.80, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: -1.80, sd: 4.50, unit: "mm"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: -0.30, sd: 3.80, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: -1.80, sd: 4.50, unit: "mm"}, 

                            }
                        },
                    analysis: ["yehyun"],
                    meaning: {
                        "large": "Protruded chin point",
                        "normal": "Normal A-P position of chin", 
                        "small": "Retruded chin point"
                    },                     
                    type: "point_to_line_distance",
                    nodes: ["Po", "Or", "Na", "Pog"],
                    direction: true, //true being protrusion, false being retrusion
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "Pog", "landmark")].coordinates;                                
                        return {x: point.x + 30 , y: point.y};
                    },
                    result: function(A, B, C, D){ 
                        // distance from point D to line passing C and normal to AB.

                        var sp_point = getSpPoint(point(A), point(B), point(C));                                  
                        var slope = (sp_point.y-point(C).coordinates.y)/(sp_point.x-point(C).coordinates.x)                        
                        var y = point("Me").coordinates.y;                                                
                        var x = (y-point(C).coordinates.y)/slope + point(C).coordinates.x;                        
                        var E = {"coordinates": {"x": x, "y": y}};
                        
                        // console.log(sp_point);
                        // console.log(slope);
                        // console.log(x);
                        // console.log(y);
                        // console.log(E);
                        // console.log((pointToRickettsELine(point(C),E, point(D))*mm_px_ratio).toFixed(2));


                        if((point(C).coordinates.x-x)>=0){

                            return (pointToRickettsELine(point(C),E, point(D))*mm_px_ratio).toFixed(2);
                        }else{
                            return (-pointToRickettsELine(point(C),E, point(D))*mm_px_ratio).toFixed(2);
                        }
                        },      
                        
                },



    "Angle Classification": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 2.03, sd: 1.20, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: 2.03, sd: 1.20, unit: "mm"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 2.03, sd: 1.20, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: 2.03, sd: 1.20, unit: "mm"}, 

                            }
                        },
                    analysis: ["yehyun"],
                    meaning: {
                        "large": "Class III molar relationship",
                        "normal": "Class I molar relationship", 
                        "small": "Class II molar relationship"
                    },                     
                    type: "point_to_point_distance",
                    nodes: ["U6Mesial", "L6Mesial", "ant_occlusal_point", "post_occlusal_point"],
                    direction: true, //true being Class III, false being Class II
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U6Mesial", "landmark")].coordinates;                                
                        return {x: point.x , y: point.y + 15};
                    },
                    result: function(A, B, C, D){ 
                        // distance from point D to line passing C and normal to AB.

                        var sp_point1 = getSpPoint(point(C), point(D), point(A));  //U6Mesial
                        var sp_point2 = getSpPoint(point(C), point(D), point(B));  //L6Mesial                                
                        
                        if(sp_point2.x > sp_point1.x){
                            return (pointToPointDistance(sp_point1,sp_point2)*mm_px_ratio).toFixed(2);
                        }else{
                            return (-pointToPointDistance(sp_point1,sp_point2)*mm_px_ratio).toFixed(2);
                        }
                        },      
                        
                },


    "Overjet": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 

                            }
                        },
                    analysis: ["yehyun"],
                    meaning: {
                        "large": "Large Overjet",
                        "normal": "Normal Overjet", 
                        "small": "Edge to edge bite or Anterior crossbite"
                    },                     
                    type: "point_to_point_distance",
                    nodes: ["U1IncisalTip", "L1IncisalTip", "ant_occlusal_point", "post_occlusal_point"],
                    direction: true, //true being large OJ, false being negative OJ
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x , y: point.y + 15};
                    },
                    result: function(A, B, C, D){ 
                        // distance from point D to line passing C and normal to AB.

                        // var sp_point1 = getSpPoint(point(C), point(D), point(A));  //U6Mesial
                        // var sp_point2 = getSpPoint(point(C), point(D), point(B));  //L6Mesial              


                        // var lineData = [];
                        
                        // lineData.push({"coordinates": sp_point1});
                        // lineData.push({"coordinates": sp_point2});
                        
                        
                        // var cardinalLineFunction = d3.svg.line()
                        //                       .x(function(d) { return d.coordinates.x; })
                        //                       .y(function(d) { return d.coordinates.y; })
                        //                       .interpolate("cardinal");


                        // var selection = d3.select(".svg_analysis_tracing");                        
                        // var paths = selection.append("path")
                        //                       // .attr("id", line_id)  
                        //                       .attr("class", "analaysis_lines")
                        //                       .attr("d", cardinalLineFunction(lineData))
                        //                       .attr("stroke", "red")
                        //                       .attr("stroke-width", 1)
                        //                       .attr("fill", "none");    


                        var occlusal_plane_to_hor = angle_vectors({"coordinates":{"x":0,"y":0}},{"coordinates":{"x":100,"y":0}},point("post_occlusal_point"),point("ant_occlusal_point"))
                        
                        
                        return((rotate(point("U1IncisalTip").coordinates, point('S').coordinates, occlusal_plane_to_hor)[0]-rotate(point("L1IncisalTip").coordinates, point('S').coordinates, occlusal_plane_to_hor)[0])*mm_px_ratio).toFixed(2);


                        
                        // if(sp_point1.x > sp_point2.x){
                        //     return (pointToPointDistance(sp_point1,sp_point2)*mm_px_ratio).toFixed(2);
                        // }else{
                        //     return (-pointToPointDistance(sp_point1,sp_point2)*mm_px_ratio).toFixed(2);
                        // }
                        },      
                        
                },

    "Overbite": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: 2.00, sd: 2.00, unit: "mm"}, 

                            }
                        },
                    analysis: ["yehyun"],
                    meaning: {
                        "large": "Deep Overbite",
                        "normal": "Normal Overbite", 
                        "small": "Edge to edge bite or Anterior openbite"
                    },                     
                    type: "point_to_point_distance",
                    nodes: ["U1IncisalTip", "L1IncisalTip", "ant_occlusal_point", "post_occlusal_point"],
                    direction: true, //true being Class III, false being Class II
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x , y: point.y + 40};
                    },
                    result: function(A, B, C, D){ 

                        var occlusal_plane_to_hor = angle_vectors({"coordinates":{"x":0,"y":0}},{"coordinates":{"x":100,"y":0}},point("post_occlusal_point"),point("ant_occlusal_point"))
                        // console.log(occlusal_plane_to_hor);
                        // console.log(rotate(point("U1IncisalTip").coordinates, point('S').coordinates, occlusal_plane_to_hor)[1]);
                        // console.log(((rotate(point("U1IncisalTip"), point('S'), occlusal_plane_to_hor)[1]-rotate(point("L1IncisalTip"), point('S'), occlusal_plane_to_hor)[1])*mm_px_ratio).toFixed(2));
                        return ((rotate(point("U1IncisalTip").coordinates, point('S').coordinates, occlusal_plane_to_hor)[1]-rotate(point("L1IncisalTip").coordinates, point('S').coordinates, occlusal_plane_to_hor)[1])*mm_px_ratio).toFixed(2);
                        


                        // var lineData = [];
                        
                        // lineData.push({"coordinates": sp_point1});
                        // lineData.push({"coordinates": sp_point2});
                        
                        
                        // var cardinalLineFunction = d3.svg.line()
                        //                       .x(function(d) { return d.coordinates.x; })
                        //                       .y(function(d) { return d.coordinates.y; })
                        //                       .interpolate("cardinal");


                        // var selection = d3.select(".svg_analysis_tracing");                        
                        // var paths = selection.append("path")
                        //                       // .attr("id", line_id)  
                        //                       .attr("class", "analaysis_lines")
                        //                       .attr("d", cardinalLineFunction(lineData))
                        //                       .attr("stroke", "red")
                        //                       .attr("stroke-width", 1)
                        //                       .attr("fill", "none");    



                        
                        
                        },      
                        
                },


    "U1 to FH": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 113.80, sd: 6.37, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 113.80, sd: 6.37, unit: "deg"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 113.80, sd: 6.37, unit: "deg"}, 

                            }, 
                            female: {
                                adult: {mean: 113.80, sd: 6.37, unit: "deg"}, 

                            }
                        },
                    analysis: [""],
                    meaning: {
                        "large": "Proclined upper incisor",
                        "normal": "Normal upper incisor inclination",
                        "small": "Retroclined upper incisor"
                        },

                    type: "angle_4points",
                    nodes: ["U1RootTip", "U1IncisalTip", "Or", "Po"],
                    direction: true,
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x+35 , y: point.y-45};
                    },
                    result: function(A, B, C, D){                                
                        if(angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2)<0){
                            return (360+angle_vectors(point(A),point(B),point(C),point(D))).toFixed(2);
                        }else{
                            return angle_vectors(point(A),point(B),point(C),point(D)).toFixed(2);    
                        }

                        },
                },



    "Upper incisal display": { 
                    caucasian: {
                            male: { 
                                adult: {mean: 2.50, sd: 1.50, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: 2.50, sd: 1.50, unit: "mm"}, 

                            }
                        },
                    asian: {
                            male: { 
                                adult: {mean: 2.50, sd: 1.50, unit: "mm"}, 

                            }, 
                            female: {
                                adult: {mean: 2.50, sd: 1.50, unit: "mm"}, 

                            }
                        },
                    analysis: ["yehyun"],
                    meaning: {
                        "large": "Large incisal display(Gummy smile)",
                        "normal": "Normal incisal display", 
                        "small": "Small incisal display(Senile smile)"
                    },                     
                    type: "point_to_point_distance",
                    nodes: ["U1IncisalTip", "Stms", "Or", "Po"],
                    direction: true, //true being Class III, false being Class II
                    text_location: function(A, B, C, D){
                        var point = pointData[arrayObjectIndexOf(pointData, "U1IncisalTip", "landmark")].coordinates;                                
                        return {x: point.x , y: point.y + 60};
                    },
                    result: function(A, B, C, D){ 

                        var FH_to_hor = angle_vectors({"coordinates":{"x":0,"y":0}},{"coordinates":{"x":100,"y":0}},point("Po"),point("Or"))

                        return ((rotate(point("U1IncisalTip").coordinates, point('S').coordinates, FH_to_hor)[1]-rotate(point("Stms").coordinates, point('S').coordinates, FH_to_hor)[1])*mm_px_ratio).toFixed(2);
                        

                        },      
                        
                },






}   
    







     
        

        // function calc_method(){

        //     measurement_data[0].result = angle(point('Na'),point('S'),point('Ar')).toFixed(2); //Saddle angle
        //     measurement_data[1].result = angle(point('S'),point('Ar'),point('Go')).toFixed(2); //Articular angle
        //     measurement_data[2].result = angle(point('Ar'),point('Go'),point('Me')).toFixed(2); // Gonial angle
        //     measurement_data[3].result = (Number(measurement_data[0].result) + Number(measurement_data[1].result) + Number(measurement_data[2].result)).toFixed(2); // Bjork sum
        //     measurement_data[4].result = (pointToPointDistance(point("Na"), point("S"))*mm_px_ratio).toFixed(2); //Na-S
        //     // measurement_data[5].result = (pointToPointDistance(point("S"), point("Ar"))*radioRealRatio).toFixed(2); //Post. cra. base
        //     measurement_data[6].result = angle(point('Ar'),point('Go'),point('Na')).toFixed(2); // upper gonial angle
        //     measurement_data[7].result = angle(point('Na'),point('Go'),point('Me')).toFixed(2); // lower gonial angle
        //     // measurement_data[8].result = (pointToPointDistance(point("Ar"), point("Go"))*radioRealRatio).toFixed(2); //Ramus height
        //     // measurement_data[9].result = (pointToPointDistance(point("Go"), point("Gn"))*radioRealRatio).toFixed(2); // Mn. body length
        //     measurement_data[10].result = (Number(measurement_data[9].result)/Number(measurement_data[4].result)).toFixed(2); // Body to ACB
        //     measurement_data[11].result = angle(point('S'),point('Na'),point('A')).toFixed(2); //SNA
        //     measurement_data[12].result = angle(point('S'),point('Na'),point('B')).toFixed(2); //SNB 
        //     measurement_data[13].result = (Number(measurement_data[11].result)-Number(measurement_data[12].result)).toFixed(2); //ANB
        //     measurement_data[14].result = angle_vectors(point('S').coordinates,point('Na').coordinates,point('Go').coordinates,point('Me').coordinates).toFixed(2); //Sn-GoMe
        //     // measurement_data[15].result = (pointToPointDistance(point("Na"), point("Go"))*radioRealRatio).toFixed(2); //Facial depth
        //     // measurement_data[16].result = (pointToPointDistance(point("S"), point("Gn"))*radioRealRatio).toFixed(2); //Facial length on Y-axis
        //     measurement_data[17].result = angle_vectors(point('S').coordinates,point('Na').coordinates,point('S').coordinates,point('Gn').coordinates).toFixed(2); //Y-axis to SN
        //     measurement_data[18].result = angle_vectors(point('Pt').coordinates,point('Gn').coordinates,point('Na').coordinates,point('Ba').coordinates).toFixed(2); //Facial axis (ricketts)
        //     // measurement_data[19].result = (pointToPointDistance(point("S"), point("Go"))*radioRealRatio).toFixed(2); //PFH
        //     // measurement_data[20].result = (pointToPointDistance(point("Na"), point("Me"))*radioRealRatio).toFixed(2); //AFH
        //     measurement_data[21].result = ((Number(measurement_data[19].result)/Number(measurement_data[20].result))*100).toFixed(2); //FHR
        //     measurement_data[22].result = angle_vectors(point('Pog').coordinates,point('Na').coordinates,point('Po').coordinates,point('Or').coordinates).toFixed(2); //Facial plane angle
        //     measurement_data[23].result = angle_vectors(point('Na').coordinates,point('A').coordinates,point('A').coordinates,point('Pog').coordinates).toFixed(2); //Facial convexity
        //     measurement_data[24].result = angle_vectors(point('Po').coordinates,point('Or').coordinates,point('CorpusLeft').coordinates,point('Me').coordinates).toFixed(2); //FMA
        //     measurement_data[25].result = angle_vectors(point('L1RootTip').coordinates,point('L1IncisalTip').coordinates,point('Po').coordinates,point('Or').coordinates).toFixed(2); //FMIA
        //     measurement_data[26].result = angle_vectors(point('Me').coordinates,point('CorpusLeft').coordinates,point('L1RootTip').coordinates,point('L1IncisalTip').coordinates).toFixed(2); //IMPA
        //     // measurement_data[27].result = angle_vectors(point('Po'),point('Or'),posterior_occlusal_point,anterior_occlusal_point).toFixed(2); //FH to occl
        //     // measurement_data[28].result = angle_vectors(posterior_occlusal_point,anterior_occlusal_point,point('Go'),point('Me')).toFixed(2); //Occ to GoMe
        //     measurement_data[29].result = angle_vectors(point('L1RootTip'),point('L1IncisalTip'),point('U1RootTip'),point('U1IncisalTip')).toFixed(2); //Interincisal angle
        //     measurement_data[30].result = angle_vectors(point('U1IncisalTip'),point('U1RootTip'),point('Po'),point('Or')).toFixed(2); //U1 to FH
        //     measurement_data[31].result = angle_vectors(point('U1RootTip'),point('U1IncisalTip'),point('Na'),point('S')).toFixed(2); //U1 to SN
        //     // measurement_data[32].result = (pointLineDistance(point('U1IncisalTip'),point('Na'),point('Pog'))*radioRealRatio).toFixed(2); //U1 to facial plane
        //     // measurement_data[33].result = (pointLineDistance(point('L1IncisalTip'),point('Me'),point('CorpusLeft'))*radioRealRatio).toFixed(2); //L1 to mandibular plane
        //     // measurement_data[34].result = (pointLineDistance(point('L1IncisalTip'),point('Na'),point('Pog'))*radioRealRatio).toFixed(2); //L1 to facial plane
        //     // measurement_data[35].result = (pointToRickettsELine(point('Prn'),point('Soft-tissue-Pog'),point('Upper-lip'))*radioRealRatio).toFixed(2); //Upper lip to E-plane
        //     // measurement_data[36].result = (pointToRickettsELine(point('Prn'),point('Soft-tissue-Pog'),point('Lower-lip'))*radioRealRatio).toFixed(2); //Upper lip to E-plane
        //     measurement_data[37].result = angle_vectors(point('U1IncisalTip'),point('U1RootTip'),point('A'),point('Na')).toFixed(2); //U1 to NA (angular)
        //     // measurement_data[38].result = (pointLineDistance(point('U1IncisalTip'),point('Na'),point('A'))*radioRealRatio).toFixed(2); //U1 to NA (linear)
        //     measurement_data[39].result = angle_vectors(point('B'),point('Na'),point('L1RootTip'),point('L1IncisalTip')).toFixed(2); //L1 to NB (angular)
        //     // measurement_data[40].result = (pointLineDistance(point('L1IncisalTip'),point('Na'),point('B'))*radioRealRatio).toFixed(2); //U1 to NB (linear)
        //     // measurement_data[41].result = (pointLineDistance(point('L1IncisalTip'),point('A'),point('Pog'))*radioRealRatio).toFixed(2); //U1 to A-Pog
        //     // measurement_data[42].result = (pointLineDistance(point('Pog'),point('Na'),point('B'))*radioRealRatio).toFixed(2); //U1 to A-Pog
        //     // measurement_data[43].result = ((point('A').x-point('Na').x)*radioRealRatio).toFixed(2); //A to N-Perp
        //     // measurement_data[44].result = ((point('Pog').x-point('Na').x)*radioRealRatio).toFixed(2); //Pog to N-Perp
        //     measurement_data[45].result = angle_vectors(point('Me'),point('CorpusLeft'),point('B'),point('A')).toFixed(2); //AB to Mand. plane 
        //     measurement_data[46].result = angle_vectors(point('Po'),point('Or'),point('PNS'),point('ANS')).toFixed(2); //palatal plane angle
        //     measurement_data[47].result = (Number(measurement_data[45].result)+Number(measurement_data[46].result)).toFixed(2); //ODI
        //     measurement_data[48].result = angle_vectors(point('B'),point('A'),point('PNS'),point('ANS')).toFixed(2); //APDI
        //     measurement_data[49].result = angle_vectors(point('B').coordinates,point('A').coordinates,point('Pog').coordinates,point('Na').coordinates).toFixed(2); //AB plane angle to Facial plane angle
        //     measurement_data[50].result = (Number(measurement_data[47].result)+Number(measurement_data[48].result)).toFixed(2); //Combination factor
        //     // measurement_data[51].result = ((rotate(point('A'), point('S'), occlusal_plane_to_hor)[0]-rotate(point('B'), point('S'), occlusal_plane_to_hor)[0])*radioRealRatio).toFixed(2);//wits appraisal 
        //     // measurement_data[52].result = angle(point('Columella'),point('Subnasale'),point('Labrale-superius')).toFixed(2); //Nasolabial angle
        //     // measurement_data[53].result = angle(posterior_occlusal_point,point('U1IncisalTip'),point('U1RootTip')).toFixed(2); //U1-UOP
        //     // measurement_data[54].result = angle(posterior_occlusal_point,point('L1IncisalTip'),point('L1RootTip')).toFixed(2); //L1-OP
        //     // measurement_data[55].result = ((point('U1IncisalTip').y-point('L1IncisalTip').y)*radioRealRatio).toFixed(2); // OB
        //     // measurement_data[56].result = ((point('U1IncisalTip').x-point('L1IncisalTip').x)*radioRealRatio).toFixed(2); // OJ
        //     measurement_data[57].result = angle_vectors(point('Po').coordinates,point('Or').coordinates,point('S').coordinates,point('Gn').coordinates).toFixed(2); //Y-axis to FH
        //     }


       // var chart_data = [
          
        //   {name: "sd_minus_1", d0: 0, "Saddle angle (deg)": 125.45-5.32, "Articular angle (deg)": 147.68-5.25, "Gonial angle (deg)": 124.31-5.36, "Bjork sum (deg)": 397.16-6.63, "SNA": -5, d5: 0},
        //   {name: "sd_plus_1", d0: 0, "Saddle angle (deg)": 125.45+5.32, "Articular angle (deg)": 147.68+5.25, "Gonial angle (deg)": 124.31+5.36, "Bjork sum (deg)": 397.16+6.63, "SNA": 5, d5: 0},
        //   {name: "zero", d0: 0, "Saddle angle (deg)": 125.45, "Articular angle (deg)": 147.68, "Gonial angle (deg)": 124.31, "Bjork sum (deg)": 397.16, "SNA": 0, d5: 0},
        //   {name: "patient", d0: 0, "Saddle angle (deg)": 127.32, "Articular angle (deg)": 144.68, "Gonial angle (deg)": 129.32, "Bjork sum (deg)": 400.63, "SNA": 2, d5: 0},
          
       // ];
