import './product-card-style.css';
import productsData from '../../data/productsData.json';
import { useState } from 'react';
import { Filter } from './filter';
const productCount = (count) => {
  count--;

  return count;
}
export const ProductCard = (
  { title, description, price, image, onClick, status, count }
) => {
  let [currentCount, updateCount] = useState(count);
  let [displayDescription, setDisplayDescription] = useState(false);
  return /*status == 'Available' ? */(
    <div className="product-card bg-gradient-to-r
  from-indigo-500
  to-teal-100
  hover:from-fuchsia-500
  hover:to-purple-600
  transition-all
  duration-1000
  ">
      <h1 className="product-card-title">{title}</h1>
      <img src={image} alt="Product" />
      <button onClick={() => setDisplayDescription((prev) => !prev)}>
        {displayDescription ? 'Hide Description' : 'Show Description'}
      </button>

      {displayDescription && <p className="product-card-description">{description}</p>}
      {currentCount > 0 && <button className="product-card-button" onClick={() => {
        onClick();
        updateCount(productCount(currentCount));
      }}>
        ${price}
      </button>}

      {
        currentCount > 0 && <p style={{ marginTop: 'auto', color: 'black' }}>Items available: {currentCount}</p>
      }
      <p style={{ marginTop: 'auto', color: currentCount > 0 ? 'green' : 'red' }}>{currentCount > 0 ? 'Available' : 'Sold Out'}</p>
    </div>
  ) /*: null*/;
}

const handleClick = (product) => {
  alert(`Product ${product.title}, Price: $${product.price}`);
};

export function ProductsData({ style }) {
  return (
    <>
    
    <div style={style}>
      
      {

                productsData.map(product => (
      <ProductCard
        key={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        image={product.image}
        onClick={() => handleClick(product)}
        status={product.status}
        count={product.count}
      />
      ))
            }
    </div>
    </>
  );
}

