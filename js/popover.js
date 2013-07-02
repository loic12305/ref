// SHOW POP-OVER
function showPopOver(divID) {
    //on le centre
    document.getElementById(divID).style.left = "50%";
    document.getElementById(divID).style.top = "50%";
    // on l'afficheSHOW THE DIV
    document.getElementById(divID).style.display = "block";

    //recupere la taille
    var w = (document.getElementById(divID).offsetWidth)/2;
    var h = (document.getElementById(divID).offsetWidth)/2;
    // recentre
    document.getElementById(divID).style.margin = "-"+h+"px 0 0 -"+w+"px";
}

// CLOSE POP-OVER
function closePopOver(divID) {
    // HIDE THE DIV
    document.getElementById(divID).style.display = "none";
}
