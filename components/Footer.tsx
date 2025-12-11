import Link from 'next/link';
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-primary-400 transition">
                  Todos os Produtos
                </Link>
              </li>
              <li>
                <Link href="/assinatura" className="hover:text-primary-400 transition">
                  Assine o Clubinho
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-primary-400 transition">
                  Baixar seu Arquivo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary-400 transition">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary-400 transition">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Formas de Pagamento</h3>
            <p className="text-gray-400 text-sm">
              Aceitamos cartões de crédito, débito, PIX e boleto bancário.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(22) 99732-7521</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@janerecursos.com.br</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Rua Exemplo, 123 - Centro</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>Copyright Jane Recursos Pedagógicos - {new Date().getFullYear()}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
