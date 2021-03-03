let hambuger = document.querySelector('.hambuger');
let nav = document.querySelector('#nav-menu');
let lines = document.querySelectorAll('.line')

hambuger.addEventListener("click", (e) => {
    nav.classList.toggle('open-nav');
    lines.forEach(line => line.classList.toggle('close'))
    

});

let textDisplay = document.getElementById('typer')
let phrases = ['A Professional Fullstack Software Developer', 'An Interactive Front-End Developer', 'An Innovative Educator', 'A Customer Experience Management Professional'];
let currentPhrase = [];
let i = 0;
let j = 0;
let isDeleting = false;
let isEnd = false;


function typewriting () {
    isEnd = false;
    textDisplay.innerHTML = currentPhrase.join('');
    if (i < phrases.length) {

        if(!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++;
            textDisplay.innerHTML = currentPhrase.join('');
        }

        if(isDeleting && j <= phrases[i].length){
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('');
        }
        if(j == phrases[i].length){
            isEnd = true;
            isDeleting = true
            
        }

        if(isDeleting && j === 0){
            currentPhrase = []
            isDeleting = false;
            i++
            if(i == phrases.length){
                i = 0;
            }
        }
        

    }

    let spedUp = Math.random() * (70 -50) + 50;
    let normalSpeed = Math.random() * (60 -30) + 30;
    let time = isEnd ? 5000 : isDeleting ? spedUp : normalSpeed
    setTimeout(typewriting, time)
}

typewriting()