"use strict";
const bookmarkBtn = document.querySelector(".js-bookmark");
const pledgeBtn = document.querySelectorAll(".js-pledge-btn");
const btnRadio = document.querySelectorAll(".btn--radio");
const modal = document.querySelector(".js-modal");
const modalBox = document.querySelectorAll(".js-modal-box");
const successModal = document.querySelector(".js-modal-success");
const openModalBtn = document.querySelectorAll(".js-open-modal");
const closeModalBtn = document.querySelector(".js-close-modal");
const closeSuccessModalBtn = document.querySelector(".js-close-success");
const openSuccessModalBtn = document.querySelectorAll(".js-open-success");
const overlay = document.querySelector(".js-overlay");
const progressBar = document.querySelector(".js-progress");
const amount = document.querySelector(".js-amount");
const backers = document.querySelector(".js-backers");
const amountGiven = document.querySelectorAll(".js-amount-given");

let backerNumber = 5007;
let amountCollected = 89914;

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

// Incrementing backers
function incrementBackers() {
  backerNumber++;
  backers.textContent = backerNumber;
}
// Incrementing amount
function incrementAmount() {
  amountGiven.forEach((amt) => {
    const parent = amt.parentElement.parentElement.parentElement;
    if (parent.classList.contains("modal__box--active")) {
      amountCollected += Number(amt.value);
      amount.textContent = `$${amountCollected}`;
    }
    amt.value = "";
  });
}

// Open modal
function openModal() {
  modal.classList.add("modal--active");
  overlay.classList.add("modal--overlay-active");
}

// Open success Modal
function openSuccessModal() {
  successModal.classList.add("modal--active");
}

// Close modal
function closeModal() {
  modal.classList.remove("modal--active");
  overlay.classList.remove("modal--overlay-active");
}

// close Success Modal
function closeSuccessModal() {
  successModal.classList.remove("modal--active");
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

openModalBtn.forEach((btn) => btn.addEventListener("click", openModal));
closeModalBtn.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
overlay.addEventListener("click", function (e) {
  closeModal();
});

openSuccessModalBtn.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    closeModal();
    openSuccessModal();
    incrementBackers();
    incrementAmount();
  })
);

closeSuccessModalBtn.addEventListener("click", () => {
  closeSuccessModal();
});
