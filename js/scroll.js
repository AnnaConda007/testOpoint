const scrol = () => {
    const wrap = document.querySelector(".content__text-wrap");
    const scrolWrap = document.querySelector(".scrol")
    const scrolThumb = document.querySelector('.scrol__thumb');

    wrap.addEventListener("scroll", () => {
        const scroll = wrap.scrollTop;
        scrolThumb.style.top = `${scroll}px`
    });

    const updateThumbPosition = (e) => {
        const mouseY = e.clientY - scrolWrap.getBoundingClientRect().top;
        scrolThumb.style.top = `${mouseY}px`;
        wrap.scrollTop = `${mouseY}`;
    };

    scrolWrap.addEventListener("mousemove", (e) => {
        updateThumbPosition(e)
    })
}
export default scrol