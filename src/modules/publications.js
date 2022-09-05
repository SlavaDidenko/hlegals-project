import { publications } from "../data/data-publications";
import ShowPublications from "../modules/show-publications"
const button = document.querySelector('#more-publicatoons')
let list;

if (button) {
  if ( window.innerWidth < 768) {
    list = new ShowPublications(document.querySelector('.publications__list'), 2);
 } else {
    list = new ShowPublications(document.querySelector('.publications__list'), 6);
 }
 
 const spinner = document.querySelector('.spinner');
 if (publications) {
   list.showContent(publications ,button);
 
   button.addEventListener('click', () => {
     if (list) {
       spinner.classList.remove('none')
       setTimeout(() => {
         spinner.classList.add('none')
         list.showContent( publications , button)
       },1500)
     }
   })
 }
}