'use client';

import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Send className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Mensagem Enviada!</h1>
          <p className="text-gray-600 mb-8">
            Obrigado pelo seu contato. Responderemos o mais breve possível.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Enviar Nova Mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Entre em Contato</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Vamos Conversar</h2>
              <p className="text-gray-600 mb-8">
                Estou aqui para ajudar você com dúvidas sobre os recursos pedagógicos, 
                sugestões de materiais ou qualquer outra questão sobre educação inclusiva.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">E-mail</h3>
                  <p className="text-gray-600">contato@janerecursos.com</p>
                  <p className="text-sm text-gray-500">Resposta em até 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                  <a href="https://wa.me/5511945071828" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                    +55 11 94507-1828
                  </a>
                  <p className="text-sm text-gray-500">Seg-Sex, 9h-18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Telefone</h3>
                  <p className="text-gray-600">(11) 3456-7890</p>
                  <p className="text-sm text-gray-500">Seg-Sex, 9h-17h</p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-primary-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Acompanhe nas Redes Sociais</h3>
              <p className="mb-4">
                Receba dicas, novidades e conteúdos exclusivos sobre educação inclusiva!
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/jane.psicoeducar/" target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition">
                  Instagram
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition">
                  Facebook
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="duvida">Dúvida sobre produtos</option>
                  <option value="sugestao">Sugestão de materiais</option>
                  <option value="suporte">Suporte técnico</option>
                  <option value="parceria">Proposta de parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Descreva sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              * Campos obrigatórios • Responderemos em até 24 horas úteis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
