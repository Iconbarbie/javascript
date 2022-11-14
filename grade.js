// A-> 80 - 100
// B-> 60 - 79
// C-> 40 - 59
// D-> 20 - 39
// E->0 - 19

function gradeCalc(score, totalscore) {
    let percent = (score / totalscore) *100
     let lettergrade = ""

    if (percent >= 80) {
        lettergrade = "A";
    } else if (percent >= 60) {
        lettergrade = "B";
    } else if (percent >= 40) {
        lettergrade = "C";
    } else if (percent >= 20) {
        lettergrade = "D";
    } else {
        lettergrade = "E";
    }

    return `You got grade ${lettergrade} which is ${percent}%`;
}

let scoreNum1 = gradeCalc(11, 20);
console.log(scoreNum1);
