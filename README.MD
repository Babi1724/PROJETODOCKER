# Documentação da API - Clientes

Desenvolvido por **[Seu Nome Aqui]**  
Estudante da UNIUBE  
Disciplina: Programação para Internet

## Descrição

API RESTful para gerenciar clientes usando Node.js, Express e MySQL (via Docker). Permite operações CRUD básicas.

## Como iniciar

1. Tenha o container MySQL rodando via Docker Compose.  
2. Instale dependências: `npm install`  
3. Rode o servidor: `node index.js` (porta 3001)

## Endpoints

### GET /api/v1/cliente  
Lista todos os clientes.

### GET /api/v1/cliente/:id  
Busca cliente pelo ID.

### POST /api/v1/cliente/  
Adiciona cliente. Campos no body: nome, email, celular.

### DELETE /api/v1/cliente/:id  
Remove cliente pelo ID.

## Observações

- Corrigir erros no código (ex: nome variável `dbConfig`, sintaxe do SQL no POST)  
- Validar corretamente os campos do cliente no POST

## Tecnologias

- Node.js  
- Express.js  
- MySQL  
- Docker
