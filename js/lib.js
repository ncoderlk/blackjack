document.addEventListener("DOMContentLoaded", () => {
  const name = prompt("Enter Your Name Here...", "");
  var prev = document.getElementById("user").innerHTML;
  document.getElementById("user").innerHTML = prev + "" + name;
  const object = {
    generateAnother: "Generate Another Card::?",
    won: "You Have Won This Game...",
    lost: "You Have Lost This Game...",
    error: "404 Brain Not Found...Try Reload This Page...",
    reload: "Please Restart The Game...!",
  };
  /*Generate Button*/
  const btn$ = document.querySelector(".generate");
  btn$.addEventListener("click", () => {
    var $ = document.getElementById("final").innerHTML;
    if ($ == object.lost) {
      alert(object.lost + object.reload);
      document.getElementById("restart").style.display = "block";
    } else if ($ == object.won) {
      document.getElementById("restart").style.display = "block";
      alert(object.won);
    } else {
      //Random Number
      var randomNumber;
      do {
        randomNumber = Math.floor((Math.random() * 100) / 7.6);
      } while (randomNumber == 0);
      //Card Image Source
      var image = document.createElement("img");
      var imageSource = "../images/" + randomNumber + ".png";
      image.src = imageSource;
      document.getElementById("content").appendChild(image);

      //Score
      var subScore = parseInt(document.getElementById("cr-score").innerHTML);
      subScore += randomNumber;
      document.getElementById("cr-score").innerHTML = subScore;
      //Win Lost Manager
      if (subScore < 21) {
        document.getElementById("final").innerHTML = object.generateAnother;
      } else if (subScore == 21) {
        document.getElementById("final").innerHTML = object.won;
      } else if (subScore > 21) {
        document.getElementById("final").innerHTML = object.lost;
      } else {
        document.getElementById("final").innerHTML = object.error;
      }
    }
  });
  //Restart button
  const btn$$ = document.querySelector(".restart");
  btn$$.addEventListener("click", () => {
    document.getElementById("cr-score").innerHTML = "";
    location.reload();
  });
});
