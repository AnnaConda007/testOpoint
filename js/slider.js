const slider = () => {
    let startX = 0;
    let endX = 0;
    const slider = document.querySelector("main");
    const slides = document.querySelectorAll(".slide");
    let count = 0;
    const swipeThreshold = 50;
    const checkCount = () => {
        if (count >= slides.length) {
            count = 0;
        } else if (count < 0) {
            count = slides.length - 1;
        }
    }

    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        const xDirection = endX - startX;
        if (xDirection > 0 && xDirection > swipeThreshold) {
            console.log("до" + count)
            console.log("вправо")
            count = count - 1
            checkCount()
            slides.forEach(slide => {
                slide.style.display = "none"
            })
            slides[count].style.display = "flex"
        } else if (xDirection < 0 && Math.abs(xDirection) > swipeThreshold) {
            count++
            checkCount()
            slides.forEach(slide => {
                slide.style.display = "none"
            })
            slides[count].style.display = "flex"
        }
    });
};

export default slider;