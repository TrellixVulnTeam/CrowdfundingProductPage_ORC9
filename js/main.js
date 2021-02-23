"use strict";
const bookmarkBtn = document.querySelector(".js-bookmark");

// Applying changes to bookmark button
function bookmarked() {
  bookmarkBtn.classList.add("btn--bookmarked");
  //   changing icon
  bookmarkBtn
    .querySelector(".js-bookmarked")
    .setAttribute("href", "images/sprite.svg#icon-bookmarked");

  // changing text
  bookmarkBtn.querySelector(".js-bookmark-text").innerText = "Bookmarked";
}

// Event Handlers
bookmarkBtn.addEventListener("click", bookmarked);
