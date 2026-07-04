# Torneio de Praia — Rei & Rainha da Areia

App para organizar torneios de praia em dupla (Super 8, Super 10 e Super 12),
com rodízio automático de duplas, lançamento de placar, classificação e
exportação de texto para WhatsApp.

## Como funciona o acesso

- **Qualquer pessoa** que acessar o link consegue **ver** rodadas, placares e
  classificação, sem precisar de conta.
- Para **criar torneios, lançar placares e encerrar torneios**, é preciso
  **entrar como organizador**. Qualquer pessoa pode se cadastrar (cadastro
  livre) e, ao se cadastrar, já vira organizador(a).
- Os dados ficam salvos no **Firebase (Firestore)** — ou seja, são
  compartilhados de verdade entre todos que acessam o link, em tempo real.

## Configurando o Firebase (passo a passo)

### 1. Criar o projeto no Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
   e entre com sua conta Google.
2. Clique em **Adicionar projeto** (ou "Create a project").
3. Dê um nome (ex.: `supervolei`) e siga o assistente (pode desativar o
   Google Analytics, não é necessário para este app).
4. Aguarde a criação e clique em **Continuar**.

### 2. Criar o banco de dados (Firestore)

1. No menu lateral do projeto, clique em **Compilação (Build) → Firestore Database**.
2. Clique em **Criar banco de dados**.
3. Escolha a localização (qualquer uma próxima do Brasil, ex.: `southamerica-east1`) e clique em **Próxima**.
4. Selecione **Iniciar no modo de produção** e clique em **Ativar**.

### 3. Aplicar as regras de segurança

1. Ainda em **Firestore Database**, clique na aba **Regras**.
2. Apague o conteúdo que estiver lá e cole o conteúdo do arquivo
   `firestore.rules` (está na raiz deste projeto).
3. Clique em **Publicar**.

> Essas regras deixam a leitura aberta para todo mundo e a escrita liberada
> só para quem estiver logado — exatamente o comportamento combinado.

### 4. Ativar o login por e-mail/senha

1. No menu lateral, clique em **Compilação (Build) → Authentication**.
2. Clique em **Vamos começar** (Get started).
3. Na lista de provedores, clique em **E-mail/senha**.
4. Ative a primeira opção (**E-mail/senha**) e clique em **Salvar**.

### 5. Pegar as chaves de configuração do projeto

1. Clique na engrenagem ⚙️ ao lado de "Visão geral do projeto" → **Configurações do projeto**.
2. Role até **Seus aplicativos** e clique no ícone **</>** (Web).
3. Dê um apelido ao app (ex.: `torneio-web`) e clique em **Registrar app**.
   Não precisa marcar a opção de Hosting.
4. Vai aparecer um bloco de código com `const firebaseConfig = { ... }`.
5. Copie os valores (`apiKey`, `authDomain`, `projectId`, etc.) e cole no
   arquivo **`src/firebase.js`** deste projeto, substituindo os textos
   `"COLE_AQUI_..."`.

### 6. Testar localmente (opcional, mas recomendado)

```bash
npm install
npm run dev
```

Abra o link mostrado no terminal (ex.: `http://localhost:5173`), cadastre-se
como organizador, crie um torneio de teste e confirme que aparece também no
**Firestore Database → dados**, dentro da coleção `tournaments`.

### 7. Publicar a atualização no GitHub Pages

Como o `deploy.yml` já está configurado, basta enviar as mudanças:

```bash
git add .
git commit -m "Integra Firebase (banco de dados + login de organizador)"
git push
```

O GitHub Actions vai gerar o build e publicar automaticamente. Acompanhe em
**Actions** no repositório; quando ficar verde ✅, o site já está atualizado
no mesmo link de antes.

## Rodando localmente (para testar antes de publicar)

Precisa ter o [Node.js](https://nodejs.org/) instalado (versão 18 ou mais recente).

```bash
npm install     # instala as dependências (só precisa fazer uma vez)
npm run dev     # abre um servidor local, geralmente em http://localhost:5173
```

Para gerar a versão de produção manualmente:

```bash
npm run build     # gera a pasta dist/ pronta para publicar
npm run preview   # testa a versão de produção localmente
```

## Estrutura do projeto

```
torneio-praia-web/
├── index.html
├── package.json
├── vite.config.js
├── firestore.rules            → regras de segurança do banco de dados
├── src/
│   ├── main.jsx                → ponto de entrada React
│   ├── firebase.js             → configuração/chaves do Firebase
│   └── App.jsx                 → todo o app (telas, algoritmo de rodízio, etc.)
└── .github/workflows/deploy.yml → publica automaticamente no GitHub Pages
```

## Segurança e limites do plano gratuito

- O plano gratuito do Firebase (Spark) já cobre bem o uso de um app de
  torneios recreativos (o limite gratuito do Firestore é generoso: ~50 mil
  leituras e ~20 mil escritas por dia).
- Qualquer pessoa pode se cadastrar como organizador (por escolha sua, ao
  responder as perguntas de configuração). Se no futuro quiser restringir
  quem pode ser organizador (ex.: aprovação manual, ou só e-mails
  específicos), é só avisar — dá para ajustar as regras do Firestore e a
  lógica de cadastro para isso.
- Nunca compartilhe o conteúdo de `src/firebase.js` publicamente fora do
  repositório do projeto com receio de expor "senhas" — essas chaves
  (`apiKey` etc.) são projetadas para ficar no código do lado do cliente e
  não são secretas; quem protege de verdade os dados são as regras do
  Firestore (o arquivo `firestore.rules`).

## Publicando também como app Android (Google Play Store)

Este projeto já vem preparado com [Capacitor](https://capacitorjs.com),
empacotando o mesmo app dentro de um projeto Android nativo — sem precisar
reescrever nada. Veja o passo a passo completo (instalar Android Studio,
gerar o `.aab` assinado, criar a ficha na Play Store, política de
privacidade, etc.) no arquivo **[ANDROID.md](./ANDROID.md)**.

