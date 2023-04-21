const visible = () => {
    let delay = 0;
    for (let i = 0; i < 7; i++) {
        setTimeout(() => {
            document.querySelectorAll(".hidden").forEach((element, index) => {
                if (index === 0) {
                    i++;
                } else { i = 3 }
                element.style.opacity = i / 10;
            });
        }, delay);
        delay += 300;
    }
};


export default visible



