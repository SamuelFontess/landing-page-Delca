import { BrickWall, PaintBucket, Wrench, ShowerHead } from 'lucide-react';

export interface Product {
  name: string;
  image: string;
  features: string[];
  description: string;
}

export interface ProductCategory {
  category: string;
  icon: React.ElementType;
  color: string;
  products: Product[];
}

export const productsData: ProductCategory[] = [
  {
    category: "Material Básico",
    icon: BrickWall,
    color: "bg-delca-orange",
    products: [
      { name: "Cimento", image: "/products/Material-basico/cimento.webp", features: ["Tipos CP-II e CP-IV", "Alta resistência estrutural", "Secagem rápida para obras ágeis"], description: "Cimento de alta performance em Parnamirim. Oferecemos os tipos CP-II e CP-IV, ideais para sua obra. Nossa entrega rápida em Parnamirim e região garante que você tenha o material para sua construção civil com o melhor preço. Garanta a fundação da sua obra com nosso cimento de alta resistência estrutural." },
      { name: "Tijolo Cerâmico", image: "/products/Material-basico/tijolo.webp", features: ["Excelente isolamento térmico", "Ideal para alvenaria de vedação", "Material leve e resistente"], description: "Procurando tijolo cerâmico em Parnamirim? Nossos tijolos são de alta qualidade e perfeitos para a alvenaria de vedação. Atendemos Parnamirim e Cajupiranga com o melhor preço de tijolo da região, com material leve e resistente para sua construção." },
      { name: "Areia (Fina, Média e Grossa)", image: "/products/Material-basico/areia.webp", features: ["Pura e livre de impurezas", "Ideal para concreto e reboco", "Disponível em diversas granulometrias"], description: "Areia lavada de alta qualidade para todas as etapas da sua obra. Com entrega de areia em Parnamirim, Cajupiranga e Pium, fornecemos areia pura e livre de impurezas, ideal para concreto e reboco. Temos areia fina, média e grossa para a sua construção." },
      { name: "Brita", image: "/products/Material-basico/brita.webp", features: ["Granulometria uniforme (0, 1 e 2)", "Alta resistência para fundações", "Essencial para lajes e vigas"], description: "Brita de alta durabilidade para estruturas de concreto. Se você precisa comprar brita em Parnamirim ou Pium, garantimos granulometria uniforme (0, 1 e 2) e alta resistência para fundações, lajes e vigas. A solução ideal para sua construção." },
      { name: "Treliça", image: "/products/Material-basico/Trelica.webp", features: ["Aço nervurado de alta aderência", "Segurança para lajes e vigas", "Conforme norma ABNT"], description: "Treliça de aço para garantir a segurança da sua estrutura. Se você busca por treliças baratas em Parnamirim, temos produtos conforme a norma ABNT. Nossas treliças de aço nervurado de alta aderência são perfeitas para lajes e vigas da sua obra." },
      { name: "Pintura Asfáltica", image: "/products/Material-basico/pintura-asfaltica.webp", features: ["Impermeabilização de baldrames", "Proteção contra umidade", "Fácil aplicação"], description: "Pintura asfáltica para impermeabilização de baldrames. Proteja sua fundação contra umidade e infiltrações com nosso produto em Parnamirim. Solução eficaz e de fácil aplicação para garantir a durabilidade da sua construção." },
      { name: "Telha de Fibrocimento", image: "/products/Material-basico/telha-fibrocimento.webp", features: ["Cobertura durável e econômica", "Resistente a intempéries", "Ótimo custo-benefício"], description: "Telha de fibrocimento para uma cobertura segura e econômica. A melhor opção para telhados em Parnamirim e região, nossas telhas são duráveis e resistentes a intempéries, oferecendo o melhor custo-benefício para sua obra." },
      { name: "Caixa d'Água", image: "/products/Material-basico/caixa-dagua.webp", features: ["Marca Fortlev", "Capacidade de 1.000L a 10.000L", "Fácil instalação e vedação segura"], description: "Caixa d'água da marca Fortlev para garantir o abastecimento da sua casa. Com entrega em Parnamirim, temos modelos de 1.000L, 5.000L e 10.000L. É a solução completa para o sistema de água da sua construção." },
    ],
  },
  {
    category: "Acabamento",
    icon: PaintBucket,
    color: "bg-delca-blue",
    products: [
      { name: "Tinta Acrílica", image: "/products/Acabamento/tinta.webp", features: ["Acabamento fosco aveludado", "Excelente cobertura e rendimento", "Lavável e resistente"], description: "Tinta acrílica de alta qualidade para renovar seus ambientes. Oferecemos as melhores marcas de tintas e acabamentos em Cajupiranga, com excelente cobertura e rendimento. A solução ideal para a pintura da sua casa." },
      { name: "Piso Porcelanato", image: "/products/Acabamento/porcelanato.webp", features: ["Design moderno e sofisticado", "Alta durabilidade e resistência", "Ideal para áreas internas"], description: "Piso porcelanato para um acabamento elegante e durável. Temos uma grande variedade de pisos cerâmicos e porcelanatos em Cajupiranga, com design moderno e alta durabilidade para sua reforma." },
      { name: "Argamassa AC-III", image: "/products/Acabamento/argamassa.webp", features: ["Ideal para porcelanatos e pedras", "Uso interno e externo", "Máxima aderência e flexibilidade"], description: "Argamassa AC-III para assentamento de pisos e revestimentos. Ideal para porcelanatos e pedras, com máxima aderência e flexibilidade. O material perfeito para a sua reforma ou construção." },
      { name: "Rejunte Flexível", image: "/products/Acabamento/rejunte.webp", features: ["Acabamento liso e uniforme", "Impermeável e anti-fungos", "Disponível em várias cores"], description: "Rejunte flexível para um acabamento perfeito em pisos e revestimentos em Cajupiranga. Nosso rejunte é impermeável e anti-fungos, garantindo proteção contra mofo e infiltrações na sua reforma." },
      { name: "Vaso Sanitário com Caixa", image: "/products/Acabamento/vaso.webp", features: ["Design moderno e clean", "Descarga ecológica com duplo acionamento", "Economia de água garantida"], description: "Vaso sanitário com caixa acoplada, unindo design e sustentabilidade. Temos modelos com descarga ecológica em Parnamirim, que garantem economia de água na sua reforma." },
      { name: "Massa Corrida", image: "/products/Acabamento/massa.webp", features: ["Corrige e nivela paredes", "Acabamento liso e perfeito", "Fácil de lixar"], description: "Massa corrida para preparar suas paredes para a pintura. Se você busca por tintas e massas para parede em Parnamirim e Cajupiranga, oferecemos a melhor solução para corrigir e nivelar suas paredes, com um acabamento liso e perfeito." },
      { name: "Textura", image: "/products/Acabamento/textura.webp", features: ["Cria efeitos decorativos", "Protege e disfarça imperfeições", "Uso interno e externo"], description: "Textura para paredes em Parnamirim que adiciona estilo e proteção. Diversas opções de acabamento para a sua casa, disfarçando imperfeições e criando efeitos decorativos, seja em ambientes internos ou externos." },
      { name: "Luminária de LED", image: "/products/Acabamento/led.webp", features: ["Iluminação eficiente e uniforme", "Baixo consumo de energia", "Luz branca para ambientes modernos"], description: "Luminária de LED para iluminar seus espaços com economia e estilo. Encontre as melhores soluções de iluminação em Parnamirim, com baixo consumo de energia e luz branca para ambientes modernos na sua reforma." },
    ],
  },
  {
    category: "Ferragens",
    icon: Wrench,
    color: "bg-delca-red",
    products: [
      { name: "Fechadura para Porta", image: "/products/Ferragens/fechadura.webp", features: ["Acabamento em aço inox escovado", "Alta segurança para sua casa", "Design moderno e elegante"], description: "Fechadura de alta segurança para portas de madeira ou metal. Oferecemos as melhores ferramentas e ferragens para construção em Parnamirim RN, com acabamento em aço inox e design moderno para sua casa." },
      { name: "Dobradiça de Aço", image: "/products/Ferragens/dobradica.webp", features: ["Alta resistência e durabilidade", "Ideal para portas de madeira", "Acabamento cromado anti-ferrugem"], description: "Dobradiça de aço reforçada para garantir o bom funcionamento das suas portas. Encontre ferragens de qualidade em Parnamirim, com alta resistência e durabilidade para sua construção." },
      { name: "Cadeado de Latão 40mm", image: "/products/Ferragens/cadeado.webp", features: ["Corpo em latão maciço", "Haste de aço cementado", "Máxima segurança para portões"], description: "Cadeado de latão 40mm resistente e seguro. Se você precisa de segurança para o seu portão, proteja seu patrimônio com os melhores cadeados do mercado, com corpo em latão maciço e haste de aço cementado." },
      { name: "Arame Recozido", image: "/products/Ferragens/arame.webp", features: ["Flexível e fácil de usar", "Ideal para amarrações em obras", "Alta resistência e durabilidade"], description: "Arame recozido para amarração de ferragens na construção civil. É um material essencial para a montagem de armaduras de concreto, sendo flexível e fácil de usar em qualquer obra." },
      { name: "Serra Mármore", image: "/products/Ferragens/serra.webp", features: ["Cortes precisos em pedras", "Potente e de fácil manuseio", "Ideal para pisos e revestimentos"], description: "Serra mármore para cortes rápidos e precisos em cerâmica, porcelanato e pedras. Encontre ferramentas elétricas em Parnamirim, com serra mármore potente e de fácil manuseio para seus projetos de reforma." },
      { name: "Carrinho de Mão", image: "/products/Ferragens/carrinho.webp", features: ["Estrutura de aço reforçada", "Ideal para transporte pesado", "Pneu com câmara para mais durabilidade"], description: "Carrinho de mão robusto para facilitar o transporte de materiais na sua obra. Estrutura de aço reforçada e pneu com câmara garantem durabilidade, sendo um equipamento essencial para qualquer construção ou reforma." },
      { name: "Escada de Alumínio", image: "/products/Ferragens/escada.webp", features: ["Disponível com 5 ou 7 degraus", "Leve, resistente e não enferruja", "Pés antiderrapantes para segurança"], description: "Escada de alumínio multifuncional, segura e prática. Temos modelos de 5 e 7 degraus, leves e resistentes à ferrugem. Encontre a escada perfeita para trabalhos domésticos e profissionais em Parnamirim." },
      { name: "Trena de 5 Metros", image: "/products/Ferragens/trena.webp", features: ["Fita de aço resistente", "Corpo emborrachado para pegada firme", "Disponível em 3, 5, 8 e 10 metros", "Medição precisa com trava"], description: "Trena de 3, 5, 8 e 10 metros com fita de aço, ideal para medições precisas em qualquer obra ou projeto. É uma ferramenta indispensável para profissionais da construção civil e para uso doméstico, garantindo a precisão que você precisa na sua reforma ou construção." },
    ],
  },
  {
    category: "Hidráulico",
    icon: ShowerHead,
    color: "bg-delca-blue",
    products: [
      { name: "Torneiras", image: "/products/Hidraulico/torneira.webp", features: ["Acabamento cromado durável", "Mecanismo de 1/4 de volta", "Para cozinha, banheiro e jardim"], description: "Grande variedade de torneiras para cozinha, banheiro e áreas externas. Encontre torneiras em Parnamirim com design moderno e econômico, com acabamento cromado durável para sua construção." },
      { name: "Conexões", image: "/products/Hidraulico/conexoes.webp", features: ["Linha completa de conexões", "Para água fria e quente", "Joelhos, Tês, Luvas e mais"], description: "Soluções completas em conexões hidráulicas de PVC em Cajupiranga. Oferecemos uma linha completa de joelhos, tês e luvas para água fria e quente, facilitando a sua instalação hidráulica." },
      { name: "Registros", image: "/products/Hidraulico/registro.webp", features: ["Controle preciso do fluxo de água", "Modelos de gaveta e pressão", "Alta durabilidade e vedação"], description: "Registros de gaveta e pressão para um controle seguro da sua rede hidráulica. Encontre materiais hidráulicos de confiança em Parnamirim, com alta durabilidade e vedação para sua construção." },
      { name: "Tubos", image: "/products/Hidraulico/tubo.webp", features: ["Tubos de PVC para esgoto e água", "Resistentes e fáceis de instalar", "Diâmetros de 20mm a 100mm", "Solução completa para sua rede hidráulica"], description: "Tubos e conexões de PVC para sistemas de água e esgoto. Nossa loja tem a solução completa para a parte hidráulica da sua obra, com tubos resistentes e fáceis de instalar. Oferecemos uma variedade de diâmetros de 20mm, 25mm, 32mm, 40mm, 50mm, 75mm e 100mm para atender a todas as suas necessidades de construção e reforma." },
      { name: "Sifão", image: "/products/Hidraulico/sifao.webp", features: ["Sifão sanfonado universal", "Evita o retorno de mau cheiro", "Flexível e fácil de instalar"], description: "Sifão flexível para pias de cozinha e banheiro. Nosso sifão sanfonado é universal, previne o mau cheiro do esgoto e possui uma instalação simples. O produto ideal para a sua reforma." },
      { name: "Chuveiro Elétrico", image: "/products/Hidraulico/chuveiro.webp", features: ["Opções multitemperaturas", "Jato de água confortável", "Instalação fácil e segura"], description: "Chuveiros elétricos modernos e econômicos para um banho relaxante. Encontre as melhores marcas com entrega em Parnamirim, com opções multitemperaturas e jato de água confortável para sua casa." },
      { name: "Resistência de Chuveiro", image: "/products/Hidraulico/resistencia.webp", features: ["Compatível com diversas marcas", "Troca fácil e rápida", "Garanta a água quente no seu banho"], description: "Resistência para chuveiros elétricos. Encontre o modelo compatível com o seu chuveiro e garanta seu banho quente. A peça ideal para a manutenção dos seus equipamentos hidráulicos." },
      { name: "Filtro de Água", image: "/products/Hidraulico/filtro.webp", features: ["Água pura e livre de impurezas", "Fácil instalação na torneira", "Refil de troca simples"], description: "Filtro de água para instalar na torneira da cozinha. Tenha água potável e de qualidade sempre à mão para sua família, com refil de troca simples e fácil instalação na sua reforma." },
    ],
  },
];