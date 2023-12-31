import _ from 'lodash';
import myName from './myName.js';
import './style.css';
import goldblum from './goldblum.png';

function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.innerHTML = myName('SupraSensum');
   element.classList.add('hello');

   const myImage = new Image();
   myImage.src = goldblum;

   element.appendChild(myImage);

   return element;
}

document.body.appendChild(component());