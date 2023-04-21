const render = () => {

    const modal = document.querySelector(".content--modal")
    const trigger = document.querySelector(".content__btn")
    const hidden = document.querySelector(".content__wrap")
    const slide = document.querySelector(".third-slide")
    trigger.addEventListener("click", () => {
        modal.style.display = "flex"
        hidden.style.display = "none"

    })
    modal.addEventListener("click", (e) => {
        if (!e.target.closest('.content__modal')) {
            console.log(e.target)
            modal.style.display = "none"
            hidden.style.display = "flex"
        }

    })

    const backBtn = document.querySelector(".nav-left")
    const nextBtn = document.querySelector(".nav-right")
    const allImg = document.querySelectorAll(".slider-list")
    let count = 0

    const checkCount = () => {
        count = (count > allImg.length - 1) ? 0 : count;
        count = (count < 0) ? allImg.length - 1 : count;
    }

    backBtn.addEventListener("click", () => {
        allImg.forEach(img => {
            img.style.display = "none"
        })
        count--;
        checkCount();
        allImg[count].style.display = "block"
    })

    nextBtn.addEventListener("click", () => {
        allImg.forEach(img => {
            img.style.display = "none"
        })
        count++;
        checkCount();
        allImg[count].style.display = "block"
    })



}

export default render