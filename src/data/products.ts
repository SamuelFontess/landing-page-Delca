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
      { name: "Cimento", image: "/products/cimento.png", features: ["CP-II e CP-IV", "Alta resistência", "Secagem rápida"], description: "Cimento, Cimento CP II, Cimento CP 2, Cimento CP 4, comprar cimento Parnamirim, Cimento barato em Parnamirim" },
      { name: "Tijolo Cerâmico", image: "/products/tijolo.png", features: ["Isolamento térmico", "Alvenaria de vedação", "Leveza"], description: "Tijolo barato em Parnamirim, Tijolo barato em cajupiranga" },
      { name: "Areia Fina, Média e Grossa", image: "/products/areia.png", features: ["Ideal para concreto", "Livre de impurezas", "Alta qualidade"], description: "Areia, Areia Fina, Areia grossa, Areia com entrega em parnamirim, Areia com entrega em Cajupiranga " },
      { name: "Brita", image: "/products/brita.png", features: ["Para lajes e fundações", "Alta resistência", "Granulometria uniforme"], description: "brita 0 1 e 2, onde comprar areia e brita Parnamirim, brita com entrega em Pium" },
      { name: "Treliça", image: "/products/vergalhao.png", features: ["Aço nervurado", "Segurança estrutural", "Norma ABNT"], description: "Treliça barata, Treliça em parnamirim" }, 
      { name: "Pintura Asfaltica", image: "/products/bloco.png", features: ["Alvenaria estrutural", "Resistente", "Praticidade"], description: "Furadeira, Furadeira de impacto, Furadeira de impacto em Parnamirim RN, ferramentas para construção Parnamirim, ferramentas elétricas e manuais" },
      { name: "Telha de Fibrocimento", image: "/products/telha.png", features: ["Cobertura durável", "Custo-benefício", "Resistente"], description: "Telha de Fibrocimento" },
      { name: "Caixa d'Água", image: "/products/caixa-dagua.png", features: ["Fortleve", "1000L/10000L", "Fácil instalação"], description: "Caixa d'Água 1000L" },
    ],
  },
  {
    category: "Acabamento",
    icon: PaintBucket,
    color: "bg-delca-blue",
    products: [
      { name: "Tinta Acrílica", image: "/products/tinta.png", features: ["Fosco aveludado", "Alta cobertura", "Resistente"], description: "Tinta Acrílica, Tintas e acabamento em Cajupiranga" },
      { name: "Piso Porcelanato", image: "/products/piso.png", features: ["Design moderno", "Alta durabilidade", "Uso interno"], description: "Piso Porcelanato, Pisos e azulejos em Cajupiranga, pisos cerâmicos e porcelanatos" },
      { name: "Argamassa AC-III", image: "/products/argamassa.png", features: ["Para porcelanatos", "Uso interno/externo", "Alta aderência"], description: "Argamassa AC-III" },
      { name: "Rejunte Flexível", image: "/products/rejunte.png", features: ["Acabamento liso", "Impermeável", "Anti-fungos"], description: "Rejunte Flexível, piso e revestimento Cajupiranga, itens para acabamento e reforma" },
      { name: "Vaso Sanitário com Caixa", image: "/products/vaso.png", features: ["Design moderno", "Descarga ecológica", "Duplo acionamento"], description: "Vaso Sanitário com Caixa" },
      { name: "Massa Corrida", image: "/products/torneira.png", features: ["Acabamento cromado", "Alta durabilidade", "Design elegante"], description: "Massas de Banheiro, massas de banheiro em Cajupiranga, massas de banheiro em Parnamirim RN, tintas e massas para parede" },
      { name: "Textura", image: "/products/chuveiro.png", features: ["Multitemperaturas", "Fácil instalação", "Economia"], description: "Chuveiro Elétrico" },
      { name: "Luminária de LED", image: "/products/luminaria.png", features: ["Iluminação eficiente", "Econômica", "Luz branca"], description: "Luminária de LED" },
    ],
  },
  {
    category: "Ferragens",
    icon: Wrench,
    color: "bg-delca-red",
    products: [
      { name: "Fechadura para Porta", image: "/products/fechadura.png", features: ["Aço inox escovado", "Alta segurança", "Design moderno"], description: "Fechadura para Porta, Ferramentas para construção em Parnamirim RN" },
      { name: "Dobradiça de Aço", image: "/products/dobradica.png", features: ["Alta resistência", "Para portas de madeira", "Acabamento cromado"], description: "Dobradiça de Aço" },
      { name: "Cadeado de Latão 40mm", image: "/products/cadeado.png", features: ["Latão maciço", "Haste de aço", "Máxima segurança"], description: "Cadeado de Latão 40mm" },
      { name: "Arame Recozido", image: "/products/parafuso.png", features: ["Kit com porcas", "Alta resistência", "Fixações diversas"], description: "Parafuso Sextavado" },
      { name: "Cerra Marmóre", image: "/products/abracadeira.png", features: ["Fixação de cabos", "Praticidade", "Segurança"], description: "Abraçadeira de Nylon" },
      { name: "Carrinho de Mão", image: "/products/carrinho.png", features: ["Estrutura reforçada", "Transporte pesado", "Durabilidade"], description: "Carrinho de Mão" },
      { name: "Escada de Alumínio", image: "/products/escada.png", features: ["5 ou 7 degraus", "Leve e resistente", "Pés antiderrapantes"], description: "Escada de Alumínio" },
      { name: "Trena de 5 Metros", image: "/products/trena.png", features: ["Fita de aço", "Corpo emborrachado", "Medição precisa"], description: "Trena de 5 Metros" },
    ],
  },
  {
    category: "Hidraulico",
    icon: ShowerHead,
    color: "bg-delca-blue",
    products: [
      { name: "torneiras", image: "/products/torneira.png ", features: ["Design moderno", "Alta durabilidade", "Uso interno"], description: "torneiras, torneiras de cozinha, torneiras de banheiro, torneiras de lavabo, torneiras de pia, torneiras de lavabo, torneiras de pia, torneiras de lavabo, torneiras de pia, torneiras de lavabo, torneiras de pia" },
      { name: "conexões", image: "/products/caixa-gordura.png", features: ["Design moderno", "Alta durabilidade", "Uso interno"], description: "conexões, conexões de cozinha, conexões de banheiro, conexões de lavabo, conexões de pia, conexões de lavabo, conexões de pia, conexões de lavabo, conexões de pia" },
      { name: "registros", image: "/products/caixa-gordura.png", features: ["Design moderno", "Alta durabilidade", "Uso interno"], description: "registros, registros de cozinha, registros de banheiro, registros de lavabo, registros de pia, torneiras, registros e conexões hidráulicas" },
      { name: "Tubo", image: "/products/caixa-gordura.png", features: ["Design moderno", "Alta durabilidade", "Uso interno"], description: "caixas de gordura, caixas de gordura de cozinha, caixas de gordura de banheiro, caixas de gordura de lavabo, caixas de gordura de pia, caixas de gordura de lavabo, caixas de gordura de pia, caixas de gordura de lavabo, caixas de gordura de pia" },
      { name: "sifão", image: "/products/caixa-gordura.png", features: ["Design moderno", "Alta durabilidade", "Uso interno"], description: "caixas de gordura, caixas de gordura de cozinha, caixas de gordura de banheiro, caixas de gordura de lavabo, caixas de gordura de pia, caixas de gordura de lavabo, caixas de gordura de pia, caixas de gordura de lavabo, caixas de gordura de pia" },
      { name: "Chuveiro Elétrico", image: "/products/caixa-gordura.png", features: ["Design moderno", "Alta durabilidade", "Uso interno"], description: "caixas de gordura, caixas de gordura de cozinha, caixas de gordura de banheiro, caixas de gordura de lavabo, caixas de gordura de pia, caixas de gordura de lavabo, caixas de gordura de pia, caixas de gordura de lavabo, caixas de gordura de pia" },
      { name: "Resistencia de chuveiro", image: "/products/caixa-gordura.png", features: ["Design moderno", "Alta durabilidade", "Uso interno"], description: "caixas de gordura, caixas de gordura de cozinha, caixas de gordura de banheiro, caixas de gordura de lavabo, caixas de gordura de pia, caixas de gordura de lavabo, caixas de gordura de pia, caixas de gordura de lavabo, caixas de gordura de pia" },
      { name: "Filtro de agua", image: "/products/caixa-gordura.png", features: ["Design moderno", "Alta durabilidade", "Uso interno"], description: "caixas de gordura, caixas de gordura de cozinha, caixas de gordura de banheiro, caixas de gordura de lavabo, caixas de gordura de pia, caixas de gordura de lavabo, caixas de gordura de pia, caixas de gordura de lavabo, caixas de gordura de pia" },
    ],
  },
];