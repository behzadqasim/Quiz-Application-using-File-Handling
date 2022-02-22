class Quiz extends Question {
    qestions = [];
    constructor(qList) {
        this.qestions = qList;
    }
    addQuestion = function(Question) {
        this.qestions.push(Question);
    }
    merge = function(Quiz) {
        return Quiz;
    }
    getNumQuestions = function() {
        return qestions.length;
    }
    getTotalPoints = function() {
        return qestions.length;
    }
}