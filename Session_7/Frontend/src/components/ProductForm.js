import React, { useState } from 'react';

const ProductForm = ({ postProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct(name, description, price);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price (in ETH)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Post Product</button>
    </form>
  );
};

export default ProductForm;
