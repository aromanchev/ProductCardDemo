import React from 'react';
import ProductCard, { Currency } from "./ProductCard";

import './App.css';

function App() {
  const sampleProducts = [
    {
      title: "Смартфон iPhone 15 Pro Max 256GB",
      origin: "США",
      price: 13490000,
      currency: Currency.RUB,
      imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop"
    },
    {
      title: "Wireless Headphones Sony WH-1000XM5",
      origin: "Japan",
      price: 29900,
      currency: Currency.USD,
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
    },
    {
      title: "Mechanical Gaming Keyboard",
      origin: "Germany",
      price: 15900,
      currency: Currency.EUR,
      imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className='demo-container'>
      <h1>Демо компонента ProductCards</h1>

      {sampleProducts.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  );
}

export default App;
