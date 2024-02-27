var tempofilme = 60;
var inicioFilme = 0;

for (var t = 0 ; t < tempofilme; t++){
    setTimeout(function(){
        console.clear();
        console.log("Assistindo filme:[" + (tempofilme - inicioFilme) + "] segundos.");
        inicioFilme++;
    },t*1000);
}