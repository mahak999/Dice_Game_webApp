randomNumber1 = Math.floor((Math.random() * 6) + 1);
left_img = "images/dice" + randomNumber1 + ".png";
document.getElementsByClassName("img1")[0].src = left_img;

randomNumber2 = Math.floor((Math.random() * 6) + 1);
right_img = "images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("img2")[0].src = right_img;

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
};
