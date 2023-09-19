document.addEventListener("DOMContentLoaded", function () {
    const countElement = document.getElementById("count");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const starsContainer = document.querySelector(".stars-container");

    let count = 0;

    incrementButton.addEventListener("click", function () {
        count++;
        updateCounter();
        addStar();
    });

    decrementButton.addEventListener("click", function () {
        if (count > 0) {
            count--;
            updateCounter();
            removeStar();
        }
    });

    function updateCounter() {
        countElement.textContent = count;
    }

    function addStar() {
        const starBox = document.createElement("div");
        starBox.classList.add("box");
        starBox.textContent = "*";
        starsContainer.appendChild(starBox);
    }

    function removeStar() {
        const starBoxes = starsContainer.querySelectorAll(".box");
        if (starBoxes.length > 0) {
            starsContainer.removeChild(starBoxes[starBoxes.length - 1]);
        }
    }
});
