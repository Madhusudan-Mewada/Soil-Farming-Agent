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
    apiKey: "AIzaSyBvbiUBXGysmFiq0o668PaB7dB1gR0J50U",
    authDomain: "soil-farming-agent-3eb4e.firebaseapp.com",
    projectId: "soil-farming-agent-3eb4e",
    storageBucket: "soil-farming-agent-3eb4e.firebasestorage.app",
    messagingSenderId: "469753286055",
    appId: "1:469753286055:web:0725b998653a5bba357a82",
    measurementId: "G-SCSSKCB171"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  