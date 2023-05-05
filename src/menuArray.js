let menuArray = [];

class menuItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.imageID = name + 'Image';
    }

    static addToMenu(name, price) {
        const menuObject = new menuItem(name, price);
        menuArray.push(menuObject);
      }
};

menuItem.addToMenu('Meerkat', '$12');
menuItem.addToMenu('Bird', '$3');
menuItem.addToMenu('Deer', '$400');
menuItem.addToMenu('Raccoon', 'Free');

export { menuArray };