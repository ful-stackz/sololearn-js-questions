// This is where the questions are kept
const Challenges = [
	{
		question: `
		What is the output of this code?<br>
		<code>
		var nb = [ 8, 9, 24, 35, 40, 54 ];<br>
		alert(nb[ 1 ] + nb[ 5 ]);
		</code>`,
		time: 30,
		type: 'single',
		wrong: [
			'48', '6', '840'
		],
		correct: '63',
		explanation: `
		Arrays in JavaScript are 0 based. Therefore, nb[1] 
		is the second element of the array (9) and nb[5] 
		is the sixth element of the array (54). Finally, 
		their sum is 9 + 54 = 63.`
	},
	{
		question: `
		Is it possible to nest functions in JavaScript?`,
		time: 30,
		type: 'single',
		wrong: [
			'No'
		],
		correct: 'Yes',
		explanation: ''
	},
	{
		question: `
		What is the output of the following code?<br>
		<code>
		function setName(obj) {<br>
		&nbsp;&nbsp;obj.name = "a";<br>
		&nbsp;&nbsp;obj = {};<br>
		&nbsp;&nbsp;obj.name = "b";<br>
		}<br>
		var person = {};<br>
		setName(person);<br>
		alert(person.name);
		</code>`,
		time: 30,
		type: 'single',
		wrong: ['b'],
		correct: 'a',
		explanation: ''
	},
	{
		question: `
		What is the output of this code?<br>
		<code>
		var count=0;<br>
		for (var i=0; i<=6; i++) {<br>
		&nbsp;&nbsp;if(i==3) {<br>
		&nbsp;&nbsp;&nbsp;&nbsp;i=5;<br>
		&nbsp;&nbsp;&nbsp;&nbsp;continue;<br>
		&nbsp;&nbsp;}<br>
		&nbsp;&nbsp;count++;<br>
		}<br>
		document.write(count);
		</code>`,
		time: 30,
		type: 'single',
		wrong: ['5', '3', '6'],
		correct: '4',
		explanation: 'On the 4th iteration of the for loop, the variable i = 3; this results in the if statement condition being true and the code inside it to execute. Inside the if statement i as assigned the value 5, then the continue statement skips the rest of the code for this iteration, then the third statement of the for loop is executed, so the value of i in the end of the iteration is actually 6. On the next iteration the value of count is incremented to 4 and that is the end of the for loop.'
	},
	{
		question: `
			What will be alerted?<br>
			<code>
			function func(a, b) {<br>
			&nbsp;&nbsp;return a**b / b;<br>
			}<br>
			alert(func(10, 2));</code>`,
		time: 30,
		type: 'single',
		wrong: ['100', '5', '20'],
		correct: '50',
		explanation: `a**b = 10 to the power of 2 = 100; a**b / b = 100 / 2 = 50`
	},
	{
		question: `
		What is the output of this code?<br>
		<code>
		var i=0;<br>
		while (i<=10) {<br>
		&nbsp;&nbsp;if(i%2!==0) {<br>
		&nbsp;&nbsp;&nbsp;&nbsp;document.write(i);<br>
		&nbsp;&nbsp;}<br>
		&nbsp;&nbsp;i++;<br>
		}</code>`,
		time: 30,
		type: 'single',
		wrong: ['1357911', '013579', '3579'],
		correct: '13579',
		explanation: `This code outputs all the odd numbers from 0 to 10 and those are 1, 3, 5, 7 and 9`
	},
	{
		question: `What is the output of this code?<br>
		<code>
		document.write(name, printName());<br>
		var name = "Lawrence";<br>
		function printName() {<br>
		&nbsp;&nbsp;return "John Doe";<br>
		}
		</code>`,
		wrong: ["undefined John Doe","Lawrence John Doe"],
		correct: "John Doe",
		explanation: ``,
		time: 30,
		type: 'single'
	},
	{
		question: `How many numbers will the following code output?<br>
		<code>
		for (i=0; i<10; i++) {<br>
		&nbsp;&nbsp;if (i==5) {;<br>
		&nbsp;&nbsp;&nbsp;&nbsp;continue;<br>
		&nbsp;&nbsp;}<br>
		&nbsp;&nbsp;document.write(i);<br>
		}
		</code>`,
		wrong: ["10","8","11"],
		correct: "9",
		explanation: ``,
		time: 10,
		type: 'single'
	},
	{
		question: `What is the output of this code?<br>
		<code>
		a();<br>
		function a() {;<br>
		&nbsp;&nbsp;console.log("b");<br>
		}
		</code>`,
		wrong: ["Error","Undefined"],
		correct: "b",
		explanation: ``,
		time: 30,
		type: 'single'
	},
	{
		question: `Which tag is used for JavaScript code in HTML?<br>`,
		wrong: ["<js>","<JavaScript>","<code>"],
		correct: "<script>",
		explanation: ``,
		time: 30,
		type: 'single'
	},
	{
		question: `What is the output of this code if the HTML contains just one div element?<br>
		<code>
		var a=document.getElementsByTagName("div");<br>
		a[1].innerHTML = "JS";
		</code>`,
		wrong: ["JS","div"],
		correct: "error",
		explanation: ``,
		time: 30,
		type: 'single'
	},
	{
		question: `What is the output of this code?<br>
		<code>
		var a = [9, 1, 1, 0];<br>
		var c = [];<br>
		c[0] = a.slice();<br>
		a[0] = 0;<br>
		alert(c[0]);
		</code>`,
		wrong: ["undefined","0","0,1,1,0"],
		correct: "9,1,1,0",
		explanation: ``,
		time: 30,
		type: 'single'
	},
	{
		question: `What is the output of this code?<br>
		<code>
		var a = (1 === "1" ? false : true);<br>
		alert(a);
		</code>`,
		wrong: ["false"],
		correct: "\\true",
		explanation: ``,
		time: 30,
		type: 'single'
	},
	{
		question: `What is the output of this code?<br>
		<code>
		alert(parseInt('I am 20 years old'));
		</code>`,
		type: 'input',
		correct: '20',
		explanation: `parseInt checks the string and extracts the integer value, which is 20. Then alert prints it on the screen.`,
		time: 15
	},
	{
		question: `What is the output of this code?<br>
		<code>
		var a = 5;<br>
		var b = 2+3;<br>
		if (a===b) {<br>
		&nbsp;&nbsp;alert(3);<br>
		} else if(a==b) {<br>
		&nbsp;&nbsp;alert(2);<br>
		} else if (a==b) {<br>
		&nbsp;&nbsp;alert(1);<br>
		} else {<br>
		&nbsp;&nbsp;alert(0);<br>
		}
		</code>`,
		type: 'input',
		correct: '3',
		explanation: `Variable a is of type Number and has a value of 5. Variable b is of type Number and has a value of 5. Therefore the first conditional statement (a===b) is true and the output is 3.`,
		time: 25
	},
	{
		question: `What is the output of this code?<br>
		<code>
		var arr = [2, 3, 8, 5, 9, 1];<br>
		var i, j=2;<br>
		for(i=0; i+j < arr.length; i++) {<br>
		&nbsp;&nbsp;arr[i+j] = arr[i];<br>
		}<br>
		alert(arr[2]);
		</code>`,
		type: 'input',
		correct: '2',
		explanation: `In the first iteration of the for loop i+j = 0+2 = 2, so the item in the array arr with index 2 is assigned the value of arr[i] = arr[0] = 2. Later in the alert statement, arr[2] is called, which we already know has the value 2.`,
		time: 25
	},
	{
		question: `What is the output of this code?<br>
		<code>
		var obj1 = {<br>
		&nbsp;&nbsp;x : 1,<br>
		&nbsp;&nbsp;f : function() {<br>
		&nbsp;&nbsp;&nbsp;&nbsp;this.x = 2;<br>
		&nbsp;&nbsp;},<br>
		};<br>
		var obj2 = {<br>
		&nbsp;&nbsp;x : obj1.x,<br>
		}<br>
		obj1.f();<br>
		alert(obj2.x);
		</code>`,
		type: 'input',
		correct: '1',
		explanation: `When obj2 is defined it has a member x which takes the value of obj1's x - at the moment = 1. Then the member f of obj1 is called, the x of obj1 is changed, but the x of obj2 is already assigned a value of 1, so it doesn't change. When alert is executed it outputs 1.`,
		time: 25
	},
	{
		question: `What is the output of this code?<br>
		<code>
		var a = [9,5,2];<br>
		for (var i=1; i<3; i++) {<br>
		&nbsp;&nbsp;a[0]%=a[i];<br>
		}<br>
		alert(a[0]);
		</code>`,
		type: 'input',
		correct: '0',
		explanation: `The for loop starts with i = 1, so the first iteration: a[0]%=a[i] => a[0]%=a[1] => 9%=5 (9%5 = 4) => a[0] = 4. The second iteration i = 2, so: a[0]%=a[i] => a[0]%=a[2] => 4%=2 (4%2 = 0) => a[0] = 0.`,
		time: 25
	},
	{
		question: `What is the output of this code?<br>
		<code>
		var x = 100;<br>
		while(x >= 50) {<br>
		&nbsp;&nbsp;x--;<br>
		}<br>
		x%=7;<br>
		document.write(x);
		</code>`,
		type: 'input',
		correct: '0',
		explanation: ``,
		time: 25
	},
	{
		question: `What is the output?<br>
		<code>
		var a = 5;<br>
		b = 6 / 3 + 2;<br>
		var z = 4 * 6;<br>
		a *= a;<br>
		var x = (z == --a) ?b:z;<br>
		document.write(x);
		</code>`,
		type: 'input',
		correct: '4',
		explanation: ``,
		time: 25
	},
	{
		question: `What is the output of this code?<br>
		<code>
		var x = 0;<br>
		var arr = [4,8,2];<br>
		arr[x] = (x++)+1;<br>
		document.write(arr[x]);
		</code>`,
		type: 'input',
		correct: '8',
		explanation: `On the third line of the code, if we substitute the x with numbers it would look like this: arr[0] = (0++)+1; So, arr[0] will get the value 1, and after this statement is executed x will be incremented by one (x++). On the next line x now has a value of 1, so the code looks like: document.write(arr[1]), where arr[1] has a value of 8.`,
		time: 25
	},
	{
		question: `What will the fun('aba') return?<br>
		<code>
		function func(str) {<br>
		&nbsp;&nbsp;var len = str.length;<br>
		&nbsp;&nbsp;for(var i =0; i < Math.floor(len/2); i++) {<br>
		&nbsp;&nbsp;&nbsp;&nbsp;if (str[i] !== str[len - 1 - i])<br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>
		&nbsp;&nbsp;&nbsp;&nbsp;}<br>
		&nbsp;&nbsp;return true;<br>
		}
		var arr = [4,8,2];<br>
		arr[x] = (x++)+1;<br>
		document.write(arr[x]);
		</code>`,
		type: 'single',
		wrong: ["false","aba"],
		correct: 'true',
		explanation: ``,
		time: 30
	},
	{
		question: `Will this code cause an error?<br>
		<code>
		var number = "10";<br>
		switch (number) {<br>
		case "20":<br>
		&nbsp;&nbsp;alert("Twenty");<br>
		case "10":<br>
		&nbsp;&nbsp;alert("Ten");<br>
		case "14":<br>
		&nbsp;&nbsp;alert("Fourteen");<br>
		default:<br>
		&nbsp;&nbsp;alert("Number not found.");<br>
		}
		</code>`,
		type: 'single',
		wrong: ["Yes"],
		correct: 'No',
		explain: ``,
		time: 30
	},
	{
		question: `What is the output of this code?<br>
		<code>
		function a() {<br>
		&nbsp;&nbsp;var a = 10;<br>
		&nbsp;&nbsp;return funtion () {<br>
		&nbsp;&nbsp;&nbsp;&nbsp;var b = a * a;<br>
		&nbsp;&nbsp;&nbsp;&nbsp;return b;<br>
		&nbsp;&nbsp;}<br>
		}<br>
		console.log(a()());
		</code>`,
		type: 'single',
		wrong: ["undefined","10","NaN"],
		correct: '100',
		explain: ``,
		time: 30
	},
	{
		question: `What is the output of this code?<br>
		<code>
		var y = 0;<br>
		for(var x=0; x < 3; x++) {<br>
		&nbsp;&nbsp;if(x==2) {<br>
		&nbsp;&nbsp;&nbsp;&nbsp;x=5;<br>
		&nbsp;&nbsp;&nbsp;&nbsp;continue;<br>
		&nbsp;&nbsp;}<br>
		&nbsp;&nbsp;y++;<br>
		}<br>
		document.write(y);
		</code>`,
		type: 'input',
		correct: '2',
		explanation: ``,
		time: 20
	}
];

