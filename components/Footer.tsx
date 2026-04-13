import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone, MapPin, BookOpen, Users, Shield, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-t border-slate-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Jane Recursos</h3>
                <p className="text-sm text-slate-400">Pedagógicos</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Recursos educacionais premium desenvolvidos por especialistas para transformar 
              o ensino e garantir o sucesso dos alunos.
            </p>
            
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/jane.psicoeducar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-slate-300 hover:text-white transition-colors">
                  Catálogo de Produtos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-slate-300 hover:text-white transition-colors">
                  Sobre a Jane
                </Link>
              </li>
              <li>
                <Link href="/assinatura" className="text-slate-300 hover:text-white transition-colors">
                  Clubinho Premium
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-slate-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Serviços</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-slate-300">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Recursos Premium</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-300">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Clube de Assinatura</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Consultoria Pedagógica</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">E-mail</p>
                  <p className="text-white font-medium">contato@janerecursos.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">WhatsApp</p>
                  <a href="https://wa.me/5511945071828" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-green-400 transition-colors">
                    +55 11 94507-1828
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Atendimento</p>
                  <p className="text-white font-medium">Seg-Sex 9h-18h</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-700">
              <p className="text-sm text-slate-400 mb-2">Formas de Pagamento</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-700 rounded text-xs">Cartão</span>
                <span className="px-2 py-1 bg-slate-700 rounded text-xs">PIX</span>
                <span className="px-2 py-1 bg-slate-700 rounded text-xs">Boleto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Jane Recursos Pedagógicos. Todos os direitos reservados.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                CNPJ: 00.000.000/0000-00 | São Paulo - SP
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link href="/privacidade" className="text-slate-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-slate-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="/trocas" className="text-slate-400 hover:text-white transition-colors">
                Política de Trocas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
