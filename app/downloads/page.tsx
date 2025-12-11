import { Download, FileText, Package } from 'lucide-react';

export default function DownloadsPage() {
  // Simulação de arquivos baixados
  const downloads = [
    { id: '1', name: 'PAINEL E MOLDURA TEMA ANO NOVO 2026', date: '15/01/2025', type: 'ZIP' },
    { id: '2', name: 'ATIVIDADE INTERATIVA FÉRIAS', date: '10/01/2025', type: 'PDF' },
    { id: '3', name: 'KIT PAINEL CONFRATERNIZAÇÃO', date: '05/01/2025', type: 'ZIP' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Baixar seu Arquivo</h1>
        <p className="text-gray-600 mb-8">
          Acesse aqui todos os arquivos que você comprou. Faça login para visualizar seus downloads.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Meus Downloads</h2>
            
            {downloads.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Você ainda não possui downloads.</p>
                <p className="text-gray-500 text-sm mt-2">
                  Compre produtos para ter acesso aos arquivos.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {downloads.map((download) => (
                  <div
                    key={download.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        {download.type === 'PDF' ? (
                          <FileText className="w-6 h-6 text-primary-600" />
                        ) : (
                          <Package className="w-6 h-6 text-primary-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{download.name}</h3>
                        <p className="text-sm text-gray-500">Baixado em {download.date}</p>
                      </div>
                    </div>
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Baixar</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t pt-6 mt-6">
            <h3 className="font-semibold mb-4">Como funciona?</h3>
            <ol className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="font-bold text-primary-600">1.</span>
                <span>Compre qualquer produto na nossa loja</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-primary-600">2.</span>
                <span>Após a confirmação do pagamento, o arquivo ficará disponível aqui</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-primary-600">3.</span>
                <span>Baixe quantas vezes precisar, quando precisar</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
