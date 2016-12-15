var questionOne = 
	{
		'questionNumber': 1,
		'timeRemaining' : 30,
		'questionText' : "Which West Coast artist was NOT on Death Row Records?",
		'potentialAnswers' :
		[
		'Tupac/2Pac',
		'Dr. Dre',
		'E-40',
		'Snoop Dogg'
		],

		"correctAnswer" : '<b>E-40</b>. Pictured right, E-40 has never been on Death Row Records',

		'image': "../assets/images/E40.jpg",
	}

var questionTwo =
	{
		'questionNumber': 2,
		'timeRemaining': 30,
		'questionText': "What year did Nas' album Illmatic come out?",
		'potentialAnswers': 
		[
		'1992',
		'1993',
		'1994',
		'1995'
		],

		"correctAnswer" : '1994',

		'image': "..assets/images/Illmatic.jpg",


	}

var questionThree =
	{
		'questionNumber': 3,
		'timeRemaining': 30,
		'questionText': "Who is not in the Wu-Tang Clan?",
		'potentialAnswers' : 
		[
		'Method Man',
		'RZA',
		'Raekwon',
		'Red Man'
		],

		"correctAnswer" : '<b>Red Man</b>. Despite being a frequent collaborator, Red Man is not an official Wu-Tang Clan member.',

		'image': "..assets/images/wutang.jpg",
	}
	
var questionFour = 
	{
		'questionNumber' : 4,
		'timeRemaining': 30,
		'questionText': "Where was Slip-N-Slide Records founded?",
		'potentialAnswers': 
		[
		'New York City',
		'Chicago',
		'Miami',
		'New Orleans'
		],

		"correctAnswer" : '<b>Miami</b>. Slip-N-Slide was one of the more prominent Southern labels in the 90s',

		'image': "..assets/images/SlipNSlide.gif",
	}

var questionFive =
	{
		'questionNumber' : 5,
		'timeRemaining' : 30,
		'questionText' : "Roc-A-Fella Records was started by Jay-Z, Dame Dash, and...",
		'potentialAnswers' :
		[
		'Sean "Puffy" Combs',
		'Jas Prince',
		'Kareem "Biggs" Burke',
		'Ted Lucas'
		]
	}

var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];
console.log(questionArray.length);


var question;
var answer = document.getElementById("answerOptions");
var counter = 30;
var $questionDisplay = $(".question-panel");
var questionIndex = 0;
var button = document.getElementById("button1");
var answerChoice = document.getElementById("answerChoice");



$(".start-button").on("click", function () {
	displayQuestion();
	button.style.display = "none";

})

function displayQuestion () {
	console.log(true);
	var startButton = $('<button>');
	var currentQuestion = questionArray[questionIndex];
	// adjusting button
	$questionDisplay.html (currentQuestion.questionText);

	for (var i=0; i < currentQuestion.potentialAnswers.length; i++){
		var testdiv = document.createElement("DIV");
		testdiv.id = 'answerChoice';
		
		
		//$questionDisplay.append(currentQuestion.potentialAnswers[i]);
		testdiv.append(currentQuestion.potentialAnswers[i]);
		answer.append(testdiv);
	}


	
}



	

	
	
	

