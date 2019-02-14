const matchEmp = function (newEmp, empList) {
    const compatibility = [];
    for (let i = 0; i < empList.length; i++) {
        const scoreDiffArr = [];
        let scoreDiff;
        for (let j = 0; j < empList[i].scores.length; j++) {
            const diff = Math.abs(newEmp.scores[j] - empList[i].scores[j]);
            if (diff > 0) {
                scoreDiffArr.push(diff);
            };
        };
        const sum = scoreDiffArr.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);
        if (sum > 0) {
            scoreDiff = sum / scoreDiffArr.length;
        } else {
            scoreDiff = 0;
        };
        compatibility.push(scoreDiff);
    };
    Array.min = function(compatibility){
        return Math.min.apply(Math, compatibility);
    };
    const lowScore = Array.min(compatibility);
    const matchIndex = compatibility.indexOf(lowScore);
    return empList[matchIndex];
};

module.exports = {
    matchEmp: matchEmp
};