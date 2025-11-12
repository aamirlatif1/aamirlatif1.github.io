 const CartKey = 'shoringCart';

 function addtocart(productId){
  let storage = window.localStorage;
    let cart = getCart();
    let matchingItem;
    cart.forEach((cartitem) => {
      if (productId === cartitem.productId) {
        matchingItem = cartitem;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      });
    }
  storage.setItem(CartKey, JSON.stringify(cart));
}

function getCart() {
  let storage = window.localStorage;
  let shopingCart = storage.getItem(CartKey);
  if (shopingCart)
    return JSON.parse(shopingCart);
  return []
}

function clearCart(){
   let storage = window.localStorage;
   storage.removeItem(CartKey);
}