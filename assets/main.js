const body = document.querySelector("body");

const main = document.createElement("main");

body.append(main);

let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    this.state = Math.floor(Math.random() * 2);
    return this.state;
  },
  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    const coinFace = this.flip();

    if (coinFace === 0) {
      return main.append("Heads");
    } else {
      return main.append("Tails");
    }
  },
  toHTML: function () {
    const coinFace = this.flip();
    let image = document.createElement("img");
    image.style.height = "20px";
    image.style.width = "20px";
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    if (coinFace === 0) {
      image.src = "./assets/images/heads.jpg";
    } else {
      image.src = "./assets/images/tails.png";
    }
    return main.append(image);
  },
};
function display20Flips() {
  for (let index = 0; index < 20; index++) {
    coin.toString();
  }
}
function display20Images() {
  for (let index = 0; index < 20; index++) {
    coin.toHTML();
  }
}
