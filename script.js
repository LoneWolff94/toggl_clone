    var menu = document.getElementById("menuBar");
      var bars = document.getElementById("menu");
      var cross = document.getElementById("cross");

      function openMenu() {
        menu.style.right = "0";
        bars.style.display = "none";
        cross.style.display = "inline-block";
      }

      function closeMenu() {
        menu.style.right = "-200rem";
        bars.style.display = "block";
        cross.style.display = "none";
      }