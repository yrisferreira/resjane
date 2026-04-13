import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';
import { ArrowRight, Star, BookOpen, Users, Sparkles } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const newProducts = products.filter(p => p.new).slice(0, 4);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Recursos Pedagógicos Premium
              </div>
              
              <h1 className="heading-1 text-balance">
                Transforme sua 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Sala de Aula</span>
                <br />com Materiais Excepcionais
              </h1>
              
              <p className="text-body text-lg">
                Recursos educacionais criados por Jane Ferreira, pedagoga especialista em Educação Especial, 
                Inclusiva e Psicopedagogia. Materiais que fazem a diferença no aprendizado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/produtos" 
                  className="btn-primary group"
                >
                  Explorar Produtos
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/sobre" 
                  className="btn-secondary"
                >
                  Conheça a Jane
                </Link>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>4.9/5 Avaliação</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span>2000+ Educadores</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  <span>50+ Recursos</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl"></div>
                <div className="relative text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Jane Ferreira</h3>
                  <p className="text-neutral-600">Pedagoga Especialista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="heading-2">Produtos em Destaque</h2>
            <p className="text-body mt-2">Materiais mais populares entre educadores</p>
          </div>
          <Link 
            href="/produtos" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            Ver todos os produtos
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-16">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Por que escolher nossos recursos?</h2>
          <p className="text-body max-w-2xl mx-auto">
            Materiais desenvolvidos com base em pesquisas educacionais e experiência prática 
            para garantir o melhor resultado em sala de aula.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto">
              <BookOpen className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="heading-3">Conteúdo de Qualidade</h3>
            <p className="text-body">
              Materiais elaborados por especialistas com anos de experiência em educação inclusiva.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="heading-3">Aprovação dos Educadores</h3>
            <p className="text-body">
              Mais de 2000 professores utilizam nossos recursos com excelentes resultados.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="heading-3">Inovação Constante</h3>
            <p className="text-body">
              Novos materiais desenvolvidos regularmente para acompanhar as necessidades educacionais.
            </p>
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="heading-2">Lançamentos</h2>
            <p className="text-body mt-2">Novos recursos para enriquecer suas aulas</p>
          </div>
          <Link 
            href="/produtos?filter=new" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            Ver todos os lançamentos
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 lg:p-16 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="heading-2 text-white">Clubinho Jane</h2>
          <p className="text-xl text-white/90">
            Acesso ilimitado a todos os recursos pedagógicos por apenas R$ 29,90/mês
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/assinatura" 
              className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Assinar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/produtos" 
              className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30"
            >
              Conhecer Planos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
