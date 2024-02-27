var tempofilme = 60; //variavel tempo do filme que e igual a 60 minutos, q foi atribuido
var inicioFilme = 0;//quando vai iniciar o filme 

//FOR  em ingles significa PARA, para todo o codigo
for (var t = 0 ; t < tempofilme; t++){// avariavel T e igual a 0 e TEMPO do filme e maior que T e 0 
    setTimeout(function(){// esta determinando uma funcao para definir o tempo 
        console.clear(); // esta definindo para limpar o console
        console.log("Assistindo filme:[" + (tempofilme - inicioFilme) + "] segundos.");
        //esta imprimindo a informacao, meio que atualizando no console os segundos
        inicioFilme++;
    },t*1000);
}