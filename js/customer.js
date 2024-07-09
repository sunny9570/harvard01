$(function () {
    $('#header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('#header .gnb').toggleClass('on');

    });

    $('#header .snb>ul>li>a').on('click', function (e) {
        if ($('#header .snb>ul>li ul').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideDown();
            $(this).parent().siblings().find('ul').slideUp();

        }

    });
    $(window).on('resize', function () {
        $('#header .snb').removeClass('on');
        $('#header .mbtn').removeClass('on');
        $('#header .snb>ul>li ul').removeAttr('style')
    });



    $('.search .btn').on('click', function () {
        $(this).next().fadeIn();

    });
    $('.search .close').on('click', function () {
        $('#search').fadeOut();
    });
});






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