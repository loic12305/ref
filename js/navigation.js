function display_content(content)
{
    document.getElementById('contenu_home').style.display='none';
    document.getElementById('contenu_story').style.display='none';
    document.getElementById('contenu_gallery').style.display='none';
    document.getElementById('contenu_contact').style.display='none';
    document.getElementById('contenu_video').style.display='none';

    new Effect.Appear(document.getElementById(content));
    
    
}
