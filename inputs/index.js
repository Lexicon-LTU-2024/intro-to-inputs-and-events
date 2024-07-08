const formInput = document.querySelector(".form-input");
const formRadio = document.querySelector(".form-radio");
const formCheckbox = document.querySelector(".form-checkbox");
const formSelect = document.querySelector(".form-select");

// A submit event comes with a default behavior that reloades the page and resets all the inputs in the form. This behavior can be overridden with something called the "event" object.
formInput.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = formInput.querySelector("#username");
  const email = formInput.querySelector("#email");
  const number = formInput.querySelector("#number");

  const usernameValue = username.value;
  const emailValue = email.value;
  const numberValue = number.value;

  const data = {
    username: usernameValue,
    email: emailValue,
    number: numberValue,
  };

  console.log("data:", data);
});

formRadio.addEventListener("submit", (event) => {
  event.preventDefault();

  const sweden = formRadio.querySelector("#sweden");
  const norway = formRadio.querySelector("#norway");
  const denmark = formRadio.querySelector("#denmark");

  const radioData = {
    sweden: sweden.checked,
    norway: norway.checked,
    denmark: denmark.checked,
  };

  console.log(radioData);

  // Alternative way
  const checkedRadio = document.querySelector("input[type=radio]:checked");
  console.log("checkedRadio:", checkedRadio);
});

formCheckbox.addEventListener("submit", (event) => {
  event.preventDefault();

  const javascript = formCheckbox.querySelector("#javascript");
  const html = formCheckbox.querySelector("#html");
  const css = formCheckbox.querySelector("#css");

  const checkboxData = {
    javascript: javascript.checked,
    html: html.checked,
    css: css.checked,
  };

  console.log(checkboxData);
});

formSelect.addEventListener("submit", (event) => {
  event.preventDefault();

  const select = formSelect.querySelector(".select");

  console.log(select.value);
});
