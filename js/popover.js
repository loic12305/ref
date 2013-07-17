////////////////////////////////////////////
// affiche de maniere animee une popOver  //
////////////////////////////////////////////
function showPopOver(divID) {
    // on l'affiche
    //-- rend invisible
    document.getElementById(divID).style.opacity='0';
    document.getElementById(divID).style.display = "block";  

    //on centre
    centerElmt(divID);
    // rend opac en anime
    $('#'+divID).animate({opacity: 1}, 500);
    // rend transparent le fond
    $('#pageCenter').animate({opacity: 0.5}, 500);
}

///////////////////////////////////////////////////////
// Fonction qui centre les pop apres leur apparition //
///////////////////////////////////////////////////////
function centerElmt(divID){
    //si c'est la popOver des news, centre auto avec fonction centerElmt    
    if(divID != "popOverPicture"){
	//on le centre
	document.getElementById(divID).style.left = "50%";
	document.getElementById(divID).style.top = "50%";
	//recupere la taille
	var w = (document.getElementById(divID).offsetWidth)/2;
	var h = (document.getElementById(divID).offsetHeight)/2;
	// recentre
	document.getElementById(divID).style.margin = "-"+h+"px 0 0 -"+w+"px";
    }
    //sinon c'est la popOver image on centre a la main
    else{
	document.getElementById(divID).style.width="95%";
	document.getElementById(divID).style.height="auto";
	document.getElementById(divID).style.margin = "0px 0 0 "+2+"%";
    }
}


/////////////////////////////////////////
// ferme de maniere animee une popOver //
/////////////////////////////////////////
function closePopOver(divID) {
    // cache la popover
    document.getElementById(divID).style.display = "none";
    //Jquery pour animé
    $('#pageCenter').animate({opacity: 1}, 500); 

    // si un popOver d'image est ouverte, on la ferme
    var open = document.getElementsByName("popOverPictureOpen")[0].value;
    if(open){
	document.getElementById('popOverPicture').innerHTML = "";
        document.getElementsByName("popOverPictureOpen")[0].value = false;
    }

}


////////////////////////////////////////////////////////////////////////////////////
// ajoute le code necessaire à popOverPicture.html pour afficher la photo cliquee //
////////////////////////////////////////////////////////////////////////////////////
function buildPopOverPicture(num){
    var pop = "<img src='images/gallery/HD/"+num+".jpg' alt='"+num+"'/><br/><br/><a href=\"javascript:closePopOver('popOverPicture');\" class='icon-remove'>FERMER</a>"
    document.getElementById('popOverPicture').innerHTML = pop;
    document.getElementsByName("popOverPictureOpen")[0].value = true;
    showPopOver('popOverPicture');
}