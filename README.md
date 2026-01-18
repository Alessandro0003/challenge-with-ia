# Challenge with IA

Projeto monorepo com API e aplicação web para gerenciamento e consumo de webhooks.

## Tecnologias Utilizadas
- Node.js
- TypeScript
- React
- Vite
- Drizzle ORM
- Docker (para ambiente de desenvolvimento)
- PNPM (gerenciador de pacotes)

## Estrutura do Projeto
- `api/` — Backend (API REST, banco de dados, migrations)
- `web/` — Frontend (React + Vite)

## Instalação

1. **Clone o repositório:**
	```sh
	git clone <url-do-repo>
	cd challenge-with-ia
	```
2. **Instale as dependências:**
	```sh
	pnpm install
	```
3. **Configuração do ambiente:**
	- Copie o arquivo `.env.example` para `.env` em `api/` e ajuste as variáveis conforme necessário.

4. **Suba os serviços com Docker (opcional):**
	```sh
	cd api
	docker-compose up -d
	```

## Uso

### API
1. Acesse a pasta `api`:
	```sh
	cd api
	pnpm dev
	```
2. A API estará disponível em `http://localhost:3333` (ou porta configurada).

### Web
1. Acesse a pasta `web`:
	```sh
	cd web
	pnpm dev
	```
2. Acesse `http://localhost:5173` no navegador.

---

Sinta-se à vontade para contribuir ou abrir issues!
