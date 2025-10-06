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