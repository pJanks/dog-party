/*This script targets the submit button and field of a
form as well as a span of text, respectively, to alter the
text within the span*/
var submit = document.querySelector(".submit");
var dogName = document.querySelector(".text");
var someDogs = document.querySelector(".some-dogs");
submit.addEventListener("click", function () {
  someDogs.innerText = dogName.value;
  dogName.value = "";
});
