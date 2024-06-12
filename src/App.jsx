import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

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
      imageUrl:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww",
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
      imageUrl:
        "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Laptop Stand",
      price: 29.99,
      description:
        "Ergonomic laptop stand with adjustable height and sturdy construction.",
      imageUrl: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
    },
    {
      name: "USB-C Hub",
      price: 39.99,
      description:
        "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader for versatile connectivity.",
      imageUrl:
        "https://media.istockphoto.com/id/184841045/photo/memory-stick.webp?b=1&s=170667a&w=0&k=20&c=2Nau1PzmF6ss9shD0GVte30zUTsmREXTnQ1vdCKRuww=",
    },
  ];

  const changeFlag = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <NavBar />

      <div className="flex items-center justify-center gap-5 flex-wrap mx-6">
        {productCards.map((product) => {
          return <Card product={product} key={product.name} />;
        })}
      </div>

      {/* <div className="flex items-center gap-3">
        <button
          className="bg-green-500 w-8 h-8 text-xl rounded-md flex items-center justify-center text-white"
          onClick={handleIncreaseCount}
        >
          +
        </button>
        <button
          className="bg-green-500 w-8 h-8 text-xl rounded-md flex items-center justify-center text-white"
          onClick={handleDecreaseCount}
        >
          -
        </button>
      </div>
      <span className="redColor">{count}</span> */}

      <div className="flex items-center flex-col mt-10">
        {isTrue ? <span>Yes its true</span> : <span>No its false</span>}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={changeFlag}
        >
          Change the flag
        </button>
      </div>
    </div>
  );
}

export default App;
