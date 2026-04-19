const scores = [45, 67, 89, 90, 33, 76, 58, 100, 62];

function analyze(scores) {
    let grades = [];
    let passedCount = 0;
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];

        sum += score;

        if (score >= 90) {
            grades.push("A");
        } else if (score >= 80) {
            grades.push("B");
        } else if (score >= 70) {
            grades.push("C");
        } else if (score >= 60) {
            grades.push("D");
        } else {
            grades.push("F");
        }

        if (score >= 60) {
            passedCount++;
        }
    }

    let average = sum / scores.length;

    return {
        grades,
        passedCount,
        average
    };
}

console.log(analyze(scores));