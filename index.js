'use strict';

function getDogImage(breed) {

  fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.code === 404) {
      $("h2").html(responseJson.code + ": " + responseJson.message);
      $('.results-img').replaceWith(
        `<img src="" class="results-img">`
    )
  }
  else {
    $("h2").html("Look at this dog!");
    $('.results-img').replaceWith(
        `<img src="${responseJson.message}" class="results-img">`
    )
  }
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage($("#js-breed-input").val());
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});