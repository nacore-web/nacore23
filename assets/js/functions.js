(function($){
    "use strict";
    
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });
    
    $(document).ready(function(){
        // lightcase 
        $('a[data-rel^=lightcase]').lightcase();

        window.FontAwesomeConfig = {
            searchPseudoElements: true
        }

        $(".header-section.style-3").parent("body").addClass("body-padding");
        $(".main-menu>li>.submenu").parent("li").children("a").addClass("dd-icon-down");
        $(".m-menu>li>.m-submenu").parent("li").children("a").addClass("dd-icon-down");
        $(".main-menu>li>.submenu .submenu").parent("li").children("a").addClass("dd-icon-right");
        $(".m-menu>li>.m-submenu .submenu").parent("li").children("a").addClass("dd-icon-right");

        // mobile menu responsive
        $(document).on('click','.header-bar',function(){
            $(".mobile-header").toggleClass("close");
        });

        //mobile drodown menu display
        $('.mobile-menu-area .m-menu li a').on('click', function(e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(1000,"swing");
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown(1000,"swing");
                element.siblings('li').children('ul').slideUp(1000,"swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(1000,"swing");
            }
        }); 



        // drop down menu width overflow problem fix
        $('ul').parent().hover(function() {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();

            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({ left: newpos });    
            }
        });

        //Click event to scroll to top
        $('.scrollToTop').on('click', function() {
            $('html, body').animate({scrollTop : 0},500);
            return false;
        }); 

        // tabile clopse
        $("td[colspan=3]").find(".content").hide();
        $(document).on('click','.td-icon',function(event){
            event.stopPropagation();
            var $target = $(event.target);
            if ( $target.closest("td").attr("colspan") > 1 ) {
                $target.slideUp();
            } else {
                $target.closest("tr").next().find(".content").slideToggle();
           
            }                    
        }); 

        // sidebar slider
        var swiper = new Swiper('.sidebar-slider',{
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1200,
            pagination: {
                el: '.sidebar-pagination',
                clickable: true
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop: true
        }); 

        //countdown
        // var nextyear = '12/31/2022 17:00:00';
        // $('.bcr_countdown').countdown({
        //     date: nextyear, //TODO Date format: 12/31/2020 17:00:00
        //     offset: +2,
        //     day: 'Day',
        //     days: 'Days'
        // });

        // ticker
        $('.ticker').jTicker();

        // counter up start
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });

        // tiite parallax
        // $('#event-rs-thumb').tilt({
        //     maxTilt: 3,
        //     glare: false,
        //     maxGlare: 1 
        // });

        // collapse
        $('.td-icon').on('click', function() {
            $(".collapse").collapse('toggle');
        });

        // isotop 
        $(window).on('load',function() {
            

            // isotop
            var $grid = $('.grid').isotope({
                itemSelector: '.element-item',
                layoutMode: 'fitRows',
                getSortData: {
                    name: '.name',
                    symbol: '.symbol',
                    number: '.number parseInt',
                    category: '[data-category]',
                    weight: function( itemElem ) {
                    var weight = $( itemElem ).find('.weight').text();
                    return parseFloat( weight.replace( /[\(\)]/g, '') );
                    }
                }
            });
            
            // masonary section start here
            $('.grid-one').isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth:0
                }
            });

            // filter functions
            var filterFns = {
                numberGreaterThan50: function() {
                    var number = $(this).find('.number').text();
                    return parseInt( number, 10 ) > 50;
                },
                ium: function() {
                    var name = $(this).find('.name').text();
                    return name.match( /ium$/ );
                }
            };

            // bind filter button click
            $('#filters').on( 'click', 'button', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[ filterValue ] || filterValue;
                $grid.isotope({ filter: filterValue });
            });

            // change is-checked class on buttons

            $('.button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'button', function() {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $( this ).addClass('is-checked');
                });
            });
        });


        // testimonial slider style-1
        var swiper = new Swiper('.testimonial-slider',{
            slidesPerView: 2,
            slidesPerGroup: 2,
            speed: 1200,
            breakpoints: {
                991: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                }
            },
            navigation: {
                nextEl: '.testimonial-btn-next',
                prevEl: '.testimonial-btn-prev',
            },
            loop: true
        });

        // testimonial slider style-3
        var swiper = new Swiper('.testimonial-slider-two',{
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1200,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.testimonial-btn-next',
                prevEl: '.testimonial-btn-prev',
            },
            loop: true
        });



        // blog slider 
        var swiper = new Swiper('.blog-slider',{
            slidesPerView: 3,
            speed: 1200,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                }
            },
            navigation: {
                nextEl: '.blog-btn-next',
                prevEl: '.blog-btn-prev',
            },
            loop: true
        });


        // achivement section start here 
        var swiper = new Swiper('.achive-slider',{
            slidesPerView: 3,
            spaceBetween: 0,
            speed: 1200,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                }
            },
            navigation: {
                nextEl: '.achive-btn-next',
                prevEl: '.achive-btn-prev',
            },
            loop: true
        });



        // sponsor section start here style-2
        var swiper = new Swiper('.sponsor-slider',{
            slidesPerView: 6,
            spaceBetween: 30,
            speed: 1200,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                }
            },
            loop: true
        });



        // about section start here style-2
        var swiper = new Swiper('.about-item-slider',{
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1200,
            pagination: {
                el: '.about-item-pagination',
                clickable: true
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop: true
        });


        // event venues details section start here style-1
        var swiper = new Swiper('.event-venue-slider',{
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1200,
            pagination: {
                el: '.event-pagination',
                clickable: true
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop: true
        });

        // accordion start here
        $('.accordion-item .active1').slideDown();
        $('.accordion-question').on('click', function(e) {
            if($(this).next('.accordion-answer').css('display') != 'block'){
                $('.active1').slideUp(500).removeClass('active1');
                $('.accordion-question').removeClass('in');
                $(this).next('.accordion-answer').addClass('active1').slideDown(500);
                $(this).addClass('in');
            }else{
                $('.active1').slideUp(500).removeClass('active1');
                $(this).removeClass('in');
            }
        });

        // sticky-widget
        $(document).ready(function() {
            $('section .container .sticky-widget, div .container .sticky-widget').theiaStickySidebar();
        });


        // Add smooth scrolling to all links
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash)
                    .offset()
                    .top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        });
        // wow animation
        new WOW().init();
    });

    jQuery(window).on('scroll', function(){
        if ( jQuery(window).scrollTop() > 100 ) {
            jQuery('.primary-menu').addClass('sticky-nav');
        } else {
            jQuery('.primary-menu').removeClass('sticky-nav');
        }
    });

    // ajax contact form
    $(function() {
        var form = $('#contact-form');
        var formMessages = $('.form-message');
        $(form).submit(function(e) {
            e.preventDefault();
            var formData = $(form).serialize();
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);
                $('#contact-form input, #contact-form textarea').val('');
            })
            .fail(function(data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });
    });
}(jQuery));


