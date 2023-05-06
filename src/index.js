import './style.css';
import { firstPageLoad } from './firstPageLoad';
import { menuPageLoad } from './menuPageLoad';
import { contactPageLoad } from './contactPageLoad';
import { menuArray } from './menuArray';

firstPageLoad();
createButtons();

function createButtons() { 
const headerDiv = document.getElementById('header');
headerDiv.replaceChildren();

const homeButton = document.createElement('button');
homeButton.id = 'Home';
homeButton.textContent = homeButton.id;
homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    else {
        firstPageLoad();
        window.scrollTo(0, 0);
        activeButton(homeButton);
}});

const menuButton = document.createElement('button');
menuButton.id = 'Menu';
menuButton.textContent = menuButton.id;
menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    else {
        menuPageLoad();
        window.scrollTo(0, 0);
        activeButton(menuButton);
    }
});

const contactButton = document.createElement('button');
contactButton.id = 'Contact';
contactButton.textContent = contactButton.id;
contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    else {
        contactPageLoad();
        window.scrollTo(0, 0);
        activeButton(contactButton);
    }
});

headerDiv.appendChild(homeButton);
headerDiv.appendChild(menuButton);
headerDiv.appendChild(contactButton);
};

function activeButton(button) {
    const buttons = document.querySelectorAll('.active');

    buttons.forEach ((buttonItem) => {
        buttonItem.classList.remove('active');
    })

    button.classList.add('active');
}