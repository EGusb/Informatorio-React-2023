const apple = {
  fruitName: "Manzana",
  price: 999,
  eat: function () {
    console.log(`Voy a comer una ${this.fruitName}`);
  },
};

const orange = {
  fruitName: "Naranja",
  price: 123,
};

// const eat = apple.eat.bind(orange);
// eat();
apple.eat.call(orange);
