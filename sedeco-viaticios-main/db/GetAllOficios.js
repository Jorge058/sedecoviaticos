import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
  query,
  orderBy,
  where,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

//Import Firebase configuration
import firebaseConfig from './firebase_config.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//HTML



const tabladriver = document.getElementById("tabla-driver");
// Print Table
tabladriver.innerHTML = "";

//*********************************************** */
// GET ALL

export let allData = [];

let DepartamentoOficio = document.getElementById("DepartamentoOficio").addEventListener('change', async function(){
  let areaTrabajo = document.getElementById("areaTrabajo").innerText = this.value;
  document.getElementById("areaTrabajo").innerText = this.value;
  document.getElementById("showArea").innerText = this.value;


const q = query(
  collection(db, "oficios"),
  where("persona_area", "==", areaTrabajo)
);


tabladriver.innerHTML = ''

const querySnapshot = await getDocs(q);
//console.log(querySnapshot)
let cont = 1;
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());

  //save into object locally
  allData.push(doc.data());
  // doc.data() is never undefined for query doc snapshots

  tabladriver.innerHTML += ` <tr>
        <th scope="row" class="text-center">${cont}</th>
        <td class="text-center">${doc.data().oficio_numero}</td>
        <td >${doc.data().persona_nombre}</td>
        <td class="text-center">${ new Date(doc.data().oficio_fecha).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"numeric", day:"2-digit", year:"numeric"})}</td>
        <td class="text-center">${doc.data().oficio_lugar_comision}</td>
        
        <td class="text-center"> <div class="btn-group">
        <button style="background-color: white; border-color: #4A001F;" 
          class="btn btn-sm w-50 BtnCargarData" type="button" 
          id=${cont - 1}>
          <i class="fa fa-folder-open" style="color:#4A001F" aria-hidden="true"></i>
        </button>

        <button style="background-color: #4A001F; border-color: #4A001F;" 
          class="btn btn-sm w-50 BtnBorrar" type="button" 
          id="${doc.id}">
          <i class="fa fa-trash" style="color:white;" aria-hidden="true"></i>
        </button>
        
      </div> </td>
      </tr>`;
  //52 onclick="loadViaticos('${cont-1}')">
  cont++;
});
});

console.log(allData);
