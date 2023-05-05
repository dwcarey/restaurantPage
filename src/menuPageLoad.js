import meerkatImage from "./meerkat.png";

const menuPageLoad = (() => {
  const contentDiv = document.getElementById('content');
  contentDiv.replaceChildren();

  function imageComponent() {
    const imageHolder = document.createElement('div');
    imageHolder.id = 'imageHolder';
    const meerkat = new Image();
    meerkat.src = meerkatImage;
    imageHolder.appendChild(meerkat);
    return imageHolder;
  }

  function headerComponent() {
    const headerHolder = document.createElement('h1');
    headerHolder.id = 'headerHolder';
    headerHolder.textContent = 'Welcome to the Menu';
    return headerHolder;
  }

  function bodyComponent() {
    const bodyHolder = document.createElement('p');
    bodyHolder.id = 'bodyHolder';
    bodyHolder.innerText = `Welcome to the menu
    Welcome to the menu
    Welcome to the menu
    Welcome to the menu
    Welcome to the menu
    Welcome to the menu
    Welcome to the menu
    Welcome to the menu
    Welcome to the menu
    Welcome to the menu`;
    return bodyHolder;
  }
  contentDiv.appendChild(headerComponent());
  contentDiv.appendChild(imageComponent());
  contentDiv.appendChild(bodyComponent());
});

export { menuPageLoad };