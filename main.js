const carouselSlider = document.querySelector('.carousel-swiper');
const swiperSlider = document.querySelector('.stages-swiper');

const carouselSwiper = new Swiper('.carousel-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 500,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pag',
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' / ' +
                '<span class="' + totalClass + '"></span>';
        },
    },
    autoplay: {
        delay: 4000,
    },

    breakpoints: {
        350: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 3,
        }
    }
});

const stagesSwiper = new Swiper('.stages-swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 1500,
    navigation: {
        nextEl: '.stages-btn-next',
        prevEl: '.stages-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

