$(document).ready(function () {
    $('.progress-slider').slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
        asNavFor: ".number-progress-slider"
    });

    $('.number-progress .arrow-next').on('click', function (e) {
        e.preventDefault();
        $('.progress-slider').slick('slickNext');
    });

    $('.number-progress .arrow-prev').on('click', function (e) {
        e.preventDefault();
        $('.progress-slider').slick('slickPrev');
    });


    $('.number-progress-slider').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        verticalSwiping: true,
        asNavFor: ".progress-slider",
        infinite: true
    });

    $('[data-fancybox="images"]').fancybox();

    $('.recommended-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        asNavFor: ".recommended-number-slider",
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 710,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.recommended-number .arrow-next').on('click', function (e) {
        e.preventDefault();
        $('.recommended-slider').slick('slickNext');
    });

    $('.recommended-number .arrow-prev').on('click', function (e) {
        e.preventDefault();
        $('.recommended-slider').slick('slickPrev');
    });


    $('.recommended-number-slider').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        verticalSwiping: true,
        asNavFor: ".recommended-slider",
        infinite: true
    });


    $('.links-all').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            content = $(this).siblings('.setting-description');


        if (!$this.hasClass('trigger')) {
            $this.addClass('trigger');
            $this.find('span.text').text('Скрыть');

            content.css('max-height', '100%');
        } else {
            $this.removeClass('trigger');
            $this.find('span.text').text('Развернуть');

            content.css('max-height', '66px');
        }
    });

    $(document).ready(function () {
        $('.go_to').click(function () {
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) {
                $('html, body').animate({
                    scrollTop: $(scroll_el).offset().top
                }, 500);
            }
            return false;
        });
    });


    $(".form-callback").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            // alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $('.modal').removeClass('show');
            $('#thanksCallbackModal').addClass('show');
            $(".form-callback").trigger("reset");
        });
        return false;
    });

    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            // alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $('.modal').removeClass('show');
            $('#thanksModal').addClass('show');
            $(".form").trigger("reset");
        });
        return false;
    });


});

