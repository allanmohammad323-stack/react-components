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