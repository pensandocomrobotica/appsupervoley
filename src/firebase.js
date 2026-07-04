import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 👉 Cole aqui as chaves do SEU projeto Firebase.
// Onde encontrar: Firebase Console → ⚙️ Configurações do projeto →
// role até "Seus aplicativos" → clique no ícone </> (Web) → copie o objeto
// "firebaseConfig" e cole os valores abaixo, substituindo os textos entre aspas.
const firebaseConfig = {
  apiKey: "COLE_AQUI_SUA_API_KEY",
  authDomain: "COLE_AQUI_SEU_PROJETO.firebaseapp.com",
  projectId: "COLE_AQUI_SEU_PROJETO_ID",
  storageBucket: "COLE_AQUI_SEU_PROJETO.appspot.com",
  messagingSenderId: "COLE_AQUI_SEU_SENDER_ID",
  appId: "COLE_AQUI_SEU_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
