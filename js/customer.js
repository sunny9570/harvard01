$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });

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

});



$(function () {

    const typewriter = new Typewriter('.txt_ani', {
        strings: ['Touch is much more than just conscious perception <br> of what you are actively reaching out to feel <br> or what is touching your skin.'],
        autoStart: true,
        // loop: true
    });


    //typewriter.start();


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        let ust = $('.main_professor').offset().top;


        if (sct > ust - 300) {
            console.log('start');
            typewriter.start();
        } else {
            typewriter.pause();
        }
    })

});

// $(function () {




//     const typed = new Typed('.txt_ani', {
//         strings: ['Touch is much more than just conscious perception<br> of what you are actively reaching out to feel,<br> or what is touching your skin."'],
//         typeSpeed: 80,
//         backSpeed: 100,
//         fadeOut: true,
//         //smartBackspace: true,
//         cursorChar: '',
//         // loop: true
//     });

//     typed.stop();


//     $(window).on('scroll', function () {
//         let sct = $(window).scrollTop();
//         let v = Math.floor(sct / 10)
//         //console.log('start')
//         console.log(v)

//         if (v > 300) {
//             console.log('start');
//             typed.start();
//         }
//     })

// });


$(function () {
    const mainVisionSlide = new Swiper('.mainVisionSlide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,

    })
})



