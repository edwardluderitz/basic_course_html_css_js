function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;

    let multiplicarGasolina = gasolinaInput * 0.7;

    if(multiplicarGasolina > alcoolInput){
        alert("O Alcool compensa mais que a Gasolina" + multiplicarGasolina);
    } else {
        alert("A Gasolina compensa mais que o Alcool" + multiplicarGasolina);
    }
}