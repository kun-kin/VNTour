$(document).ready(function() {
    $('.main__scroll__tour').owlCarousel({
        loop: true,
        margin: 12,
        dots: false,
        nav: true,
        navText: ["<i class='fa-regular fa-angle-left'></i>", "<i class='fa-regular fa-angle-right'></i>"],
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            820: {
                items: 2
            },
            1300: {
                items: 3
            }
        }
    })


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // fade: true,
        asNavFor: '.slider-nav',
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
    });
    $('.slider-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2
                }
            }

        ]
    });

    $('.owl-support').slick({
        Infinity: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<button class="button-slider slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button class="button-slider slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 8
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2
                }
            }

        ]
    });
    $('.slide-tour-more').owlCarousel({
        loop: false,
        margin: 12,
        dots: false,
        nav: true,
        navText: ["<i class='fa-regular fa-angle-left'></i>", "<i class='fa-regular fa-angle-right'></i>"],
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            1300: {
                items: 3
            }
        }
    })


})
$(document).ready(function() {
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
    $('.nav-tabs-tour a').click(function() {
        var contentTabID = $(this).parents('.nav-tabs-tour').attr('id');
        $(this).parents('.nav-tabs-tour').addClass('active');
        $('.nav-tabs-tour').not($(this).parents('.nav-tabs-tour')).removeClass('active');
        $('#tab-map').hide();

        $('.content-tab .tab-detail-tour').css("display", "none");
        $('.content-tab .tab-detail-tour[id = ' + contentTabID + ']').css("display", "block");
    })
    $('.view-full-iti-detail a').click(function() {
        var contentTabID = $(this).parents('.nav-tabs-tour').attr('id');
        $(this).parents('.nav-tabs-tour').addClass('active');
        $('.nav-tabs-tour').not($(this).parents('.nav-tabs-tour')).removeClass('active');
        $('#tab-map').hide();

        $('.content-tab .tab-detail-tour').css("display", "none");
        $('.content-tab .tab-detail-tour[id = ' + contentTabID + ']').css("display", "block");
    })

    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('#find-tour-title').click(function() {
                $('.container-search-home').slideToggle();
            })

        } else {
            $('.container-search-home').show();
        }
    });

    $('input:radio[name="oneWay"]').change(function() {
        if ($(this).val() == '1') {
            $('#arrival-date-tickets').removeAttr('disabled');
        }
        if ($(this).val() == '0') {
            $('#arrival-date-tickets').attr('disabled', 'disabled');
        }
    });

    $("#departure-date-tickets").datepicker({
        dateFormat: 'dd/mm/yyyy'
    });
    $("#arrival-date-tickets").datepicker({
        dateFormat: 'dd/mm/yyyy'
    });

    $('.card-train .card-train-header').click(function() {
        $(this).parent('.card-train').children('.card-train-collapse').slideToggle();
        $('.card-train-collapse').not($(this).parent('.card-train').children('.card-train-collapse')).slideUp();
    })



});
if ($(".view-full-iti-detail").length) {
    $(".view-full-iti-detail").click(function() {
        $('li#t_iti a').trigger("click");
        $('html,body').animate({ scrollTop: $("#component-detail").offset().top - 125 }, 'slow');
    });
}
//
function show_map_hotel() {
    if ($('#tab-map').is(':visible')) {
        $('#tab-map').hide();
    } else {
        $('#tab-map').show();
    }
}
//

function ajax_tour(id, i, c_id, text, check_old) {
    $(".removeactive").removeClass("active");
    $('#' + text).addClass('active');
    $('html,body').animate({ scrollTop: $("#tab-info-detail-tour").offset().top - 60 }, 'slow');
}

function more_text_40(text, more, less) {
    $('.' + more).hide();
    $('.' + less).show();
    $('.' + text).css("height", "auto");
    $('.' + text).css("overflow", "inherit");
}

function hide_text_40(text, more, less) {
    $('.' + less).hide();
    $('.' + more).show();
    $('.' + text).css("height", "73px");
    $('.' + text).css("overflow", "hidden");
}

$(window).scroll(function() {
    if ($(this).scrollTop() >= 40) {
        $('.menu__header').addClass('active');
    } else {
        $('.menu__header').removeClass('active');
    }
})


$('.menu__bar').click(function() {
    $('.menu__mobile').animate({
        height: 'toggle'
    })
})

$('.dropdown__menu__mobile').hide();

$('.sub__menu__mobile .menu__title__mobile').click(function() {
    $(this).parent('.sub__menu__mobile').toggleClass('show__dropdown');
    $('.sub__menu__mobile').not($(this).parent('.sub__menu__mobile')).removeClass('show__dropdown');
    $(this).parent('.sub__menu__mobile').toggleClass('rotate__icons');
    $('.sub__menu__mobile').not($(this).parent('.sub__menu__mobile')).removeClass('rotate__icons');
})

$('.main__menu__mobile .sub__menu__mobile').click(function() {
    $(this).siblings().children('.dropdown__menu__mobile').slideUp(300);
    $(this).toggleClass('show__dropdown').children('.dropdown__menu__mobile').slideToggle(300);
})


$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {
        $('.btn-active').addClass('animate');
    } else {
        $('.btn-active').removeClass('animate');
    }
})

$('.btn-active').click(function() {
    $('html').animate({
        scrollTop: 0
    }, 500);
})