class FillInBlank extends Question {
    constructor(qText, p, numBanks, correctAnswer) {
        super(qText, p);
        this.numBanks = numBanks;
        this.correctAnswer = correctAnswer;
    }
    constructor(qText, p, answer) {
        super(qText, p);
        this.answer = answer;
    }
    set_questionText = function(qText) {
        this.set_questionText(qText);
    }
    set_point = function(p) {
        this.set_poin
    }

    toString = function() {
        console.log("Fill in Blank");
        console.log("Point:" + this.get_points());
        console.log("questionText\n" + this.get_questionText());
    }

    set correctAnswer(arr) {
        this.numBanks = arr;
    }
    get correctAnswer() {
        return this.numBanks;
    }
}