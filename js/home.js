const home = () => {
    const slides = document.querySelectorAll(".slide")
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("slide__nav")) {
            slides.forEach(slide => {
                slide.style.display = "none"
            })
        }
        /* slides[0].style.display = "flex";*/
    })
}

export default home

