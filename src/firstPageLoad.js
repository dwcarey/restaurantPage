import LionImage from "./LionImage.jpg";

const firstPageLoad = (() => {
  const contentDiv = document.getElementById('content');
  contentDiv.replaceChildren();

  function imageComponent() {
    const imageHolder = document.createElement('div');
    imageHolder.id = 'imageHolder';
    const lion = new Image();
    lion.src = LionImage;
    imageHolder.appendChild(lion);
    return imageHolder;
  }

  function headerComponent() {
    const headerHolder = document.createElement('h1');
    headerHolder.id = 'headerHolder';
    headerHolder.textContent = 'The Jungle';
    return headerHolder;
  }

  function bodyComponent() {
    const bodyHolder = document.createElement('p');
    bodyHolder.id = 'bodyHolder';
    bodyHolder.innerText = `Welcome to The Jungle, where the king invites you to indulge in a wild dining experience! Our menu features a variety of exotic dishes that will tantalize your taste buds and transport you to the heart of the jungle.

    Our signature dish is the Meerkat Skewers, tender strips of seasoned meat grilled to perfection. For those seeking a lighter option, try our Raccoon Salad, a fresh mix of greens topped with crispy bits of raccoon meat. For a hearty meal, we offer our Venison Stew, slow-cooked with herbs and spices for a rich and savory flavor. And for the adventurous foodies, our Bird Curry is a spicy blend of tropical flavors that will leave you wanting more.
    
    As you dine, keep an eye out for our resident meerkats who scurry around the restaurant, adding to the ambiance of the jungle. And if you're lucky, you may catch a glimpse of other wildlife roaming outside the restaurant.
    
    In The Jungle, we offer a unique dining experience that blends the wild and the culinary. So come on down and let us take you on a gastronomic journey through the wilds.`
    
    return bodyHolder;
  }

  contentDiv.appendChild(headerComponent());
  contentDiv.appendChild(imageComponent());
  contentDiv.appendChild(bodyComponent());
});

export { firstPageLoad };