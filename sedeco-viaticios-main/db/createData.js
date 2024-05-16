import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { getDocs, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

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

document.querySelector('#generadorPDF2').addEventListener('click', function () {

  let unidadResponsable = document.getElementById('idUnidadAdministrativa').value;
  let numeroOficio = document.getElementById('numOficio').value;
  let fechaDocumento = document.getElementById('documentDate').value;
  let nombreUr = document.getElementById('nombrecargoUr').value;
  let cargoUr = document.getElementById('cargoUr').value;
  let lugarComision1 = document.getElementById('ShowCiudad1').textContent;
  let lugarComision2 = document.getElementById('ShowCiudad2').textContent || '';
  let ShowAlimentacion1 = document.getElementById('ShowAlimentacion1').value;
  let ShowAlimentacion2 = document.getElementById('ShowAlimentacion2').value;
  let ShowHospedaje1 = document.getElementById('ShowHospedaje1').value;
  let ShowHospedaje2 = document.getElementById('ShowHospedaje2').value;
  let resultado5 = document.getElementById("ShowTotal3").textContent

  let nombreUsuario = document.getElementById('nombreUsuario').value;
  let cargoUsuario = document.getElementById('cargoUsuario').value;

  let descripcionDetalles = document.getElementById('descripcionDetalles').value;
  let fechaFinal = document.getElementById('fechaFinal').value;
  
  let tipoVehiculo = document.getElementById('vehicleInput').value;
  let marcaVehiculo = document.getElementById('marcaVehiculo').value;
  let modeloVehiculo = document.getElementById('modeloAuto').value;
  let modeloAnioVehiculo = document.getElementById('modeloAnio').value;
  let placasVehiculo = document.getElementById('placasInput').value;

  let combustibleDinero = document.getElementById('ShowComb1').value;
  let peajesDinero = document.getElementById('ShowPeajes1').value;
  let pasajesDinero = document.getElementById('ShowPasajes1').value;

  let combustibleDinero2 = document.getElementById('ShowComb2').value;
  let peajesDinero2 = document.getElementById('ShowPeajes2').value;
  let pasajesDinero2 = document.getElementById('ShowPasajes2').value;

  let aldev = document.getElementById('aldev').value;
  let hosdev = document.getElementById('hdev').value;
  let peadev = document.getElementById('pedev').value;
  let comdev = document.getElementById('comdev').value;
  let pasdev = document.getElementById('padev').value;
  let otrosdev = document.getElementById('otrodev').value;
  let sumdev = document.getElementById('sumadev').textContent;

  const data = {
    auto_año: modeloAnioVehiculo,
    auto_marca: marcaVehiculo,
    auto_modelo: modeloVehiculo,
    auto_placa: placasVehiculo,
    auto_tipo: tipoVehiculo,
    devengado_alimentacion: aldev,
    devengado_combustible: comdev ,
    devengado_hospedaje: hosdev,
    devengado_otros: otrosdev,
    devengado_pasajes: pasdev,
    devengado_peajes: peadev,
    devengado_total: sumdev,
    oficio_fecha: fechaDocumento,
    oficio_fecha_final: fechaFinal,
    oficio_fecha_final_2: "",
    oficio_fecha_inicial: "" ,
    oficio_fecha_inicial_2: "" ,
    oficio_lugar_comision: lugarComision1,
    oficio_lugar_comision_2: lugarComision2,
    oficio_numero: numeroOficio,
    persona_area: 'financieros',
    persona_cargo: cargoUsuario,
    persona_descripcion_actividades: descripcionDetalles,
    persona_nombre: nombreUsuario,
    persona_unidadresponsable: unidadResponsable,
    recibo_alimentacion: ShowAlimentacion1,
    recibo_alimentacion_2: ShowAlimentacion2,
    recibo_combustible: combustibleDinero,
    recibo_combustible_2: combustibleDinero2,
    recibo_hospedaje: ShowHospedaje1,
    recibo_hospedaje_2: ShowHospedaje2,
    recibo_pasajes: pasajesDinero,
    recibo_pasajes_2: pasajesDinero2,
    recibo_peajes: peajesDinero,
    recibo_peajes_2: peajesDinero2,
    recibo_total: resultado5,
    recibo_total_2: "",
    titular_cargo: cargoUr ,
    titular_nombre: nombreUr
  }
  addDocumentAsync(data,numeroOficio);
})

async function addDocumentAsync(data,numeroOficio) {
    try {
      const docRef = await setDoc(doc(db, "oficios", "Oficio_"+`${numeroOficio}`), data);
      console.log('Exito');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
