"use strict";
const bookmarkBtn = document.querySelector(".js-bookmark");
const btnRadio = document.querySelectorAll(".btn--radio");
const modal = document.querySelector(".js-modal");
const modalBox = document.querySelectorAll(".js-modal-box");
const successModal = document.querySelector(".js-modal-success");
const openModalBtn = document.querySelectorAll(".js-open-modal");
const closeModalBtn = document.querySelector(".js-close-modal");
const closeSuccessModalBtn = document.querySelector(".js-close-success");
const overlay = document.querySelector(".js-overlay");
const pledge1Btn = document.querySelector(".js-pledge-1");
const menu = document.querySelector(".js-menu");
const btnOpenMenu = document.querySelector(".js-btn-menu-open");
const btnCloseMenu = document.querySelector(".js-btn-menu-close");

let backerNumber = 5007;
let amountCollected = 89914;
let progress = 70;

// Applying changes to bookmark button
function bookmarked() {
  bookmarkBtn.classList.toggle("btn--bookmarked");

  if (bookmarkBtn.classList.contains("btn--bookmarked")) {
    // changing icon
    bookmarkBtn
      .querySelector(".js-bookmarked")
      .setAttribute("href", "images/sprite.svg#icon-bookmarked");

    // changing text
    bookmarkBtn.querySelector(".js-bookmark-text").innerText = "Bookmarked";
  } else {
    // changing icon
    bookmarkBtn
      .querySelector(".js-bookmarked")
      .setAttribute("href", "images/sprite.svg#icon-bookmark");

    // changing text
    bookmarkBtn.querySelector(".js-bookmark-text").innerText = "Bookmark";
  }
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

// Open success Modal
function openSuccessModal() {
  successModal.classList.add("modal--active");
  overlay.classList.add("modal--overlay-active");
}

// close Success Modal
function closeSuccessModal() {
  successModal.classList.remove("modal--active");
  overlay.classList.remove("modal--overlay-active");
}

// Opening menu
function openMenu() {
  overlay.classList.add("modal--overlay-active");
  menu.classList.add("navigation--active");
  if (menu.classList.contains("navigation--active")) {
    btnCloseMenu.classList.add("active");
    btnOpenMenu.classList.add("not-active");
  }
}

// Closing menu
function closeMenu() {
  overlay.classList.remove("modal--overlay-active");
  menu.classList.remove("navigation--active");
  btnCloseMenu.classList.remove("active");
  btnOpenMenu.classList.remove("not-active");
}

// Incrementing backers
function incrementBackers() {
  backerNumber++;
  document.querySelector(".js-backers").textContent = backerNumber;
}
// Incrementing amount
function incrementAmount() {
  document.querySelectorAll(".js-amount-given").forEach((amt) => {
    const parent = amt.parentElement.parentElement.parentElement;
    const pledge2Btn = parent.querySelector(".js-pledge-2");
    const pledge3Btn = parent.querySelector(".js-pledge-3");

    if (amountCollected === 100000) {
      amountCollected = 89914;
    } else {
      if (parent.classList.contains("modal__box--active")) {
        const amount = document.querySelector(".js-amount");

        if (parent.contains(pledge2Btn)) {
          if (
            Number(amt.value) === "" ||
            Number(amt.value) < 25 ||
            Number(amt.value) > 200
          ) {
            alert("Minimum amount is $25 and maximum is $200");
          } else if (Number(amt.value) >= 25) {
            amountCollected += Number(amt.value);
            amount.textContent = `$${amountCollected}`;
            incrementBackers();
            incrementProgress();
            closeModal();
            openSuccessModal();
            if (amountCollected >= 10000) {
              amountCollected = 89914;
            }
          }
        } else if (parent.contains(pledge3Btn)) {
          if (
            Number(amt.value) === "" ||
            Number(amt.value) < 75 ||
            Number(amt.value) > 200
          ) {
            alert("Minimum amount is $75 and maximum is $200");
          } else if (Number(amt.value) >= 75) {
            amountCollected += Number(amt.value);
            amount.textContent = `$${amountCollected}`;
            incrementBackers();
            incrementProgress();
            closeModal();
            openSuccessModal();
            if (amountCollected >= 10000) {
              amountCollected = 89914;
            }
          }
        }
      }
    }
    amt.value = "";
  });
}

// incrementing progress bar
function incrementProgress() {
  progress += 2;
  if (progress === 100) {
    progress = 70;
  } else {
    document.querySelector(".js-progress").style.width = `${progress}%`;
  }
}

// Setting modal to default after closing
function resetDefaultModal() {
  modalBox.forEach((box) => box.classList.remove("modal__box--active"));
  btnRadio.forEach((btn) => (btn.checked = false));
  document
    .querySelectorAll(".js-modal-pledge")
    .forEach((pledge) => pledge.classList.remove("modal__pledge--active"));
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
closeModalBtn.addEventListener("click", () => {
  closeModal();
  resetDefaultModal();
});

pledge1Btn.addEventListener("click", () => {
  incrementBackers();
  incrementProgress();
  closeModal();
  openSuccessModal();
});

const openSuccessModalBtn = document.querySelectorAll(".js-open-success");

openSuccessModalBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    incrementAmount();
  })
);

closeSuccessModalBtn.addEventListener("click", () => {
  closeSuccessModal();
  resetDefaultModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
    closeSuccessModal();
    if (menu.classList.contains("navigation--active")) {
      closeMenu();
    }
  }
});
overlay.addEventListener("click", function (e) {
  closeModal();
  closeSuccessModal();
  if (menu.classList.contains("navigation--active")) {
    closeMenu();
  }
});

btnOpenMenu.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);