// The game object, used to controll the game
const Game = {
	// Game control
	playing: false,
	gameLoop: null,
	answerTime: 0,
	questionTime: 0,
	timeToPick: false,
	questionsPerSerie: 5,
	// Current serie data
	currentSerie: 0,
	currentQuestion: 0,
	correctAnswers: 0,
	wrongAnswers: 0,
	answeredQuestions: [],
	wrongQuestions: [],
	// Total statistics
	totalQuestions: 0,
	totalCorrectAnswers: 0,
	totalWrongAnswers: 0,
	totalQuestionsInStore: Challenges.length
};

// When the document has finished loading add event listeners
window.addEventListener('load', function() {
	navigationSetup();
	gameButtonsSetup();
});

/* Navigation section
 * navigationSetup()
 * - adds event listeners to nav buttons to handle section switch
 * fixActiveLink()
 * - from time to time the navigation breaks, this function fixes it
!*/
// Add an event listener to the navigation links container
function navigationSetup() {
	document.querySelector('#nav-links').addEventListener('click', function(e) {
		// Get the currently active link
		let activeLink = document.querySelector('a.nav-link.active');
		if (activeLink == null) {
			// If there is no active link try to fix things by checking
			// which section is active and making the link to that section active
			// meanwhile shutdown the navigation change
			fixActiveLink();
			return;
		}

		// Get the clicked link, it's target and the currently active link
		let clickedLink = e.target.parentElement;
		let target = clickedLink.attr('target');

		// If the active section was exercise => run its destructor
		if (activeLink.target == 'exercise')
			exerciseLeave();

		// Toggle the active class on the current active and clicked links
		activeLink.toggleClass('active');
		clickedLink.toggleClass('active');

		// Get the currently active section and hide it
		document.querySelector('.container.d-block').toggleClass('d-block');

		// Get the targeted section and show it
		document.querySelector(`#${target}`).toggleClass('d-block');

		// Setup the required section
		switch (target) {
			case 'home': homeSetup(); break;
			case 'exercise': exerciseSetup(); break;
			case 'profile': profileSetup(); break;
		}
	});
}

