var axios = require('axios');

export var getFlags = () => {
var countries = [];
  const promise = axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/all',
    )
    .then(response => {
      countries = response.data;
      return countries;
    })
    .catch(error => {
      console.log(error);
    });

return promise;
};