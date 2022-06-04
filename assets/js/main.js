let numbers = document.querySelectorAll('.rating__list-numbers');
let submitButton = document.getElementById('rating-button');
const thankYou = document.getElementById('thankyou-container');
const ratingContainer = document.getElementById('rating-container');
const ratingInput = document.getElementById('rating-input');

/* ========== RATING LIST ACTIVE ========== */
// When a number is selected add active class to selected
// Change the rating input innerHTML to number selected
// Enable submit button linked only when a number is selected
numbers.forEach(number => {
    number.addEventListener('click', function() {
        numbers.forEach(num => num.classList.remove('active'));
        this.classList.add('active');
        ratingInput.innerHTML = `You selected ${number.innerHTML} out of 5`;
        submitButton.style.pointerEvents = 'all';
    });
});

// Display thankYou state when submit button is cliked if a number is selected
const displayThankYouState = () => {
    if (ratingContainer.style.display !== 'none') {
        ratingContainer.style.display = 'none'
        thankYou.style.display = 'flex'
    } else {
        ratingContainer.style.display = 'flex';
        thankYou.style.display = 'none';
    }
}
submitButton.addEventListener('click', displayThankYouState);