import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
  collection,
  getDocs,
  addDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
  query,
  orderBy,
  limit,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoQ7GygkFJWl4uOHTQOYmcWQwFrwopMuo",
  authDomain: "viaticos-4cc2c.firebaseapp.com",
  projectId: "viaticos-4cc2c",
  storageBucket: "viaticos-4cc2c.appspot.com",
  messagingSenderId: "287524196206",
  appId: "1:287524196206:web:fb4eac753e073f72babb7f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const colRef = collection(db, "autos");

//*********************************************** */
// GET ALL
let autosArr = [];
let filteredBrands = [];

var fechaActual = new Date();
var dia = fechaActual.getDate();

let getCondition = sessionStorage.getItem("diaActual");

if (getCondition === undefined || getCondition != dia) {
  //

  getDocs(colRef)
    .then((snapshot) => {
      let marcaAuto = [];

      snapshot.docs.forEach((doc) => {
        autosArr.push({ ...doc.data(), id: doc.id });
        //console.log(doc.data().marca)
        //MARCA ARRAY
        marcaAuto.push(doc.data().marca);
      });

      //console.log(marcaAuto, typeof(marcaAuto))

      marcaAuto = [...new Set(marcaAuto)];
      addSelectMarca(marcaAuto);

      //Guardar en sessions
      let stringAutos = JSON.stringify(autosArr);
      sessionStorage.setItem("autosArr", stringAutos);

      let stringMarcas = JSON.stringify(marcaAuto);
      sessionStorage.setItem("marcaAuto", stringMarcas);

      sessionStorage.setItem("diaActual", dia);
      // console.log(autosArr)
      // console.log(marcaAuto)
    })

    .catch((err) => {
      console.log(err.message);
    });
}

// Si ya hizo get hacia los datos el dia de hoy jala esta condicion desde la session
else {
  let arrayAutos = sessionStorage.getItem("autosArr");
  autosArr = JSON.parse(arrayAutos);
  console.log(autosArr);

  let marcasAuto = sessionStorage.getItem("marcaAuto");
  //console.log(marcasAuto, typeof(marcasAuto))
  let jsonMarcas = JSON.parse(marcasAuto);
  console.log(jsonMarcas);

  addSelectMarca(jsonMarcas);
}

//sessionStorage.setItem("diaActual", dia);

export { app, db, collection, getDocs, Timestamp, addDoc };
export { query, orderBy, limit, where, onSnapshot };

/**************************************** */

// ADD MARCA TO SELECT
function addSelectMarca(arr) {
  var marcaSelect = document.getElementById("marcaVehiculo");

  arr.forEach((marcaName) => {
    var option = document.createElement("option");
    option.text = marcaName;
    marcaSelect.add(option, marcaSelect[1]);
  });
}

//ADD TIPO AUTO DEPENDE DE LA MARCA - FILTER
// ADD MARCA TO SELECT
addSelectTipo(document.getElementById("marcaVehiculo"));

function addSelectTipo(marca) {
  marca.addEventListener("change", function (e) {
    console.log("onchangeeeed");
    let select = document.getElementById("marcaVehiculo");
    let value = select.options[select.selectedIndex].value;

    //FILTER BY BRAND
    filteredBrands = autosArr.filter((auto) => auto.marca == value);
    console.log(filteredBrands);
    // ADD OPTIONS TO SELECT
    var tipoSelect = document.getElementById("submodeloVehiculo");
    tipoSelect.innerHTML = "";
    filteredBrands.forEach((marcaName) => {
      var option = document.createElement("option");
      //option.text = JSON.stringify(marcaName);
      option.text =
        "Marca: " +
        marcaName.marca +
        " -Modelo:" +
        marcaName.modelo +
        " -Año:" +
        marcaName.anio +
        " -Placa:" +
        marcaName.placa;
      tipoSelect.add(option, marcaName.placa);
    });
  });
  // PUT MODELO PLACA ANIO
  document
    .getElementById("submodeloVehiculo")
    .addEventListener("click", function (e) {
      //Sacar los ultimos 7 digitos de la placa y volver a buscar en la variable filteredBrands
      var tipoSelect = document.getElementById("submodeloVehiculo");
      let placaSeleccionada = tipoSelect.value.slice(-7);
      console.log(tipoSelect.value.slice(-7));
      let filteredPlaca = filteredBrands.filter(
        (auto) => auto.placa == placaSeleccionada
      );

      console.log(filteredPlaca);

      //PUT INFO IN 3 INPUT MODEL PLACA AÑO
      var modeloInput = document.getElementById("modeloAuto");
      var anioInput = document.getElementById("modeloAnio");
      var placasInput = document.getElementById("placasInput");

      modeloInput.value = filteredPlaca[0].modelo;
      anioInput.value = filteredPlaca[0].anio;
      placasInput.value = filteredPlaca[0].placa;
    });
}
