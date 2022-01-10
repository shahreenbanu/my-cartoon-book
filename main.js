var images = ["Untitled design.png","bujji.png", "  Dora_the_Explorer.png" , "Doraemon_character.png", "Jako.jpg", "jian.gif", "lamput.png", "NobitaNobi.png", "Shizuka2005.jpg", "sunio.jpg" ];
var names = ["Cartoon Book","Bujji", "Dora", "Doraemon", "Jako", "Jian", "Lamput", "Nobita", "Shizuka"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]];
 
    document.getElementById("Imageholder").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
