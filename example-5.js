import {cleanConsole, createAll} from './data';
import {funcGroupUser} from './example-4';
import {funcUsersHascar} from './example-2';

const companies = createAll();

const funtStatistics = (companies) =>{
  let sumAge = 0;
  let sumAgeCar = 0;
  let sumUsersWithCar = 0;
  const size = funcGroupUser(companies);
  const lengthSize = size.length;
  let sum = size.map((item)=> sumAge = sumAge + item.age);
  sum = sum[sum.length-1];
  const average = sum/size.length;
  const hasCar = funcUsersHascar(companies, true);
  let allUserWithCar = hasCar.map((item)=>{
    sumUsersWithCar = sumUsersWithCar + item.users.length;
    return sumUsersWithCar;
  });
  allUserWithCar = allUserWithCar[allUserWithCar.length-1];
  let averageUsersWithCar = hasCar.map((item)=> {
    item.users.map((itemUsers)=> sumAgeCar = sumAgeCar + itemUsers.age);
    return sumAgeCar;
  });
  averageUsersWithCar = averageUsersWithCar[averageUsersWithCar.length-1]/averageUsersWithCar.length;
  const result = {
    size: lengthSize,
    average: average,
    hasCar: allUserWithCar,
    averageWithCar: averageUsersWithCar,
  };
  return result;
};
cleanConsole(5, companies);
console.log('---- EXAMPLE 5 --- ', funtStatistics(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Utiliser la fonction créée dans l'exemple 4 pour créer une
// nouvelle fonction prenant en paramètre la variable "companies" et renvoyant
// un nouvel objet avec les attributs suivants :
//     'size' => nombre de "users"
//     'average' => moyenne d'âge des "users"
//     'hasCar' => nombre de "users" possédant une voiture
//     'averageWithCar' => moyenne d'âge des "users" possédant une voiture
