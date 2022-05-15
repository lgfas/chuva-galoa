function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementsByClassName("myBtn");
		var text = document.getElementById("resMen");
  
    if (dots.style.display === "none") {
			text.style.display = "inline";
      dots.style.display = "inline";
      btnText.innerHTML = "ver mais";
      moreText.style.display = "none";
    } else {
			text.style.display = "none";
      dots.style.display = "none";
      btnText.innerHTML = "";
      moreText.style.display = "inline";
    }
  }


function enviar() {
  var tpc = document.getElementById("topic");
  var body = document.getElementsByClassName("teste");
  var env = document.getElementsByClassName("enviar");

  if (env.style.display === "none") {
    tpc.style.display = "none";
    body.style.display = "none";
    env.style.display = "inline";
  }
}