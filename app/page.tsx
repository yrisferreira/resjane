import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);
  const newProducts = products.filter(p => p.new).slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-primary-600 text-white rounded-lg p-12 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Recursos Pedagógicos para Transformar sua Sala de Aula
        </h1>
        <p className="text-xl mb-6">
          Materiais educacionais criativos e de alta qualidade
        </p>
        <Link
          href="/produtos"
          className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Ver Todos os Produtos
        </Link>
      </section>

      {/* Produtos em Destaque */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Produtos em Destaque</h2>
          <Link href="/produtos" className="text-primary-600 hover:underline">
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Lançamentos */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Lançamentos</h2>
          <Link href="/produtos?filter=new" className="text-primary-600 hover:underline">
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Clubinho de Assinatura */}
      <section className="bg-gradient-to-r from-primary-500 via-pink-500 to-pink-600 text-white rounded-lg p-12 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Assine o Clubinho Jane
        </h2>
        <p className="text-xl mb-6">
          A partir de R$ 29,90/mês. Acesso ilimitado a todos os recursos!
        </p>
        <Link
          href="/assinatura"
          className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Assinar Agora
        </Link>
      </section>
    </div>
  );
}
