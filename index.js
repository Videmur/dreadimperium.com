(function () {
    "use strict";
    var starsDiv = document.createElement("div");
    starsDiv.id = "stars";
    document.body.append(starsDiv);
    function generateStars() {
        // Sets the number of stars we wish to display
        var numStars = 100 * window.innerWidth / window.innerHeight;
        starsDiv.innerHTML = "";
        // For every star we want to display
        for (var i = 0; i < numStars; i++) {
            var star = document.createElement("div");
            star.className = "star";
            var xy = getRandomPosition();
            star.style.top = xy[0] + 'px';
            star.style.left = xy[1] + 'px';
            starsDiv.append(star);
        }
    }
    // Gets random x, y values based on the size of the container
    function getRandomPosition() {
        var y = window.innerWidth;
        var x = window.innerHeight;
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }
    window.addEventListener("resize", generateStars);
    generateStars();
})();
//# sourceMappingURL=index.js.map