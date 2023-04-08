function decreaseHP(){
    let pontosAtuais = parseInt($("#currentHP").html()) -1 ;
    console.log(pontosAtuais)
    if(pontosAtuais >= 0){
        $("#currentHP").text(pontosAtuais)
    }
}
function decreaseSanity(){
    let pontosAtuais = parseInt($("#currentSanity").html()) -1 ;
    if(pontosAtuais >= 0){
        $("#currentSanity").text(pontosAtuais)
    }
}