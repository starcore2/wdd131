const burger_button = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");

burger_button.addEventListener('click', () => {
    burger_button.classList.toggle('open');
    hamburger.classList.toggle('open');
});
