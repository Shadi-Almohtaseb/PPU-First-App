import React from "react";

const Card = ({ product }) => {
  console.log(product);

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
    </div>
  );
};

export default Card;
