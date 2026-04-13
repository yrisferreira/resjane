export default function TermosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="heading-2">Termos de Uso</h1>
        <p className="text-caption mt-2">Última atualização: abril de 2026</p>

        <div className="mt-8 space-y-8">
          <section className="space-y-3">
            <p className="text-body">
              Ao acessar ou utilizar o site Jane Recursos Pedagógicos, você concorda com estes Termos de Uso.
              Leia atentamente antes de realizar qualquer compra ou cadastro.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">1. Sobre a Plataforma</h2>
            <p className="text-body">
              A Jane Recursos Pedagógicos é uma plataforma digital de venda de materiais educacionais criada por Jane Ferreira,
              pedagoga com especialização em Educação Especial, Inclusiva e Psicopedagogia Clínica e Institucional.
              Os recursos disponíveis são produtos digitais (arquivos para download) destinados a educadores e profissionais da área pedagógica.
            </p>
            <p className="text-body">
              <strong>Contato:</strong> contato@janerecursos.com | WhatsApp +55 11 94507-1828
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">2. Aceitação dos Termos</h2>
            <p className="text-body">Ao criar uma conta, realizar uma compra ou assinar o Clubinho Jane, você declara que:</p>
            <ul className="text-body list-disc pl-5 space-y-1">
              <li>Leu e compreendeu estes Termos de Uso</li>
              <li>Tem pelo menos 18 anos de idade (ou é maior de idade em sua jurisdição)</li>
              <li>Concorda em cumprir todas as condições aqui estabelecidas</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">3. Cadastro e Conta</h2>
            <p className="text-body">
              Para comprar ou assinar o Clubinho Jane, você precisará criar uma conta com e-mail e senha.
              Você é responsável por manter suas credenciais em sigilo e por todas as atividades realizadas com sua conta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">4. Produtos e Entrega</h2>
            <p className="text-body">
              Os recursos pedagógicos comercializados são produtos digitais (PDF). Após a confirmação do pagamento, a entrega ocorre por e-mail
              e/ou por link de download na área do aluno.
            </p>
            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4">
              <p className="text-body text-slate-700">
                <strong>Atenção:</strong> por se tratar de produto digital entregue por e-mail e/ou download,
                não realizamos trocas ou devoluções após o recebimento do arquivo.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">5. Preços e Pagamento</h2>
            <p className="text-body">
              Os preços exibidos são em reais (R$) e podem ser alterados sem aviso prévio.
              Aceitamos cartão, PIX e boleto. O acesso é liberado após confirmação do pagamento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">6. Clubinho Jane — Assinatura</h2>
            <p className="text-body">
              A assinatura é renovada automaticamente ao final de cada período e pode ser cancelada a qualquer momento.
              O cancelamento interrompe a renovação, sem reembolso do período já pago.
            </p>
            <p className="text-body">
              Oferecemos garantia de 7 dias a partir da data da assinatura.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">7. Propriedade Intelectual</h2>
            <p className="text-body">
              Todo o conteúdo é de propriedade exclusiva de Jane Ferreira e protegido pela Lei de Direitos Autorais (Lei nº 9.610/1998).
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-body text-slate-700">
                <strong>É expressamente proibido</strong> reproduzir, copiar, distribuir, revender, compartilhar ou publicar qualquer material
                adquirido nesta plataforma sem autorização prévia e por escrito.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">8. Uso Permitido e Proibido</h2>
            <p className="text-body"><strong>Você pode:</strong></p>
            <ul className="text-body list-disc pl-5 space-y-1">
              <li>Usar os materiais em sua sala de aula com seus alunos</li>
              <li>Imprimir os arquivos para uso pessoal</li>
              <li>Editar versões editáveis para adequar à sua turma</li>
            </ul>
            <p className="text-body"><strong>Você não pode:</strong></p>
            <ul className="text-body list-disc pl-5 space-y-1">
              <li>Compartilhar os arquivos com outros professores ou em grupos</li>
              <li>Postar os materiais em redes sociais, blogs ou sites</li>
              <li>Vender ou distribuir os arquivos</li>
              <li>Remover marcas d’água/créditos/identificação de autoria</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">9. Limitação de Responsabilidade</h2>
            <p className="text-body">
              Não nos responsabilizamos por danos por uso inadequado, problemas técnicos do usuário, falhas temporárias de acesso ou resultados
              pedagógicos específicos. Em nenhuma hipótese a responsabilidade excederá o valor pago.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">10. Política de Reembolso</h2>
            <p className="text-body">
              Por serem produtos digitais, aplicamos política específica: reembolso em até 7 dias em casos de arquivo corrompido/ilegível/diferente
              do anunciado; garantia de 7 dias no Clubinho Jane. Para suporte, contate{' '}
              <a className="underline hover:text-rose-600" href="mailto:contato@janerecursos.com">contato@janerecursos.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">11. Alterações nos Termos</h2>
            <p className="text-body">
              Podemos modificar estes Termos a qualquer momento. O uso continuado da plataforma após alterações implica aceitação dos novos termos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">12. Lei Aplicável e Foro</h2>
            <p className="text-body">
              Estes Termos são regidos pelas leis do Brasil. Fica eleito o foro da comarca de São Paulo/SP.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-3">13. Contato</h2>
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

