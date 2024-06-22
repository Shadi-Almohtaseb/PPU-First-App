import React, { useEffect, useState } from "react";

const Card = ({ product, addToCart }) => {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = cart.find((item) => item.name === product.name);
    setIsInCart(!!productInCart);
  }, [product.name]);

  return (
    <div className="w-72 mt-5 p-3 bg-[#eeeeee] rounded-lg shadow-xl">
      <img src={product.imageUrl} alt="product" className="w-full rounded-lg" />
      <div>
        <div className="flex items-center justify-between my-4">
          <span className="font-bold text-lg">{product.name}</span>
          <span className="text-red-600">{product.price}$</span>
        </div>
        <div>
          <p>{product.description}</p>
        </div>
      </div>

      {isInCart ? (
        <button className="w-full mt-4 bg-[#f04b4b] py-2 rounded-lg text-white font-semibold">
          Remove From Cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-[#4bb1f0] py-2 rounded-lg text-white font-semibold"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Card;
