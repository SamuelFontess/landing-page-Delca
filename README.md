# DELCA Construções - Landing Page Moderna

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.x-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-11.x-f864c1?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como Executar</a>
</p>

## 🚀 Projeto

Este projeto é a criação de uma landing page moderna, responsiva e visualmente impactante para a **DELCA Construções**, uma loja de materiais de construção. O objetivo foi desenvolver uma interface que transmitisse profissionalismo, confiança e qualidade, utilizando as tecnologias mais modernas do ecossistema React.

O site é uma **Landing Page** com navegação suave entre as seções, complementada por páginas internas para conteúdo legal (como a Política de Privacidade), garantindo uma experiência de usuário fluida e coesa.

### ✨ Funcionalidades Principais:
- **Design Responsivo:** Interface perfeitamente adaptada para desktops, tablets e smartphones.
- **Animações e Micro-interações:** Animações sutis e elegantes com **Framer Motion** para enriquecer a experiência do usuário.
- **Carrossel de Parceiros:** Um carrossel infinito e dinâmico para exibir as marcas parceiras, construído com CSS puro e animações.
- **Mapa Interativo:** Integração com a **Google Maps API** para exibir a localização da loja de forma interativa e customizada.
- **Formulário de Contato Funcional:** Um formulário com validação de dados em tempo real que gera um link `mailto:` para envio direto pelo cliente de e-mail do usuário, eliminando a necessidade de um backend de e-mail.
- **Conformidade com LGPD:** Inclusão de uma página de Política de Privacidade para garantir a transparência no uso de dados.

---

## 🛠️ Tecnologias

Este projeto foi desenvolvido com uma stack moderna, focada em performance, escalabilidade e uma excelente experiência de desenvolvimento.

- **[Next.js](https://nextjs.org/ ):** O framework React para produção. Usado para gerenciar a estrutura de rotas (App Router), otimização de imagens, e renderização de componentes.
- **[TypeScript](https://www.typescriptlang.org/ ):** Garante um código mais robusto, seguro e escalável através da tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/ ):** Um framework CSS utility-first para a criação rápida de interfaces customizadas e responsivas.
- **[Framer Motion](https://www.framer.com/motion/ ):** A biblioteca de animação para React mais poderosa do mercado, usada para criar todas as transições e micro-interações da página.
- **[React Hook Form](https://react-hook-form.com/ ) + [Zod](https://zod.dev/ ):** Utilizados para criar formulários performáticos com validação de esquema (schema validation) robusta e segura.
- **[Lucide React](https://lucide.dev/ ):** Uma biblioteca de ícones SVG leve, bonita e altamente customizável.
- **Google Maps Platform:**
  - **[@vis.gl/react-google-maps](https://vis.gl/docs/react-google-maps ):** A biblioteca oficial do Google para integrar mapas interativos em aplicações React de forma moderna e performática.
- **Vercel:** A plataforma de deploy escolhida, oferecendo integração contínua (CI/CD), performance global (CDN) e HTTPS automático.

---

## 🎨 Layout

O design do projeto foi concebido para ser limpo, moderno e focado na identidade visual da marca DELCA, utilizando suas cores primárias (laranja e azul) como pontos de destaque. A estrutura visual alterna seções claras e escuras para criar um ritmo de leitura agradável e separar claramente os diferentes tipos de conteúdo.

Você pode visualizar o resultado final do projeto através do deploy na Vercel:
**[Acesse o site do projeto aqui (EM BREVE)](https://www.delcaconstrucoes.com.br/)** 

---

## 🚀 Como Executar

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento local.

```bash
# 1. Clone o repositório
$ git clone https://github.com/SamuelFontess/landing-page-Delca.git

# 2. Navegue até a pasta do projeto
$ cd delca-construcoes

# 3. Instale as dependências
$ npm install
# ou
$ yarn install

# 4. Crie o arquivo de variáveis de ambiente
# Crie um arquivo chamado .env.local na raiz do projeto e adicione suas chaves da API do Google.
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=SUA_CHAVE_DA_API_DO_GOOGLE_MAPS_AQUI

# 5. Execute a aplicação
$ npm run dev
# ou
$ yarn dev

# 6. Abra seu navegador
# O servidor de desenvolvimento estará rodando em http://localhost:3000
```
