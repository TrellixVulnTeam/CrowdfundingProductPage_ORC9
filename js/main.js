"use strict";
const bookmarkBtn = document.querySelector(".js-bookmark");

// Applying changes to bookmark button
function bookmarked() {
  bookmarkBtn.classList.toggle("btn--bookmarked");

  if (bookmarkBtn.classList.contains("btn--bookmarked")) {
    //   changing icon
    bookmarkBtn
      .querySelector(".js-bookmarked")
      .setAttribute("href", "images/sprite.svg#icon-bookmarked");

    // changing text
    bookmarkBtn.querySelector(".js-bookmark-text").innerText = "Bookmarked";
  } else {
    //   changing icon
    bookmarkBtn
      .querySelector(".js-bookmarked")
      .setAttribute("href", "images/sprite.svg#icon-bookmark");

    // changing text
    bookmarkBtn.querySelector(".js-bookmark-text").innerText = "Bookmark";
  }
}

// Event Handlers
bookmarkBtn.addEventListener("click", bookmarked);
