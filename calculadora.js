const calcular = () => { // cantando o numero para calcular 
    let numero1 = document.getElementById("numero1");//LET atribuiu o nomes nos calculos e igual a funcao que identifica um ID
    let numero2 = document.getElementById("numero2");
    let resultado = document.getElementById("resultado");
    //determinou o resultado

    // o resultado do valor e igual ao numero do valor mais o numero do valor 2 
    resultado.value = parseInt(numero.value) + parseInt(numero2.value)
}