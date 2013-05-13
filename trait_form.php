<?php
    ob_start();
/*
	********************************************************************************************
	CONFIGURATION
	********************************************************************************************
*/
// destinataire est votre adresse mail. Pour envoyer &agrave; plusieurs &agrave; la fois, s&eacute;parez-les par une virgule
$destinataire = 'admin@lesrillettesenfut.fr';
 
// copie ? (envoie une copie au visiteur)
$copie = 'oui'; // 'oui' ou 'non'
 
// Messages de confirmation du mail
$message_envoye = "Votre message nous est bien parvenu !";
$message_non_envoye = "L'envoi du mail a &eacute;chou&eacute;, veuillez r&eacute;essayer SVP.";
 
// Messages d'erreur du formulaire
$message_erreur_formulaire = "Vous devez d'abord <a href=\"index.html\">envoyer le formulaire</a>.";
$message_formulaire_invalide = "V&eacute;rifiez que tous les champs soient bien remplis et que l'email soit sans erreur.";
 
/*
	********************************************************************************************
	FIN DE LA CONFIGURATION
	********************************************************************************************
*/
 
// on teste si le formulaire a &eacute;t&eacute; soumis
if (!isset($_POST['envoi']))
{
	// formulaire non envoy&eacute;
	echo '<p>'.$message_erreur_formulaire.'</p>'."\n";
}
else
{
	/*
	 * cette fonction sert &agrave; nettoyer et enregistrer un texte
	 */
	function Rec($text)
	{
		$text = htmlspecialchars(trim($text), ENT_QUOTES);
		if (1 === get_magic_quotes_gpc())
		{
			$text = stripslashes($text);
		}
 
		$text = nl2br($text);
		return $text;
	};
 
	/*
	 * Cette fonction sert &agrave; v&eacute;rifier la syntaxe d'un email
	 */
	function IsEmail($email)
	{
		$value = preg_match('/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!\.)){0,61}[a-zA-Z0-9_-]?\.)+[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!$)){0,61}[a-zA-Z0-9_]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/', $email);
		return (($value === 0) || ($value === false)) ? false : true;
	}
 
	// formulaire envoy&eacute;, on r&eacute;cup&egrave;re tous les champs.
	$nom     = (isset($_POST['nom']))     ? Rec($_POST['nom'])     : '';
	$prenom     = (isset($_POST['prenom']))     ? Rec($_POST['prenom'])     : '';
	$tel     = $_POST['phone'];
	$email   = (isset($_POST['email']))   ? Rec($_POST['email'])   : '';
	$objet   = "Demande du site de la fanfare";
	$message = (isset($_POST['message'])) ? Rec($_POST['message']) : '';
	$message = $message."
email : ".$email." tel : ".$tel;

	$email = (IsEmail($email)) ? $email : ''; // soit l'email est vide si erron&eacute;, soit il vaut l'email entr&eacute;

	if (($nom != '') && ($email != '') && ($objet != '') && ($message != ''))
	{
		// les 4 variables sont remplies, on g&eacute;n&egrave;re puis envoie le mail
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'From:'.$nom.' '.$prenom.' <'.$email.'>' . "\r\n" .
					'Reply-To:'.$email. "\r\n" .
					'X-Mailer:PHP/'.phpversion();
 
		// envoyer une copie au visiteur ?
		if ($copie == 'oui')
		{
			$cible = $destinataire.','.$email;
		}
		else
		{
			$cible = $destinataire;
		};
 
		// Remplacement de certains caract&egrave;res sp&eacute;ciaux
		$message = str_replace("&#039;","'",$message);
		$message = str_replace("&#8217;","'",$message);
		$message = str_replace("&quot;",'"',$message);
		$message = str_replace('<br>','',$message);
		$message = str_replace('<br />','',$message);
		$message = str_replace("&lt;","<",$message);
		$message = str_replace("&gt;",">",$message);
		$message = str_replace("&amp;","&",$message);
 
		// Envoi du mail
		if (mail($cible, $objet, $message, $headers))
		{
			echo '<p>'.$message_envoye.'</p>'."\n";
			header ("Refresh: 2;URL=index.html");
		}
		else
		{
			echo '<p>'.$message_non_envoye.'</p>'."\n";
			header ("Refresh: 2;URL=index.html");
			
		};
	}
	else
	{
		// une des 3 variables (ou plus) est vide ...
		echo '<p>'.$message_formulaire_invalide.' <a href="index.html">Retour au formulaire</a></p>'."\n";
	};
}; // fin du if (!isset($_POST['envoi']))




?>
