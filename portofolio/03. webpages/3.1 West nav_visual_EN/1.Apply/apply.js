/*the same width of menu and submenu*/
window.onload = function() {
      var element1 = document.getElementById('nav-topics');
      var element2 = document.getElementById('submenu');
      var width = element1.offsetWidth; // Gets the width of element1
      element2.style.width = (width+100) + 'px'; // Sets the width of element2
    };
/* responsive screen*/
window.onresize = function() {
      var width = element1.offsetWidth;
      element2.style.width = (width+100) + 'px';
    };