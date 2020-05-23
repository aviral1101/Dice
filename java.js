var ran_number = Math.floor(Math.random()*6)+1;
var ran_image = "dice" + ran_number + ".png";
var random = "images/" + ran_image;
var images1 = document.querySelectorAll("img")[0];
images1.setAttribute("src",random);



// for the second image lets see
var number1= Math.floor(Math.random()*6)+1;
var randomImage="dice"+ number1+".png";
var rand= "images/"+randomImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",rand);



if (rand>random)
{
  document.querySelector("h1").innerHTML="Player 2 wins🎉";

}
else if (rand<random)
{
  document.querySelector("h1").innerHTML="Player 1 wins🎉";
}
else
{
  document.querySelector("h1").innerHTML="Oh! Thats a draw. Try again";
}
