# Desafio B2bit - Estágio/Trainee
### Video demonstrando as funcionalidades do projeto
 Link: https://youtu.be/pVwBWLTP6Ec
### Deploy - acesse o projeto na web
Para ter acesso à aplicação funcionando em tempo real, acesse: https://desafio-b2bit.vercel.app
### Como iniciar o projeto localmente
1. Antes de começar, você precisa clonar o repositório do projeto para sua máquina local. Execute o seguinte comando:
     ```bash
        git clone https://github.com/gsousaaa/desafio-b2bit.git
     ```
2. Instalar as Dependências:
    ```bash
        npm install
     ```
3. Rodar o projeto:
    ```bash
        npm run dev
     ```
### Requisitos não funcionais utilizados
- ReactJS ✅
- Typescript ✅
- Axios Interceptors (sempre que houver uma requisição de login, o token será armazenado no local storage) ✅
- TailwindCSS ✅
- Deploy  ✅
### Requisitos funcionais implementados e bibliotecas
- Navegação entre páginas com a biblioteca React Router ✅
- Bloqueio de rotas, o acesso à página /dashboard só é permitido com a autenticação. ✅
- React-toastify para a exibição do feedback de credenciais erradas/em branco na página de login. ✅
- Persistência de autenticação, com uma lógica para a sessão expirar em 1 hora e o usuário ser redirecionado automaticamente para a página de login. ✅
- Página com as informações do usuário (se o usuário não possuir um avatar, será exibida uma imagem padrão). ✅
- Botão de logout, ao ser clicado, remove qualquer credencial do usuário do LocalStorage e redireciona o usuário para a página de login. ✅
- Consumo da API com Axios. ✅
- Página NotFound, para quando for acessada uma página não existente. ✅

### Componentes e organização de pastas
- /src/components/common: Nessa pasta, estão os componentes que podem ser reutilizados, como por exemplo:
  - Button.tsx - Componente utilizado para o botão de login e para o botão de logout.
  - Field.tsx - Componente utilizado para os campos de texto contendo as informações dos usuários: e-mail e nome.
  - Input.tsx - Componente utilizado para os inputs da página de login: e-mail e senha.
  - Loading.tsx - Componente utilizado enquanto as informações buscadas na API ainda não estão prontas.
- /src/components/layout: Pasta contendo os componentes utilizados nos layouts da página
    - BoxDashboard.tsx - Componente que consiste em um card com os campos de informação dos usuários.
- /src/components/auth: Pasta contendo os componentes utilizados na autenticação.
    - FormLogin.tsx - Componente que consiste em um box contendo um formulário de login, onde é feito o processo de passagem das informações (e-mail e senha) para a página de Login.
    - PrivateRoute.tsx - O componente é utilizado para proteger rotas que requerem autenticação. Ele garante que apenas usuários autenticados possam acessar determinadas páginas da aplicação e redirecionam para a pagina de login quando não há autenticação.
- /src/pages: Contém as páginas completas utilizando os componentes - Login, Dashboard(página contendo as informações dos usuários) e notFound, utilizada para quando não é acessada uma url não existente no projeto.
- /src/services/api.ts: Arquivo onde foi feito o consumo da API, utilizando as rotas de login e get para pegar as informações do usuário e onde foi feito o uso dos interceptors.
