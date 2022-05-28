const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

 /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

$(function () {
    var app = $("#app"),
      init = $("#init"),
      layer = $("#layer"),
      input = $("#inp-cover input"),
      button = $("button");
  
    function toggleApp() {
      app.toggleClass("opened");
  
      if (button.hasClass("shadow")) button.toggleClass("shadow");
      else
        setTimeout(function () {
          button.toggleClass("shadow");
        }, 300);
  
      if (app.hasClass("opened")) {
        setTimeout(function () {
          input.toggleClass("move-up");
        }, 200);
        setTimeout(function () {
          input.focus();
        }, 500);
      } else
        setTimeout(function () {
          input.toggleClass("move-up").val("");
        }, 200);
  
      if (!layer.hasClass("sl")) {
        setTimeout(function () {
          layer.addClass("sl");
        }, 800);
      } else
        setTimeout(function () {
          layer.removeClass("sl");
        }, 300);
    }
  
    layer.on("click", toggleApp);
    init.on("click", toggleApp);
  });

  // function([string1, string2],target id,[color1,color2])    
 consoleText(['Welcome to Bharatपधारो.com.', 'भारतपधारो.कॉम में आपका स्वागत है|',
 'Bharatpadhaaro.com-ലേക്ക് സ്വാഗതം', 'Bharatpadharo.com க்கு வரவேற்கிறோம்|','भारतपधारो.कॉम वर आपले स्वागत आहे|','ભરતપધારો.કોમ પર આપનું સ્વાગત છે','Bharatpadharo.comకు స్వాగతం',
 'Bharatpedharo.com ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ'], 'text',['orange','white','green']);

 function consoleText(words, id, colors) {
   if (colors === undefined) colors = ['#fff'];
   var visible = true;
   var con = document.getElementById('console');
   var letterCount = 1;
   var x = 1;
   var waiting = false;
   var target = document.getElementById(id)
   target.setAttribute('style', 'color:' + colors[0])
   window.setInterval(function() {
 
     if (letterCount === 0 && waiting === false) {
       waiting = true;
       target.innerHTML = words[0].substring(0, letterCount)
       window.setTimeout(function() {
         var usedColor = colors.shift();
         colors.push(usedColor);
         var usedWord = words.shift();
         words.push(usedWord);
         x = 1;
         target.setAttribute('style', 'color:' + colors[0])
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (letterCount === words[0].length + 1 && waiting === false) {
       waiting = true;
       window.setTimeout(function() {
         x = -1;
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (waiting === false) {
       target.innerHTML = words[0].substring(0, letterCount)
       letterCount += x;
     }
   }, 120)
   window.setInterval(function() {
     if (visible === true) {
       con.className = 'console-underscore hidden'
       visible = false;
 
     } else {
       con.className = 'console-underscore'
 
       visible = true;
     }
   }, 400)
 }

 function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("searchBox");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByClassName("searchItems");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "block";
    } else {
      a[i].style.display = "none";
    }
  }
}
