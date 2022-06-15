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

    calculoResult.innerHTML = calculo;

    contentResult.classList.remove("hide");
}