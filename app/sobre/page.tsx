import { GraduationCap, Award, Heart } from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-primary-600 bg-clip-text text-transparent">
              Jane Ferreira
            </span>
          </h1>
          <p className="text-xl text-gray-600">Pedagoga e Especialista em Educação Inclusiva</p>
        </div>

        {/* Foto/Imagem Section - Placeholder para foto profissional */}
        <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-primary-100 rounded-2xl p-12 mb-12 text-center">
          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center mb-6">
            <Heart className="w-24 h-24 text-white" />
          </div>
          <p className="text-gray-600 italic">"Transformando vidas através da educação inclusiva"</p>
        </div>

        {/* Formação */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Formação Acadêmica</h2>
          </div>

          <div className="space-y-6">
            {/* Pedagogia */}
            <div className="border-l-4 border-pink-500 pl-6 py-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Pedagoga</h3>
              <p className="text-gray-600">Formação completa em Pedagogia com foco em práticas educacionais inovadoras e inclusivas.</p>
            </div>

            {/* Pós-graduação 1 */}
            <div className="border-l-4 border-purple-500 pl-6 py-4">
              <div className="flex items-center mb-2">
                <Award className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="text-2xl font-semibold text-gray-800">Pós-Graduação em Educação Especial e Inclusiva</h3>
              </div>
              <p className="text-gray-600">
                Especialização focada em criar ambientes educacionais acessíveis e acolhedores para todos os alunos, 
                promovendo a inclusão verdadeira no processo de ensino-aprendizagem.
              </p>
            </div>

            {/* Pós-graduação 2 */}
            <div className="border-l-4 border-primary-600 pl-6 py-4">
              <div className="flex items-center mb-2">
                <Award className="w-5 h-5 text-primary-600 mr-2" />
                <h3 className="text-2xl font-semibold text-gray-800">Pós-Graduação em Psicopedagogia Clínica e Institucional</h3>
              </div>
              <p className="text-gray-600">
                Especialização que integra conhecimentos de psicologia e pedagogia para compreender e 
                trabalhar com as dificuldades de aprendizagem, tanto no ambiente clínico quanto institucional, 
                promovendo o desenvolvimento integral dos educandos.
              </p>
            </div>
          </div>
        </div>

        {/* Sobre o Trabalho */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-primary-600 text-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Sobre o Trabalho</h2>
          <p className="text-lg leading-relaxed mb-4">
            Com uma trajetória dedicada à educação inclusiva, <strong>Jane Ferreira</strong> desenvolve 
            recursos pedagógicos que fazem a diferença na sala de aula. Sua experiência combinada em 
            Pedagogia, Educação Especial e Psicopedagogia permite criar materiais educacionais que 
            atendem às diversas necessidades dos alunos.
          </p>
          <p className="text-lg leading-relaxed">
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
