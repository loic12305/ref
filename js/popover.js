// SHOW POP-OVER
function showPopOver(divID) {
    //on le centre
    document.getElementById(divID).style.left = "50%";
    document.getElementById(divID).style.top = "50%";
    // on l'affiche
    document.getElementById(divID).style.opacity='0';
    document.getElementById(divID).style.display = "block";
    $('#'+divID).animate({opacity: 1}, 500);


    //recupere la taille
    var w = (document.getElementById(divID).offsetWidth)/2;
    var h = (document.getElementById(divID).offsetWidth)/2;
    // recentre
    document.getElementById(divID).style.margin = "-"+h+"px 0 0 -"+w+"px";
    
    $('#pageCenter').animate({opacity: 0.5}, 500);
}

// CLOSE POP-OVER
function closePopOver(divID) {
    // HIDE THE DIV
    document.getElementById(divID).style.display = "none";
    
    //Jquery pour animé
    $('#pageCenter').animate({opacity: 1}, 500);

}
