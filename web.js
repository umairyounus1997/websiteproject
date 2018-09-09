var totalSlides = 4;
    var currentSlide = 0;
    function Next() {
        if (currentSlide == totalSlides) currentSlide = 0;
        for (var i = 0; i < totalSlides; i++) {
            if (i == currentSlide) document.getElementById(i).className = "show";
            else document.getElementById(i).className = "hide";
        }
        currentSlide++;
    }
    
    setInterval(function () {
        Next();
    }, 3000)

