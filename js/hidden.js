
const visible = () => {
    setTimeout(() => {
        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((el) => {
            el.classList.add("visible");
        });
        const hiddenElement = document.querySelector(".hidden");
        hiddenElement.style.opacity = 1
    }, 2000);
}





export default visible