function fixActiveLink() {
	// Determine the active section
	let activeSection = document.querySelector('.container.d-block');

	// If there is no active section make the home section active
	if (activeSection == null) {
		document.querySelector('#home').toggleClass('d-block');
		document.querySelectorAll('.nav-link').forEach(l =>
			l.attr('target') == 'home' ? l.toggleClass('active') : null);
		return;
	}

	// Get the id of the section
	let sId = activeSection.attr('id');
	document.querySelectorAll('.nav-link').forEach(l =>
		l.attr('target') == sId ? l.toggleClass('active') : null);
}
// -- Navigation section --

/* Home section
 * homeSetup()
 * - currently does nothing :)
!*/
// Setup the home section
function homeSetup() {}
// -- Navigation section --

/* Exercise section
 * gameButtonsSetup()
 * - prepare the events for the game buttons
 * exerciseSetup()
 * - prepares the exercise section
 * exerciseLeave()
 * - turns off the game loop
*/
// Prepare the events for the game buttons
function gameButtonsSetup() {
	// Start game button
	document.querySelector('#start-btn').addEventListener('click', function(s) {
		// Null the counters
		let correctAns = document.querySelector('#game-panel #score-board #correct');
		let wrongAns = document.querySelector('#game-panel #score-board #wrong');
		let questionCount = document.querySelector('#game-panel #score-board #question-count');
		correctAns.text('0');
		wrongAns.text('0');
		questionCount.text('0/5');

		// Hide the start game button
		s.target.toggleClass('d-none');

		// Show the game panel
		document.querySelector('#game-panel').toggleClass('d-none');

		// Default the Game object
		Game.currentSerie++;

		// Start the game loop
		Game.playing = true;
		Game.timeToPick = true;
		Game.gameLoop = setInterval(gameOn, 24);
	});

	// Submit answer button
	document.querySelector('#answer-btn').addEventListener('click', function() {
		// Get the selected answer
		checkAnswer();
	});

	// Continue from after game button
	document.querySelector('#ag-panel #cont-btn')
		.addEventListener('click', () => exerciseSetup());
}

