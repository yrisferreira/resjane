'use client';

import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, X, Shield, Star, Phone } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const cartItemsCount = getTotalItems();

  return (
    <header className="bg-white/85 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Premium */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-rose-400/25 rounded-xl blur-xl group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">Jane Recursos</h1>
              <p className="text-xs text-slate-500 font-medium">Pedagógicos Premium</p>
            </div>
          </Link>

          {/* Desktop Navigation - Corporate */}
          <nav className="hidden xl:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors relative group"
            >
              Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/produtos" 
              className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors relative group"
            >
              Catálogo
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/sobre" 
              className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors relative group"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/assinatura" 
              className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors relative group"
            >
              Clubinho
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contato" 
              className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Search Bar - Desktop Premium */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-rose-600 transition-colors" />
              <input
                type="text"
                placeholder="Buscar recursos premium..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 focus:bg-white transition-all duration-300 shadow-sm"
              />
              {/* Search Results Dropdown */}
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-50">
                  <p className="text-sm text-slate-500">Digite para buscar recursos...</p>
                </div>
              )}
            </div>
          </div>

          {/* Actions - Premium */}
          <div className="flex items-center space-x-3">
            {/* Trust Badge */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-rose-50 border border-rose-100 rounded-xl">
              <Shield className="w-4 h-4 text-rose-600" />
              <span className="text-xs font-medium text-rose-700">Premium</span>
            </div>

            {/* Cart */}
            <Link 
              href="/carrinho" 
              className="relative p-3 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-300 group"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-600 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium shadow-lg animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* User Account */}
            <Link 
              href="/login" 
              className="hidden sm:flex items-center space-x-2 px-4 py-3 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-300 group"
            >
              <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Área do Aluno</span>
            </Link>

            {/* CTA Button */}
            <Link 
              href="/assinatura" 
              className="hidden md:inline-flex items-center px-4 py-3 bg-gradient-to-r from-rose-600 to-pink-500 text-white rounded-xl hover:from-rose-700 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span className="text-sm font-semibold">Assinar</span>
              <Star className="w-4 h-4 ml-1 group-hover:rotate-12 transition-transform" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-3 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Premium */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white animate-slide-up">
            <div className="py-6 space-y-2">
              <div className="px-4 pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Plataforma Premium</span>
                </div>
              </div>
              
              <Link 
                href="/" 
                className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="/produtos" 
                className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Catálogo de Produtos
              </Link>
              <Link 
                href="/sobre" 
                className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre a Jane
              </Link>
              <Link 
                href="/assinatura" 
                className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Clubinho Premium
              </Link>
              <Link 
                href="/contato" 
                className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato e Suporte
              </Link>
              
              {/* Mobile Search */}
              <div className="px-4 pt-4 border-t border-slate-100">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar recursos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all"
                  />
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="px-4 pt-4 border-t border-slate-100 space-y-3">
                <Link 
                  href="/login" 
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">Área do Aluno</span>
                </Link>
                
                <Link 
                  href="/assinatura" 
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-rose-600 to-pink-500 text-white rounded-xl hover:from-rose-700 hover:to-pink-600 transition-all shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-semibold">Assinar Agora</span>
                </Link>
              </div>

              {/* Mobile Contact */}
              <div className="px-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                  <Phone className="w-4 h-4" />
                  <a href="https://wa.me/5511945071828" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                    WhatsApp: +55 11 94507-1828
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
