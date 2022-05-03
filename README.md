# [ talento ]

## Português

(Scroll down for the English version)

Um banco de talentos da área de Web Development para consulta de recrutadores, onde qualquer pessoa da área pode criar seu currículo e deixar salvo no site.

Explore nosso banco de [talentos](https://bancotalentos.netlify.app/)

<br>

## Linhas Gerais

- O usuário preenche o formulário de **cadastro** do currículo
- Criamos um perfil para ele onde é possivel ver o CV e até gerar um **PDF** do currículo.
- Para mudar alguma informação ou deletar seu perfil o usuário deve informar o código de registro enviado por e-mail na aba de **Editar**

- O recrutador pesquisa na aba de **Perfis** por meio de alguns filtros
- Se o recrutador desejar ele também pode baixar um **PDF** dos perfis desejados

<br>

## Tecnologias 

### Front-end

#### Para o desenvolvimento do front-end foram utilizadas as seguintes tecnologias:

- [React](https://pt-br.reactjs.org/)
- [React-router-dom](https://v5.reactrouter.com/) (roteamento virtual de páginas/SPA)
- [React-easy-crop](https://www.npmjs.com/package/react-easy-crop)
- [React-input-mask](https://www.npmjs.com/package/react-input-mask)
- [React-to-print](https://www.npmjs.com/package/react-to-print)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/) (requisições http/CRUD)
- [Email.Js](https://www.emailjs.com/)
- [Netlify](https://www.netlify.com/) (plataforma para deploy do aplicativo em React)

### Back-end

#### Para o desenvolvimento do back-end foram utilizadas as seguintes tecnologias:

- [Json-server](https://www.npmjs.com/package/json-server)
- [Heroku](https://www.heroku.com/platform) (plataforma para deploy do json server)

### Api

- [ViaCEP](https://viacep.com.br/) (buscar endereço através do CEP)
- [BancoTalentoApi](https://bancotalentosapi.herokuapp.com/perfis) (deploy do background)
- [Email.Js](https://www.emailjs.com/) (api para envio de email)

### Features

- Os filtros da sidebar são renderizados dinamicamente (de acordo com os dados disponíveis na api de dados)
- Padronização da foto do currículo é feita através do crop do da imagem escolhida pelo usuário através do React-easy-crop
- Formulário de cadastro de 'Experiência', 'Competências', 'Fromação' e 'Projetos' são renderizados por subrotas através do React-router-dom
- Mascara de input feita através do React-input-mask
- Impressão e/ou download do currículo em pdf feita atráves do React-to-print
- Envio de email feito através da api Email.js

### Executar o applicativo localmente

#### Clonar o repositório

```sh
git clone https://github.com/brunowake/BancoTalentosWebDev.git
```

#### Entrar na pasta e Instalar dependências

```sh
cd BancoTalentosWebDev
npm install
```

#### Rodar o do servidor

```sh
npm run dev:server
```

### Rodar o script do React

```sh
npm start
```

<br>

Projeto desenvolvido para o Bootcamp de Web Development da Ironhack por [Bruno Wake](https://github.com/brunowake) e [Thaís Machado](https://github.com/thaismachado31)
Apresentação: [slides](https://docs.google.com/presentation/d/1TybQg7seaZuUQ8CS7L1IYh_71bGjx3J-2u9jgq8g6cU/edit?usp=sharing)

<br>

## English

A Web Development talent database with the purpose to be a source for recruiting, where any web developer can register and save their curriculum at the website.

Explore our [talent database](https://bancotalentos.netlify.app/)

<br>

## Guidelines

- The user fils in the CV **registration** form
- We create a profile where it's possible to see the CV and even generate a **PDF** of the CV
- To change some information ou delete your profile, the user must inform the registration number sent to their e-mail in the **Edit** tab.
- The recruters can do their research at the **Profiles** tab through some filters.
- If the recruter desires, he can also download a **PDF** file of the chosen profiles.

<br>

## Technologies

### Front-end

#### For developing the front-end, the following technologies were used:

- [React](https://pt-br.reactjs.org/)
- [React-router-dom](https://v5.reactrouter.com/) (virtual pages/SPA router)
- [React-easy-crop](https://www.npmjs.com/package/react-easy-crop)
- [React-input-mask](https://www.npmjs.com/package/react-input-mask)
- [React-to-print](https://www.npmjs.com/package/react-to-print)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/) (http/CRUD requests)
- [Email.Js](https://www.emailjs.com/)
- [Netlify](https://www.netlify.com/) (deploy platform for applications in React)

### Back-end

#### For developing the back-end, the following technologies were used:

- [Json-server](https://www.npmjs.com/package/json-server)
- [Heroku](https://www.heroku.com/platform) (deploy platform for json server)

### Api

- [ViaCEP](https://viacep.com.br/) (address search based on the zip code)
- [BancoTalentoApi](https://bancotalentosapi.herokuapp.com/perfis) (background deploy)
- [Email.Js](https://www.emailjs.com/) (api for the e-mail delivery)

### Features

- The sidebar filters are rendered dynamically (according to the avaiable data in the data api)
- The curriculum photo size is determined by the image crop, created through React-easy-crop
- The registration form tabs('Experiência', 'Competências', 'Fromação' and 'Projetos') are rendered by subroutes through React-router-dom
- Input mascara done through React-input-mask
- The printing or download of the CV in pdf is made through React-to-print
- The email mailing is done by the Email.js api.

### Execute the application locally

#### Clone the repository

```sh
git clone https://github.com/brunowake/BancoTalentosWebDev.git
```

#### Enter the folder then install the dependencies

```sh
cd BancoTalentosWebDev
npm install
```

#### Run the server

```sh
npm run dev:server
```

#### Run React script

```sh
npm start
```

<br>

Project created for the Ironhack Web Development Bootcamp by [Bruno Wake](https://github.com/brunowake) and [Thaís Machado](https://github.com/thaismachado31)
