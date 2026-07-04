import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 👉 Cole aqui as chaves do SEU projeto Firebase.
// Onde encontrar: Firebase Console → ⚙️ Configurações do projeto →
// role até "Seus aplicativos" → clique no ícone </> (Web) → copie o objeto
// "firebaseConfig" e cole os valores abaixo, substituindo os textos entre aspas.
const firebaseConfig = {
  apiKey: "AIzaSyAazVNdL6443IQgdMvXuvKFIR0uJd70vwI",
  authDomain: "supervoleyapp.firebaseapp.com",
  projectId: "supervoleyapp",
  storageBucket: "supervoleyapp.firebasestorage.app",
  messagingSenderId: "937214903109",
  appId: "1:937214903109:web:ac9ab2af4cfbaff4d3342c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
