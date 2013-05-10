function decache(contenu)
{
    document.getElementById('contenu_home').style.display='none';
    document.getElementById('contenu_story').style.display='none';
    document.getElementById('contenu_gallery').style.display='none';
    document.getElementById('contenu_contact').style.display='none';

    new Effect.Appear(document.getElementById(contenu));
    
    
}
