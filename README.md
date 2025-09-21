🎨 Desafio Front-End - Code Queens

Este projeto foi desenvolvido como parte do primeiro desafio de Front-End da Code Queens.
O objetivo foi reproduzir fielmente uma tela estática a partir de um design fornecido, buscando ser o mais preciso possível em relação ao layout original.

🚀 Tecnologias Utilizadas

Vite
→ build tool moderna e rápida

React
→ criação de interfaces

CSS3 → estilização da aplicação

📋 Sobre o Projeto

O desafio original pedia a criação de uma tela estática.
Entretanto, por iniciativa própria, algumas partes foram implementadas de forma dinâmica, utilizando arrays mockados localizados na pasta:

/src/service/mocks

Isso permitiu:

Maior flexibilidade no código

Melhor organização

Simulação de uma futura integração com APIs

🔄 Melhorias pós-desafio

Após a conclusão inicial, foi implementado um Contexto (React Context API) para centralizar estados importantes da aplicação.

Evitou que o main.jsx ficasse sobrecarregado

Facilitou o compartilhamento de informações entre componentes laterais que utilizavam os mesmos dados

Tornou o código mais escalável e organizado

🔧 Como Rodar o Projeto

Clone o repositório

git clone https://github.com/LaizaRS/Desafio-code-queens.git

Acesse a pasta do projeto

cd Desafio-code-queens

Instale as dependências

npm install

Rode o servidor de desenvolvimento

npm run dev

📂 Estrutura do Projeto
src/
├─ assets/ # Imagens e ícones
├─ components/ # Componentes reutilizáveis
├─ contexts/ # Contextos globais (React Context API)
├─ pages/ # Páginas da aplicação
├─ service/
│ └─ mocks/ # Arrays mockados para simular dados dinâmicos
├─ App.jsx # Componente principal
└─ main.jsx # Ponto de entrada da aplicação

🎨 Paleta de Cores

#0E537D → Azul escuro

#CDEAFC → Azul claro

#EBF6FD → Azul bem clarinho (quase branco, usado no fundo)

#DA762F → Laranja

🏅 Resultado

Fidelidade visual ao design fornecido

Código organizado, com boas práticas de estrutura e estilização

Partes dinâmicas implementadas além do proposto, aproximando o projeto de um cenário real de desenvolvimento

Uso de Context API para gerenciamento de estado global, melhorando escalabilidade e reutilização de dados

✨ Desenvolvido com dedicação durante o desafio da Code Queens.
