import React from 'react';

const ProductList = ({ user, products, purchaseProduct, deleteProduct }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="card">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price} ETH</p>
        <p>Seller: {product.seller}</p>
        {user.address === product.seller ? (
          <>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </>
        ) : (
            <button onClick={() => purchaseProduct(product.id)}>Purchase</button>
        )}    
      </div>
      ))}
    </div>
  );
};

export default ProductList;
