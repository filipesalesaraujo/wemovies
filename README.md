# Documentação do Projeto WeMovies

## Sobre o projeto

WeMovies é um projeto desenvolvido com Next.js, React e Styled Components. Ele utiliza um servidor JSON para simular uma API.

## Como executar o projeto

### Pré-requisitos

Para executar este projeto, você precisa ter Node.js e npm instalados em seu ambiente de desenvolvimento.

### Instalação

1. Clone o repositório
2. Entre no diretório do projeto
3. Instale as dependências

### Execução

1. Inicie o servidor JSON com o comando:
```bash
npx json-server --watch db.json --port 3001
```

2. Em um novo terminal, inicie o servidor de desenvolvimento Next.js
```bash
npm run dev
```

Agora você pode acessar o front-end em [http://localhost:3000](http://localhost:3000) e o back-end em [http://localhost:3001/products](http://localhost:3001/products)

## Scripts disponíveis

- `dev`: Inicia o servidor de desenvolvimento Next.js
- `build`: Cria a versão de produção do projeto
- `start`: Inicia o servidor de produção Next.js
- `lint`: Executa o linter no código do projeto
- `server`: Inicia o servidor JSON

## Dependências

- `next`: Framework utilizado para criar o projeto
- `react` e `react-dom`: Biblioteca para construção de interfaces de usuário
- `styled-components`: Biblioteca para estilização dos componentes

## Dependências de desenvolvimento

- `@types/node`, `@types/react` e `@types/react-dom`: Tipos TypeScript para Node.js e React
- `eslint` e `eslint-config-next`: Linter para o código do projeto
- `json-server`: Servidor JSON para simular uma API
- `typescript`: Linguagem de programação utilizada no projeto

## Versões das dependências

As versões exatas das dependências estão especificadas no arquivo `package.json`.