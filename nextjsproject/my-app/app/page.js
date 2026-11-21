'use client';

import { useState , useEffect} from 'react';




export default function Home() {
  const [cart, setCart] = useState(0);
const [products, setProducts] = useState([]);
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [API_URL]);


    



    return (
     <main className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8 pb-4 border-b">
          <h1 className="text-2xl font-bold">Store</h1>
          <span className="text-sm font-medium">Cart ({cart})</span>
        </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((item) => (
           
           <div key={item.id} className="bg-white p-4 rounded-lg border">


         <img
                src={item.image}
                alt={item.name}
                   className="w-full h-44 object-cover rounded mb-3"
              />
                 <h2 className="font-semibold text-base">{item.name}</h2>
              <p className="text-gray-600 text-sm mb-3">${item.price}</p>
              <button
                onClick={() => setCart(cart + 1)}
                className="w-full bg-black text-white text-sm py-2 rounded hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


