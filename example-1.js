import {cleanConsole, createAll} from './data';
const companies = createAll();

export const funcCompany = (companies) => {
  const companyFormatted = companies.map((item) => {
    const {name, users} = item;
    const initialCapitaLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);
    item.name = name.charAt(0).toUpperCase() + name.slice(1);
    users.map((itemUser) => {
      const {firstName, lastName} = itemUser;
      if (!lastName) {
        itemUser.lastName = '';
      } else {
        itemUser.lastName = initialCapitaLetter(lastName);
      }
      if (!firstName) {
        itemUser.firstName = '';
      } else {
        itemUser.firstName = initialCapitaLetter(firstName);
      }
      return itemUser;
    });
    users.sort((a, b)=> a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase()));
    return item;
  });
  const finalCompanyFormatted = companyFormatted.sort((a, b) => a.usersLength - b.usersLength);
  return finalCompanyFormatted;
};
cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', funcCompany(companies));


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
