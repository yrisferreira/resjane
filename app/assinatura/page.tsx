import Link from 'next/link';
import { Check } from 'lucide-react';

export default function AssinaturaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Assine o Clubinho Jane
        </h1>
        <p className="text-xl text-gray-600">
          Acesso ilimitado a todos os recursos pedagógicos
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Plano Mensal */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Plano Mensal</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-primary-600">R$ 29,90</span>
            <span className="text-gray-600">/mês</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Acesso a todos os produtos</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Novos lançamentos mensais</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Suporte prioritário</span>
            </li>
          </ul>
          <Link
            href="/assinatura/mensal"
            className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 transition"
          >
            Assinar Agora
          </Link>
        </div>

        {/* Plano Trimestral */}
        <div className="bg-gradient-to-br from-pink-500 via-primary-600 to-purple-600 text-white border-2 border-primary-600 rounded-lg p-8 transform scale-105 shadow-xl">
          <div className="bg-pink-400 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
            MAIS POPULAR
          </div>
          <h3 className="text-2xl font-bold mb-4">Plano Trimestral</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">R$ 24,90</span>
            <span className="text-primary-200">/mês</span>
          </div>
          <p className="text-primary-200 text-sm mb-4">Economia de 17%</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Todos os benefícios do plano mensal</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Conteúdos exclusivos</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Workshops online</span>
            </li>
          </ul>
          <Link
            href="/assinatura/trimestral"
            className="block w-full bg-white text-primary-600 text-center py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Assinar Agora
          </Link>
        </div>

        {/* Plano Anual */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Plano Anual</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-primary-600">R$ 19,90</span>
            <span className="text-gray-600">/mês</span>
          </div>
          <p className="text-green-600 font-semibold text-sm mb-4">Economia de 33%</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Todos os benefícios anteriores</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Certificados de participação</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Comunidade exclusiva</span>
            </li>
          </ul>
          <Link
            href="/assinatura/anual"
            className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 transition"
          >
            Assinar Agora
          </Link>
        </div>
      </div>
    </div>
  );
}
