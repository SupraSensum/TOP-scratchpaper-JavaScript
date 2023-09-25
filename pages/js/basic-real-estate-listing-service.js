const countries = ['United States of America', 'Brazil'];

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

function Country (name, lang, pop) {
   this.name = name,
   this.lang = lang,
   this.pop = pop,
}

function State (name, pop) {
   this.name = name,
   this.pop = pop,
}

function House (price, sqft, year) {
   this.price = price,
   this.sqft = sqft,
   this.year = year,
}

