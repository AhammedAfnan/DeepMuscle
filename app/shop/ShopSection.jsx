'use client';
import Image from "next/image";
import img1 from '../assets/shop/im1.webp'

import { useState } from 'react';

export default function ProductsPage() {
  const [columns, setColumns] = useState(3); // 2, 3, or 4

  const products = [
    {
      id: 1,
      name: 'BIRDIE OVERSIZED BLACK T-SHIRT',
      brand: 'BIRDIE',
      price: 'Rs. 1,284.00',
      originalPrice: 'Rs. 2,499.00',
      image: img1,
    },
    {
      id: 2,
      name: 'BIRDIE OVERSIZED GOLD T-SHIRT',
      brand: 'BIRDIE',
      price: 'Rs. 1,284.00',
      originalPrice: 'Rs. 2,499.00',
      image: img1,
    },
    {
      id: 3,
      name: 'BIRDIE OVERSIZED WHITE T-SHIRT',
      brand: 'BIRDIE',
      price: 'Rs. 1,284.00',
      originalPrice: 'Rs. 2,499.00',
      image: img1,
    },
    {
      id: 4,
      name: 'BIRDIE OVERSIZED GREEN T-SHIRT',
      brand: 'BIRDIE',
      price: 'Rs. 1,284.00',
      originalPrice: 'Rs. 2,499.00',
      image: img1,
    },
    {
      id: 5,
      name: 'BIRDIE OVERSIZED PINK T-SHIRT',
      brand: 'BIRDIE',
      price: 'Rs. 1,284.00',
      originalPrice: 'Rs. 2,499.00',
      image: img1,
    },
    {
      id: 6,
      name: 'BIRDIE OVERSIZED ORANGE T-SHIRT',
      brand: 'BIRDIE',
      price: 'Rs. 1,284.00',
      originalPrice: 'Rs. 2,499.00',
      image: img1,
    },
  ];

  const columnClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns];

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* Top Bar: Layout toggle, Sort, Count */}
      <div className="flex justify-between items-center mb-6">
        {/* Layout Switcher */}
        <div className="flex border rounded overflow-hidden">
          {[2, 3, 4].map((col) => (
            <button
              key={col}
              onClick={() => setColumns(col)}
              className={`w-10 h-10 flex items-center justify-center border-r last:border-r-0 ${
                columns === col ? 'bg-gray-900 text-white' : 'bg-white text-gray-500'
              }`}
            >
              <span className="text-lg">{'|'.repeat(col)}</span>
            </button>
          ))}
        </div>

        {/* Sort + Product Count */}
        <div className="flex items-center space-x-6">
          <div className="text-sm text-gray-700">
            <span className="font-medium">Sort by:</span> Alphabetically, A–Z
          </div>
          <div className="text-sm text-gray-500">{products.length} products</div>
        </div>
      </div>

      {/* Product Grid */}
      <div className={`grid ${columnClass} gap-6`}>
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-[450px] object-cover rounded-lg"
            />
            <h2 className="mt-4 text-sm font-medium text-gray-800">{product.name}</h2>
            <p className="text-xs text-gray-500">{product.brand}</p>
            <div className="mt-1 space-x-2">
              <span className="text-lg font-semibold text-black">{product.price}</span>
              <span className="line-through text-gray-400 text-sm">{product.originalPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
