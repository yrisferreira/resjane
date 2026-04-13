import { GraduationCap, Award, Heart } from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="heading-2">Jane Ferreira</h1>
          <p className="text-body mt-3">Pedagoga e especialista em Educação Inclusiva</p>
        </div>

        {/* Foto/Imagem Section - Placeholder para foto profissional */}
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-rose-50 via-white to-slate-50 p-10 mb-12 text-center shadow-sm">
          <div className="w-44 h-44 mx-auto bg-gradient-to-br from-rose-600 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <Heart className="w-24 h-24 text-white" />
          </div>
          <p className="text-body italic">&ldquo;Transformando vidas através da educação inclusiva&rdquo;</p>
        </div>

        {/* Formação */}
        <div className="card p-8 md:p-12 mb-8">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-rose-600 mr-3" />
            <h2 className="heading-3">Formação Acadêmica</h2>
          </div>

          <div className="space-y-6">
            {/* Pedagogia */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Pedagoga</h3>
              <p className="text-body">Formação completa em Pedagogia com foco em práticas educacionais inovadoras e inclusivas.</p>
            </div>

            {/* Pós-graduação 1 */}
            <div className="border-l-4 border-pink-500 pl-6 py-4">
              <div className="flex items-center mb-2">
                <Award className="w-5 h-5 text-rose-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900">Pós-Graduação em Educação Especial e Inclusiva</h3>
              </div>
              <p className="text-body">
                Especialização focada em criar ambientes educacionais acessíveis e acolhedores para todos os alunos, 
                promovendo a inclusão verdadeira no processo de ensino-aprendizagem.
              </p>
            </div>

            {/* Pós-graduação 2 */}
            <div className="border-l-4 border-slate-300 pl-6 py-4">
              <div className="flex items-center mb-2">
                <Award className="w-5 h-5 text-rose-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900">Pós-Graduação em Psicopedagogia Clínica e Institucional</h3>
              </div>
              <p className="text-body">
                Especialização que integra conhecimentos de psicologia e pedagogia para compreender e 
                trabalhar com as dificuldades de aprendizagem, tanto no ambiente clínico quanto institucional, 
                promovendo o desenvolvimento integral dos educandos.
              </p>
            </div>
          </div>
        </div>

        {/* Sobre o Trabalho */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 text-white p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Sobre o Trabalho</h2>
          <p className="text-slate-200 leading-relaxed mb-4">
            Com uma trajetória dedicada à educação inclusiva, <strong>Jane Ferreira</strong> desenvolve 
            recursos pedagógicos que fazem a diferença na sala de aula. Sua experiência combinada em 
            Pedagogia, Educação Especial e Psicopedagogia permite criar materiais educacionais que 
            atendem às diversas necessidades dos alunos.
          </p>
          <p className="text-slate-200 leading-relaxed">
            Todos os recursos disponíveis neste site foram criados com carinho, baseados em pesquisas 
            e práticas educacionais comprovadas, sempre com o objetivo de tornar o aprendizado mais 
            significativo, acessível e prazeroso para educadores e estudantes.
          </p>
        </div>

        {/* Valores */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Amor</h3>
            <p className="text-gray-600">Por cada aluno e educador</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <GraduationCap className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Dedicação</h3>
            <p className="text-gray-600">À educação de qualidade</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Inclusão</h3>
            <p className="text-gray-600">Para todos os estudantes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
