const render = () => {

    const modal = document.querySelector(".content--modal")
    const trigger = document.querySelector(".content__btn")
    const hidden = document.querySelector(".content__wrap")
    trigger.addEventListener("click", () => {
        modal.style.display = "flex"
        hidden.style.display = "none"
    })
    modal.addEventListener("click", (e) => {
        if (!e.target.closest('.content__modal')) {
            modal.style.display = "none"
            hidden.style.display = "flex"
        }
    })
    const backBtn = document.querySelector(".nav-left")
    const nextBtn = document.querySelector(".nav-right")
    const allSlideList = document.querySelectorAll(".slider-list")
    let count = 0
    const checkCount = () => {
        count = (count > allSlideList.length - 1) ? 0 : count;
        count = (count < 0) ? allSlideList.length - 1 : count;
    }

    backBtn.addEventListener("click", () => {
        allSlideList.forEach(img => {
            img.style.display = "none"
        })
        count--;
        checkCount();
        allSlideList[count].style.display = "block"
    })

    nextBtn.addEventListener("click", () => {
        allSlideList.forEach(img => {
            img.style.display = "none"
        })
        count++;
        checkCount();
        allSlideList[count].style.display = "block"
    })
}

export default render