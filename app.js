let hambuger = document.querySelector('.hambuger');
let nav = document.querySelector('#nav-menu');
let lines = document.querySelectorAll('.line');

hambuger.addEventListener('click', (e) => {
	nav.classList.toggle('open-nav');
	lines.forEach((line) => line.classList.toggle('close'));
});

let textDisplay = document.getElementById('typer');
let phrases = [
	'A Professional Fullstack Software Developer',
	'A Customer Experience Management Professional',
];
let currentPhrase = [];
let i = 0;
let j = 0;
let isDeleting = false;
let isEnd = false;

function typewriting() {
	isEnd = false;
	textDisplay.innerHTML = currentPhrase.join('');
	if (i < phrases.length) {
		if (!isDeleting && j <= phrases[i].length) {
			currentPhrase.push(phrases[i][j]);
			j++;
			textDisplay.innerHTML = currentPhrase.join('');
		}

		if (isDeleting && j <= phrases[i].length) {
			currentPhrase.pop(phrases[i][j]);
			j--;
			textDisplay.innerHTML = currentPhrase.join('');
		}
		if (j == phrases[i].length) {
			isEnd = true;
			isDeleting = true;
		}

		if (isDeleting && j === 0) {
			currentPhrase = [];
			isDeleting = false;
			i++;
			if (i == phrases.length) {
				i = 0;
			}
		}
	}

	let spedUp = Math.random() * (70 - 50) + 50;
	let normalSpeed = Math.random() * (60 - 30) + 30;
	let time = isEnd ? 5000 : isDeleting ? spedUp : normalSpeed;
	setTimeout(typewriting, time);
}

typewriting();

//get git repo

const getRepo = async () => {
	const response = await fetch('http://api.github.com/users/obaro89/repos');
	const repos = await response.json();
	let div = '';
	repos.forEach(
		(repo) =>
			(div += `<div class="flex-image repo">
						<h2>${repo.name}</h2>
						<p><a href="https://github.com/obaro89/${repo.name}">See Git repo</a></p>
						<p><small> ${repo.language}</small></p>
					</div>`)
	);
	document.getElementById('show-repo').innerHTML = div;
};

getRepo();

//process contact me form

document.getElementById('send').addEventListener('click', async (e) => {
	e.preventDefault();
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;
    
    if(name == "" || email =="" || message==""){
        alert("Please fill the form completely")
    }else {

		document.getElementById('name').value ="";
	document.getElementById('email').value="";
	document.getElementById('message').value="";
    document.getElementById('send').innerHTML="Sending...."
	document.getElementById('send').disabled=true;
	
        	Email.send({
		SecureToken: '19789b5e-8036-40a9-a0f7-df253a01d955',
		To: 'igbinobaroosaretin@gmail.com',
		From: 'osaretin@igbinobaro.com.ng',
		Subject: 'Contact from igbinobaro.com.ng',
		Body: `<html><h2>From:${name} </h2><p><small>${email}</small></p><p><em>${message}</em></p></html>`,
		
	
	
	}).then(() => {
		alert('mail sent successfully, Expect a response soon.')
		document.getElementById('send').innerHTML="send"
	document.getElementById('send').disabled=false}
	);
    }



});
