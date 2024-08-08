// ========================================  Start JavaScript Code  =================================================

// For Call Home Footer type container ID : home_Footer

// For Call Globle Footer type container ID : globle_Footer

// ----------------------------------------  For Call Home Footer and send to index.html  ----------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    fetch('pages/footer/homeFooter.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('home_Footer').innerHTML = data;
      });
});


// ----------------------------------------  For Get Name by index.html and save to local Storage  ----------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    fetch('pages/footer/globleFooter.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('globle_Footer').innerHTML = data;
      });
});


