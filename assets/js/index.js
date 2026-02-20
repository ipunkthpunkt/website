/* use strict*/

let fieldButtons = document.querySelector('[data-buttons]');

function chooseData() {
    let appendField = document.querySelector('[data-append]');
    let buttons = fieldButtons.querySelectorAll('[data-button]');

    buttons.forEach((button)=> {
        button.addEventListener('click', ()=> {
            let setColor = button.style.color;

            appendField.innerHTML = button.dataset.button;
            appendField.style.color = setColor;
        });
    });
}

if(fieldButtons) {
    chooseData();
}
