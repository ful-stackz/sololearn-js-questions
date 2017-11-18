window.addEventListener('keypress', function(k) {
	if (k.ctrlKey && k.shiftKey && (k.key == 'f') || k.key == 'F') {
		formatJSON();
	}
});

var arr = null;

function formatJSON() {
	let type;
	document.querySelectorAll('input[type=radio]')
		.forEach(t => t.checked ? type = t.value : null);

	// Check what is the type of the answer and assemble accordingle
	switch (type) {
		case 'single':
			assembleSingle(); break;
		case 'input':
			assembleInput(); break;
		case 'multi':
			assembleMulti(); break;	
	}
	
}

function assembleSingle() {
	let question = document.querySelector('#question').value;
	let wrongs = document.querySelector('#wrongs').value;
	let correct = document.querySelector('#correct').value;
	let explain = document.querySelector('#explain').value;
	let time = document.querySelector('#time').value;
	let result = document.querySelector('#result');

	// Match the new line escapes and replace them with <br>
	question = question.replace(/\\n/g, '<br>');
	question = question.replace(/\\co/g, '<code>');
	question = question.replace(/\\cc/g, '</code>');
	question = question.replace(/\\t/g, '&nbsp;&nbsp;');

	// Get the different wrong answers
	wrongs = wrongs.match(/\\\\[^\\\\]+/g);
	wrongs.forEach((w, i, a) => {
		a[i] = w.substr(2); a[i] = '"' + a[i] + '"';
	});

	// Get the explanation
	explain = explain.replace(/\\n/g, '<br>');
	explain = explain.replace(/\\co/g, '<code>');
	explain = explain.replace(/\\cc/g, '</code>');
	explain = explain.replace(/\\t/g, '&nbsp;&nbsp;');

	result.value = 
	`{
	question: \`${question}\`,
	type: 'single',
	wrongs: [${wrongs}],
	correct: '${correct}',
	explain: \`${explain}\`,
	time: ${time}
}`;
}

function assembleInput() {
	let question = document.querySelector('#question').value;
	let correct = document.querySelector('#correct').value;
	let explain = document.querySelector('#explain').value;
	let time = document.querySelector('#time').value;
	let result = document.querySelector('#result');

	// Match the new line escapes and replace them with <br>
	question = question.replace(/\\n/g, '<br>');
	question = question.replace(/\\co/g, '<code>');
	question = question.replace(/\\cc/g, '</code>');
	question = question.replace(/\\t/g, '&nbsp;&nbsp;');

	// Get the explanation
	explain = explain.replace(/\\n/g, '<br>');
	explain = explain.replace(/\\co/g, '<code>');
	explain = explain.replace(/\\cc/g, '</code>');
	explain = explain.replace(/\\t/g, '&nbsp;&nbsp;');

	result.value = 
	`{
	question: \`${question}\`,
	type: 'input',
	correct: '${correct}',
	explanation: \`${explain}\`,
	time: ${time}
}`;
}

function assembleMutli() {

}