class MultipleChoice extends Question {
    Choice = null;
    constructor(qText, choiceText, p, answer) {
        super(qText, p);
        this.Choice = choiceText;
        this.answer = answer;
    }
    toString = function() {
        console.log("Multiple Choice:");
        console.log("Point:" + this.get_points());
        console.log("questionText\n" + this.get_questionText());
    }

    set correctAnswer(arr) {
        this.answer = arr;
    }
    get correctAnswer() {
        return this.answer;
    }
}