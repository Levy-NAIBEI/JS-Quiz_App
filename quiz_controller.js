function Question (questions){
	this.score = 0;
	this.questions=questions;
	this.questionIndex=0;
}

Question.prototype.getQuestionIndex = function(){
	return this.questions[this.questionIndex]
}

Question.prototype.isEnded = function(){
	return this.questions.length === this.questionIndex;
}

Question.prototype.guess = function(answer){
	if(this.getQuestionIndex().correctAnswer(answer)){
		this.score++;
	}

	this.questionIndex++;

}
