export default function TrocasPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="heading-2">Política de Trocas e Reembolsos</h1>
        <p className="text-caption mt-2">Última atualização: abril de 2026</p>

        <div className="mt-8 space-y-8">
          <section className="space-y-3">
            <p className="text-body">
              Nossos produtos são <strong>digitais</strong> (arquivos para download e/ou entrega por e-mail).
              Por esse motivo, após o recebimento do arquivo não realizamos trocas por arrependimento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">Produtos Avulsos</h2>
            <ul className="text-body list-disc pl-5 space-y-1">
              <li>
                <strong>Reembolso em até 7 dias</strong> caso o arquivo esteja corrompido, ilegível ou diferente do anunciado.
              </li>
              <li>
                <strong>Não recebeu o e-mail?</strong> Entre em contato e reenviamos imediatamente, sem custo.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">Clubinho Jane (Assinatura)</h2>
            <ul className="text-body list-disc pl-5 space-y-1">
              <li><strong>Garantia de 7 dias</strong> a partir da data da assinatura, com reembolso integral.</li>
              <li>O cancelamento pode ser feito a qualquer momento, interrompendo a renovação futura.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">Como Solicitar</h2>
            <p className="text-body">
              Para solicitar reembolso ou suporte, envie mensagem com seus dados e comprovante para{' '}
              <a className="underline hover:text-rose-600" href="mailto:contato@janerecursos.com">contato@janerecursos.com</a>{' '}
              ou via WhatsApp <strong>+55 11 94507-1828</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

