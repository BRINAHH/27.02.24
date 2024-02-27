const variaval1 = "valor somente leitura"; //declaracao de variavel valor somente da leitura e valor editavel
var variaval2 = "valor editavel";

try { //TENTANDO colocar valores na variavel1, e inprimindo no console o recado
    variaval1 = "valor nao permitido";
    console.log("variavel1 foi alterada para:", variaval1);
} catch (e) { // colocar/pegar o recado no console 
    console.error("ops! ocorreu um erro:", e);
}

try {//com os mesmos codigos na variavel2
    variaval2 = "valor permitido";
    console.log(" a variavel2 foi alterada para:", variaval2);
} catch (e) {
    console.error("ops! ocorreu um erro:", e);
}