'use client';

import Link from 'next/link';
import { Product } from '@/types/product';
import { ShoppingCart, Plus, Star, Download, Shield } from 'lucide-react';
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
      <div className="relative overflow-hidden rounded-t-2xl aspect-square bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Premium Badge */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.new && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1 animate-pulse"></span>
              Novo
            </span>
          )}
          {product.featured && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Destaque
            </span>
          )}
        </div>
        
        {/* Premium Overlay */}
        <div className="absolute top-3 right-3 z-10">
          <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm border border-slate-200">
            <Shield className="w-4 h-4 text-slate-600" />
          </div>
        </div>
        
        {/* Image Placeholder */}
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-inner">
                <span className="text-blue-600 font-bold text-lg">JR</span>
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl group-hover:scale-110 transition-transform duration-300"></div>
          </div>
        </div>
        
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 space-y-4">
        {/* Category */}
        {product.category && (
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
              {product.category}
            </span>
            <span className="text-xs text-slate-400">Digital</span>
          </div>
        )}
        
        {/* Product Info */}
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-900 text-sm leading-tight line-clamp-2 min-h-[2.5rem] hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < 4 ? 'text-amber-400 fill-current' : 'text-slate-300'}`} 
                  />
                ))}
              </div>
              <span className="text-xs text-slate-500 font-medium">(4.9)</span>
            </div>
            
            <div className="flex items-center text-xs text-slate-500">
              <Download className="w-3 h-3 mr-1" />
              <span>Instantâneo</span>
            </div>
          </div>
        </div>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-900">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <p className="text-xs text-slate-500">Acesso vitalício</p>
          </div>
          
          <button 
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`
              relative p-3 rounded-xl transition-all duration-300 shadow-sm
              ${isAdding 
                ? 'bg-green-500 text-white shadow-green-200' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-lg active:scale-95'
              }
              disabled:cursor-not-allowed
            `}
          >
            {isAdding ? (
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-3 h-3 text-white animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            ) : (
              <ShoppingCart className="w-5 h-5" />
            )}
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="flex items-center space-x-3 text-xs text-slate-500">
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3 text-green-500" />
              <span>Garantia</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-amber-400" />
              <span>Premium</span>
            </div>
          </div>
          
          <div className="text-xs text-slate-400">
            {product.featured ? 'Popular' : 'Exclusivo'}
          </div>
        </div>
      </div>
    </div>
  );
}
