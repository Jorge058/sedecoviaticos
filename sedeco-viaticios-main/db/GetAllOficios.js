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

//*********************************************** */
// GET ALL

export let allData = [];
let adminState = 1;

let DepartamentoOficio = document.getElementById("DepartamentoOficio").addEventListener('change', function(){
   let areaTrabajo = document.getElementById("areaTrabajo").innerText = this.value;
   document.getElementById("showArea").innerText = this.value;
     
    auth.onAuthStateChanged(user => {

  /*
      if (user) {

          if(user.email == "informatica.sedeco@gmail.com"){
            userInfo.textContent = 'Administrador';

                const q = query(
                collection(db, "oficios"),
                orderBy("oficio_numero", "asc")
                );
          }
          else{
                  const q = query(
                  collection(db, "oficios"),
                  where("persona_area", "==", user.displayName)
                  ,orderBy("oficio_numero", "asc")
                  );
          }
        }
          */
        //**hasta aqui debe quedar correcto la implementacion solo cuando exista IF(USER)

        if (user) {
           const displayName = user.displayName;
          if(user.email == "informatica.sedeco@gmail.com"){
            //userInfo.textContent = 'Administrador';
            adminState = 0;

                const q = query(
                collection(db, "oficios"),
                orderBy("oficio_numero", "asc")
                );

                printTableOficios(q);
          }

          else {
            const q = query(
                  collection(db, "oficios"),
                  where("persona_area", "==", displayName )
                  ,orderBy("oficio_numero", "asc")
                  );

                  printTableOficios(q);
          }
        }
        else {
            const q = query(
                  collection(db, "oficios"),
                  where("persona_area", "==", areaTrabajo)
                  ,orderBy("oficio_numero", "asc")
                  );

                  printTableOficios(q);
        }
     
        nextPrev(1);
    });
});
  
//Print table Oficios
async function printTableOficios(query) {
  const q=query;
tabladriver.innerHTML = '';
allData = [];

const querySnapshot = await getDocs(q);
//console.log(querySnapshot)
let cont = 1;
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());

  //save into object locally
  allData.push(doc.data());
  // doc.data() is never undefined for query doc snapshots
  
  //adminState = 0 ( Admin en linea)
  if (adminState == 0) {
tabladriver.innerHTML += ` <tr>
        <th scope="row" class="text-center">${doc.data().persona_area}</th>
        <td class="text-center">${doc.data().oficio_numero}</td>
        <td >${doc.data().persona_nombre}</td>
        <td class="text-center">${ new Date(doc.data().oficio_fecha).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"numeric", day:"2-digit", year:"numeric"})}</td>
        <td class="text-center">${doc.data().oficio_lugar_comision}</td>
        <td class="text-center"> <div class="btn-group">


        <button style="background-color: white; border-color: #4A001F;" 
          class="btn btn-sm w-50 BtnCargarData" type="button" 
          id=${cont-1}>
          <i class="fa fa-circle-right" style="color:#4A001F" aria-hidden="true"></i>
        </button>

      
 
                 <button style="background-color: white; border-color: #4A001F; " id="BtnPDFGenerators" 
                  class="btn btn-sm BtnPDFGenerators BtnPDF"  type="button" id=${doc.id} onclick="PDFGeneratorshow('${cont-1}')">
                  <i class="fa fa-file-pdf" style="color:#4A001F" aria-hidden="true"></i>
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
  }

  else {
tabladriver.innerHTML += ` <tr>
        <th scope="row" class="text-center">${cont}</th>
        <td class="text-center">${doc.data().oficio_numero}</td>
        <td >${doc.data().persona_nombre}</td>
        <td class="text-center">${ new Date(doc.data().oficio_fecha).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"numeric", day:"2-digit", year:"numeric"})}</td>
        <td class="text-center">${doc.data().oficio_lugar_comision}</td>
        <td class="text-center"> <div class="btn-group">
        <button style="background-color: white; border-color: #4A001F;" 
          class="btn btn-sm w-50 BtnCargarData" type="button" 
          id=${cont-1}>
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

  }
  
});
}




console.log(allData);

function PDFGeneratorshow(DocumentId){
  console.log("Generando PDF del documento con ID:", DocumentId);
    Swal.fire({
          title: 'Descarga de Documentos <br> <p class="text-black" style="font-size: 12px; font-weight: 100">  Seleccione un archivo de la lista para visualizar</p >',
          html: `<div class="pdf-tooltip" id="pdfTooltip">
                    <div class="pdf-links">
                        <a href="#" class="pdf-link" data-pdf="oficio">
                            <i class="fa fa-file-pdf"></i>
                            <span class="text-black">Oficio de Comisión</span>
                        </a>
                        <a href="#" class="pdf-link" data-pdf="recibo">
                            <i class="fa fa-file-pdf"></i>
                            <span class="text-black">Recibo de Viáticos</span>
                        </a>
                        <a href="#" class="pdf-link" data-pdf="comprobacion">
                            <i class="fa fa-file-pdf"></i>
                            <span class="text-black">Comprobación</span>
                        </a>
                        <a href="#" class="pdf-link" data-pdf="tarjeta">
                            <i class="fa fa-file-pdf"></i>
                            <span class="text-black">Tarjeta Informativa</span>
                        </a>

                         <a href="#" class="pdf-link" data-pdf="todos" id="ViewerTodosPDF" onclick="mostrarTodosPDFsNativo(${DocumentId})">
                            <i class="fa fa-file-pdf"></i>
                            <span class="text-black">Todos</span>
                        </a>
                    </div>
                </div>`,
          showCancelButton: true,
          showConfirmButton: false,
          //confirmButtonText: 'Sí, editar',
          cancelButtonText: 'Cerrar',
          customClass: {
            container: 'containerPDFGenerator',
            htmlContainer: 'htmlContainerPDFGenerator',
            popup: 'alertaPDFGenerator',
            title: 'tituloPDFGenerator',
            confirmButton: 'boton-confirmarPDFGenerator',
            cancelButton: 'botonCancelarPDFGenerator',
            actions: 'accionesPDFGenerator',
          },
          allowOutsideClick: false,
        }).then(async (result) => {
          if (result.isConfirmed) {
            // lógica para editar
          console.log("Documento editado con éxito");
          Swal.fire({
            text: 'Documento editado y guardado con éxito.',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000, 
            customClass: {
              popup: 'alerta',
              title: 'titulo',
              icon: 'iconalert',
          },
          allowOutsideClick: false,
          });
        }
      });
}

        window.PDFGeneratorshow = PDFGeneratorshow;