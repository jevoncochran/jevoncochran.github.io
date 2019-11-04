window.onload = () => {
    var mainImg = document.querySelector('.main-img');
    let slideshow = [
        '../img/jevon_cochran_pelourinho.jpg',
        '../img/me_in_Pernambues.JPG',
        '../img/quibdo_boat_ride.jpg'
    ];
    var index = 0;
    var interval = 1000;
    function slide() {
        mainImg.src = slideshow[index];
        index++;
        if (index >= slideshow.length) {
            index = 0;
        }
    }

    setInterval(slide, interval);
}