// Setup the exercise section
function exerciseSetup() {
	// Get the elements from the exercise section
	let gameBtn = document.querySelector('#start-btn');
	let gamePanel = document.querySelector('#game-panel');
	let aGamePanel = document.querySelector('#ag-panel');
	let progBar = document.querySelector('#progress-bar');
	let questionBox = document.querySelector('#question');
	let answerBox = document.querySelector('#answer-panel');

	// Hide the game panel if visible
	if (gamePanel.visible())
		gamePanel.toggleClass('d-none');

	// Hide the after-game panel if visible
	if (aGamePanel.visible())
		aGamePanel.toggleClass('d-none');

	// Empty the question and answer boxes
	questionBox.innerHTML = '';
	answerBox.innerHTML = '';
	// Set the progress bar to 0%
	progBar.width(0);

	// Show the play button if not visible
	if (!gameBtn.visible())
		gameBtn.toggleClass('d-none');

	// Set the Game object
	Game.playing = false;
	Game.gameLoop = null;
	Game.answerTime = 0;
	Game.questionTime = 0;
	Game.currentQuestion = 0;
	Game.correctAnswers = 0;
	Game.wrongAnswers = 0;
	Game.answeredQuestions = [];
	Game.wrongQuestions = [];
}

// When leaving the exercise stop the game
function exerciseLeave() {
	if (typeof(Game.loop) === 'number')
		clearInterval(Game.loop);
}
// -- Exercise section --

