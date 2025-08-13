import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
    deleteDoc,
    doc,
  } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
  import {} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
  
  //Import Firebase configuration
  import firebaseConfig from './firebase_config.js';


// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase Firestore inicializado correctamente.");

// Selecciona todos los botones de eliminar
document.addEventListener("click", function (e) {
  if (e.target.closest(".BtnBorrar")) {
    const documentId = e.target.closest(".BtnBorrar").id;
    deleteViaticos(documentId);
  }
});

// Corre sweet alert de confirmación
function deleteViaticos(id) {
  const documentId = id; // El ID del documento se obtiene directamente del botón
  const collectionName = "oficios";

  Swal.fire({
    title: `¿Borrar oficio número ${id}?`,
    text: "No se podrá deshacer esta acción.",
    icon: 'warning',
    showCancelButton: true,
    customClass: {
          popup: 'alerta',
          title: 'titulo',
          icon: 'iconalert',
          confirmButton: 'boton-confirmar',
          cancelButton: 'boton-cancelar'
        }
  }).then((result) => {
    if (result.isConfirmed) {
      deleteDocumentById(collectionName, documentId);
      setTimeout(() => {
          window.location.href = "../index.html";
        }, 4000);
    }
  });
}

// Función para eliminar el documento de Firestore
async function deleteDocumentById(collectionName, documentId) {
  try {
    const docRef = doc(db, collectionName, documentId);
    await deleteDoc(docRef);

    Swal.fire({
      text: `Documento con ID ${documentId} eliminado exitosamente de la colección ${collectionName}.`,
      icon: 'success',
      showConfirmButton: false,
      timer: 3000, 
      customClass: {
        popup: 'alerta',
        title: 'titulo',
        icon: 'iconalert',
      } 
    }
  );
  } catch (error) {
    console.error("Error al eliminar el documento:", error);
  }
}