function valider(){   
    if(formContact.nom.value == '' ) {   
	alert('Merci de saisir votre nom');   
	formContact.nom.focus(); //met le curseur dans le champ demandé   
	return false; //enpèche l'envoi du formulaire   
    }   

    if(formContact.prenom.value == '') {   
	alert('Merci de saisir votre Prenom');   
	formContact.prenom.focus();   
	return false;   
    }   

    if(formContact.mail.value == '') {   
	alert('Merci de saisir votre adresse e-mail');   
	formContact.mail.focus();   
	return false;   
    }

    
    ///// un exemple pour tester le numéro de tel   
    var num_tel = formContact.phone.value;   

    
    // Le champs est vide   
    if ( num_tel == "" ){   
	alert ( "Le champs téléphone est vide !" );   
	formContact.phone.focus();   
	return false;   
    }
    else{  
	var chiffres = new String(num_tel);    
	// Enlever tous les charactères sauf les chiffres   
	chiffres = chiffres.replace(/[^0-9]/g, '');   
	// Nombre de chiffres   
	compteur = chiffres.length;   
	
	if (chiffres.length != 10){   
	    alert("Assurez-vous de rentrer un numéro à 10 chiffres (xxx-xxx-xxxx)");   
	    formContact.phone.focus();   
	    return false;   
	}  
    }  

    if (formContact.texte.value==""){   
	alert("Rentrez un texte");   
	formContact.texte.focus();   
	return false;   
    }   
    //// fin test teleph   
    
    //si on est arrivé jusque la c'est que toutes les verif ont été ok donc    
    return true; //autorise l'envoi du formulaire   
}   