'use client';

import Link from 'next/link';
import { ShoppingCart, User, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-3xl md:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-primary-600 bg-clip-text text-transparent">
              Jane
            </span>
            <span className="text-gray-700"> Recursos</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-primary-600 transition">
              Início
            </Link>
            <Link href="/sobre" className="hover:text-primary-600 transition">
              Sobre
            </Link>
            <Link href="/produtos" className="hover:text-primary-600 transition">
              Todos os Produtos
            </Link>
            <Link href="/assinatura" className="hover:text-primary-600 transition">
              Assine o Clubinho
            </Link>
            <Link href="/downloads" className="hover:text-primary-600 transition">
              Baixar seu Arquivo
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            
            <Link href="/login" className="flex items-center space-x-1 hover:text-primary-600 transition">
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Entrar</span>
            </Link>
            
            <Link href="/carrinho" className="relative flex items-center space-x-1 hover:text-primary-600 transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline">Carrinho</span>
              <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <nav className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-primary-600 transition">
              Início
            </Link>
            <Link href="/sobre" className="hover:text-primary-600 transition">
              Sobre
            </Link>
            <Link href="/produtos" className="hover:text-primary-600 transition">
              Todos os Produtos
            </Link>
            <Link href="/assinatura" className="hover:text-primary-600 transition">
              Assine o Clubinho
            </Link>
            <Link href="/downloads" className="hover:text-primary-600 transition">
              Baixar seu Arquivo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
