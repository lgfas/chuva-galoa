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
  


function Mostrar() {
  var pegarDiv = document.getElementById("input");
  var apagarDiv = document.getElementById("testejs");

  if (pegarDiv.style.display === "none") {
    pegarDiv.style.display = "block";
    apagarDiv.style.display = "none";
  } else {
    pegarDiv.style.display = "none";
  }
}

function Enviar() {
  var teste = document.getElementById("enviado");
  var apagar = document.getElementById("input");

  if (teste.style.display === "none") {
    teste.style.display = "block";
    apagar.style.display = "none";
  } else {
    teste.style.display = "none";
    apagar.style.display = "block";
  }
}

function Expandir() {
  var perguntas = document.getElementById("erase");
  var maisperguntas = document.getElementById("ampliar");

  if (maisperguntas.style.display === "none") {
    maisperguntas.style.display = "block";
    perguntas.style.display = "none";
  } else {
    maisperguntas.style.display = "none";
    perguntas.style.display = "block";
  }
}