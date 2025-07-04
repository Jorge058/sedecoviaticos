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
const deleteBtn = document.querySelectorAll(".BtnBorrar");

// Asigna el evento a cada botón
deleteBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const documentId = this.id; // Obtén el ID del documento desde el atributo id del botón
    deleteViaticos(documentId); // Llama a la función deleteViaticos con el ID
  });
});

// Corre sweet alert de confirmación
function deleteViaticos(id) {
  const documentId = id; // El ID del documento se obtiene directamente del botón
  console.log("ID del documento a eliminar:", documentId);
  const collectionName = "oficios";

  Swal.fire({
    title: '¿Estás seguro?',
    text: "No se podrá deshacer esta acción.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteDocumentById(collectionName, documentId);
    }
  });
}

// Función para eliminar el documento de Firestore
async function deleteDocumentById(collectionName, documentId) {
  try {
    const docRef = doc(db, collectionName, documentId);
    await deleteDoc(docRef);
    console.log(`Documento con ID ${documentId} eliminado exitosamente de la colección ${collectionName}.`);

    Swal.fire(
      `Documento con ID ${documentId} eliminado exitosamente de la colección ${collectionName}.`,
      'success'
    );
  } catch (error) {
    console.error("Error al eliminar el documento:", error);
  }
}