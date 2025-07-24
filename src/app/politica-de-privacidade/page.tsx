import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade - DELCA Construções',
  description: 'Entenda como a DELCA Construções coleta, usa e protege seus dados pessoais.',
};

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto prose lg:prose-lg">
          <h1>Política de Privacidade</h1>
          
          <p className="lead">
            Última atualização: 24 de julho de 2025
          </p>

          <p>
            A sua privacidade é importante para nós. É política da <strong>DELCA Construções</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no nosso site.
          </p>

          <h2>1. Coleta de Dados</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <p>
            Especificamente, através do nosso formulário de contato, coletamos os seguintes dados:
          </p>
          <ul>
            <li><strong>Nome:</strong> Para nos dirigirmos a você corretamente.</li>
            <li><strong>E-mail:</strong> Para respondermos à sua solicitação.</li>
            <li><strong>Telefone:</strong> Para entrarmos em contato, caso seja necessário para o atendimento.</li>
            <li><strong>Mensagem:</strong> Para entendermos sua dúvida ou solicitação de orçamento.</li>
          </ul>

          <h2>2. Uso dos Dados</h2>
          <p>
            Utilizamos os dados coletados exclusivamente para a finalidade para a qual foram fornecidos: responder às suas mensagens, fornecer orçamentos e informações sobre nossos produtos e serviços. Não compartilhamos suas informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>

          <h2>3. Armazenamento dos Dados</h2>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>

          <h2>4. Seus Direitos</h2>
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. Você tem o direito de solicitar a exclusão dos seus dados a qualquer momento, entrando em contato conosco.
          </p>

          <h2>5. Links para Sites de Terceiros</h2>
          <p>
            O nosso site pode ter links para sites externos que não são operados por nós (como Google Maps e redes sociais). Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>

          <h2>6. Compromisso do Usuário</h2>
          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a DELCA Construções oferece no site e com caráter enunciativo, mas não limitativo:
          </p>
          <ul>
            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou sobre azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da DELCA Construções, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar os danos anteriormente mencionados.</li>
          </ul>

          <h2>Mais Informações</h2>
          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
          </p>
          <p>
            Esta política é efetiva a partir de <strong>Julho de 2025</strong>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
