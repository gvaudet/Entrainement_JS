// Question 1
const p = document.getElementsByTagName('p');
console.log("Le nombre de paragraphe est de : ", p.length);
// Question 2 
const coucou = document.getElementById('coucou');
console.log("Le contenue texte de l'élément portant l'ID coucou est : ", coucou.innerHTML);
// Question 3 
const thirdLink = document.getElementsByTagName('a');
let contentThirdLink = thirdLink[2].getAttribute("href"); 
console.log("Le contenu du 3ème lien est : ", contentThirdLink);
// Question 4 
const compteMoi = document.querySelectorAll('.compte-moi'); 
console.log("Nombre d'éléments contenant la classe compte-moi : ", compteMoi.length);
// Question 5 
const counterList = document.querySelectorAll('li.compte-moi'); 
console.log("Le nombre de liste contenant la classe compte moi est de : ", counterList.length);
// Question 6 
const orderedList = document.querySelectorAll('ol > li.compte-moi'); 
console.log("Le nombre de li avec la classe compte-moi dans un ol est de :", orderedList.length);

