

 //mobile view navbar dropdown
function dropDown() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  //fixed navbar on scrool
  window.onscroll = function() {scrollDown()};
  
  function scrollDown() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }

//login splash
  var usr = document.getElementById('login');

  window.onclick = function(event) {
    if (event.target == usr) {
        usr.style.display = "none";
    }
}

//signup splash
var sgn = document.getElementById('signup');

window.onclick = function(event) {
  if (event.target == sgn) {
      sgn.style.display = "none";
  }
}

//booking splash
var book = document.getElementById('booking');

window.onclick = function(event) {
  if (event.target == book) {
      book.style.display = "none";
  }
}

$('.collapse').collapse()

//set date for date pickers
document.getElementById('dp').value = new Date().toDateInputValue();

//show/hide sidebar
function hideSide() {
  document.getElementById('sidebar').style.display = "none";
  }

  function showSide() {
    document.getElementById('sidebar').style.display = "block";
    }