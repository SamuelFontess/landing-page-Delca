import { BrickWall, PaintBucket, Wrench } from 'lucide-react';

export interface Product {
  name: string;
  image: string;
  features: string[];
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
      { name: "Cimento Votoran", image: "/products/cimento.png", features: ["Alta resistência", "Secagem rápida", "Uso geral"] },
      { name: "Tijolo Baiano 9 Furos", image: "/products/tijolo.png", features: ["Isolamento térmico", "Alvenaria de vedação", "Leveza"] },
      { name: "Areia Média Lavada", image: "/products/areia.png", features: ["Ideal para concreto", "Livre de impurezas", "Alta qualidade"] },
      { name: "Brita N° 1", image: "/products/brita.png", features: ["Para lajes e fundações", "Alta resistência", "Granulometria uniforme"] },
      { name: "Vergalhão de Aço 8mm", image: "/products/vergalhao.png", features: ["Aço nervurado", "Segurança estrutural", "Norma ABNT"] },
      { name: "Bloco de Concreto", image: "/products/bloco.png", features: ["Alvenaria estrutural", "Resistente", "Praticidade"] },
      { name: "Telha de Fibrocimento", image: "/products/telha.png", features: ["Cobertura durável", "Custo-benefício", "Resistente"] },
      { name: "Caixa d'Água 1000L", image: "/products/caixa-dagua.png", features: ["Material atóxico", "Armazenamento seguro", "Fácil instalação"] },
    ],
  },
  {
    category: "Acabamento",
    icon: PaintBucket,
    color: "bg-delca-blue",
    products: [
      { name: "Tinta Acrílica Branca", image: "/products/tinta.png", features: ["Fosco aveludado", "Alta cobertura", "Resistente"] },
      { name: "Piso Porcelanato 60x60", image: "/products/piso.png", features: ["Design moderno", "Alta durabilidade", "Uso interno"] },
      { name: "Argamassa AC-III", image: "/products/argamassa.png", features: ["Para porcelanatos", "Uso interno/externo", "Alta aderência"] },
      { name: "Rejunte Flexível", image: "/products/rejunte.png", features: ["Acabamento liso", "Impermeável", "Anti-fungos"] },
      { name: "Vaso Sanitário com Caixa", image: "/products/vaso.png", features: ["Design moderno", "Descarga ecológica", "Duplo acionamento"] },
      { name: "Torneira de Bancada", image: "/products/torneira.png", features: ["Acabamento cromado", "Alta durabilidade", "Design elegante"] },
      { name: "Chuveiro Elétrico", image: "/products/chuveiro.png", features: ["Multitemperaturas", "Fácil instalação", "Economia"] },
      { name: "Luminária de LED", image: "/products/luminaria.png", features: ["Iluminação eficiente", "Econômica", "Luz branca"] },
    ],
  },
  {
    category: "Ferragens",
    icon: Wrench,
    color: "bg-delca-red",
    products: [
      { name: "Fechadura para Porta", image: "/products/fechadura.png", features: ["Aço inox escovado", "Alta segurança", "Design moderno"] },
      { name: "Dobradiça de Aço", image: "/products/dobradica.png", features: ["Alta resistência", "Para portas de madeira", "Acabamento cromado"] },
      { name: "Cadeado de Latão 40mm", image: "/products/cadeado.png", features: ["Latão maciço", "Haste de aço", "Máxima segurança"] },
      { name: "Parafuso Sextavado", image: "/products/parafuso.png", features: ["Kit com porcas", "Alta resistência", "Fixações diversas"] },
      { name: "Abraçadeira de Nylon", image: "/products/abracadeira.png", features: ["Fixação de cabos", "Praticidade", "Segurança"] },
      { name: "Carrinho de Mão", image: "/products/carrinho.png", features: ["Estrutura reforçada", "Transporte pesado", "Durabilidade"] },
      { name: "Escada de Alumínio", image: "/products/escada.png", features: ["5 degraus", "Leve e resistente", "Pés antiderrapantes"] },
      { name: "Trena de 5 Metros", image: "/products/trena.png", features: ["Fita de aço", "Corpo emborrachado", "Medição precisa"] },
    ],
  },
];