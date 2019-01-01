(function () {
    "use strict";

    const starsDiv = document.createElement("div");
    starsDiv.id = "stars";
    document.body.append(starsDiv);

    function generateStars(): void {
        // Sets the number of stars we wish to display
        const numStars = 100 * window.innerWidth / window.innerHeight;
        starsDiv.innerHTML = "";

        // For every star we want to display
        for (let i = 0; i < numStars; i++) {
            let star = document.createElement("div");
            star.className = "star";
            var xy = getRandomPosition();
            star.style.top = xy[0] + 'px';
            star.style.left = xy[1] + 'px';
            starsDiv.append(star);
        }
    }

    // Gets random x, y values based on the size of the container
    function getRandomPosition(): [number, number] {
        var y = window.innerWidth;
        var x = window.innerHeight;
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    window.addEventListener("resize", generateStars);
    generateStars();
})();