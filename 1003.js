console.log("Programador: Leonardo Rosinha Reis");
console.log("E-mail: leonardo.demian@gmail.com");
console.log("Data: 21/11/2019");
console.log("Exercicio 1001 - UriOnlineJudge");

function somar(){
    var A, B;
    A = parseInt(document.getElementById("A").value);
    console.log("Valor de A: ", A);
    B = parseInt(document.getElementById("B").value);
    console.log("Valor de B: ", B);
    var resultado = A + B;
    console.log("Resultado: ", resultado);
    
    if(isNaN(resultado)){
        document.getElementById("saida").innerHTML = "Digite valores INTEIROS para A e B!!";    
    } else{
        document.getElementById("saida").innerHTML = resultado;
    }
    focarform();
}

function focarform(){
    document.getElementById("A").value = "";
    document.getElementById("B").value = "";
    document.getElementById("A").focus();
}