// sticky menu
$(document).ready(function(){
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 2);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight){
            $('nav').removeClass('nav-down').addClass('nav-up');
        } else {
            if(st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }
});

// event schedule tab start here
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).on('click', '.tab .col-lg-4.col-12', function(){
    $this = $(this);
    $(".event-schedule").css('background-color', function() {
        return $this.data('bgcolor');
    });
    $(".event-schedule").css("background-image", "url(" + $(this).data("bg") + ")");
});

//Countdown js initialization
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        var clockdiv = document.getElementsByClassName("count-down");
        var countDownDate = new Array();
        for (var i = 0; i < clockdiv.length; i++) {
            countDownDate[i] = new Array();
            countDownDate[i]['el'] = clockdiv[i];
            countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
            countDownDate[i]['days'] = 0;
            countDownDate[i]['hours'] = 0;
            countDownDate[i]['seconds'] = 0;
            countDownDate[i]['minutes'] = 0;
        }

        var countdownfunction = setInterval(function () {
            for (var i = 0; i < countDownDate.length; i++) {
                var now = new Date().getTime();
                var distance = countDownDate[i]['time'] - now;
                countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
                countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

                if (distance < 0) {
                    countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
                    countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
                    countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
                    countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
                } else {
                    countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
                    countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
                    countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
                    countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
                }
            }
        }, 1000);
    }
});