import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";

function App() {
  // const [count, setCount] = useState(0);

  // const handleIncreaseCount = () => {
  //   if (count >= 5) {
  //     setCount(count + 10);
  //   } else {
  //     setCount(count + 1);
  //   }
  // };

  // const handleDecreaseCount = () => {
  //   setCount(count - 1);
  // };

  const productCards = [
    {
      name: "Wireless Headphones",
      price: 99.99,
      description:
        "High-quality wireless headphones with noise-cancellation feature and long-lasting battery life.",
      imageUrl: "https://images.unsplash.com/photo-1517317687508-3e9a4d40bdc3",
    },
    {
      name: "Smart Watch",
      price: 199.99,
      description:
        "Advanced smart watch with heart rate monitor, GPS, and customizable watch faces.",
      imageUrl: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    },
    {
      name: "Bluetooth Speaker",
      price: 49.99,
      description:
        "Portable Bluetooth speaker with powerful sound and water-resistant design.",
      imageUrl: "https://images.unsplash.com/photo-1592415484162-cb2b16bfc9d0",
    },
    {
      name: "Laptop Stand",
      price: 29.99,
      description:
        "Ergonomic laptop stand with adjustable height and sturdy construction.",
      imageUrl: "https://images.unsplash.com/photo-1600180758890-5c9c3e1f7386",
    },
    {
      name: "USB-C Hub",
      price: 39.99,
      description:
        "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader for versatile connectivity.",
      imageUrl: "https://images.unsplash.com/photo-1565200480338-72f51635c50c",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col">
      <NavBar />
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {productCards.map((product) => {
          return <Card product={product} />;
        })}
      </div>
      {/* <div className="flex items-center gap-3">
        <button
          className="bg-green-500 w-4 h-4 rounded-md flex items-center justify-center text-white"
          onClick={handleIncreaseCount}
        >
          +
        </button>
        <button
          className="bg-green-500 w-4 h-4 rounded-md flex items-center justify-center text-white"
          onClick={handleDecreaseCount}
        >
          -
        </button>
      </div>
      <span className="redColor">{count}</span> */}
    </div>
  );
}

export default App;
