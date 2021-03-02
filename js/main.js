"use strict";
const bookmarkBtn = document.querySelector(".js-bookmark");
const pledgeBtn = document.querySelectorAll(".js-pledge-btn");
const modalBox = document.querySelectorAll(".js-modal-box");
const modal = document.querySelector(".js-modal");
const btnRadio = document.querySelectorAll(".btn--radio");
const openModalBtn = document.querySelector(".js-open-modal");
const closeModalBtn = document.querySelector(".js-close-modal");
const overlay = document.querySelector(".js-overlay");

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
// Applying changes to Modal
function activeModal() {
  btnRadio.forEach((btn) => {
    const parentContainer = btn.parentElement.parentElement.parentElement;

    const modalPledge = parentContainer.querySelectorAll(".js-modal-pledge");

    // for displaying modal border
    if (btn.checked) {
      parentContainer.classList.add("modal__box--active");
    } else {
      parentContainer.classList.remove("modal__box--active");
    }

    // for displaying modal pledge
    modalPledge.forEach((modal) => {
      if (btn.checked) {
        modal.classList.add("modal__pledge--active");
      } else {
        modal.classList.remove("modal__pledge--active");
      }
    });
  });
}

// Open modal
function openModal() {
  modal.classList.add("modal--active");
  overlay.classList.add("modal--overlay-active");
}

// Close modal
function closeModal() {
  modal.classList.remove("modal--active");
  overlay.classList.remove("modal--overlay-active");
}

// Event Handlers
bookmarkBtn.addEventListener("click", bookmarked);

modalBox.forEach((modal) => {
  modal.addEventListener("click", () => {
    const radioBtn = modal.querySelector(".btn--radio");
    radioBtn.checked = true;
    activeModal();
  });
});

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
overlay.addEventListener("click", function (e) {
  closeModal();
});
