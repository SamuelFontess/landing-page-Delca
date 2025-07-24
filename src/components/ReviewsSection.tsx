'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

// Interface para manter a estrutura dos dados
interface Review {
  author_name: string;
  rating: number;
  text: string;
  role: string;
  profile_photo_url: string;
}

// Dados de avaliação
const reviewsData: Review[] = [
  {
    author_name: "Isaac Nascimento",
    rating: 5,
    text: "A loja em si é bem organizada, com uma boa variedade de produtos e preços justos. Mas o que realmente fez a diferença foi o atendimento humanizado e profissional. Com certeza voltarei a comprar aqui e recomendo a todos que buscam um serviço de qualidade! Parabéns à equipe e, em especial, à Damaris pelo excelente trabalho!",
    role: "Cliente Satisfeito",
    profile_photo_url: "/avatars/isaac-nascimento.png"
  },
  {
    author_name: "Sergio Roberto",
    rating: 5,
    text: "Gostaria de expressar minha sincera gratidão pelo excelente atendimento que recebi na DELCA Material de Construção. Toda a equipe demonstrou profissionalismo e conhecimento, tornando a experiência de compra muito agradável. A variedade de materiais disponíveis e o apoio dos funcionários foram essenciais para encontrar as soluções que precisávamos. Parabéns a todos os colaboradores pelo ótimo trabalho!",
    role: "Cliente satisfeito",
    profile_photo_url: "/avatars/sergio-roberto.png"
  },
  {
    author_name: "Luiz Neto",
    rating: 5,
    text: "A loja é muito bem organizada e oferece uma grande variedade de produtos de alta qualidade. Recomendo fortemente essa loja para quem procura um serviço de alta qualidade e um atendimento excepcional!",
    role: "Cliente satisfeito",
    profile_photo_url: "/avatars/luiz-neto.png"
  },
  {
    author_name: "Kelly Kareninna",
    rating: 5,
    text: "Atendimento nota 10. A vendedora Renata é super atenciosa, cuidadosa com os clientes e muito profissional. Super recomendo a vendedora e a loja, que tem produtos de altíssima qualidade.",
    role: "Cliente satisfeito",
    profile_photo_url: "/avatars/kelly-kareninna.png"
  },
  {
    author_name: "Euclecia Cavalcante",
    rating: 5,
    text: "É satisfatório ter uma loja tão completa quanto a Delca, tudo que procuro difícil não encontrar. O atendimento é perfeito vai das vendedoras ao entregador todos são super atencioso e ágil, ligo e rapinho chega meu pedido tudo sem sair de casa, estão de parabéns.",
    role: "Cliente satisfeito",
    profile_photo_url: "/avatars/euclecia-cavalcante.png"
  },
  {
    author_name: "Antonia Morais",
    rating: 5,
    text: "Excelente atendimento com preços justos, sempre encontro tudo que preciso o atendimento da Renata e da Damares que estão sempre dispostas a ajudar é um super diferencial, recomendo muito.",
    role: "Cliente satisfeito",
    profile_photo_url: "/avatars/antonia-morais.png"
  },
  {
    author_name: "Alexandre Douglas",
    rating: 5,
    text: "Excelente lugar para comprar todo material de construção, do básico ao acabamento, com preços abaixo do mercado, com atendimento humanizado por pessoas com mais de 10 anos no local que conhecem todos os produtos, assim, dando celeridade nas compras. Também tem entrega imediata, que salva vc do perrenho de tá com pessoal parado por falta de material.",
    role: "Cliente satisfeito",
    profile_photo_url: "/avatars/alexandre-douglas.png"
  },
  {
    author_name: "Jonas Michel",
    rating: 5,
    text: "É o lugar certo pra quem quer comprar material pra construção, reformas ou simples reparos. No DELCA vc encontra de tudo, pois eles possuem uma enorme variedade de produtos, e melhor ainda, com os melhores preços! No DELCA é certeza encontrar o que vc precisa, economizando e sem perder tempo. Sem falar tbm na atenção, atendimento e organização! São os melhores!",
    role: "Cliente satisfeito",
    profile_photo_url: "/avatars/jonas-michel.png"
  }
];

// Função para renderizar as estrelas
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`w-5 h-5 ${
        index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
      }`}
    />
  ));
};

const ReviewsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const googleReviewsUrl = "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJex6-AodXsgcR_C700vXa_BI";

  const scroll = (direction: 'left' | 'right'  ) => {
    if (carouselRef.current) {
      // Rolagem de um card por vez
      const cardWidth = carouselRef.current.querySelector('div')?.offsetWidth || 0;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">
            O que nossos <span className="text-delca-orange">Clientes</span> dizem
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            A confiança de quem constrói conosco é o nosso maior orgulho.
          </p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="text-4xl font-bold text-white">4.6</div>
                <div className="flex flex-col items-start">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">Média de Avaliações</p>
                </div>
              </div>
              <div className="h-12 w-px bg-white/10 hidden sm:block" />
              <div className="text-center">
                <div className="text-4xl font-bold text-delca-blue">200+</div>
                <p className="text-sm text-gray-400">Avaliações no Google</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {reviewsData.length > 3 && (
            <>
              <button onClick={() => scroll('left')} className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-8 p-3 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition z-20 text-white" aria-label="Avaliação anterior">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button onClick={() => scroll('right')} className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-8 p-3 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition z-20 text-white" aria-label="Próxima avaliação">
                <ArrowRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide py-4">
            {reviewsData.map((review, index) => (
              <motion.div
                key={index}
                className="snap-start flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 md:px-4"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-gray-800/60 h-full border border-gray-700 rounded-2xl p-6 shadow-lg flex flex-col backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-delca-orange/30" />
                    <div className="flex items-center gap-1">{renderStars(review.rating)}</div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">"{review.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
                    <img src={review.profile_photo_url} alt={review.author_name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-white">{review.author_name}</div>
                      <div className="text-sm font-medium text-delca-blue">{review.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <ExternalLink className="w-5 h-5" />
            Deixe sua avaliação no Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
