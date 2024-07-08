// Step 1 - Create references to the elements we want to play with.

const paragraphWrapper = document.querySelector(".paragraph-wrapper");
const paragraph = document.querySelector(".paragraph");
const btn = document.querySelector(".btn");

// Step 2 - Add event listeners to the elements you want to interact with. An event listener takes two arguments. The first is a string that specifies the event it listens to. The second one is the callback function that is invoked when the event is triggered. Here is a list of all available events as an argument to addEventListener: https://www.w3schools.com/jsref/dom_obj_event.asp

btn.addEventListener("click", () => {
  // console.log("Button clicked");

  if (btn.classList.contains("bg-aqua")) {
    paragraphWrapper.classList.remove("bg-fuchsia");
    paragraphWrapper.classList.add("bg-aqua");

    paragraph.style.color = "black";

    btn.classList.remove("bg-aqua");
    btn.classList.add("bg-fuchsia");
    btn.innerText = "Change background color to fuchsia";

    return;
  }

  paragraphWrapper.classList.add("bg-fuchsia");
  paragraphWrapper.classList.remove("bg-aqua");

  paragraph.style.color = "white";

  btn.classList.add("bg-aqua");
  btn.classList.remove("bg-fuchsia");
  btn.innerText = "Change background color to aqua";
});

// btn.addEventListener("mouseenter", () => {
//   console.log("Mouse Enter");
//   paragraphWrapper.classList.remove("bg-fuchsia");
//   paragraphWrapper.classList.add("bg-aqua");

//   paragraph.style.color = "black";

//   btn.classList.remove("bg-aqua");
//   btn.classList.add("bg-fuchsia");
//   btn.innerText = "Change background color to fuchsia";
// });

// btn.addEventListener("mouseleave", () => {
//   console.log("Mouse Leave");
//   paragraphWrapper.classList.add("bg-fuchsia");
//   paragraphWrapper.classList.remove("bg-aqua");

//   paragraph.style.color = "white";

//   btn.classList.add("bg-aqua");
//   btn.classList.remove("bg-fuchsia");
//   btn.innerText = "Change background color to aqua";
// });
