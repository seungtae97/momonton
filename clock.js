const title = document.querySelector("#title");

const CLASS_CLICKED = "clicked";

function handleClick() {
    title.classList.toggle(CLASS_CLICKED);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
