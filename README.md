# 🍕 FoodExpress API

Uma API REST completa para gerenciamento de pedidos em restaurantes, desenvolvida com Node.js, TypeScript, Express e Prisma ORM.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Banco de Dados](#estrutura-do-banco-de-dados)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando a Aplicação](#executando-a-aplicação)
- [Endpoints da API](#endpoints-da-api)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🍽️ Sobre o Projeto

O FoodExpress API é um sistema backend robusto desenvolvido para gerenciar operações de restaurantes, incluindo:

- Gestão de usuários e autenticação
- Catálogo de produtos e categorias
- Sistema completo de pedidos
- Upload de imagens para produtos
- Controle de status de pedidos

O sistema foi projetado para ser utilizado por garçons, cozinheiros e administradores, facilitando o fluxo completo desde o pedido até a entrega.

## ⚡ Funcionalidades

### 👥 Gestão de Usuários
- [x] Cadastro de usuários
- [x] Autenticação com JWT
- [x] Detalhamento de perfil de usuário

### 📂 Gestão de Categorias
- [x] Criar categorias de produtos
- [x] Listar todas as categorias

### 🍕 Gestão de Produtos
- [x] Cadastrar produtos com imagem
- [x] Listar produtos por categoria
- [x] Upload de imagens

### 📋 Sistema de Pedidos
- [x] Criar pedidos (rascunho)
- [x] Adicionar itens ao pedido
- [x] Remover itens do pedido
- [x] Enviar pedido para a cozinha
- [x] Listar pedidos
- [x] Detalhar pedido específico
- [x] Finalizar pedido
- [x] Cancelar pedido

## 🛠️ Tecnologias

- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Express.js](https://expressjs.com/)** - Framework web para Node.js
- **[Prisma ORM](https://www.prisma.io/)** - ORM moderno para TypeScript e Node.js
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[JWT](https://jwt.io/)** - JSON Web Tokens para autenticação
- **[Bcrypt.js](https://github.com/dcodeIO/bcrypt.js/)** - Biblioteca para hash de senhas
- **[Multer](https://github.com/expressjs/multer)** - Middleware para upload de arquivos
- **[CORS](https://github.com/expressjs/cors)** - Configuração de Cross-Origin Resource Sharing

## 🗄️ Estrutura do Banco de Dados

O sistema utiliza 4 principais entidades:

### Users (Usuários)
```sql
- id: String (UUID, Primary Key)
- name: String
- email: String
- password: String (hash)
- created_at: DateTime
- updated_at: DateTime
```

### Categories (Categorias)
```sql
- id: String (UUID, Primary Key)
- name: String
- created_at: DateTime
- updated_at: DateTime
```

### Products (Produtos)
```sql
- id: String (UUID, Primary Key)
- name: String
- price: String
- description: String
- banner: String (caminho da imagem)
- category_id: String (Foreign Key)
- created_at: DateTime
- updated_at: DateTime
```

### Orders (Pedidos)
```sql
- id: String (UUID, Primary Key)
- table: Integer
- status: Boolean (padrão: false)
- draft: Boolean (padrão: true)
- name: String (opcional)
- created_at: DateTime
- updated_at: DateTime
```

### Items (Itens do Pedido)
```sql
- id: String (UUID, Primary Key)
- amount: Integer
- order_id: String (Foreign Key)
- product_id: String (Foreign Key)
- created_at: DateTime
- updated_at: DateTime
```

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (versão 12 ou superior)

## 🚀 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/mrjonas151/Foodexpress-api
cd Foodexpress-api
```

2. **Instale as dependências**
```bash
npm install
```

## ⚙️ Configuração

1. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
# Database
DATABASE_URL="postgresql://usuario:senha@localhost:5432/foodexpress?schema=public"

# JWT
JWT_SECRET="sua_chave"
```

2. **Execute as migrações do banco de dados**
```bash
npx prisma migrate dev
```

3. **Gere o cliente Prisma**
```bash
npx prisma generate
```

## 🏃 Executando a Aplicação

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3333`

## 📡 Endpoints da API

### 🔐 Autenticação

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/users` | Cadastrar usuário |✅ |
| POST | `/session` | Login de usuário | ✅ |
| GET | `/me` | Detalhes do usuário logado | ✅ |

### 📂 Categorias

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/category` | Criar categoria | ✅ |
| GET | `/category` | Listar categorias | ✅ |

### 🍕 Produtos

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/product` | Criar produto | ✅ |
| GET | `/category/product` | Listar produtos por categoria | ✅ |

### 📋 Pedidos

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/order` | Criar pedido | ✅ |
| DELETE | `/order` | Remover pedido | ✅ |
| POST | `/order/add` | Adicionar item ao pedido | ✅ |
| DELETE | `/order/remove` | Remover item do pedido | ✅ |
| PUT | `/order/send` | Enviar pedido para cozinha | ✅ |
| GET | `/orders` | Listar pedidos | ✅ |
| GET | `/order/detail` | Detalhar pedido | ✅ |
| PUT | `/order/finish` | Finalizar pedido | ✅ |


## 📁 Estrutura do Projeto

```
src/
├── @types/           # Tipagens customizadas
├── config/           # Configurações (Multer, etc.)
├── controllers/      # Controladores das rotas
│   ├── Category/
│   ├── Order/
│   ├── Product/
│   └── User/
├── middlewares/      # Middlewares (autenticação, etc.)
├── prisma/          # Configuração do cliente Prisma
├── services/        # Lógica de negócio
│   ├── Category/
│   ├── Order/
│   ├── Product/
│   └── User/
├── routes.ts        # Definição das rotas
└── server.ts        # Configuração do servidor
```

## 📜 Scripts Disponíveis

```bash
npm run dev          

npx prisma migrate dev    
npx prisma generate       
npx prisma studio       
```

## 🔒 Autenticação

A API utiliza JWT (JSON Web Tokens) para autenticação. Para acessar rotas protegidas:

1. Faça login através do endpoint `/session`
2. Inclua o token no header da requisição:
```
Authorization: Bearer <seu_token_jwt>
```

## 📸 Upload de Imagens

As imagens dos produtos são armazenadas na pasta `tmp/` e podem ser acessadas através do endpoint `/files/:filename`.

Formatos suportados: JPG, JPEG, PNG

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

⌨️ Desenvolvido com ❤️ por [Jonas Tomaz]