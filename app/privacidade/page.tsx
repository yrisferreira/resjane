export default function PrivacidadePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="heading-2">Política de Privacidade</h1>
        <p className="text-caption mt-2">Última atualização: abril de 2026</p>

        <div className="mt-8 space-y-8">
          <section className="space-y-3">
            <p className="text-body">
              Esta Política de Privacidade descreve como a Jane Recursos Pedagógicos coleta,
              usa e protege suas informações pessoais. Ao utilizar nosso site, você concorda
              com as práticas descritas neste documento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">1. Quem Somos</h2>
            <p className="text-body">
              A Jane Recursos Pedagógicos é uma plataforma de venda de materiais educacionais
              digitais, idealizada por Jane Ferreira, pedagoga especialista em Educação
              Especial, Inclusiva e Psicopedagogia Clínica e Institucional.
            </p>
            <ul className="text-body list-disc pl-5 space-y-1">
              <li><strong>Responsável pelo tratamento de dados:</strong> Jane Ferreira</li>
              <li><strong>E-mail de contato:</strong> contato@janerecursos.com</li>
              <li><strong>WhatsApp:</strong> +55 11 94507-1828</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">2. Quais Dados Coletamos</h2>
            <p className="text-body">Coletamos apenas os dados necessários para oferecer nossos serviços com qualidade:</p>
            <ul className="text-body list-disc pl-5 space-y-1">
              <li><strong>Dados de cadastro:</strong> nome completo, e-mail e senha (criptografada)</li>
              <li><strong>Dados de compra:</strong> endereço de cobrança, CPF e dados de pagamento (processados por gateways seguros)</li>
              <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas e tempo de acesso</li>
              <li><strong>Dados de comunicação:</strong> mensagens enviadas pelo formulário de contato ou WhatsApp</li>
            </ul>
            <p className="text-body">
              Não coletamos dados sensíveis como informações de saúde, origem racial ou dados biométricos.
              O e-mail informado no cadastro é utilizado para envio dos arquivos PDF adquiridos e para comunicações relacionadas à sua conta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">3. Como Usamos Seus Dados</h2>
            <ul className="text-body list-disc pl-5 space-y-1">
              <li>Processar sua compra e enviar o arquivo PDF por e-mail ou liberar o download na sua área do aluno</li>
              <li>Gerenciar sua conta e assinatura do Clubinho Jane</li>
              <li>Enviar confirmações de compra, recibos e links de acesso por e-mail</li>
              <li>Reenviar arquivos caso necessário (mediante solicitação)</li>
              <li>Enviar novidades, lançamentos e promoções (apenas se você autorizar)</li>
              <li>Melhorar a experiência de navegação no site</li>
              <li>Cumprir obrigações legais e fiscais</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">4. Compartilhamento de Dados</h2>
            <p className="text-body">
              Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins comerciais.
              Compartilhamos informações apenas quando necessário com processadores de pagamento, plataformas
              de e-mail para comunicações autorizadas e autoridades legais quando exigido por lei.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">5. Cookies e Rastreamento</h2>
            <p className="text-body">
              Utilizamos cookies para melhorar sua experiência no site, manter você logado, lembrar preferências
              e analisar tráfego (ex.: Google Analytics). Você pode desativar cookies no navegador, o que pode
              afetar algumas funcionalidades.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">6. Segurança dos Dados</h2>
            <ul className="text-body list-disc pl-5 space-y-1">
              <li>Transmissão de dados via HTTPS (criptografia SSL)</li>
              <li>Senhas armazenadas com criptografia (hash)</li>
              <li>Acesso restrito aos dados apenas a pessoas autorizadas</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">7. Seus Direitos (LGPD)</h2>
            <p className="text-body">
              Você pode confirmar tratamento, acessar, corrigir, solicitar eliminação/anonimização, revogar consentimento
              e se opor a tratamentos com base em legítimo interesse. Para exercer seus direitos, contate{' '}
              <a className="underline hover:text-rose-600" href="mailto:contato@janerecursos.com">contato@janerecursos.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">8. Retenção de Dados</h2>
            <p className="text-body">
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.
              Dados de compra podem ser mantidos por até 5 anos para fins fiscais.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">9. Crianças e Adolescentes</h2>
            <p className="text-body">
              O site é destinado a educadores adultos. Não coletamos intencionalmente dados de menores de 18 anos.
              Se você acredita que coletamos dados de um menor, entre em contato para remoção.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">10. Alterações nesta Política</h2>
            <p className="text-body">
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos revisar esta página regularmente.
              O uso contínuo do site após alterações implica aceitação da versão atual.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">11. Contato</h2>
            <ul className="text-body list-disc pl-5 space-y-1">
              <li><strong>E-mail:</strong> contato@janerecursos.com</li>
              <li><strong>WhatsApp:</strong> +55 11 94507-1828</li>
              <li><strong>Atendimento:</strong> Segunda a Sexta, das 9h às 18h</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
