const visible = () => {
    let delay = 0;
    const opacity = 7
    for (let i = 0; i < opacity; i++) {
        setTimeout(() => {
            document.querySelectorAll(".hidden").forEach((element, index) => {
                if (index == 0) {
                    i++;
                } else { i = 3 }
                element.style.opacity = i / 10;
            });
        }, delay);
        delay += 500;
    }
};

export default visible



