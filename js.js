function calcularCuotas(){
    var capital = document.getElementById("inputCapital").value;
    var interes = document.getElementById("inputInteres").value;
    var numeroCuotas = document.getElementById("inputCuotas").value;

    var resultado = parseInt(capital) * parseInt(interes) * parseInt(numeroCuotas);
    document.getElementById("resultado").innerHTML = "total " + resultado;

    return resultado;

} 


