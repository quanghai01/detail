import React from "react";
import { useState } from "react";

const TableProduct = () => {
   
  var products = [
    {
      id: 1,
      name: "Classico 4",
      src: "product-01.png",
      price: 500000,
      quantity: 2,
    },
  ];
  const [cartItems, setCartItems] = useState(products);
  products=cartItems
console.log(products,cartItems)
  const handleIncrease = (id) => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === id) {

          return { ...cartItem, quantity: cartItem.quantity + 1 };

        } else {
          return cartItem;
        }
      })
    );
  };

  const handleDecrease = (id) => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === id && cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      })
    );
  };

  return (
    <div className="fui-table-ui-basic-linh table-wrap w-[50%]">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => (
            <tr key={product.id}>
              <td className="flex flex-row items-center">
                <div className="img-product">
                  <img src={product.src} alt="" className="w-[5vw]" />
                </div>
                <h3 className="name-product">{product.name}</h3>
              </td>
              <td className="price-product">{product.price}</td>
              <td className="quantity-product">
                <div className="quantity  mb-[2vw] cover">
                  <input
                    className="is-form"
                    type="button"
                    value="-"
                    onClick={() => handleDecrease(product.id)}
                  />
                  <input
                    type="number"
                    step="1"
                    min="1"
                    max="9999"
                    name="quantity"
                    size="4"
                    value={product.quantity}
                    onChange={e => {
                        const newQuantity = e.target.value;
                        setCartItems(cartItems.map(cartItem => {
                          if (cartItem.id === product.id) {
                            return { ...cartItem, quantity: newQuantity };
                          } else {
                            return cartItem;
                          }
                        }));
                      }}
                  />
                  <input
                    className="is-form"
                    type="button"
                    value="+"
                    onClick={() => handleIncrease(product.id)}
                  />
                </div>
              </td>
              <td className="total-product">
                {product.quantity * product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;
