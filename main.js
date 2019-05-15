function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else {
		//show questions
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		// show choices and loop through them
		var choices = quiz.getQuestionIndex().choices;
		for (var i=0; i < choices.length; i++){
			var element=document.getElementById('choice'+i);
			element.innerHTML = choices[i];
			guess('but'+i, choices[i]);
		}

		showProgress();
	}
};

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
};

function showScores(){
	var quizOverHtml = "<h1 id='result'>Results</h1>";
	quizOverHtml += "<h2 id='score'> Your score: " + quiz.score + " out-of " + 
					quiz.questions.length + " </h2>" +
					"<h3 class='retry'>Reload page </h3>";
	
	var element = document.getElementById('quiz');
	element.innerHTML = quizOverHtml;
};

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "Question " +
	currentQuestionNumber + " of " + quiz.questions.length;
}

var questions = [
	new Quiz('Which one is not a JS library?',
		['AngularJs', 'Django', 'jQuery', 'ReactJs'], 'Django'),

	new Quiz('Which of the following is a cloud platform?',
		['Node.js', 'Amazon', 'nginx', 'gunicorn'], 'Amazon'),

	new Quiz('Which one is a python microframework?',
		['AngularJs', 'Django', 'Flask', 'Tomcat'], 'Flask'),

	new Quiz('Which one is not a Responsive Design technique?',
		['Media Query', 'Grid-View', 'viewport', 'box-shadow'], 'box-shadow'),

	new Quiz('Which of the following is not for web hosting?',
		['gh-pages', 'Digital ocean', 'Amazon', 'gunicorn'], 'gunicorn'),

	new Quiz('Which one is not a back-end language?',
		['PHP', 'Python', 'Ruby', 'HTML'], 'HTML')
];


var quiz = new Question(questions);

populate();