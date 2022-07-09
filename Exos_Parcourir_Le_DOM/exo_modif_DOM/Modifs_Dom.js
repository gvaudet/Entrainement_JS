// Modification 1 ------------------------------------------------------------------------------

// Isolation des objets à modifier ici Le Titre et ss-Titre 

const title = document.querySelector('.jumbotron-heading');

const sub = document.querySelectorAll('.lead-text-muted');

// Création de variables qui contiennent les fonctions de changement de contenus 
var changeTitle = function changeTitle() {
    title.innerHTML = "Ce que j'ai appris avec Chris";
}

var changeSub = function changeSub() {
    sub[0].innerHTML = "Dans un cadre de formation intensive, Chris m’aide à développer mes compétences";
}

// "sac à fonctions"
function changeTitles() {
    changeSub(); 
    changeTitle();
};

// Appel de la fonction 
changeTitles();

// Modification 2 -------------------------------------------------------------------------------

// Isoler les éléménents à modifier 

const btn1 = document.getElementsByClassName('btn btn-primary my-2'); 
// Création d'une constante qui contient la fonction de changement d'attribut pour le href 
let link = function changeSrc() {
    btn1[0].setAttribute('href', "https://chrisb.fr")
}

// Fonction changeCallToAction qui change le texte du btn et le lien vers lequel il mène 
function changeCallToAction() {
    btn1[0].innerHTML = "Ok je veux tester"; 
    link();
}

changeCallToAction();

// Isoler les éléménents à modifier 

const btn2 = document.getElementsByClassName('btn btn-secondary my-2'); 

// Création d'une constante qui contient la fonction de changement d'attribut pour le href 

let secondLink = function changeSrc() {
    btn2[0].setAttribute('href', "https://www.pole-emploi.fr/accueil/");
}

// Fonction changeSecondaryChoice qui change le texte du btn et le lien vers lequel il mène 
function changeSecondaryChoice() {
    btn2[0].innerHTML = "Autre choix"; 
    secondLink();
}

changeSecondaryChoice();

// Modification 3 -------------------------------------------------------------------------------

let logo = document.getElementsByTagName('strong')[0]; 

function changeLogo() {
    logo.innerHTML = "Chris est le meilleur formateur"; 
    logo.style.fontSize = '2em'; 
}

changeLogo();

// Modification 4 -------------------------------------------------------------------------------

// Création de la variable avec le tableau des liens 
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png",
                   "https://img.icons8.com/color/480/000000/css3.png", 
                   "https://img.icons8.com/color/480/000000/javascript.png", 
                   "https://img.icons8.com/color/480/000000/ruby-programming-language.png", 
                   "https://img.icons8.com/color/480/000000/bootstrap.png", 
                   "https://img.icons8.com/color/480/000000/github.png", 
                   "https://i.imgur.com/bJE9Pka.png", 
                   "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", 
                   "https://img.icons8.com/color/480/000000/heroku.png"];



// Selection des cards 
let cards = document.querySelectorAll('div.card > img'); 

// Faire vérifier par Chris mais ça fonctionne 
for (let index = 0; index < imagesArray.length; index++) {
    let element = imagesArray[index];
    cards[index].setAttribute('src', element);
}; 

// Modification 5 -------------------------------------------------------------------------------

let cardsArray = Array.prototype.slice.call(cards); 
console.log(cardsArray);







