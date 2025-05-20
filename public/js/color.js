if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.getElementsByTagName("html")[0].className = "dark-theme";
  var toggleButton = document.getElementById("light-dark-toggle-icon");
  if (toggleButton != null) {
    toggleButton.className = "fa fa-sun-o";
  }
}
