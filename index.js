document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.getElementsByTagName("li");

    Array.from(listItems).forEach(item => {
        const h2 = item.getElementsByTagName("h2")[0];

        if (h2) {
            h2.innerText = h2.innerText.toUpperCase();
            h2.classList.add("car-model");
        }
    });
});