import { useState } from "react";
export function Filter({products})
{
    let [minPrice, setMinPrice] = useState(0);
    let [maxPrice, setMaxPrice] = useState(0);
    return(
        <div className="flex flex-row gap-4">
<div className="max-w-20">
  <label for="price" class="block text-sm/6 font-medium text-white"> Min Price</label>
  <div class="mt-2">
    <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
      <div class="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">$</div>
      <input 
      value={minPrice}
      onChange={(e) => {setMinPrice(e.target.value); 

        products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
      }}
       id="price" type="text" name="price" placeholder="0.00" class="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
      <div class="grid shrink-0 grid-cols-1 focus-within:relative">
      </div>
    </div>
  </div>
</div>

<div className="max-w-20">
  <label for="price" class="block text-sm/6 font-medium text-white">Max Price</label>
  <div class="mt-2">
    <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
      <div class="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">$</div>
      <input 
      value={maxPrice}
      onChange={(e) => {setMaxPrice(e.target.value); console.log(e.target.value)}}
      id="price" type="text" name="price" placeholder="0.00" class="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
      <div class="grid shrink-0 grid-cols-1 focus-within:relative">
        
      </div>
    </div>
  </div>
</div>
<hr />
        </div>
    );
}
