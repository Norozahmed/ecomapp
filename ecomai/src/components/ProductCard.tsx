import React from 'react';
import { Plus } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
          <span className="text-lg font-bold text-indigo-600">
            ${product.price.toLocaleString()}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="mt-4">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}