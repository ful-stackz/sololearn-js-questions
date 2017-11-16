// When the document has finished loading add event listeners
window.addEventListener('load', function() {
	navigationSetup();
});

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

// Setup the home section
function homeSetup() {

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
	let answer;
	document.querySelectorAll('input[type=radio]').forEach(function(a) { 
		if (a.checked)
			answer = a;
	});

	// If answer is true
	if (answer.value == 1) {
		Game.correctAnswers++;
		Game.totalCorrectAnswers++;
	}
	else {
		// Increase the count of the wrong answers
		Game.wrongAnswers++;
		Game.totalWrongAnswers++;

		// Add the question to the array of wrong questions
		// so it can be reviewed after the game
		let qNum = answer.attr('target');
		if (!Game.wrongQuestions.includes(qNum))
			Game.wrongQuestions.push(qNum);
	}

	// Update the score-board
	updateScore();

	// Pick next question
	Game.timeToPick = true;
});

// Continue from after game button
document.querySelector('#ag-panel #cont-btn').addEventListener('click', function() {
	exerciseSetup();
});

const Challenges = [
	{
		question: `
		What is the output of this code?<br>
		<code>
		var nb = [ 8, 9, 24, 35, 40, 54 ];<br>
		alert(nb[ 1 ] + nb[ 5 ]);
		</code>`,
		time: 30,
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
		explain: ``,
		time: 30
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
		explain: ``,
		time: 10
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
		explain: ``,
		time: 30
	},
	{
		question: `Which tag is used for JavaScript code in HTML?<br>`,
		wrong: ["<js>","<JavaScript>","<code>"],
		correct: "<script>",
		explain: ``,
		time: 30
	},
	{
		question: `What is the output of this code if the HTML contains just one div element?<br>
		<code>
		var a=document.getElementsByTagName("div");<br>
		a[1].innerHTML = "JS";
		</code>`,
		wrong: ["JS","div"],
		correct: "error",
		explain: ``,
		time: 30
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
		explain: ``,
		time: 30
	},
	{
		question: `What is the output of this code?<br>
		<code>
		var a = (1 === "1" ? false : true);<br>
		alert(a);
		</code>`,
		wrong: ["false"],
		correct: "\\true",
		explain: ``,
		time: 30
	}
];

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
	totalWrongAnswers: 0
};

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

	// Get the question container
	let qCont = document.querySelector('#question');
	// Display the question text
	qCont.innerHTML = question.question;

	// Get the answers container
	let aCont = document.querySelector('#answer-panel');
	// Empty the answers container if there are answers
	document.querySelectorAll('.answer').forEach(a => a.remove());
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
			value: question.correct == answer ? 1 : 0
		});
		// Append cbox to the label
		lbl.append(cbox);
		// Append the answer text to the label
		lbl.append(answer);
		// Append the label to the answer panel
		aCont.appendChild(lbl);
	});

	// Increase the total question count
	Game.totalQuestions++;
	
	// Increase the current serie question count
	Game.currentQuestion++;
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

		// If the time runs out then increase the wrong answers
		Game.wrongAnswers++;
		Game.totalWrongAnswers++;
		updateScore();

		// Add the question to be reviewed later
		let questionNum = document.querySelector('input[type=radio]').attr('target');
		Game.wrongQuestions.push(questionNum);
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

		// Set answer time
		Game.answerTime = question.time ? question.time * 1000 : 10000;

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

	// Show some text
	if (Game.correctAnswers >= 3)
		alert('Well done!');
	else
		alert('Keep practicing!');

	//exerciseSetup();
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
	}
}