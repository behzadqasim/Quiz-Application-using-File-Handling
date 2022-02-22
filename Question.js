class Question {
    questionText = "";
    points = 0;
    constructor(questionText, points) {
        this.questionText = questionText;
        this.points = points;
    }
    qText = function(String) {
        if (String == null || String == "") {
            console.log("Error: Empty question text provided. Aborting creation of Question");
        } else {
            this.questionText = String;
        }
    }
    p = function(int) {
        if (int > 0) {
            this.points = int;
        } else {
            console.log("Error: Invalid points awarded to question. Aborting creation of Question");
        }
    }
    toString = function() {
        console.log("Question: " + this.questionText);
    }
    set_questionText = function(questionText) {
        if (questionText == null || questionText == "") {
            console.log("Error: Empty question text provided. Aborting creation of Question");
        } else {
            this.questionText = questionText;
        }
    }
    get_questionText = function() {
        return this.questionText;
    }
    set_points = function(points) {
        if (points > 0) {
            this.points = points;
        } else {
            console.log("Error: Invalid points awarded to question. Aborting creation of Question");
        }
    }
    get_points = function() {
        return this.points;
    }
}