import meerkatImage from "./MeerkatImage.jpg";

const contactPageLoad = (() => {
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
    headerHolder.textContent = 'Contacts';
    return headerHolder;
  }

  function bodyComponent() {
    const bodyHolder = document.createElement('div');
    bodyHolder.id = 'bodyHolder';
    //add contacts
    return bodyHolder;
  }

  contentDiv.appendChild(headerComponent());
  contentDiv.appendChild(imageComponent());
  contentDiv.appendChild(bodyComponent());
});

export { contactPageLoad };