let menuArray = [];

class menuItem {
    constructor(name, price, imageID, blurb) {
        this.name = name;
        this.price = price;
        this.imageID = imageID;
        this.blurb = blurb;
    }

    static addToMenu(name, price, imageID, blurb) {
        const menuObject = new menuItem(name, price, imageID, blurb);
        menuArray.push(menuObject);
      }
};

menuItem.addToMenu('Meerkat Skewers', '$12', 'MeerkatImage', 'Try our signature dish of juicy, tender Meerkat meat skewered and grilled to perfection. Served with a side of wild rice and jungle-inspired spices, this dish will have your taste buds roaring.');
menuItem.addToMenu('Bird Curry', '$3', 'BirdImage', 'A flavorful blend of spices and herbs, our Bird Curry is a must-try for adventurous eaters. Made with tender, succulent pieces of bird meat, this dish is served with a side of steamed vegetables and fragrant basmati rice.');
menuItem.addToMenu('Venison Stew', '$400', 'DeerImage', 'For those looking for a hearty, satisfying meal, our Venison Stew is the perfect choice. Made with tender chunks of venison, fresh vegetables, and a rich, savory broth, this dish is slow-cooked to perfection and served piping hot.');
menuItem.addToMenu('Raccoon Salad', 'Free', 'RaccoonImage', "Looking for a light, refreshing salad? Our Raccoon Salad is a delightful mix of crisp greens, juicy cherry tomatoes, and tender strips of raccoon meat. Topped with a tangy dressing and served with a side of warm bread, this salad is the perfect way to satisfy your hunger.");

export { menuArray };