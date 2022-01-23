var SNA = 81.2;
 // var SNA = 94.2;
var SNB = 60.6;
var AToNPerpFH = 1.10;

var race = 'asian';
var gender = 'male';
var type = 'adult';

//diagnose(race, gender, type);

// measurements the maxilla state depends on
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

// just using pre calculated petient data, instead of calculate it by points
var calculatedValues = {
    SNA: SNA,
    SNB: SNB,
    'A to N-Perp(FH)': AToNPerpFH,
};

// get mean and standard deviation values for measurements by patient's race, gender
var diagnosis_data = getDiagnosesData(race, gender, type);

var maxilla = updateDiagnosisText2(calculatedValues, sk_mx_ap_array, diagnosis_data, 2, 3, 4, "Protrusion", "Normal", "Retrusion");