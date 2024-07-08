$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


    const mainVisualSlide = new Swiper('.main_visual_slide', {
        // parallax: true,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 2500,
            // disableOnInteraction: false,
        },

        navigation: {
            nextEl: '#mainVisual .arrows .next',
            prevEl: '#mainVisual .arrows .prev',
        },
    });

    AOS.init();

})