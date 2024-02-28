const variaval1 = "valor somente leitura"; 
//na linha acima esta constando/criando um valor fixo
var variaval2 = "valor editavel";//aqui temos um valor que pode ser mudado

try { //TENTANDO colocar valores na variavel1, e inprimindo no console o recado
    variaval1 = "valor nao permitido";
    console.log("variavel1 foi alterada para:", variaval1);
} catch (e) { // colocar/pegar o recado no console 
    console.error("ops! ocorreu um erro:", e); 
}

try {//TENTANDO colocar valores na variavel2, assim estara no console informacoes sobre o console
    variaval2 = "valor permitido";
    console.log(" a variavel2 foi alterada para:", variaval2);
} catch (e) {
    console.error("ops! ocorreu um erro:", e);
}
