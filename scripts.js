doSomething();

console.log(document.title.toLowerCase());

document.addEventListener('DOMContentLoaded', doSomething, false);

function doSomething () {
  console.log("the monkey sat on the weasel")
  var elements = document.getElementsByTagName("a");
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.addEventListener("click", function(e) { e.target.style.color = 'red'; });;
  }
}
