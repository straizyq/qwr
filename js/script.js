const swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination1',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    centeredSlidesBounds: false
});

const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination2',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    centeredSlidesBounds: false
});



document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu_links');
    const menuLinks = document.querySelectorAll('.menu_links a');

    if (burger && menu) {
        // Открытие/закрытие по бургеру
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
        });

        // Закрытие при клике на пункт меню
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    } else {
        console.error('❌ Элементы .burger или .menu_links не найдены!');
    }

    document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target) || burger.contains(e.target);
    if (!isClickInsideMenu) {
        burger.classList.remove('active');
        menu.classList.remove('active');
    }
});

});

