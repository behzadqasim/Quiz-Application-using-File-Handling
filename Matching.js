class Matching extends Question {
    matchingQuestions = null;
    allorNothing = null;
    constructor(qText, matchingQuestions, allorNothing, p) {
        super(qText, p);
        this.matchingQuestions = matchingQuestions;
        this.allorNothing = allorNothing;
    }
    toString = function() {
        console.log("Matching");
        console.log("Point:" + this.get_points());
        console.log("\nAll or Nothing: " + this.allorNothing);
        console.log("questionText\n" + this.get_questionText());
    }
}