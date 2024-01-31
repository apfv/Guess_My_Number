"use strict";

/*

console.log(document.querySelector(".message").textContent);

// Tip نکنه
//  در واقع ما در اینجا DOM را دست کاری کردیم
document.querySelector(".message").textContent = "👍 Correct Number!";

document.querySelector(".number").textContent = 13;

document.querySelector(".score").textContent = 10;

// Tip نکته
// نحوه دسترسی به داخل تگ input با استفادهخ از value
document.querySelector(".guess").value = 1;

*/

// Tip نکته
// با کلیک بروی باتن مقدار اول به تابع addEventListener پاس داده می شود که موجب ران شدن یا صدا کردن ورودی دوم به عنوان یک تابع دلخواه می شود

// Tip مهم
// ساخت عدد تصادفی
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

let messageClass = document.querySelector(".message");

let bodyClass = document.querySelector("body");

let numberClass = document.querySelector(".number");

let highscoreClass = document.querySelector(".highscore");

let scoreClass = document.querySelector(".score");

let guessClass = document.querySelector(".guess");

// document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess >= 1 && guess <= 20 && guess) {
    if (guess === number) {
      messageClass.textContent = "👍 Correct Number!";

      bodyClass.style.backgroundColor = "#60b347";

      numberClass.textContent = number;

      if (score > highscore) {
        highscore = score;

        highscoreClass.textContent = highscore;
      }
    } else if (guess > number) {
      if (score > 1) {
        messageClass.textContent = "📈 Too high!";
        score--;
        scoreClass.textContent = score;
      } else {
        messageClass.textContent = "🔥 You lost the game";

        bodyClass.style.backgroundColor = "#e74c3c";

        scoreClass.textContent = 0;
      }
    } else if (guess < number) {
      if (score > 1) {
        messageClass.textContent = "📉 Too low!";
        score--;
        scoreClass.textContent = score;
      } else {
        messageClass.textContent = "🔥 You lost the game";

        bodyClass.style.backgroundColor = "#e74c3c";

        scoreClass.textContent = 0;
      }
    }
  } else {
    if (score > 1) {
      messageClass.textContent = "⛔ No number";
      score--;
      scoreClass.textContent = score;
    } else {
      messageClass.textContent = "🔥 You lost the game";

      bodyClass.style.backgroundColor = "#e74c3c";

      scoreClass.textContent = 0;
    }
  }
});

// شروع مجدد بازی
document.querySelector(".again").addEventListener("click", function () {
  numberClass.textContent = "?";

  guessClass.value = "";

  messageClass.textContent = "Start guessing...";

  score = 20;
  scoreClass.textContent = score;

  bodyClass.style.backgroundColor = "#222";

  number = Math.trunc(Math.random() * 20) + 1;
});
