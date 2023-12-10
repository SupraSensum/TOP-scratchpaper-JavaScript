const countries = ['United States of America', 'Brazil'];
const countriesObjects = {};

const usStates = [
   "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
   "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
   "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
   "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
   "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
   "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
   "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
   "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
   "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];
const usStatesObjects = {};

const brazilStates = [
   'Acre',
   'Alagoas',
   'Amapá',
   'Amazonas',
   'Bahia',
   'Ceará',
   'Distrito Federal',
   'Espírito Santo',
   'Goiás',
   'Maranhão',
   'Mato Grosso',
   'Mato Grosso do Sul',
   'Minas Gerais',
   'Pará',
   'Paraíba',
   'Paraná',
   'Pernambuco',
   'Piauí',
   'Rio de Janeiro',
   'Rio Grande do Norte',
   'Rio Grande do Sul',
   'Rondônia',
   'Roraima',
   'Santa Catarina',
   'São Paulo',
   'Sergipe',
   'Tocantins'
];
const brazilStatesObjects = {};

function Country (name, lang, pop) {
   this.countryName = name;
   this.lang = lang;
   this.countryPop = pop;
}

function State (name, pop) {
   this.stateName = name;
   this.statePop = pop;
}

function House (price, sqft, year) {
   this.price = price;
   this.sqft = sqft;
   this.year = year;
}

// create array of country objects
function generateCountriesObjects() {
   for (let i = 0; i < countries.length; i++) {
      countriesObjects[countries[i]] = new Country(countries[i], prompt(`${countries[i]} language:`), prompt(`${countries[i]} population:`));
   }

   const userCountry = prompt("Enter country name:");
   if (countriesObjects.includes(userCountry)) {
      generateStatesObjects();
   } else {
      countriesObjects[countries[i]] = new Country(countries[i], prompt(`${countries[i]} language:`), prompt(`${countries[i]} population:`));
   }
}

console.log(countriesObjects);