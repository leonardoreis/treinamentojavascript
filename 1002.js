function calcular(){
    var entrada = document.getElementById("entrada").value;
    console.log(entrada);

    var area = 3.14159*(entrada*entrada);
    area = parseFloat(area.toFixed(4));
    document.getElementById("saida").innerHTML = "A="+ area;
    limpar();
    selecionar();

}

function limpar(){
    document.getElementById('entrada').value = "";
}

function selecionar(){
    document.getElementById("entrada").focus();

}