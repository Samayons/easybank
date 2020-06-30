
function navClick(x) {
    x.classList.toggle("change");
}

let isClicked = false;

$(document).ready(function(){
    $(".toggle-collapse").click(function(){
      if (!isClicked) {
        $(".navbar-collapse").show();
        isClicked = true;
      } else {
        $(".navbar-collapse").hide();
        isClicked = false;
      }
    });
});