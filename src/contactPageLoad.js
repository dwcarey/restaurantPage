import contactsLion from "./contactsLion.jpg";

let map;

async function initMap() {

  const position = { lat: -3.077, lng: 35.626 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

};


const contactPageLoad = (() => {

  const contentDiv = document.getElementById('content');
  contentDiv.replaceChildren();

  function headerComponent() {
    const headerHolder = document.createElement('h1');
    headerHolder.id = 'headerHolder';
    headerHolder.textContent = 'Contact';
    return headerHolder;
  }

  function contactsImage() {
    const image = document.createElement('img');
    const lionHolder = document.createElement('div');
    image.src = contactsLion;
    lionHolder.classList.add('lionHolder');
    lionHolder.appendChild(image);
    return lionHolder;
  }

  function bodyComponent() {
    const bodyHolder = document.createElement('div');
    bodyHolder.id = 'bodyHolder';
    const contactBlurb = document.createElement('p');
    contactBlurb.innerText = `Welcome to The Jungle, located in the heart of Ngorongoro Conservation! If you have any questions, comments, or concerns, please do not hesitate to contact us. Our friendly staff are always happy to assist you and ensure that your dining experience is one to remember.

    To find us, simply head to Ngorongoro Conservation and look for the large, brightly colored sign with our restaurant's name on it. We are situated in a lush and vibrant jungle setting, surrounded by the sights and sounds of nature. We can't wait to welcome you to our unique and unforgettable dining experience in the heart of the African wilderness!`
    const mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    mapDiv.style.height = '400px';
    contactBlurb.id = 'contactBlurb';
    bodyHolder.appendChild(contactBlurb);
    bodyHolder.appendChild(mapDiv);
    initMap();
    return bodyHolder;
  }

    
  contentDiv.appendChild(headerComponent());
  contentDiv.appendChild(contactsImage());
  contentDiv.appendChild(bodyComponent());
});

export { contactPageLoad };

