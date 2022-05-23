
const LoginBtn = document.querySelector("a");
var nameArr = ["name"];
var inputs = [...document.getElementsByClassName("inputs")];
inputs.forEach(function (el) {
  console.log();
  el.value = getSavedValue(el.getAttribute("name"));
});

function saveValue(e) {
  var name = e.target.name;
  var val = e.target.value;
  localStorage.setItem(name, val);
}

function getSavedValue(v) {
  if (!localStorage.getItem(v)) {
    return "";
  }
  return localStorage.getItem(v);
}
LoginBtn.addEventListener("click", saveValue);