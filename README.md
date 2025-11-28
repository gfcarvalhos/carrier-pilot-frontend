# Carrier Pilot — Frontend (React)

**Disciplina:** Desenvolvimento Web  
**Curso:** Engenharia da Computação — Universidade Federal do Maranhão (UFMA)  
**Autores:** Gabriel Felipe e Cleila Galiza

---

## 📌 Descrição

O frontend do Carrier Pilot é uma aplicação web em React responsável pela interface visual e interação do usuário com o sistema.
Ele consome a API do backend em Django para gerenciar perfis, habilidades, atividades, recomendações geradas por IA e o acompanhamento de progresso.

---

## 🧭 Estrutura do Projeto

Estrutura de alto nível:

```
carrier-pilot-frontend/
├── src/
│   ├── components/      # Componentes reutilizáveis (botões, inputs, cards, etc.)
│   ├── pages/           # Páginas (Login, Cadastro, Dashboard, Perfil, etc.)
│   ├── routes/          # Configuração de rotas (React Router)
│   ├── services/        # Serviços de API (axios, chamadas para o backend)
│   ├── hooks/           # Hooks customizados
│   ├── styles/          # Estilos globais e temas
│   ├── assets/          # Imagens, ícones, fontes
│   ├── App.tsx / App.jsx
│   └── main.tsx / index.tsx
├── public/
├── package.json
└── tsconfig.json / jsconfig.json
```

## 🛠 Tecnologias

- **Linguagem:** TypeScript
- **Framework:** React + Vite
- **Roteamento:** React Router
- **HTTP Client:** Axios

---

## 🚀 Funcionalidades principais

- Páginas de cadastro e login de usuários integradas com o backend.
- Fluxos para criar, visualizar e editar perfis e habilidades.
- Interface para listar atividades recomendadas, visualizar detalhes e marcar progresso.
- Exibição de recomendações estruturadas geradas pela IA (tema, subtema, recursos, explicações).
- Feedback visual para carregamento, erros e sucesso (toasts, popups, validações de formulário).

---

## ⚙️ Instalação e Execução (local)

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO_FRONTEND>
   cd carrier-pilot-frontend
   ```

2. Instale dependências:

```bash
npm install
# ou
yarn
```

3. Configure as variáveis de ambiente

4. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse a aplicação no navegador:

```bash
http://localhost:5173
```
