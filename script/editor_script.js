window.addEventListener('keypress', function(k) {
	if (k.ctrlKey && k.shiftKey && (k.key == 'f') || k.key == 'F') {
		formatJSON();
	}
});

function formatJSON() {
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
	wrongs: [${wrongs}],
	correct: "${correct}",
	explain: \`${explain}\`,
	time: ${time}
}`;
}