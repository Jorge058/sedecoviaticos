import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy ,where } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

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
  //const q = db.collection("oficios").where("persona_area", "==", 'financieros').order_by("oficio_numero", "desc")
  const q = query(collection(db, "oficios"), where("persona_area", "==", 'financieros'), );

  const querySnapshot = await getDocs(q);
  console.log(querySnapshot)
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

   
        // doc.data() is never undefined for query doc snapshots
    
        tabladriver.innerHTML += ` <tr>
        <th scope="row" class="text-center">${cont}</th>
        <td >${doc.data().oficio_numero}</td>
        <td >${doc.data().persona_nombre}</td>
        <td class="text-center">${doc.data().oficio_fecha}</td>
        <td class="text-center">${doc.data().oficio_lugar_comision}</td>
        
          
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

export {querySnapshot}

  function eliminarD (id) {
    console.log(id)
  }



/************************************************** */


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