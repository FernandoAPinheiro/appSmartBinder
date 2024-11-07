  // firebase.js
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getAuth } from "firebase/auth"; 
  
  // Configuração do Firebase
  export const firebaseConfig = {
    apiKey: "AIzaSyAYXy0tkHNsHmmKDmEFjRnwcdJDMDPKpcc",
    authDomain: "smartbinderbd.firebaseapp.com",
    projectId: "smartbinderbd",
    storageBucket: "smartbinderbd.appspot.com",
    messagingSenderId: "408806461317",
    appId: "1:408806461317:web:659e0af037379ce32f3eec"
  };
  
  // Inicializa o Firebase
  const app = initializeApp(firebaseConfig);
  export const firestore = getFirestore(app);
  export const auth = getAuth(app); // Exporta a autenticação
  