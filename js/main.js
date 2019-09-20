$(function () {
    initMenu();
    initSlick();
    selectCountry();
    var btn = $("#submit");
    btn.on("click", formValidate());


});


function initMenu() {
    var opener = $('.nav-btn');
    var page = $('html');
    var classActive = 'menu-active';

    var clickHandler = function (e) {
        e.preventDefault();
        page.toggleClass(classActive);
    };
    opener.on('click', clickHandler);
}



function initSlick() {
    $('.slide').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
    });

    $(".slider-container").slick({
        dots: false,
        slidesToShow: 3,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
}

function formValidate() {
    $('#form1').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                number: true,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            name: {
                required: "Поле обязательно к заполнению",
                minlength: "Введите не менее 2-х символов"
            },
            email: {
                required: "Поле обязательно к заполнению",
                email: "Необходим формат адреса email"
            },
            phone: {
                required: "Поле обязательно к заполнению",
                number: "Введите корректный номер"
            }
        }
    });

}


function selectCountry() {
    var current = document.querySelector(".current");
    var country = $('.country');
    for (var i = 0; i < country.length; i++) {
        country[i].addEventListener("click", function () {
            var text = this.textContent;
            current.innerHTML = text;
        });
    }

}



