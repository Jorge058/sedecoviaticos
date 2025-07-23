import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
  getDoc,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

//Import Firebase configuration
import firebaseConfig from './firebase_config.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.querySelector("#saveProgressLeave").addEventListener("click", function () {
  let unidadResponsable = document.getElementById(
    "idUnidadAdministrativa"
  ).value;
  let nombreUr = document.getElementById("nombrecargoUr").value;
  let cargoUr = document.getElementById("cargoUr").value;
  let numeroOficio = document.getElementById("numOficio").value;
  let fechaDocumento = document.getElementById("documentDate").value;

  let nombreUsuario = document.getElementById("nombreUsuario").value;
  let cargoUsuario = document.getElementById("cargoUsuario").value;
  let descripcionDetalles = document.getElementById(
    "descripcionDetalles"
  ).value;
  let objetivosComision = document.getElementById("objetivosComision").value;

  let fechaInicio1 = document.getElementById("fechaInicio").value;
  let fechaFinal = document.getElementById("fechaFinal").value;
  let duracionDias = document.getElementById("duracionDias").value;
  let inputCiudades = document.getElementById("inputCiudades").value;
  let lugarComision1 = document.getElementById("ShowCiudad1").textContent;
  let lugarComision2 = document.getElementById("ShowCiudad2").textContent || "";
  let fechaComision1 = document.getElementById("ShowFecha1").textContent || "";
  let fechaComision2 = document.getElementById("ShowFecha2").textContent || "";

  let ShowAlimentacion1 = document.getElementById("ShowAlimentacion1").value;
  let ShowAlimentacion2 = document.getElementById("ShowAlimentacion2").value;
  let alimentosT = document.getElementById("alimentosT").textContent;
  let ShowHospedaje1 = document.getElementById("ShowHospedaje1").value;
  let ShowHospedaje2 = document.getElementById("ShowHospedaje2").value;
  let hospedajeT = document.getElementById("hospedajeT").textContent;
  let showTotal1 = document.getElementById("ShowTotal1").textContent;
  let showTotal2 = document.getElementById("ShowTotal2").textContent;
  let resultado5 = document.getElementById("ShowTotal3").textContent;

  let tipoVehiculo = document.getElementById("vehicleInput").value;
  let marcaVehiculo = document.getElementById("marcaVehiculo").value;
  let idVehiculo = document.getElementById("idVehiculo").value;
  let modeloVehiculo = document.getElementById("modeloAuto").value;
  let modeloAnioVehiculo = document.getElementById("modeloAnio").value;
  let placasVehiculo = document.getElementById("placasInput").value;

  let combustibleDinero = document.getElementById("ShowComb1").value;
  let peajesDinero = document.getElementById("ShowPeajes1").value;
  let pasajesDinero = document.getElementById("ShowPasajes1").value;
  let totalDinero = document.getElementById("totalDinero").textContent;
  let combustibleDinero2 = document.getElementById("ShowComb2").value;
  let peajesDinero2 = document.getElementById("ShowPeajes2").value;
  let pasajesDinero2 = document.getElementById("ShowPasajes2").value;
  let totalDinero2 = document.getElementById("totalDinero2").textContent;
  let tot3 = document.getElementById("tot3").textContent;

  let fechaRSalida = document.getElementById("fechaRSalida").value;
  let fechaRRetorno = document.getElementById("fechaRRetorno").value;
  let duracion_real = document.getElementById('duracion_Comprobacion').value;
  let fecha_Dcomprobacion = document.getElementById("fecha_Dcomprobacion").value;

  let alS = document.getElementById("alS").textContent;
  let hS = document.getElementById("hS").textContent;
  let peS = document.getElementById("peS").textContent;
  let comS = document.getElementById("comS").textContent;
  let paS = document.getElementById("paS").textContent;
  let sumaS = document.getElementById("sumaS").textContent;
  let aldev = document.getElementById("aldev").value;
  let hosdev = document.getElementById("hdev").value;
  let peadev = document.getElementById("pedev").value;
  let comdev = document.getElementById("comdev").value;
  let pasdev = document.getElementById("padev").value;
  let otrosdev = document.getElementById("otrodev").value;
  let sumdev = document.getElementById("sumadev").textContent;
  let aldif = document.getElementById("aldif").textContent;
  let hdif = document.getElementById("hdif").textContent;
  let pedif = document.getElementById("pedif").textContent;
  let comdif = document.getElementById("comdif").textContent;
  let padif = document.getElementById("padif").textContent;
  let otrodif = document.getElementById("otrodif").textContent;
  let sumaTotal = document.getElementById("sumaTotal").textContent;

  let liquidacionC = document.getElementById("liquidacionC").value;
  let gastosRurales = document.getElementById('gastosRurales').value;
  let descripcionInfo = document.getElementById("DescripcionI").value;
  let DepartamentoOficio = document.getElementById("DepartamentoOficio").value;

  const data = {
    persona_unidadresponsable: unidadResponsable,
    titular_nombre: nombreUr,
    titular_cargo: cargoUr,
    oficio_numero: numeroOficio,
    oficio_fecha: fechaDocumento,
    persona_nombre: nombreUsuario,
    persona_cargo: cargoUsuario,
    persona_descripcion_actividades: descripcionDetalles,
    persona_objetivos: objetivosComision,
    oficio_fecha_inicial: fechaInicio1,
    oficio_fecha_final: fechaFinal,
    oficio_duracion_dias: duracionDias,
    oficio_ciudad: inputCiudades,
    oficio_lugar_comision: lugarComision1,
    oficio_lugar_comision_2: lugarComision2,
    oficio_showfecha1: fechaComision1,
    oficio_showfecha2:fechaComision2,
    recibo_alimentacion: parseInt(ShowAlimentacion1),
    recibo_alimentacion_2: ShowAlimentacion2,
    recibo_alimentacion_total:alimentosT,
    recibo_hospedaje: ShowHospedaje1,
    recibo_hospedaje_2: ShowHospedaje2,
    recibo_hospedaje_total:hospedajeT,
    recibo_total1:showTotal1,
    recibo_total2:showTotal2,
    recibo_total: resultado5,
    auto_tipo: tipoVehiculo,
    auto_id: idVehiculo,
    auto_marca: marcaVehiculo,
    auto_modelo: modeloVehiculo,
    auto_año: modeloAnioVehiculo,
    auto_placa: placasVehiculo,
    recibo_combustible: combustibleDinero,
    recibo_combustible_2: combustibleDinero2,
    recibo_peajes: peajesDinero,
    recibo_peajes_2: peajesDinero2,
    recibo_pasajes: pasajesDinero,
    recibo_pasajes_2: pasajesDinero2,
    recibo_totalDinero:totalDinero,
    recibo_totalDinero2:totalDinero2,
    recibo_tot3:tot3,
    fechaReal_salida: fechaRSalida,
    fechaReal_retorno: fechaRRetorno,
    comprobacion_duracion_real:duracion_real,
    comprobacion_fecha: fecha_Dcomprobacion,
    comprobacion_alS: alS,
    comprobacion_hS: hS,
    comprobacion_peS: peS,
    comprobacion_comS: comS,
    comprobacion_paS: paS,
    comprobacion_sumaS: sumaS,
    devengado_alimentacion: aldev,
    devengado_combustible: comdev,
    devengado_hospedaje: hosdev,
    devengado_otros: otrosdev,
    devengado_pasajes: pasdev,
    devengado_peajes: peadev,
    devengado_total: sumdev,
    comprobacion_aldif:aldif,
    comprobacion_hdif:hdif,
    comprobacion_pedif:pedif,
    comprobacion_comdif:comdif,
    comprobacion_padif:padif,
    comprobacion_otrodif:otrodif,
    comprobacion_sumaTotal:sumaTotal,
    liquidacion: liquidacionC,
    gastosR:gastosRurales,
    descripcion_informativa: descripcionInfo,
    persona_area: DepartamentoOficio,
  };
  addDocumentAsync(data, numeroOficio);
});

