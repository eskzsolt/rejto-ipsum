const local_jokes = text.slice();

// Internet Explorer 6-11
const isIE = /*@cc_on!@*/false || !!document.documentMode;

const containedBy = function(ar, q) {
  return ar.filter(function(b) {return b === q}).length > 0 ? true : false;
}

function newJokes() {

  let selected_jokes = [];
  let current_selection = [];
    
  for (let i = 0; i < 20; i+=1) {
    let pick = local_jokes[Math.floor(Math.random() * local_jokes.length)];
    //if (!isIE) {
      while (selected_jokes.includes(pick)) {
        pick = local_jokes[Math.floor(Math.random() * local_jokes.length)];
      }
    //} else {
    //  while (containedBy(selected_jokes, pick)) {
    //    pick = local_jokes[Math.floor(Math.random() * local_jokes.length)];
    //  }
    //}
    selected_jokes.push(i % 10 === 0 && i !== 0 ? '<br><br>' + pick : pick); 
  }

  return selected_jokes.join(' ');

}

function addJokes() {
  return document.getElementById("main").innerHTML += '<br><br>' + newJokes();
}

document.getElementById("main").innerHTML = newJokes();

let myEl = document.getElementById('refresh');

myEl.addEventListener('click', function() {
  document.getElementById("main").innerHTML = newJokes();
}, false);

document.getElementById("add").addEventListener('click', function() {
  document.getElementById("main").innerHTML = addJokes();
}, false);


$(document).ready(function() {
  var clipboard = new Clipboard('#copy');
  clipboard.on('success', function(e) {
    e.clearSelection();
    $("#copy, #main").fadeOut('slow', function() {
      }).fadeIn();
  });
});
