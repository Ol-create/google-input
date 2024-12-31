const text = document.querySelector('.movable-text');
const inputBox = document.querySelector('#first-name');
// const div = document.querySelector('#input-container');

if (text && inputBox) {
    // Add the class on focus
    inputBox.addEventListener('focus', function () {
        text.classList.add('top-left');
        text.classList.add('turn-blue');
    });

    // Remove the class on blur, if input is empty
    inputBox.addEventListener('blur', function () {
        const inputValue = inputBox.value.trim(); // Get the current value

        text.classList.remove('turn-blue');
        if (!inputValue) {
            text.classList.remove('top-left');
        }
    });
}