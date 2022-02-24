
(() => {
    // Variables
    const menuToggle = document.querySelector('#menu-toggle');
    const menu = document.querySelector('.custom-nav-list');
    const customYear = document.querySelector('#custom-year');
    const header = document.querySelector('#header');

    // Start animation components
    AOS.init();



    // Get year for footer
    const date = new Date();
    const year = date.getFullYear();
    customYear.innerHTML = year;


    menuToggle.addEventListener('click', () => {
        if (menuToggle.checked === true) {
            $('.custom-nav-list').slideToggle('slow', 'swing', function () {
                menu.classList.add('show-menu');
            });
        } else {
            $('.custom-nav-list').slideToggle('slow', 'swing', function () {
                menu.classList.remove('show-menu');
            });

        }
    });

    $('.custom-nav-item a').click(function () {
        menuToggle.checked = false;
        if (menuToggle.checked === true) {
            $('.custom-nav-list').slideToggle('slow', 'swing', function () {
                menu.classList.add('show-menu');
            });
        } else {
            $('.custom-nav-list').slideToggle('slow', 'swing', function () {
                menu.classList.remove('show-menu');
            });

        }
    });

    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 50);
    });

    //Card Carrousel
    const slider = $('.custom-slider').owlCarousel({
        items: 3,
        loop: true,
        onDragged: callback,
        onTranslate: callback,
        responsive: {
            0: {
                items: 1,
            },
            991: {
                items: 3,
            },

        }
    });

    const slideVideo1 = $('#slide-1 .video-content');
    const slideVideo2 = $('#slide-2 .video-content');
    const slideVideo3 = $('#slide-3 .video-content');
    const video1 = $('#slide-1 .video-content .image-content video');
    const video2 = $('#slide-2 .video-content .image-content video');
    const video3 = $('#slide-3 .video-content .image-content video');
    const imagePerson1 = $('#slide-1 .people-content .people-image');
    const imagePerson2 = $('#slide-2 .people-content .people-image');
    const imagePerson3 = $('#slide-3 .people-content .people-image');
    const width = window.screen.width;


    // Active slider
    if (width > 991) {
        _.map(slideVideo1, (slide, i) => {
            slide.classList.add('active-video-content');
            slide.classList.remove('active-video-content-before');
            video1[i].classList.remove('active-translate');
            imagePerson1[i].classList.remove('active-people-image');
            video1[i].pause();
        });
        _.map(slideVideo2, (slide, i) => {
            slide.classList.remove('active-video-content');
            slide.classList.add('active-video-content-before');
            video2[i].classList.add('active-translate');
            imagePerson2[i].classList.add('active-people-image');
            video2[i].play();
        });
        _.map(slideVideo3, (slide, i) => {
            slide.classList.add('active-video-content');
            slide.classList.remove('active-video-content-before');
            video3[i].classList.remove('active-translate');
            imagePerson3[i].classList.remove('active-people-image');
            video3[i].pause();
        });
    } else {
        _.map(slideVideo1, (slide, i) => {
            slide.classList.remove('active-video-content');
            slide.classList.add('active-video-content-before');
            video1[i].classList.add('active-translate');
            imagePerson1[i].classList.add('active-people-image');
            video1[i].play();
        });
        _.map(slideVideo2, (slide, i) => {
            slide.classList.add('active-video-content');
            slide.classList.remove('active-video-content-before');
            video2[i].classList.remove('active-translate');
            imagePerson2[i].classList.remove('active-people-image');
            video2[i].pause();
        });
        _.map(slideVideo3, (slide, i) => {
            slide.classList.add('active-video-content');
            slide.classList.remove('active-video-content-before');
            video3[i].classList.remove('active-translate');
            imagePerson3[i].classList.remove('active-people-image');
            video3[i].pause();
        });
    }

    // On change windows width

    window.addEventListener('resize', () => {
        const widthResize = window.screen.width;
        if (widthResize > 991) {
            _.map(slideVideo1, (slide, i) => {
                slide.classList.add('active-video-content');
                slide.classList.remove('active-video-content-before');
                video1[i].classList.remove('active-translate');
                imagePerson1[i].classList.remove('active-people-image');
                video1[i].pause();
            });
            _.map(slideVideo2, (slide, i) => {
                slide.classList.remove('active-video-content');
                slide.classList.add('active-video-content-before');
                video2[i].classList.add('active-translate');
                imagePerson2[i].classList.add('active-people-image');
                video2[i].play();
            });
            _.map(slideVideo3, (slide, i) => {
                slide.classList.add('active-video-content');
                slide.classList.remove('active-video-content-before');
                video3[i].classList.remove('active-translate');
                imagePerson3[i].classList.remove('active-people-image');
                video3[i].pause();
            });
        } else {
            _.map(slideVideo1, (slide, i) => {
                slide.classList.remove('active-video-content');
                slide.classList.add('active-video-content-before');
                video1[i].classList.add('active-translate');
                imagePerson1[i].classList.add('active-people-image');
                video1[i].play();
            });
            _.map(slideVideo2, (slide, i) => {
                slide.classList.add('active-video-content');
                slide.classList.remove('active-video-content-before');
                video2[i].classList.remove('active-translate');
                imagePerson2[i].classList.remove('active-people-image');
                video2[i].pause();
            });
            _.map(slideVideo3, (slide, i) => {
                slide.classList.add('active-video-content');
                slide.classList.remove('active-video-content-before');
                video3[i].classList.remove('active-translate');
                imagePerson3[i].classList.remove('active-people-image');
                video3[i].pause();
            });
        }
    });

    function callback(event) {
        let item = event.item.index;
        const slideVideo1 = $('#slide-1 .video-content');
        const slideVideo2 = $('#slide-2 .video-content');
        const slideVideo3 = $('#slide-3 .video-content');
        const video1 = $('#slide-1 .video-content .image-content video');
        const video2 = $('#slide-2 .video-content .image-content video');
        const video3 = $('#slide-3 .video-content .image-content video');
        const imagePerson1 = $('#slide-1 .people-content .people-image');
        const imagePerson2 = $('#slide-2 .people-content .people-image');
        const imagePerson3 = $('#slide-3 .people-content .people-image');
        console.log(item);
        if (item === 1 || item === 4) {
            _.map(slideVideo1, (slide, i) => {
                slide.classList.add('active-video-content');
                slide.classList.remove('active-video-content-before');
                video1[i].classList.remove('active-translate');
                imagePerson1[i].classList.remove('active-people-image');
                video1[i].pause();
            });
            _.map(slideVideo2, (slide, i) => {
                slide.classList.add('active-video-content');
                slide.classList.remove('active-video-content-before');
                video2[i].classList.remove('active-translate');
                imagePerson2[i].classList.remove('active-people-image');
                video2[i].pause();
            });
            _.map(slideVideo3, (slide, i) => {
                slide.classList.remove('active-video-content');
                slide.classList.add('active-video-content-before');
                video3[i].classList.add('active-translate');
                imagePerson3[i].classList.add('active-people-image');
                video3[i].play();
            });
        }
        if (item === 2 || item === 5) {
            _.map(slideVideo1, (slide, i) => {
                slide.classList.remove('active-video-content');
                slide.classList.add('active-video-content-before');
                video1[i].classList.add('active-translate');
                imagePerson1[i].classList.add('active-people-image');
                video1[i].play();
            });
            _.map(slideVideo2, (slide, i) => {
                slide.classList.add('active-video-content');
                slide.classList.remove('active-video-content-before');
                video2[i].classList.remove('active-translate');
                imagePerson2[i].classList.remove('active-people-image');
                video2[i].pause();
            });
            _.map(slideVideo3, (slide, i) => {
                slide.classList.add('active-video-content');
                slide.classList.remove('active-video-content-before');
                video3[i].classList.remove('active-translate');
                imagePerson3[i].classList.remove('active-people-image');
                video3[i].pause();
            });
        }
        if (item === 3 || item === 6) {
            _.map(slideVideo1, (slide, i) => {
                slide.classList.add('active-video-content');
                slide.classList.remove('active-video-content-before');
                video1[i].classList.remove('active-translate');
                imagePerson1[i].classList.remove('active-people-image');
                video1[i].pause();
            });
            _.map(slideVideo2, (slide, i) => {
                slide.classList.remove('active-video-content');
                slide.classList.add('active-video-content-before');
                video2[i].classList.add('active-translate');
                imagePerson2[i].classList.add('active-people-image');
                video2[i].play();
            });
            _.map(slideVideo3, (slide, i) => {
                slide.classList.add('active-video-content');
                slide.classList.remove('active-video-content-before');
                video3[i].classList.remove('active-translate');
                imagePerson3[i].classList.remove('active-people-image');
                video3[i].pause();
            });
        }
    }

    // Go to the next item
    $('.arrow-right span').click(function () {
        slider.trigger('next.owl.carousel', [300]);
    });

    // Go to the previous item
    $('.arrow-left span').click(function () {
        slider.trigger('prev.owl.carousel', [300]);
    });

})();