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
//const q = db.collection("oficios").where("persona_area", "==", 'financieros').order_by("oficio_numero", "desc");
const areaTrabajo = document.getElementById("areaTrabajo").textContent;
const q = query(
  collection(db, "oficios"),
  where("persona_area", "==", areaTrabajo)
);

const querySnapshot = await getDocs(q);
//console.log(querySnapshot)
export let allData = [];
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
        <td class="text-center">${doc.data().oficio_fecha}</td>
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
console.log(allData);

/************************************************** */

/*
function loadViaticos(id) {
    //console.log(allData[id])
    console.log(id)
  }

  function eliminarD(id){

      console.error("Error removing document: ", error);

   
    //myModal2.hide()
   
  }
  
*/
//export {querySnapshot}
/* 
auto_año
"2009"
(cadena)

auto_marca
"Ford"
(cadena)

auto_modelo
"F150"
(cadena)

auto_placa
"NA1664A"
(cadena)

devengado_alimentacion
0
(número)

devengado_combustible
0
(número)

devengado_hospedaje
0
(número)

devengado_otros
0
(número)

devengado_peajes
0
(número)

devengado_total
0
(número)

oficio_fecha
"2024-05-13"
(cadena)

oficio_fecha_final
"2024-05-14"
(cadena)

oficio_fecha_final_2
""
(cadena)

oficio_fecha_inicial
"2024-05-13"
(cadena)

oficio_fecha_inicial_2
""
(cadena)

oficio_lugar_comision
"Lázaro Cárdenas"
(cadena)

oficio_lugar_comision_2
""
(cadena)

oficio_numero
"190"
(cadena)

persona_area
"financieros"
(cadena)

persona_cargo
"auxiliar de la junta especial"
(cadena)

persona_descripcion_actividades
"lavar el carro"
(cadena)

persona_nombre
"Abril Maya S."
(cadena)

persona_unidadresponsable
"Delegación Administrativa"
(cadena)

recibo_alimentacion
720
(número)

recibo_alimentacion_2
0
(número)

recibo_combustible
0
(número)

recibo_combustible_2
0
(número)

recibo_hospedaje
1020
(número)

recibo_hospedaje_2
0
(número)

recibo_pasajes
0
(número)

recibo_pasajes_2
0
(número)

recibo_peajes
0
(número)

recibo_peajes_2
0
(número)

recibo_total
1790
(número)

recibo_total_2
0
(número)

titular_cargo
"Delegada Administrativa"
(cadena)

titular_nombre
"Dra. Mariana Gudiño Paredes"

*/
