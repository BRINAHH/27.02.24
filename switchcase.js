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
    // trocar os numeros sorteados
    switch (numeroSorteado) {
        case 0:// caso o numero 0 e sorteado
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 2:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 6:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 7:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 8:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 9:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
    
            default://padrao texto sempre vai ser assim o recado
                h1Nome.innerText = " o numero sorteado nao tem na lista";
        
            h1Nome.innerText += " o numero sorteado foi:" + numeroSorteado;
    }
    }
    
