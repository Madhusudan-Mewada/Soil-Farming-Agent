// Register User
function register(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        logAction('User Registered', userCredential.user.email);
        window.location.href = "login.html";
      })
      .catch(error => {
        logAction('Registration Error', error.message);
        alert(error.message);
      });
  }
  
  // Login User
  function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        logAction('User Logged In', userCredential.user.email);
        if (email === "admin@example.com") {
          window.location.href = "admin.html";
        } else {
          window.location.href = "user.html";
        }
      })
      .catch(error => {
        logAction('Login Error', error.message);
        alert(error.message);
      });
  }
  