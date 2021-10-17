var element = document.getElementsByClassName("hamburger-button");

function noonecares() {
  element.addEventListener("click", function (event) {
    event.preventDefault();
  });
}

console.log(element);

noonecares();