/* Profile section
 * profileSetup()
 * - draws the correct/wrong diagram and loads the stats
!*/
// Setup the profile section
function profileSetup() {
	// Get the general info container
	let genInfo = document.querySelector('#general-info');
	genInfo.innerHTML = `Total challenges: ${Game.currentSerie}<br>`;
	genInfo.innerHTML += `Correct answers: ${Game.totalCorrectAnswers}<br>`;
	genInfo.innerHTML += `Wrong answers: ${Game.totalWrongAnswers}`;

	// Get the canvas for the chart
	let ctx = document.querySelector('#chart').getContext('2d');
	let chart = new Chart(ctx, {
		type: 'doughnut',
		data: { 
			datasets: [{
				data: [Game.totalCorrectAnswers, Game.totalWrongAnswers],
				backgroundColor: ['#9ccf31', '#ce0000'],
				borderColor: ['#9ccf31', '#ce0000']
			}],
			labels: [
				'Correct answers',
				'Wrong answers'
			]
		},
		options: {
			animation: {
				animateScale: true
			}
		}
	});
}
// -- Profile section --

/* Game section
 * nextQuestion()
 * updateScore()
 * gameOn()
 * - the main game loop
 * gameFinished()
 * - executed after the game is finished
 * shuffleArray(@a)
 * - given an array @a, thi function shuffles it's members
!*/
function nextQuestion() {
	/* Generate a random number to retrieve
	 * a random question that has not been answered
	 * in this serie
	 * random int between 0 and max, inclusive
	 * Math.random * (max + 1)
	!*/
	let questionNum;
	while (true) {
		questionNum = Math.floor(Math.random() * Challenges.length);
		if (!Game.answeredQuestions.includes(questionNum))
			break;
	}
	// Mark the question as answered
	Game.answeredQuestions.push(questionNum);
	let question = Challenges[questionNum];

	// Empty the answers panel
	document.querySelector('#answer-panel').innerHTML = '';

	// Determine type of question and call the appropriate function
	// pass the question as argument
	// Get the question container
	switch (question.type) {
		case 'single': displaySingle(question, questionNum); break;
		case 'input': displayInput(question, questionNum); break;
		case 'multi': displayMulti(questio); break;
	}

	// Set answer time
	Game.answerTime = question.time ? question.time * 1000 : 10000;

	// Increase the total question count
	Game.totalQuestions++;
	
	// Increase the current serie question count
	Game.currentQuestion++;
}

