console.log("**** app.js *******");

const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langlist = document.getElementById("lang-list");

const newUl = document.createElement("ul");
langlist.appendChild(newUl);

//? addBtn event handler
addBtn.addEventListener("click", () => {
  if (!langInput.value) {
    alert("Please enter a language");
  } else {
    newUl.innerHTML += `<li>${langInput.value}</li>`;
    langInput.value = "";
  }
  langInput.focus();
});
// deletebtn event handler
deleteBtn.addEventListener("click", () => {
  newUl.childElementCount > 0
    ? newUl.removeChild(newUl.lastElementChild)
    : alert("there is no item to delete");
});

// ? enter key event
langInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    addBtn.click();
  }
  if (event.keyCode === 46) {
    deleteBtn.click();
  }
});
//? del key event

// ? onload event handler

window.addEventListener("load", () => {
  langInput.focus();
});