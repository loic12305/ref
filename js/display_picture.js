function display_photo(id)
{
    document.getElementById('apercu').style.display='block';
    document.getElementById('photo_grande').src="images/gallery/"+id+".JPG";
    

}
function hide_photo(){
    document.getElementById('apercu').style.display='none';      
}