function displaySingle(question, questionNum) {
	// Display the question text
	document.querySelector('#question').innerHTML = question.question;

	// Get the answers container
	let aCont = document.querySelector('#answer-panel');
	// Get all the answers for the question in a single array
	let answers = question.wrong.concat(question.correct);
	// Shuffle the answers
	shuffleArray(answers);
	// Create a label and checkbox for each answer
	// and append them to the answers container
	answers.forEach(function(answer) {
		let lbl = new El('+label.answer', false);
		let cbox = new El('+input/radio:answer', false);
		cbox.attr({
			// Set the target attribute to point to the # of the question
			target: questionNum,
			// If this is the correct answer set value to 1, else to 0
			value: question.correct == answer ? 1 : 0,
			// When this checkbox is clicked switch it's style
			onclick: "toggleChecked(this);"
		});
		// Append cbox to the label
		lbl.append(cbox);
		// Append the answer text to the label
		lbl.append(answer);
		// Append the label to the answer panel
		aCont.appendChild(lbl);
	});
}

function displayInput(question, questionNum) {
	// Display the question text
	document.querySelector('#question').innerHTML = question.question;

	// Get the answers container
	let aCont = document.querySelector('#answer-panel');

	// Create a input text for answer and append to the answers container
	let abox = new El('+input/text:answer.text-answer@#answer-panel');
	abox.attr('target', questionNum);
}

function displayMulti(question) {

}

function updateScore() {
	let correctAns = document.querySelector('#game-panel #score-board #correct');
	let wrongAns = document.querySelector('#game-panel #score-board #wrong');
	let questionCount = document.querySelector('#game-panel #score-board #question-count');
	correctAns.text(`${Game.correctAnswers}`);
	wrongAns.text(`${Game.wrongAnswers}`);
	questionCount.text(`${Game.currentQuestion}/5`);
}

