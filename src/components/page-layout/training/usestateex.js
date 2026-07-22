import React from "react";
import { useState } from "react";
export function Counter() {
    let [counter, updateCounter] = useState(0);
    return (
        <div>
            <button onClick={() => {
                updateCounter(prev => prev + 1)
                updateCounter(prev => prev + 1)
                updateCounter(prev => prev + 1)
                updateCounter(prev => prev + 1)
                updateCounter(prev => prev + 1)
            }}
            >+</button>

            <h1>{counter}</h1>
            <button onClick={() => {
                updateCounter(prev => prev - 1)
                updateCounter(prev => prev - 1)
                updateCounter(prev => prev - 1)
                updateCounter(prev => prev - 1)
                updateCounter(prev => prev - 1)
            }}>-</button>
        </div>
    );
}
export function Input() {
    let [input, updateInput] = useState("");
    return (
        <div>
            <input style={{color:"black"}} type="text" value={input} onChange={(e) => updateInput(e.target.value)} />
            <h1>{input}</h1>
        </div>
    );
}

export function Like () {
    let [like, updateLike] = useState(0);
    return (
        <div>
            <button style={{
    backgroundImage: "url('https://images.emojiterra.com/mozilla/512px/2764.png')",
    backgroundSize: "50px",
    backgroundRepeat: "no-repeat",
    width: "50px",
    height: "50px"
  }}  onClick={() => updateLike(like + 1)}></button>
            <h1>{like}</h1>
        </div>
    );
}

export function DarkTheme ()
{
   let [dark,ChangeTheme] = useState(false);
   return (
    <div style={{backgroundColor: dark ? "#000000" : "#ffffff", color: dark ? "#ffffff" : "#000000"}}>
        <button onClick={() => ChangeTheme(!dark)}>Toggle</button>
        <h1>{dark ? "Dark" : "Light"}</h1>
    </div>
   ) 
}




export function Profile() {

    const [user, setUser] = React.useState({
        name: "Mohammad",
        age: 20,
        city: "Zarqa"
    });


    function handleChange(event) {
        const { name, value } = event.target;

        // TODO:
        // Update only the changed property
       setUser({
        ...user,
        [name]: value
       });
    }


    return (
        <>
            <h1>User Info</h1>

            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>


            <input style={{color:'black'}}
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
            />


            <input style={{color:'black'}}
                name="age"
                value={user.age}
                onChange={handleChange}
                placeholder="Age"
            />


            <input style={{color:'black'}}
                name="city"
                value={user.city}
                onChange={handleChange}
                placeholder="City"
            />

        </>
    );
}


export function Product() {

    const [product, setProduct] = React.useState({
        name: "Laptop",
        price: 1000,
        quantity: 1,
        color: "black"
    });


    function handleChange(e) {
        const {name, value} = e.target;

        // your code here
        setProduct({
            ...product,
            [name]: value
        });
    }


    function increaseQuantity() {
        // your code here
        setProduct({
            ...product,
            quantity: product.quantity + 1
        });
    }


    function decreaseQuantity() {
        // your code here
        setProduct({
            ...product,
            quantity: product.quantity - 1
        });
    }


    return (
        <>
            <h1>{product.name}</h1>

            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Color: {product.color}</p>


            <input style={{color:'black'}}
                name="name"
                value={product.name}
                onChange={handleChange}
            />

            <input style={{color:'black'}}  
                name="price"
                value={product.price}
                onChange={handleChange}
            />


            <select style={{color:'black'}}
                name="color"
                value={product.color}
                onChange={handleChange}
            >
                <option>black</option>
                <option>white</option>
                <option>red</option>
            </select>


            <button onClick={increaseQuantity}>+</button>
            <button onClick={decreaseQuantity}>-</button>

        </>
    );
}


export function CreateProduct() {
  const [product, setProduct] = React.useState({
    name: "",
    price: "",
    category: ""
});
return(
    <div>
        <h1>Create Product</h1>
        <h2>Product Name: {product.name}</h2>
        <h2>Product Price: {product.price}</h2>
        <h2>Product Category: {product.category}</h2>
    <input style={{color:'black'}} name="name"  placeholder="Name" onChange={(e)=>
        {const {name,value} =e.target;
        setProduct({
            ...product,
            [name]: value
        })
        }}/>
    <input style={{color:'black'}} name="price" placeholder="Price" onChange={(e)=>
        {const {name,value} =e.target;
        setProduct({
            ...product,
            [name]: value
        })
        }}/>
    <input style={{color:'black'}} name="category" placeholder="Category" onChange={(e)=>
        {const {name,value} =e.target;
        setProduct({
            ...product,
            [name]: value
        })
        }}/>
    </div>
);

}