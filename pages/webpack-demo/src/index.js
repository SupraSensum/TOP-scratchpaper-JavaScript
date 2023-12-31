import _ from 'lodash';
import myName from './myName.js';
import './style.css';
import goldblum from './goldblum.png';
import DataXml from './dataset.xml';
import DataCsv from './MOCK_DATA.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.innerHTML = myName('SupraSensum');
   element.classList.add('hello');

   const myImage = new Image();
   myImage.src = goldblum;

   element.appendChild(myImage);

   console.log(DataXml);
   console.log(DataCsv);

   return element;
}

document.body.appendChild(component());