import { menuArray } from "./menuArray";
import MeerkatImage from "./MeerkatImage.jpg";
import DeerImage from "./DeerImage.jpg";
import BirdImage from "./BirdImage.jpg";
import RaccoonImage from "./RaccoonImage.jpg";

const menuPageLoad = (() => {
  const contentDiv = document.getElementById('content');
  contentDiv.replaceChildren();

  function headerComponent() {
    const headerHolder = document.createElement('h1');
    headerHolder.id = 'headerHolder';
    headerHolder.textContent = 'Menu';
    return headerHolder;
  }

  function bodyComponent() {
    const bodyHolder = document.createElement('div');
    bodyHolder.id = 'bodyHolder';
    const menuHolder = document.createElement('div');
    menuHolder.id = 'menuHolder';

    for (let menuItem of menuArray) {
        const card = document.createElement('div');
        card.classList.add('menuCard');

        const image = document.createElement('img');
        switch(menuItem.imageID) {
          case 'MeerkatImage':
            image.src = MeerkatImage;
            break;
          case 'DeerImage':
            image.src = DeerImage;
            break;
          case 'BirdImage':
            image.src = BirdImage;
            break;
          case 'RaccoonImage':
            image.src = RaccoonImage;
            break;
          default:
            image.src = './LionImage.jpg';
        }

        const namePrice = document.createElement('h2');
        namePrice.classList.add('menuName');
        namePrice.innerText = `${menuItem.name} 
        - ${menuItem.price}`;

        const blurb = document.createElement('h3');
        blurb.classList.add('blurb');
        blurb.textContent = `${menuItem.blurb}`;

        card.appendChild(image);
        card.appendChild(namePrice);
        card.appendChild(blurb);
        menuHolder.appendChild(card);
        bodyHolder.appendChild(menuHolder);
    }
    return bodyHolder;
  }
  contentDiv.appendChild(headerComponent());
  contentDiv.appendChild(bodyComponent());
});

export { menuPageLoad };