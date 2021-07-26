'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function getCountryData(country){
    const request = new XMLHttpRequest();

    request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`);
    request.send();

    request.addEventListener('load',function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        console.log("data of the flag img is ",data.flag);

        const html = `
        <article class="country">
        <img class="country__img" src="${data.flag}"/>
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${+data.population/1000000}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
        </article>
        `
        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
    });
}

getCountryData('portugal');
getCountryData('usa');


const googleRequest = fetch("https://restcountries.eu/rest/v2/name/usa");
console.log(googleRequest);


function getCountryData2(country){
  const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(
    function(response){  
      return response.json()  ;
    }).then(function(data){
        console.log("the data returned from the promise is",[data]);
    });
}

getCountryData2('portugal');



// Added from final to come at speed

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const url2 =`https://restcountries.eu/rest/v2/name/sweedeen`
const getCountryError = function(url,errorMsg ="Something went wrong "){
  fetch(url).then(response => {
  if (!response.ok) throw new Error("this is the ",errorMsg);
  return response.json();
}).catch(err => {
  console.log("THIS IS THE ERROR ");
  console.log(`${err}`);
``
})
};

getCountryError(url2);