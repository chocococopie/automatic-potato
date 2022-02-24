import Swiper from 'swiper/swiper-bundle';

window.addEventListener('DOMContentLoaded', () => {

    const mainSwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }

    const mainSwiper = new Swiper('.mainSwiper', mainSwiperOptions);

    const newsOne = {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: false,

        breakpoints: {
            768: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: false,
            }
        }
    }

    const newsOneSwiper = new Swiper('.newsOneSwiper', newsOne);

    const swiperOptions = {
        slidesPerView: 1.2,
        spaceBetween: 8,
        loop: false,
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 24,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }
        }
    };

    const discountSwiper = new Swiper('.discountSwiper', swiperOptions);
    const infoSwiper = new Swiper('.infoSwiper', swiperOptions);
    const stockSwiper = new Swiper('.stockSwiper', swiperOptions);
    const newsSwiper = new Swiper('.newsSwiper', swiperOptions);

    // let observer = new MutationObserver(initSaleSwiper);
    // const btn = document.querySelector('#stock');

    // const config = {
    //     attributes: true,
    //     attributeFilter: ['class'],
    // };

    // function initSaleSwiper() {
    //     if (
    //     .classList.contains('active')) {
    //         stockSwiper.update();
    //     }
    // }

    // btn && observer.observe(btn, config);

    const featSwiperOptions = {
        slidesPerView: 1,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };

    const featSwiper = new Swiper('.featSwiper', featSwiperOptions);

    const swiperStart = (swiperWrapperSelector, thumbsSliderSelector, sliderSelector) => {
        const swiperWrap = document.querySelectorAll(swiperWrapperSelector);

        swiperWrap?.forEach((item) => {
            const thumbs = item?.querySelector(thumbsSliderSelector),
                slider = item?.querySelector(sliderSelector);

            if (thumbs) {

                const thumbsSlider = new Swiper(thumbs, {
                    loop: true,
                    spaceBetween: 5,
                    slidesPerView: 4,
                });

                if (slider) {
                    const itemSlider = new Swiper(slider, {
                        loop: true,
                        spaceBetween: 10,
                        slidesPerView: 1,
                        autoHeight: false,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        thumbs: {
                            swiper: thumbsSlider,
                        },
                    });
                    if (matchMedia("(max-width: 767px)").matches) {
                        const btn = document.querySelectorAll('.detail__cabin .accordion-header');

                        btn?.forEach(item => {
                            item.addEventListener("click", function () {
                                itemSlider.update();
                            });
                        });
                    }
                }
            }


        });
    };

    swiperStart('.swiperWrap', '.detailSwiperThumbs', '.detailSwiper');

});
