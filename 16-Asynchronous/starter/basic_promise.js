'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const lotteryPromise = new Promise(function(resolve,reject){
  // we have two callbacks resolve and reject 
  if (Math.random() >=0.5){
    resolve("You WIN ");
  } else {
    reject("You lost your money");
  }

});
//Calling the Promise we built
lotteryPromise.then(res => console.log(res)).catch( err =>console.error(err));


