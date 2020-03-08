const button = document.querySelector(".button");
const content = document.querySelector(".text");

const replay = ["Not bad", "Doing good", "i'm fine"];

const speechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = () => {
	button.classList.add("heartbeat");
	content.innerText = "Say Hello!";
};

recognition.onend = () => {
	button.classList.remove("heartbeat");
};

recognition.onresult = (e) => {
	const myText = e.results[0][0].transcript;
	content.innerText = myText;
	outPut(myText);
};

const outPut = (msg) => {
	const speech = new SpeechSynthesisUtterance();
	if (msg.includes("how are you")) {
		const final = replay[Math.floor(Math.random() * replay.length)];
		speech.text = final;
	}
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
	window.speechSynthesis.speak(speech);
};

button.addEventListener("click", () => {
	recognition.start();
});
