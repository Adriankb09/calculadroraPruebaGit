function calcularCuotas(){
    var capital = parseFloat(document.getElementById("inputCapital").value);
    var interes = parseFloat(document.getElementById("inputInteres").value) / 12 /100;
    var numeroCuotas = parseFloat(document.getElementById("inputCuotas").value);


    resultado = capital * ( (Math.pow((1+interes),numeroCuotas) * interes) / (Math.pow((1+interes), numeroCuotas) - 1))
    document.getElementById("resultado").innerHTML = "total " + resultado.toFixed(2);
    return resultado;
    //viendo xd
} 


