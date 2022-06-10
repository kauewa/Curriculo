function ligar(x){
    if(x == 1){
        document.getElementById("port").classList.add('ligado');
        document.getElementById("ing").classList.remove('ligado');
    }else if(x == 2){
        document.getElementById("ing").classList.add('ligado');
        document.getElementById("port").classList.remove('ligado');
    }
}