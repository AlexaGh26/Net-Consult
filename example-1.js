import {createAll, cleanConsole} from './data';
const companies = createAll();


cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', 'Put here your function');

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

export const funcCompany = (companies) => {
  const companyFormatted = companies.map((item) => {
    item.name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
    item.users = item.users.map((itemUser) => {
      if (!itemUser.lastName) {
        itemUser.lastName = '';
      } else {
        itemUser.lastName = itemUser.lastName.charAt(0).toUpperCase() + itemUser.lastName.slice(1);
      }
      if (!itemUser.firstName) {
        itemUser.firstName = '';
      } else {
        itemUser.firstName = itemUser.firstName.charAt(0).toUpperCase() + itemUser.firstName.slice(1);
      }
      return itemUser;
    });
    item.users.sort((a, b)=> {
      return a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase());
    });
    return item;
  });
  const finalCompanyFormatted = companyFormatted.sort((a, b) => a.usersLength - b.usersLength);
  return finalCompanyFormatted;
};
funcCompany(companies);
