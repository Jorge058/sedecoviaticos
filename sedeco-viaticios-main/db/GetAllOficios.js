import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, where } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyCoQ7GygkFJWl4uOHTQOYmcWQwFrwopMuo",
    authDomain: "viaticos-4cc2c.firebaseapp.com",
    projectId: "viaticos-4cc2c",
    storageBucket: "viaticos-4cc2c.appspot.com",
    messagingSenderId: "287524196206",
    appId: "1:287524196206:web:fb4eac753e073f72babb7f"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  //HTML
  const tabladriver= document.getElementById('tabla-driver');
// Print Table
tabladriver.innerHTML = '';
let cont = 1;

  //*********************************************** */
  // GET ALL
  const q = query(collection(db, "oficios"), where("area", "==", 'financieros'));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

   
        // doc.data() is never undefined for query doc snapshots
    
        tabladriver.innerHTML += ` <tr>
        <th scope="row" class="text-center">${cont}</th>
        <td >${doc.data().oficio}</td>
        <td >${doc.data().nombre}</td>
        <td class="text-center">${doc.data().fecha}</td>
        <td class="text-center">${doc.data().lugar}</td>
        
          
        <td class="text-center"> <div class="btn-group">
        <button class="btn btn-sm btn-warning w-50" type="button" 
        onclick="loadViaticos('${doc.id}'">
          <i class="fa fa-folder-open" aria-hidden="true"></i>
        </button>
        <button class="btn btn-sm w-50 btn-danger" type="button"  
        onclick="eliminarD('${doc.id}')" >
          <i class="fa fa-trash-o" aria-hidden="true"><i class="fas fa-trash-alt"></i>
        </button>
      </div> </td>
      </tr>`

      cont++;
  
  });


  function eliminarD (id) {
    console.log(id)
  }



/************************************************** */