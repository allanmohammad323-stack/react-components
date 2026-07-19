import './product-card-style.css';
const ProductCard=()=>{

  return  (
    <div className="product-card">
      <h1 className="product-card-title">Product Card</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2eLipHCuT1ONKci2kKhURlxE0jp31qiaOuyEyv3O55Kd6iQq3vSxL4P8&s=10" alt="Product" />
      <p className="product-card-description">Description</p>
      <p className="product-card-price">Price</p>
      <button className="product-card-button">Buy</button>
    </div>

  );
}
export default ProductCard;