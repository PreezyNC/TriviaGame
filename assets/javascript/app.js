var firstQuestion = 
	{
		'questionNumber': 1,
		'timeRemaining' : 30,
		'questionScript' : "Which West Coast artist was NOT on Death Row Records?",
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

var secondQuestion =
	{
		'questionNumber': 2,
		'timeRemaining': 30,
		'questionScript': "What year did Nas' album Illmatic come out?",
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

var thirdQuestion =
	{
		'questionNumber': 3,
		'timeRemaining': 30,
		'questionScript': "Who is not in the Wu-Tang Clan?",
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
	
var forthQuestion = 
	{
		'questionNumber' : 4,
		'timeRemaining': 30,
		'questionScript': "Where was Slip-N-Slide Records founded?",
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

var fifthQuestion =
	{
		'questionNumber' : 5,
		'timeRemaining' : 30,
		'questionScript' : "Roc-A-Fella Records was started by Jay-Z, Dame Dash, and...",
		'potentialAnswers' :
		[
		'Sean "Puffy" Combs',
		'Jas Prince',
		'Kareem "Biggs" Burke',
		'Ted Lucas'
		]
	}

var myArray = [firstQuestion, secondQuestion, thirdQuestion,forthQuestion, fifthQuestion];
console.log(myArray.length);
console.log(myArray[2]);
//Set the question to an var that can go anywhere.  Make an function that will adjus the falue of this array. 
var question;
var answer; 
var userInput;
// counter for round Timer  
var counter = 20; 
//global interval ID
var intervalID;
//add my quote to my page every time 
function displayQuestion(){
	console.log(true);
	var startDiv = $('<div>');
		//first adjust the button 
		startDiv.html(function(n){
			return "<h1> "+question.questionScript +"</h1>";
		})
		console.log(question.questionScript);
		startDiv.addClass('col-md-12 marker');
		$('#start').append(startDiv);
		

}
function render(){
	var startDiv = $('#start');
		//first adjust the button 
		startDiv.html(
			"<h1> "+question.questionScript +"</h1>"
		);
	var length = (question.potentialAnswers.length);

	for (var i = 0; i < length ; i ++){
					var btn = $("<button>");
					btn.addClass('col-md-6  temp btn-primary question'+ i);
					btn.attr('data-let', question.potentialAnswers[i]);
					btn.html(question.potentialAnswers[i]);
					$("#start").append(btn);
		}
}// Close Render
//addVideo takes information object Video URL and turns it into a new video 
function changeQuestion(){
	if(myArray.length >0){
		console.log(myArray.length);
		var number = Math.floor(Math.random() * myArray.length);
		question = myArray[number];
		myArray.splice(number, 1);
		console.log(number.length);
		console.log(myArray[number]);
	
		return question;
	}else{
		alert( "The game is over!");
	}
	
}

function displayTimeRunsOut(){
		$('#start').empty();
		displayQuestion(question);
}
function displayImage(){
	var gifUrl = question.image;
	console.log(gifUrl);
	var image = $("<img>");
	image.addClass('img-responsive image')
	image.attr('src', gifUrl);
	$('.marker').append(image);

}
function displayWrongAnswer(){
	var div = $("<div>");
	div.addClass("col-md-12");
	div.html('<h2>' + userInput + " is incorrect! The correctAnswer was " + answer + "! </h2>");
	$('.image').append(div);

	setTimeout(nextQuestion, 8000);

}
function nextQuestion (){
	//call change question to pick a new question
	$('#start').empty();
	changeQuestion();
	//call render to render that question 
	render();

}
$(document).ready(function(){

	$('#startGame').on('click',function(){
		// the the question for this round 
		question = changeQuestion();
		console.log(question);
		displayQuestion(question);
		render(question);
		//Set and display game 
		intervalID = setInterval(function(){
			//reduce counter 
			counter --; 
			//display new counter value 
			$('#timer').html("<h3>" + counter	+" </h2");
			// if = user inform user that they have lost and call a function that will pick a new question. 
			if(counter === 0 ){
				console.log('clearing interval', intervalID);
				displayTimeRunsOut();
				clearInterval(intervalID);
			}
		}, 1000)
		console.log('on start', intervalID);

	})//close Click

	$(document).on('click',".temp", function(){

		// Hold empty timer area
		console.log(question.questionScript);
		$('#timer').html('');
		// clear the timer 
		clearInterval(intervalID);
		//Hold the correct answer
		answer = question.correctAnswer;
		console.log(answer + " answer");
		//Hold the users Answer
		userInput	= $(this).data("let");
		console.log(userInput);
		// Empty the Start Div 
		$('#start').empty();

		displayQuestion(question);
		// Resent the information in the Div
		/*var newDiv = $('<div>');
		newDiv.addClass("col-md-12 result");
		console.log(question.questionScript);
		newDiv.html(function(n){
			return "<h1> "+question.questionScript +"</h1>";
		});
				console.log(newDiv);
		$('#start').append(newDiv);*/
		// Set image.  not dependent on correct answer 
		// Sets the text informing the player whether they have won or lost 
		console.log(userInput);
		console.log(userInput ===answer);
		console.log(answer);
		if (userInput === answer){
			displayImage();
			console.log("got here");
			var div = $("<div>");
			div.addClass("col-md-12");
			console.log(answer);
			div.html('<h2>'+answer + " is correct! you have won this round.</h2>");
			console.log(div);
			$("#start").append(div); 
			setTimeout(nextQuestion, 8000);

		}else{
			displayImage();
			displayWrongAnswer();
			console.log('wrong')
			}

		//Will empty the Temp
		})// close 	

	
})