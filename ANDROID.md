# Publicando o Torneio de Praia na Google Play Store

Este projeto já vem com o [Capacitor](https://capacitorjs.com) configurado,
que empacota o mesmo app web (React + Firebase) dentro de um projeto Android
nativo. Você **não precisa escrever código nativo** — só precisa do Android
Studio para compilar e gerar o arquivo que a Play Store pede.

## O que você vai precisar

- Um computador (Windows, Mac ou Linux — **não precisa de Mac**, isso é só
  para iOS).
- [Android Studio](https://developer.android.com/studio) instalado (gratuito).
- Uma conta [Google Play Console](https://play.google.com/console) (taxa
  única de **US$ 25**, paga uma vez, para sempre).
- Node.js instalado (para rodar `npm install` e `npm run build`).

## Passo 1 — Instalar o Android Studio

1. Baixe em [developer.android.com/studio](https://developer.android.com/studio).
2. Instale normalmente (próximo, próximo...). Na primeira abertura, ele vai
   baixar o Android SDK sozinho — pode demorar alguns minutos.

## Passo 2 — Preparar o projeto

Dentro da pasta do projeto (depois de aplicar as atualizações de código que
já te enviei anteriormente):

```bash
npm install
npm run android:sync
```

Esse comando (`android:sync`) já faz o build do site e sincroniza tudo com
o projeto Android automaticamente. Rode ele **sempre que atualizar o código**
do app (`src/App.jsx`, `src/firebase.js` etc.) antes de gerar uma nova versão.

## Passo 3 — Abrir no Android Studio

```bash
npm run android:open
```

Isso abre a pasta `android/` diretamente no Android Studio. Na primeira vez,
aguarde o "Gradle Sync" terminar (barra de progresso no rodapé) — pode levar
alguns minutos.

## Passo 4 — Testar antes de publicar

Com o Android Studio aberto:
1. Crie um emulador (**Device Manager** → **Create device**) ou conecte um
   celular Android via USB com a "Depuração USB" ativada.
2. Clique no botão verde ▶️ **Run** no topo.
3. O app deve abrir mostrando a tela inicial "Torneio de Praia" — teste
   cadastro de organizador, criação de torneio, lançamento de placar.

> 💡 Aproveite essa etapa para tirar **screenshots** do app rodando — a Play
> Store exige pelo menos 2 capturas de tela por dispositivo (celular).

## Passo 5 — Gerar a chave de assinatura (keystore)

Esse arquivo "assina" seu app e prova que as atualizações futuras vêm de
você. **Guarde-o com muito cuidado** — se perdê-lo, não será possível
atualizar o app publicado nunca mais, apenas publicar como um app novo do
zero.

No terminal:

```bash
keytool -genkey -v -keystore torneio-praia-release.keystore -alias torneio-praia -keyalg RSA -keysize 2048 -validity 10000
```

Vai pedir uma senha (anote em local seguro) e algumas informações (nome,
organização, cidade — pode preencher com seus dados). Guarde o arquivo
`torneio-praia-release.keystore` gerado **fora da pasta do projeto** (ex.: em
uma pasta pessoal de backups), longe de qualquer repositório Git.

## Passo 6 — Gerar o pacote assinado (.aab)

No Android Studio:
1. Menu **Build → Generate Signed Bundle / APK**.
2. Escolha **Android App Bundle** (não APK — a Play Store pede o formato
   `.aab`) → **Next**.
3. Em **Key store path**, clique em escolher e selecione o arquivo
   `.keystore` gerado no passo anterior. Preencha as senhas.
4. Escolha a variante **release** → **Finish**.
5. O Android Studio vai gerar o arquivo em algo como:
   `android/app/release/app-release.aab`

Esse é o arquivo que você vai enviar para a Play Store.

## Passo 7 — Criar a conta Google Play Console

1. Acesse [play.google.com/console](https://play.google.com/console).
2. Pague a taxa única de US$ 25 (aceita cartão de crédito internacional).
3. Preencha os dados de desenvolvedor (pessoa física ou empresa).

## Passo 8 — Criar a ficha do app

No Play Console → **Criar app**:

1. **Nome do app**: Torneio de Praia (ou o nome que preferir).
2. **Idioma padrão**: Português (Brasil).
3. **Tipo**: App.
4. **Gratuito ou pago**: Gratuito.

Depois, preencha a "Ficha da loja" (Store listing):
- **Descrição curta** (até 80 caracteres): ex. "Organize torneios de praia
  Super 8, Super 10 e Super 12 com placar em tempo real."
- **Descrição completa**: pode detalhar os recursos (rodízio automático de
  duplas, placar em tempo real, exportação para WhatsApp, etc.)
- **Ícone**: use o arquivo `store-assets/icon-512.png` deste projeto.
- **Imagem de destaque (feature graphic)**: use
  `store-assets/feature-graphic-1024x500.png` deste projeto.
- **Capturas de tela**: as que você tirou no Passo 4 (mínimo 2).
- **Política de privacidade (URL)**: obrigatório. Este projeto já inclui uma
  página pronta em `public/privacy.html`, que é publicada automaticamente
  junto com o site no GitHub Pages. A URL será algo como:
  `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/privacy.html`
  (edite o e-mail de contato dentro do arquivo, se quiser trocar.)

## Passo 9 — Classificação de conteúdo e público-alvo

O Play Console vai pedir para responder um questionário sobre o conteúdo do
app (violência, conteúdo adulto, etc.) — para este app, a resposta é "não"
para praticamente tudo, resultando numa classificação livre (Livre/L).

## Passo 10 — Seção "Segurança dos dados" (Data Safety)

Obrigatório declarar quais dados o app coleta. Baseado no que o app
realmente faz:
- **E-mail**: coletado (login de organizador via Firebase Authentication).
  Finalidade: funcionalidade do app. Não é compartilhado com terceiros.
- **Outros dados do usuário** (nomes de jogadores, placares): coletados,
  finalidade: funcionalidade do app.
- Não há coleta de localização, contatos, fotos, ou dados financeiros.
- Os dados **podem ser excluídos** pelo próprio usuário (organizador exclui
  o torneio que criou).

## Passo 11 — Enviar o .aab e publicar

1. No menu lateral, vá em **Produção** (ou comece por **Teste interno**,
   recomendado para a primeira versão, antes de liberar para todo mundo).
2. **Criar nova versão** → envie o arquivo `app-release.aab` gerado no
   Passo 6.
3. Preencha as notas da versão (o que há de novo).
4. Envie para revisão.

A revisão do Google costuma levar de algumas horas a 2-3 dias na primeira
publicação. Depois de aprovado, o app fica disponível na Play Store com o
link `https://play.google.com/store/apps/details?id=com.pensandocomrobotica.supervolei`.

## Atualizando o app no futuro

Sempre que quiser publicar uma nova versão:

1. Atualize o código (`src/App.jsx` etc.).
2. Aumente o número da versão em `android/app/build.gradle`:
   ```gradle
   versionCode 2        // sempre +1 a cada envio
   versionName "1.1"     // versão visível para o usuário
   ```
3. Rode `npm run android:sync`.
4. Gere um novo `.aab` assinado (Passo 6, reutilizando o **mesmo**
   keystore).
5. Envie a nova versão no Play Console.

## Estrutura adicionada ao projeto

```
torneio-praia-web/
├── android/                        → projeto Android nativo (gerado pelo Capacitor)
├── capacitor.config.ts             → configuração do Capacitor (nome, ícone, splash)
├── store-assets/
│   ├── icon-512.png                 → ícone para a ficha da Play Store
│   └── feature-graphic-1024x500.png → imagem de destaque da ficha
├── public/
│   └── privacy.html                 → política de privacidade (publicada junto com o site)
```

## Dúvidas comuns

**Preciso pagar de novo toda vez que atualizar o app?**
Não. A taxa de US$ 25 é única, paga uma vez, e cobre todos os apps que você
publicar com essa conta para sempre.

**Posso testar sem publicar de verdade?**
Sim — use a trilha de **Teste interno** no Play Console. Você adiciona
e-mails de testadores (até 100 pessoas) e eles recebem um link para instalar
o app sem ele aparecer publicamente na loja.

**O app vai continuar funcionando igual ao do GitHub Pages?**
Sim — é exatamente o mesmo código e o mesmo banco de dados Firebase. Um
organizador pode usar tanto a versão instalada quanto a versão web
(navegador) e os dados continuam sincronizados entre as duas.
