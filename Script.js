const nav = document.getElementById("Navigation");

nav.addEventListener("wheel", (event) => {
    event.preventDefault();

    nav.scrollLeft += event.deltaY;
});