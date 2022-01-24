// calculated patient values for testing
var SNA = 81.2;
var SNB = 60.6;
var AToNPerpFH = 1.10;
var BtoNPerpFH = -3.50;

// patient test data
var race = 'asian';
var gender = 'male';
var type = 'adult';

// just using pre calculated patient data, instead of calculate it by points
var calculatedValues = {
    SNA: SNA,
    SNB: SNB,
    'A to N-Perp(FH)': AToNPerpFH,
    'B to N-Perp(FH)': BtoNPerpFH,
};

// get mean and standard deviation values for measurements by patient's race, gender
var diagnosis_data = getDiagnosesData(race, gender, type);
var severityLabels = ['', '(mild)', '(moderate)', '(severe)'];
var cssLabels = ['normal', 'mild', 'moderate', 'severe'];


// data to calculate maxilla state
var assessmentsConfig = [
    // Maxilla
    {
        key:    'maxilla',
        title:  'Maxilla',
        // array of measurements the maxilla state depends on
        measurementsArray: [
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
        ],
        // threshold to decide what kind of deviation is: normal state, mild, moderate or severe deviation
        thresholds: [
            2,  // {deviation points} < 2       then normal
            3,  // 2 <= {deviation points} < 3  then mild deviation
            4,  // 3 <= {deviation points} < 4  then moderate deviation
                // 4 <= {deviation points}      then severe deviation
        ],
        deviationLabels:  [
            "Protrusion",   // maxilla deviation to lower values
            "Normal",       // maxilla normal state
            "Retrusion",    // maxilla deviation to upper values
        ]
    },
    // Mandible
    {
        key:    'mandible',
        title:  'Mandible',
        // array of measurements the maxilla state depends on
        measurementsArray: [
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
        ],
        thresholds: [2,3,4],
        deviationLabels:  [
            "Protrusion",   // maxilla deviation to lower values
            "Normal",       // maxilla normal state
            "Retrusion",    // maxilla deviation to upper values
        ]
    }
];

var assessmentsStates = {};
for (var i = 0; i < assessmentsConfig.length; i++) {
    var item = assessmentsConfig[i];
    assessmentsStates[item.key] = updateDiagnosisText2(
        calculatedValues,
        diagnosis_data,
        item.measurementsArray,
        item.thresholds,
        item.deviationLabels,
        severityLabels,
        cssLabels
    );
}
console.log('assessmentsStates', assessmentsStates);