var submit = document.querySelector(".submit");
var dogName = document.querySelector(".text");
var someDogs = document.querySelector(".some-dogs");
submit.addEventListener("click", function () {
  someDogs.innerText = dogName.value;
});
submit.addEventListener("keydown", function () {
  someDogs.innerText = dogName.value;
});
submit.addEventListener("click", function () {
    dogName.value = "";
});
