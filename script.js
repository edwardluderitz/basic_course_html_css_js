function infosobre(){
    let contentInfo = document.getElementById("textinfocalc")
    let textfirstInfo = document.getElementById("textfirst")
    let sobreResult = document.getElementById("sobre-result");
    textfirstInfo.innerHTML = "Como é feito o cálculo:"
    contentInfo.innerHTML = "O cálculo básico para se descobrir se o álcool é vantajoso ou não em relação à gasolina é simples. Basta dividir o preço do litro do álcool pelo da gasolina. Se o resultado for inferior a 0,7, use álcool. Se for maior que 0,7, então a gasolina é melhor.";
    sobreResult.classList.remove("hide");
}

function infosobresair(){
    let sobreResult = document.getElementById("sobre-result");
    sobreResult.classList.add("hide");
}

function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");
    let calculoResult = document.getElementById("calculo-result");

    let calculo = alcoolInput / gasolinaInput;

    if(calculo < 0.7){
        textResult.innerHTML = "Compensa usar Álcool";
    } else {
        textResult.innerHTML = "Compensa usar Gasolina";
    }

    calculoResult.innerHTML = "Resultado do Cálculo: "+ calculo.toFixed(1);

    contentResult.classList.remove("hide");
}


