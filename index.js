// The following code generates a random number between 1 to 6 
var randomNumber1=Math.floor(Math.random()*6)+1;

// 0 - 0.9999
// * 6
// 0 - 5.9999 + 1
// 1 - 6.999
// 1 - 6

console.log(randomNumber1)

// using the random number, we're choosing the random image source 
var randomImageSource="assets/dice "+randomNumber1+".png";
console.log(randomImageSource);

// selecting and setting the image source of the player 1 
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImageSource);


// assets/dice 1.png
// assets/dice 2.png
// assets/dice 3.png

// selecting and setting the image source of the player 1 
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="assets/dice "+randomNumber2+".png";


document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h2").innerHTML="Player 1 Wins!";
  }
  else if(randomNumber2>randomNumber1){
    document.querySelector("h2").innerHTML="Player 2 Wins!";
}
  else{
      document.querySelector("h2").innerHTML="Draw!";
  }

