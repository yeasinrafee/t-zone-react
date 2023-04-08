import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h3>Ordered Items: {cart.length}</h3>
      <div>
        {cart.map((tshirt) => (
          <h3 key={tshirt._id}>
            {tshirt.name}{" "}
            <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Cart;
