import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';
import { ArrowRight, Star, BookOpen, Users, Award, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const newProducts = products.filter(p => p.new).slice(0, 4);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Professora Educação Infantil",
      content: "Os recursos da Jane transformaram minhas aulas. As crianças amam as atividades e eu economizo tempo de preparação.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      role: "Pedagogo Escolar",
      content: "Material de altíssima qualidade, fundamentado pedagogicamente. Recomendo a todos os colegas.",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      role: "Coordenadora Pedagógica",
      content: "O Clubinho Jane revolucionou nossa escola. Acesso ilimitado a materiais excepcionais.",
      rating: 5,
      avatar: "AC"
    }
  ];

  // Calcular média real das avaliações
  const averageRating = (products.reduce((sum, product) => sum + (product.rating || 0), 0) / products.length).toFixed(1);
  const totalReviews = products.reduce((sum, product) => sum + (product.reviews || 0), 0);

  const stats = [
    { value: "2000+", label: "Educadores Ativos", icon: Users },
    { value: "50+", label: "Recursos Premium", icon: BookOpen },
    { value: `${averageRating}/5`, label: "Avaliação Média", icon: Star },
    { value: `${totalReviews}+`, label: "Avaliações", icon: TrendingUp }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section - Premium */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-24 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/70 border border-slate-200">
                <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-slate-700">Plataforma de confiança de milhares de educadores</span>
              </div>
              
              <h1 className="heading-1">
                Recursos Pedagógicos
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">De Excelência</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500">Para educação transformadora</span>
              </h1>
              
              <p className="text-body text-lg leading-relaxed">
                Materiais educacionais desenvolvidos por <strong>Jane Ferreira</strong>, especialista em 
                Educação Especial, Inclusiva e Psicopedagogia. Transforme sua prática pedagógica 
                com recursos validados por mais de 2000 educadores.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/produtos" 
                  className="btn-primary"
                >
                  <Zap className="w-5 h-5" />
                  Explorar Catálogo Premium
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/sobre" 
                  className="btn-secondary"
                >
                  <Award className="w-5 h-5" />
                  Conhecer Especialista
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.slice(0, 4).map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                      <p className="text-sm text-slate-600">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 h-[500px] flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 rounded-3xl"></div>
                
                {/* Premium Badge */}
                <div className="absolute top-6 right-6">
                  <div className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-rose-600 to-pink-500 text-white rounded-full text-xs font-bold shadow-lg">
                    <Shield className="w-3 h-3" />
                    PREMIUM
                  </div>
                </div>
                
                <div className="relative text-center space-y-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-rose-600 to-pink-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-slate-900">Jane Ferreira</h3>
                    <p className="text-slate-600 font-medium">Pedagoga Especialista</p>
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(Number(averageRating)) ? 'text-amber-400 fill-current' : 'text-slate-300'}`} />
                      ))}
                      <span className="text-sm text-slate-600 ml-2">{averageRating}/5</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Educação Especial</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Psicopedagogia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-2">Por Que Educadores Confiam na Jane</h2>
            <p className="text-body mt-4 max-w-2xl mx-auto">
              Comprometimento com excelência educacional e resultados comprovados
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Expertise Reconhecida",
                description: "Formação em Pedagogia, Educação Especial e Psicopedagogia"
              },
              {
                icon: Users,
                title: "Comunidade Ativa",
                description: "Mais de 2000 educadores utilizando nossos recursos"
              },
              {
                icon: TrendingUp,
                title: "Resultados Comprovados",
                description: "98% de satisfação e melhoria no aprendizado"
              },
              {
                icon: Shield,
                title: "Qualidade Garantida",
                description: "Materiais desenvolvidos com base científica"
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-slate-700" />
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Premium */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            <div>
              <h2 className="heading-2">Recursos Premium</h2>
              <p className="text-body mt-4 max-w-lg">
                Materiais mais populares entre educadores que buscam excelência em sala de aula
              </p>
            </div>
            <Link 
              href="/produtos" 
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
            >
              <span className="font-semibold text-slate-700">Ver Catálogo Completo</span>
              <ArrowRight className="w-5 h-5 text-slate-600" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Premium */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2">O Que Educadores Dizem</h2>
            <p className="text-body mt-4 max-w-2xl mx-auto">
              Depoimentos de profissionais que transformaram sua prática com nossos recursos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8 space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-body italic">&ldquo;{testimonial.content}&rdquo;</p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="heading-2 text-white">Clubinho Jane Premium</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Acesso ilimitado a todos os recursos pedagógicos premium com atualizações mensais
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 py-12">
              {[
                "Acesso a 50+ Recursos Premium",
                "Novos Materiais Todo Mês",
                "Suporte Especializado"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-2">R$ 29,90</p>
                <p className="text-slate-400 mb-6">por mês</p>
                <Link 
                  href="/assinatura" 
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 shadow-sm transition"
                >
                  Assinar Agora
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-semibold text-slate-300 mb-2">R$ 299,90</p>
                <p className="text-slate-400 mb-6">ano (economize 2 meses)</p>
                <Link 
                  href="/assinatura?plan=annual" 
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-slate-100 border border-white/20 bg-white/5 hover:bg-white/10 shadow-sm transition"
                >
                  Plano Anual
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 mt-8">
              Cancelamento a qualquer momento. Garantia de 7 dias.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
