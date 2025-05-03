// Firebase config
// const firebaseConfig = {
//     apiKey: "YOUR-API-KEY",
//     authDomain: "YOUR-PROJECT-ID.firebaseapp.com",
//     projectId: "YOUR-PROJECT-ID",
//     storageBucket: "YOUR-PROJECT-ID.appspot.com",
//     messagingSenderId: "YOUR-SENDER-ID",
//     appId: "YOUR-APP-ID"
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyBiNkyIm57X01SPl9RlQn2iRSLdFLAtKAU",
    authDomain: "soil-farming-agent-4ab23.firebaseapp.com",
    projectId: "soil-farming-agent-4ab23",
    storageBucket: "soil-farming-agent-4ab23.firebasestorage.app",
    messagingSenderId: "563814397374",
    appId: "1:563814397374:web:2ca5544da4f006f19035ef",
    measurementId: "G-M5BXR5MXSE"  
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  