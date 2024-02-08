const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const congratulations = document.getElementById('congratulations');

const words = [
'No',
'Are you sure? 😒',
'I will give you a bear 🐻',
'I will give you roses 🌹',
'if you say no, I will cry 😭',
'I will be sad 😢',
'I will be very sad 😞',
'I will be very very sad 😔',
'I will be very very very sad 😕',
'You are breaking my heart 💔',
"okay fine. I'll stop asking 😞",
"I'll just go cry in a corner 😭",
'Say yes. 🔪',
'Please say yes. 🥺 👉👈',
"Okay, I'm starting over. Will you be my valentine? 😡"
];
let currentIndex = 0;

noButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % words.length;
  noButton.textContent = words[currentIndex];
  yesButton.style.fontSize = `${parseInt(getComputedStyle(yesButton).fontSize) + 30}px`;
});

yesButton.addEventListener('click', () => {
  congratulations.style.display = 'block';
});







//let noCount = 0;
		//let noCount__ = 0;
		//let noButtonText = 'No';
		//$: yesButtonSize = noCount__ * 10 + 16;
	
		//let yesClicked = false;
	
		//$: {
			//if (noCount > phrases.length) {
			//	noCount = 0;
			//} else {
			//	noButtonText = phrases[noCount];
			//}
		//}
	