document.querySelector("#saveLeave").addEventListener("click", function () {
  let unidadResponsable = document.getElementById(
    "idUnidadAdministrativa"
  ).value;
  let nombreUr = document.getElementById("nombrecargoUr").value;
  let cargoUr = document.getElementById("cargoUr").value;
  let numeroOficio = document.getElementById("numOficio").value;
  let fechaDocumento = document.getElementById("documentDate").value;

  let nombreUsuario = document.getElementById("nombreUsuario").value;
  let cargoUsuario = document.getElementById("cargoUsuario").value;
  let descripcionDetalles = document.getElementById(
    "descripcionDetalles"
  ).value;
  let objetivosComision = document.getElementById("objetivosComision").value;

  let fechaInicio1 = document.getElementById("fechaInicio").value;
  let fechaFinal = document.getElementById("fechaFinal").value;
  let duracionDias = document.getElementById("duracionDias").value;
  let inputCiudades = document.getElementById("inputCiudades").value;
  let lugarComision1 = document.getElementById("ShowCiudad1").textContent;
  let lugarComision2 = document.getElementById("ShowCiudad2").textContent || "";
  let fechaComision1 = document.getElementById("ShowFecha1").textContent || "";
  let fechaComision2 = document.getElementById("ShowFecha2").textContent || "";

  let ShowAlimentacion1 = document.getElementById("ShowAlimentacion1").value;
  let ShowAlimentacion2 = document.getElementById("ShowAlimentacion2").value;
  let alimentosT = document.getElementById("alimentosT").textContent;
  let ShowHospedaje1 = document.getElementById("ShowHospedaje1").value;
  let ShowHospedaje2 = document.getElementById("ShowHospedaje2").value;
  let hospedajeT = document.getElementById("hospedajeT").textContent;
  let showTotal1 = document.getElementById("ShowTotal1").textContent;
  let showTotal2 = document.getElementById("ShowTotal2").textContent;
  let resultado5 = document.getElementById("ShowTotal3").textContent;

  let tipoVehiculo = document.getElementById("vehicleInput").value;
  let marcaVehiculo = document.getElementById("marcaVehiculo").value;
  let modeloVehiculo = document.getElementById("modeloAuto").value;
  let modeloAnioVehiculo = document.getElementById("modeloAnio").value;
  let placasVehiculo = document.getElementById("placasInput").value;

  let combustibleDinero = document.getElementById("ShowComb1").value;
  let peajesDinero = document.getElementById("ShowPeajes1").value;
  let pasajesDinero = document.getElementById("ShowPasajes1").value;
  let totalDinero = document.getElementById("totalDinero").textContent;
  let combustibleDinero2 = document.getElementById("ShowComb2").value;
  let peajesDinero2 = document.getElementById("ShowPeajes2").value;
  let pasajesDinero2 = document.getElementById("ShowPasajes2").value;
  let totalDinero2 = document.getElementById("totalDinero2").textContent;
  let tot3 = document.getElementById("tot3").textContent;

  let fechaRSalida = document.getElementById("fechaRSalida").value;
  let fechaRRetorno = document.getElementById("fechaRRetorno").value;
  let duracion_real = document.getElementById('duracion_Comprobacion').value;
  let fecha_Dcomprobacion = document.getElementById("fecha_Dcomprobacion").value;

  let alS = document.getElementById("alS").textContent;
  let hS = document.getElementById("hS").textContent;
  let peS = document.getElementById("peS").textContent;
  let comS = document.getElementById("comS").textContent;
  let paS = document.getElementById("paS").textContent;
  let sumaS = document.getElementById("sumaS").textContent;
  let aldev = document.getElementById("aldev").value;
  let hosdev = document.getElementById("hdev").value;
  let peadev = document.getElementById("pedev").value;
  let comdev = document.getElementById("comdev").value;
  let pasdev = document.getElementById("padev").value;
  let otrosdev = document.getElementById("otrodev").value;
  let sumdev = document.getElementById("sumadev").textContent;
  let aldif = document.getElementById("aldif").textContent;
  let hdif = document.getElementById("hdif").textContent;
  let pedif = document.getElementById("pedif").textContent;
  let comdif = document.getElementById("comdif").textContent;
  let padif = document.getElementById("padif").textContent;
  let otrodif = document.getElementById("otrodif").textContent;
  let sumaTotal = document.getElementById("sumaTotal").textContent;

  let liquidacionC = document.getElementById("liquidacionC").value;
  let gastosRurales = document.getElementById('gastosRurales').value;
  let descripcionInfo = document.getElementById("DescripcionI").value;
  let DepartamentoOficio = document.getElementById("DepartamentoOficio").value;

  const data = {
    persona_unidadresponsable: unidadResponsable,
    titular_nombre: nombreUr,
    titular_cargo: cargoUr,
    oficio_numero: numeroOficio,
    oficio_fecha: fechaDocumento,
    persona_nombre: nombreUsuario,
    persona_cargo: cargoUsuario,
    persona_descripcion_actividades: descripcionDetalles,
    persona_objetivos: objetivosComision,
    oficio_fecha_inicial: fechaInicio1,
    oficio_fecha_final: fechaFinal,
    oficio_duracion_dias: duracionDias,
    oficio_ciudad: inputCiudades,
    oficio_lugar_comision: lugarComision1,
    oficio_lugar_comision_2: lugarComision2,
    oficio_showfecha1: fechaComision1,
    oficio_showfecha2:fechaComision2,
    recibo_alimentacion: parseInt(ShowAlimentacion1),
    recibo_alimentacion_2: ShowAlimentacion2,
    recibo_alimentacion_total:alimentosT,
    recibo_hospedaje: ShowHospedaje1,
    recibo_hospedaje_2: ShowHospedaje2,
    recibo_hospedaje_total:hospedajeT,
    recibo_total1:showTotal1,
    recibo_total2:showTotal2,
    recibo_total: resultado5,
    auto_tipo: tipoVehiculo,
    auto_marca: marcaVehiculo,
    auto_modelo: modeloVehiculo,
    auto_año: modeloAnioVehiculo,
    auto_placa: placasVehiculo,
    recibo_combustible: combustibleDinero,
    recibo_combustible_2: combustibleDinero2,
    recibo_peajes: peajesDinero,
    recibo_peajes_2: peajesDinero2,
    recibo_pasajes: pasajesDinero,
    recibo_pasajes_2: pasajesDinero2,
    recibo_totalDinero:totalDinero,
    recibo_totalDinero2:totalDinero2,
    recibo_tot3:tot3,
    fechaReal_salida: fechaRSalida,
    fechaReal_retorno: fechaRRetorno,
    comprobacion_duracion_real:duracion_real,
    comprobacion_fecha: fecha_Dcomprobacion,
    comprobacion_alS: alS,
    comprobacion_hS: hS,
    comprobacion_peS: peS,
    comprobacion_comS: comS,
    comprobacion_paS: paS,
    comprobacion_sumaS: sumaS,
    devengado_alimentacion: aldev,
    devengado_combustible: comdev,
    devengado_hospedaje: hosdev,
    devengado_otros: otrosdev,
    devengado_pasajes: pasdev,
    devengado_peajes: peadev,
    devengado_total: sumdev,
    comprobacion_aldif:aldif,
    comprobacion_hdif:hdif,
    comprobacion_pedif:pedif,
    comprobacion_comdif:comdif,
    comprobacion_padif:padif,
    comprobacion_otrodif:otrodif,
    comprobacion_sumaTotal:sumaTotal,

    liquidacion: liquidacionC,
    gastosR:gastosRurales,
    descripcion_informativa: descripcionInfo,
    persona_area: DepartamentoOficio,
  };

  addDocumentAsync(data, numeroOficio);
});

