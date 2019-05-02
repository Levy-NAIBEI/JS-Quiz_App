document.getElementById('date').innerHTML = new Date().toDateString();

// constructor
function Quiz (text, choices, answer){
	this.text=text;
	this.choices=choices;
	this.answer=answer;
}

Quiz.prototype.correctAnswer = function(choices){
	return choices === this.answer;
}