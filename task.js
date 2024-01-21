const products = [
    { id: 1, name: 'Plain Silk Durag', price: 2500 },
    { id: 2, name: 'Camo Silk Durag', price: 3000 },
    { id: 3, name: 'Tye-Dye Silk Durag', price: 3000 },
    { id: 4, name: 'Velvet Durag', price: 5500},
    { id: 5, name: 'Wave Cap', price: 2500},
  ];
const cart = [];
  

function displayProducts() {
    console.log("Available Products:");
    products.forEach(product => {
      console.log(product.id+ ". " +product.name+ " - ₦" +product.price);
    });
}
  
  
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id == productId);
    if (selectedProduct) {
      cart.push(selectedProduct);
      console.log(selectedProduct.name+ " added to the cart.");
    } else {
      console.log('Invalid product ID.');
    }
}
  

function displayCart() {
    console.log("Shopping Cart:");
    if (cart.length == 0) {
      console.log("Your cart is empty.");
    } else {
      cart.forEach(product => {
        console.log(product.name + "- ₦" +product.price);
      });
      const total = cart.reduce((acc, product) => acc + product.price, 0);
      console.log("Total: ₦"+total);
    }
}
  
displayProducts();
addToCart(4);
addToCart(5);
displayCart();
  