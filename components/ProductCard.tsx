import Link from 'next/link';
import { Product } from '@/types/product';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-square bg-gradient-to-br from-pink-100 via-purple-100 to-primary-200 flex items-center justify-center">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-primary-400 text-center p-4">
            <p className="text-sm">Imagem do Produto</p>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition flex items-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Adicionar</span>
          </button>
        </div>
        {product.new && (
          <span className="inline-block mt-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            Novo
          </span>
        )}
      </div>
    </div>
  );
}
