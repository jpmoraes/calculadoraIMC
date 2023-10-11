function Calcule(){

    var valor01 = parseInt(document.getElementById('valor01').value);
    var valor02 = parseInt(document.getElementById('valor02').value);
    var response = document.getElementById('resposta');

    response.textContent =  valor01 - valor02;

    if(response.textContent > 0 || response.textContent == 0  ){

        response.style.color = "blue";
 
    }else{

        response.style.color = "red";
    }

  

}