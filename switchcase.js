const sortear = () => {
    let nomes = ["Pocoyo","Elly","Pato","Loula","Sonequita","Soninho","Lagarta","Baleia","Octopus","Aliens"]
    //na linha acima esta atribuindo nomes 
    let h1Nome = document.getElementById("nome");  //atribuindo nome ao documento de NOME
    
    let achouNumero = false; //atribuindo nome
    let numeroSorteado; //atribuindo nome
    
    while (achouNumero == false) { //estrutura de repeticao WHILE) comparacao ==... atribuicao =;
        // comprando o achounumero com o falso, se repetindo, ise o numero sorteado e maior nomes 
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) { // algoritimo de validacao;
            achouNumero = true; //definindo q achou o numero e verdadeiro 
        }
    }
    //Na linha abaixo vai acontecer um embaralhamento dos numeros assim os nomes que foram atribuidos pelo let vai ser correspondentes a posicoes que eles estao
    switch (numeroSorteado) {
        case 0:// posicao dos nomes que foram atribuidos
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1:// posicao dos nomes que foram atribuidos
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 2:// posicao dos nomes que foram atribuidos
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:// posicao dos nomes que foram atribuidos
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:// posicao dos nomes que foram atribuidos
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:// posicao dos nomes que foram atribuidos
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 6:// posicao dos nomes que foram atribuidos
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 7:// posicao dos nomes que foram atribuidos
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 8:// posicao dos nomes que foram atribuidos
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 9:// posicao dos nomes que foram atribuidos
            h1Nome.innerText = nomes[numeroSorteado];
            break;
    
            default://padrao texto sempre vai ser assim o recado na linha abaixo
                h1Nome.innerText = " o numero sorteado nao tem na lista";
        
            h1Nome.innerText += " o numero sorteado foi:" + numeroSorteado;
    }
    }
    
