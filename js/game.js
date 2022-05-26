document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("reset").style.display = "none";
  const app = {
    generateAnother: "Generate Another Card::?",
    won: "Congratulations...You Have Won This Game...",
    lost: "You Have Lost This Game...",
    error: "404 Brain Not Found...Try Reload This Page...",
    reload: "Please restart The Game...!",
    //Generate
  };
  const $ = document.querySelector(".generate");
  $.addEventListener("click", () => {
    var $$$ = document.getElementById("instruction").innerHTML;
    if ($$$ == app.lost) {
      alert(app.lost + app.reload);
      document.getElementById("reset").style.display = "block";
    } else if ($$$ == app.won) {
      document.getElementById("reset").style.display = "block";
      alert(app.won);
    } else {
      //Random Number
      var randomNumber;
      do {
        randomNumber = Math.floor((Math.random() * 100) / 7.6);
      } while (randomNumber == 0);
      //Card Image Source
      var image = document.createElement("img");
      var imageSource = "./images/" + randomNumber + ".png";
      image.src = imageSource;
      document.getElementById("content").appendChild(image);

      //Score
      var subScore = parseInt(document.getElementById("score").innerHTML);
      subScore += randomNumber;
      document.getElementById("score").innerHTML = subScore;
      //Win Lost Manager
      if (subScore < 21) {
        document.getElementById("instruction").innerHTML = app.generateAnother;
      } else if (subScore == 21) {
        document.getElementById("instruction").innerHTML = app.won;
      } else if (subScore > 21) {
        document.getElementById("instruction").innerHTML = app.lost;
      } else {
        document.getElementById("instruction").innerHTML = app.error;
      }
    }
  });
});
