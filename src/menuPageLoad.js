import { menuArray } from "./menuArray";

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
    const bodyHolder = document.createElement('p');
    bodyHolder.id = 'bodyHolder';

    for (let menuItem of menuArray) {
        const card = document.createElement('div');
        card.classList.add('menuCard');

        const name = document.createElement('h2');
        name.classList.add('menuName');
        name.textContent = menuItem.name;

        const price = document.createElement('h3');
        price.classList.add('menuPrice');
        price.textContent = menuItem.price;

        //attach image based on imageID? not sure how to do this
        card.appendChild(name);
        card.appendChild(price);
        bodyHolder.appendChild(card);
    }
    return bodyHolder;
  }
  contentDiv.appendChild(headerComponent());
  contentDiv.appendChild(bodyComponent());
});

export { menuPageLoad };