async function addDocumentAsync(data, numeroOficio) {
  try {
    const docSnap = await getDoc(
      doc(db, "oficios", "Oficio_" + `${numeroOficio}`)
    );
    if (docSnap.exists()) {
      Swal.fire({
        title: 'Oficio ya existe',
        html: `El oficio con número <b>${docSnap.id}</b> ya existe, creado por <b>${docSnap.data().persona_nombre}</b>. ¿Desea editar y guardar los cambios?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, editar',
        cancelButtonText: 'Cancelar',
        customClass: {
          popup: 'alerta',
          title: 'titulo',
          icon: 'iconalert',
          confirmButton: 'boton-confirmar',
          cancelButton: 'boton-cancelar'
        },
        allowOutsideClick: false,
      }).then(async (result) => {
        if (result.isConfirmed) {
          // lógica para editar
        await setDoc(doc(db, "oficios", "Oficio_" + `${numeroOficio}`), data);
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

        setTimeout(() => {
          window.location.href = "../index.html";
        }, 4000);

        }else{
          Swal.fire({
          text: 'Oficio no guardado',
          icon: 'warning',
          showConfirmButton: false,
          timer: 2000, 
          customClass: {
            popup: 'alerta',
            title: 'titulo',
            icon: 'iconalert',
        },
        allowOutsideClick: false,
        }).then(()=> {
          document.body.style.overflowX = 'unset';
          document.body.style.paddingRight = 'initial';
        });
        }
      });
    } else {
      await setDoc(doc(db, "oficios", "Oficio_" + `${numeroOficio}`), data);

      Swal.fire({
          text: 'Nuevo oficio guardado',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000, 
          customClass: {
            popup: 'alertaDone',
            title: 'tituloDone',
            icon: 'iconalertDone',
        },
      allowOutsideClick:false
        });

        setTimeout(() => {
          window.location.href = "../..//index.html";
        }, 3000);

    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
