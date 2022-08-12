
/* Відкрити зміст*/

$(document).ready(function() {
    $('.right_menu').click(function(event) {
        $('.right_menu,.right_menu_cont,.right_trg_1,.right_trg_2,.right_menu_background,.close_button').toggleClass('--active');
        $('body').toggleClass('lock');    
    });
});

/* Закрити зміст*/

$(document).ready(function() {
    $('.close_button').click(function(event) {
        $('.right_menu,.right_menu_cont,.right_trg_1,.right_trg_2,.right_menu_background,.close_button').removeClass('--active');    
        $('body').removeClass('lock');    
    });
});

/* Закрити зміст по-за межами дів*/

$(document).mouseup(function (e){  
    var div = $('.right_menu_cont');
    if (!div.is(e.target) && div.has(e.target).length === 0) {  
            $('.right_menu,.right_menu_cont,.right_trg_1,.right_trg_2,.right_menu_background,.close_button').removeClass('--active');
            $('body').removeClass('lock');      
    }
  });

/* Закрити зміст при кліку на покликання зміст*/

$(document).ready(function() {
    $('.right_menu_link').click(function(event) {
        $('.right_menu,.right_menu_cont,.right_trg_1,.right_trg_2,.right_menu_background,.close_button').removeClass('--active');
        $('body').removeClass('lock');    
    });
});

$(document).ready(function() {
    $('.menu_link').click(function(event) {
        $('.intro').removeClass('active').next().slideToggle(300);
        $('.trg_1,.trg_2').removeClass('active');
    });
});

/* Відкрити верхній зміст*/

$(document).ready(function() {
    $('.intro').click(function(event) {
        $('.intro').toggleClass('active').next().slideToggle(300);
        $('.trg_1,.trg_2').toggleClass('active');    
    
    });
});

/* Відкрити "обов'язкові для вивчення"*/

$(document).ready(function() {
    $('.collapsible').click(function(event) {
        $(this).parent('.special_functions').toggleClass('special_functions--active'); 
           $(this).next('.content').slideToggle(300);
    });
});

/* Відкрити міні-меню"*/


$(document).ready(function() {
    $('.mini_menu').click(function(event) {
        $(this).parent('.mini_menu_item').toggleClass('mini_menu_item--active'); 
        $(this).next('.mini_menu_cont').slideToggle(300);
    });
});

/* анімація "а" */

$(document).ready(function() {
    
    $('.a1').click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + 'px'
        }, {duration: 700,
            easing: "swing"
        });
        return false;
        });
});

/* анімація Поява кнопанка наверх */


$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 450) {
            $('.button_to_top').fadeIn();
        } else {
            $('.button_to_top').fadeOut();
        }
    });
    
    $('.button_top').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, {duration: 500,
            easing: "swing"
        });
        return false;
        });
});

/* анімація Поява кнопанка зміст справа */

$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 450) {
            $('.right_menu_item').fadeIn();
        } else {
            $('.right_menu_item').fadeOut();
        }
    });
});


new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 40,
});