function gameOn() {
	// If playing is clear the interval and quit the loop
	if (!Game.playing) {
		clearInterval(Game.gameLoop);
		return;
	}

	// Get the current time
	let now = new Date().getTime();

	// Get the progress bar
	let pb = document.querySelector('#progress-bar');

	// If the time of the previous question has run out
	if (now > Game.questionTime + Game.answerTime && Game.questionTime != 0) {
		Game.timeToPick = true;

		// Last chance for correct answer
		checkAnswer(true);
	}

	if (Game.timeToPick) {
		// If the limit per serie has been reached
		if (Game.currentQuestion == Game.questionsPerSerie) {
			gameFinished();
			return;
		}

		Game.timeToPick = false;

		// Pick next question
		nextQuestion();

		// Set new picking time
		Game.questionTime = now;

		// Set the progress bar to 0
		pb.width(0);
	}

	// Calculate the percentage of time passed
	let timePercentage = (now - Game.questionTime) / Game.answerTime * 100;
	
	// Set the width of the progress bar to 
	// display the percentage of time passed
	pb.width(pb.parentElement.width() * timePercentage / 100);
}

function gameFinished() {
	// Stop the game interval
	clearInterval(Game.gameLoop);

	// Hide the game panel
	document.querySelector('#game-panel').toggleClass('d-none');

	// Show the after game panel
	document.querySelector('#ag-panel').toggleClass('d-none');

	// Set the score
	let correctAns = document.querySelector('#ag-panel #score-board #correct');
	let wrongAns = document.querySelector('#ag-panel #score-board #wrong');
	correctAns.text(`${Game.correctAnswers}`);
	wrongAns.text(`${Game.wrongAnswers}`);

	// Get the review panel and empty it
	let rPanel = document.querySelector('#review-panel');
	rPanel.innerHTML = '';

	// Add all the wrong questions for review
	Game.wrongQuestions.forEach(function(i) {
		let question = Challenges[i];
		let qBox = new El('+p.question', false);
		qBox.innerHTML = question.question;
		let aBox = new El('+span.answer-correct', false);
		aBox.innerText = question.correct;
		qBox.append(aBox);
		if (question.explanation) {
			let eBox = new El('+span.answer-explain', false);
			eBox.innerHTML = question.explanation;
			qBox.append(eBox);
		}
		
		rPanel.append(qBox);
	});
}

function checkAnswer(onTimeOut) {
	// Set default value
	onTimeOut = onTimeOut || false;
	/* @onTimeOut
	 * Used with the main game loop
	 * when the time runs out. If this 
	 * check is beign performed then
	 * @onTimeOut will be true and if
	 * no answer is selected, the 
	 * question will be added as wrong
	 * and added to the review array
	!*/

	// Get the answer from the page
	let answers = document.querySelectorAll('input[name=answer]');
	let answer;

	// If there is only answer then the question is of type input
	if (answers.length == 1)
		answer = answers[0];
	else
		answers.forEach(function(a) { 
			if (a.checked)
				answer = a;
		});

	// If no answer is selected quit
	if ((answer === undefined || answer.value == '') && onTimeOut === false)
		return;

	let correct = false;
	let question;

	if (answer !== undefined && answer.type == 'text') {
		question = answer.attr('target');
		// If the answer is of type input
		if (answer.value == Challenges[question].correct)
			correct = true;
	}
	else if (answer !== undefined && answer.type == 'radio') {
		question = answer.attr('target');
		// If answer is of type radio
		if (answer.value ==  1)
			correct = true;
	}
	// else if (typeof(answer) == array) for multiple correct
	
	if (correct) {
		Game.correctAnswers++;
		Game.totalCorrectAnswers++;
	} else {
		// Increase the count of the wrong answers
		Game.wrongAnswers++;
		Game.totalWrongAnswers++;

		// Add the question to the array of wrong questions
		// so it can be reviewed after the game
		Game.wrongQuestions.push(question);
	}

	// Update the score-board
	updateScore();

	// Pick next question
	Game.timeToPick = true;
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
	}
}

function toggleChecked(e) {
	document.querySelectorAll('label.answer').forEach(a => a.removeClass('checked'));
	e.parentElement.addClass('checked');
}
// -- Game section --