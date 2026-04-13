'use client';

import Link from 'next/link';
import { Product } from '@/types/product';
import { ShoppingCart, Plus, Star } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="card group cursor-pointer">
      <div className="relative overflow-hidden rounded-t-2xl aspect-square bg-gradient-to-br from-indigo-50 to-purple-50">
        {/* Badge */}
        {product.new && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Novo
            </span>
          </div>
        )}
        
        {/* Image Placeholder */}
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <span className="text-indigo-600 font-bold text-lg">JP</span>
            </div>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5 space-y-4">
        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-neutral-900 text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-neutral-300'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-neutral-500">(4.8)</span>
          </div>
        </div>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-neutral-900">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <p className="text-xs text-neutral-500">Digital via download</p>
          </div>
          
          <button 
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`
              relative p-3 rounded-xl transition-all duration-200
              ${isAdding 
                ? 'bg-green-500 text-white' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 active:scale-95'
              }
              disabled:cursor-not-allowed
            `}
          >
            {isAdding ? (
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            ) : (
              <ShoppingCart className="w-5 h-5" />
            )}
          </button>
        </div>
        
        {/* Category */}
        {product.category && (
          <div className="pt-2 border-t border-neutral-100">
            <span className="text-xs text-neutral-500 font-medium">
              {product.category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
