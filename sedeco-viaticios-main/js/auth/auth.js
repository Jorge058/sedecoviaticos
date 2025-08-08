// Reemplaza con tu configuración real de Firebase
    const firebaseConfig = {
    apiKey: "AIzaSyCoQ7GygkFJWl4uOHTQOYmcWQwFrwopMuo",
    authDomain: "viaticos-4cc2c.firebaseapp.com",
    projectId: "viaticos-4cc2c",
    storageBucket: "viaticos-4cc2c.appspot.com",
    messagingSenderId: "287524196206",
    appId: "1:287524196206:web:fb4eac753e073f72babb7f",
    };

    // Inicializar Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();



    function login() {
      const email = document.getElementById('emailLogin').value;
      const password = document.getElementById('passwordLogin').value;
      const alertArea = document.getElementById('loginAlert');
      auth.signInWithEmailAndPassword(email, password)
        .then(() => { 
            Swal.fire({
          text: `Bienvenido`,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000, 
          customClass: {
            popup: 'alerta',
            title: 'titulo',
            icon: 'iconalert',
        },
        allowOutsideClick: false,
        })
        
            setTimeout(() => {
                window.location.href = "/index.html"; 
            }, 3000); 
        
             })

        .catch(error => {
            console.log(error.message);

            if (error.message == "Firebase: Error (auth/invalid-login-credentials).") {
                    alertArea.textContent = `Error: Usuario o Contraseña invalidos` 
            } 
            else{
                alertArea.textContent = `Error: ${error.message}`
            } 
        }
        );
    }

    function logout() {
      auth.signOut().then(() => {

         Swal.fire({
          text: `Session cerrada`,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000, 
          customClass: {
            popup: 'alerta',
            title: 'titulo',
            icon: 'iconalert',
        },
        allowOutsideClick: false,
        })
      });
    }

    auth.onAuthStateChanged(user => {
      const userInfo = document.getElementById('textUser');
      if (user) {
        // Si actualizaste el displayName en el registro, se mostrará
       // alert(`Conectado como: ${user.displayName} (${user.email})`);

        userInfo.textContent = user.displayName 
          ? `${user.displayName}`
          : `${user.email}`;

        //borrar navbar de login
        //hiden
        document.getElementById('liLogin').style.display = 'none';
        document.getElementById('liLogout').style.display = 'block';
      } else {
        userInfo.textContent = 'Secretaria de Desarrollo Economico';

          //borrar navbar de login
        document.getElementById('liLogin').style.display = 'block';
        document.getElementById('liLogout').style.display = 'none';
      }
    });