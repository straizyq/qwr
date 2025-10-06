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

document.querySelectorAll('.trainer').forEach(button => {
    button.addEventListener('click', () => {
        const bookingContainer = document.querySelector('.booking-container');
        if (bookingContainer) {
            bookingContainer.style.display = 'block';
        }
    });
});

document.addEventListener('click', (event) => {
    const bookingContainer = document.querySelector('.booking-container');
    if (bookingContainer && bookingContainer.style.display === 'block') {
        // Если клик вне окна и не на кнопке тренера
        if (!bookingContainer.contains(event.target) && !event.target.classList.contains('trainer')) {
            bookingContainer.style.display = 'none';
        }
    }
});


document.querySelector('.massage_btn').addEventListener('click', () => {
    const bookingPopup = document.querySelector('.booking-popup');
    if (bookingPopup) {
        bookingPopup.style.display = 'block';
    }
});

document.addEventListener('click', (event) => {
    const bookingPopup = document.querySelector('.booking-popup');
    if (bookingPopup && bookingPopup.style.display === 'block') {
        if (!bookingPopup.contains(event.target) && !event.target.classList.contains('massage_btn')) {
            bookingPopup.style.display = 'none';
        }
    }
});
