
import './style.css';
import { HomeBtn } from './homeBtn';
import { ProductCard } from '../product-card/ProductCard'
import { Profile ,User } from '../profile/profile'
import { ProductsData } from '../product-card/ProductCard'
import { Counter , Input , Like , DarkTheme } from './training/usestateex'
class ClassComponent {
    // constructor
    constructor(name) {
        this.Name = name;
    }

    fun = () => {
        return `Hello ${this.Name}`;
    }

}

const obj = new ClassComponent("mohamad");



export function Container() {

  
    return (
        <div className="Container">
            <span style={{ display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <ProductsData style={{ display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))' }} />
            </span>
            
           {/* 
           <Counter />
           <Input />
           <Like />
           <DarkTheme />
           */}
        </div>
    )
}