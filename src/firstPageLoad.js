import meerkatImage from "./meerkat.png";

const firstPageLoad = (() => {
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
    headerHolder.textContent = 'Welcome to the Restaurant';
    return headerHolder;
  }

  function bodyComponent() {
    const bodyHolder = document.createElement('p');
    bodyHolder.id = 'bodyHolder';
    bodyHolder.innerText = `Welcome to the Meerkat Restaurant, where our furry friends serve up a feast fit for kings! That's right, our team of highly trained meerkats will scurry around your table, presenting you with delectable dishes from our diverse menu.
    
    From succulent insects to juicy grubs, we've got something to satisfy every palate. And don't worry about hygiene - our meerkats are equipped with tiny aprons and hairnets, ensuring a clean and safe dining experience.
    
    But the fun doesn't stop there! Our meerkat performers will also entertain you with acrobatic displays and adorable antics while you dine. You won't find this kind of unique dining experience anywhere else. 
    
    So come on down to the Meerkat Restaurant and let our little buddies take your taste buds on a wild adventure!`;
    return bodyHolder;
  }

  contentDiv.appendChild(headerComponent());
  contentDiv.appendChild(imageComponent());
  contentDiv.appendChild(bodyComponent());
});

export { firstPageLoad };