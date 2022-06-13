/* alterar a data, ver a data alterar titulo da lista*/

var h2Text = document.getElementById("hText");
var h2Text2 = document.getElementById("h2Text2");
var h2Text3 = document.getElementById("h2text3");
var h2Text4 = document.getElementById("h2text4");

function alterarTitulo(input){

  localStorage.setItem("titulo", h2Text.innerHTML = input.value);
  input.value = "";
}

function alterarTitulo2(input){

    localStorage.setItem("titulo2", h2Text2.innerHTML = input.value);
    input.value = "";

}

function alterarTitulo3(input){

    localStorage.setItem("titulo3", h2Text3.innerHTML = input.value);
    input.value = "";

}

function alterarTitulo4(input){

    localStorage.setItem("titulo4", h2Text4.innerHTML = input.value);
    input.value = "";
}

/* ------------------------------------------------------------- */

var dtusuario = document.getElementById("data4");
var dtusuario2 = document.getElementById("data5");
var dtusuario3 = document.getElementById("data7p");
var dtusuario4 = document.getElementById("data8p");


function dataPedido(input){

    localStorage.setItem("dataUsu", dtusuario.innerHTML = input.value);
    input.value = "";
}

function dataPedido2(input){

    localStorage.setItem("dataUsu2", dtusuario2.innerHTML = input.value);
    input.value = "";

}

function dataPedido3(input){

    localStorage.setItem("dataUsu3", dtusuario3.innerHTML = input.value);
    input.value = "";

}

function dataPedido4(input){

    localStorage.setItem("dataUsu4", dtusuario4.innerHTML = input.value);
    input.value = "";

}

onload = function attPag(){

    var ttAlterado = localStorage.getItem("titulo");
    h2Text.innerText = ttAlterado;

    var ttAlterado2 = localStorage.getItem("titulo2");
    h2Text2.innerHTML = ttAlterado2;

    var ttAlterado3 = localStorage.getItem("titulo3");
    h2Text3.innerHTML = ttAlterado3;

    var ttAlterado4 = localStorage.getItem("titulo4");
    h2Text4.innerHTML = ttAlterado4;


    var dtUsua = localStorage.getItem("dataUsu");
    dtusuario.innerHTML = dtUsua;

    var dtUsua2 = localStorage.getItem("dataUsu2");
    dtusuario2.innerHTML = dtUsua2;

    var dtUsua3 = localStorage.getItem("dataUsu3");
    dtusuario3.innerHTML = dtUsua3;

    var dtUsua4 = localStorage.getItem("dataUsu4");
    dtusuario4.innerHTML = dtUsua4;

}


const data2 = new Date();

 const dia = String(data2.getDate()).padStart(2,'0');

 const mes = String(data2.getMonth() +1).padStart(2,'0');

 const ano = data2.getFullYear();

 var dataAtual = `${dia}/${mes}/${ano}`;
 var data = document.getElementById("date");
 data.innerHTML = dataAtual;


/* chamar uma tela */

var btSimilar = document.getElementById("similares");
var btEtico = document.getElementById("eticos");
var btPopular = document.getElementById("popular");
var btPerfumaria = document.getElementById("perfumaria");

btSimilar.addEventListener("click",telaSimilarF);
btEtico.addEventListener("click",telaEticoF);
btPopular.addEventListener("click",telaPopularF);
btPerfumaria.addEventListener("click",telaPerfumariaF);

/* variaveis dos boxs das telas*/
let telaSimilar = document.getElementById("container-similar");
let telaEtico = document.getElementById("container-Etico");
let telaPopular = document.getElementById("container-popular");
let telaPerfumaria = document.getElementById("container-perfumaria");

function telaSimilarF(){

    telaSimilar.style.display = "block";
    telaEtico.style.display = "none";
    telaPopular.style.display = "none";
    telaPerfumaria.style.display = "none";
    
}

function telaEticoF(){

    telaEtico.style.display = "block";
    telaSimilar.style.display = "none"
    telaPopular.style.display = "none";
    telaPerfumaria.style.display = "none";
}

function telaPopularF(){

    telaPopular.style.display = "block";
    telaEtico.style.display = "none";
    telaSimilar.style.display = "none";
    telaPerfumaria.style.display = "none";
}

function telaPerfumariaF(){

    telaPerfumaria.style.display ="block";
    telaEtico.style.display = "none";
    telaPopular.style.display = "none";
    telaSimilar.style.display = "none";
}
