import { allData } from "./GetAllOficios.js";

const collectionBtnLoad = document.querySelectorAll(".BtnCargarData");

collectionBtnLoad.forEach((button) => {
  button.addEventListener("click", loadViaticos);
});

function loadViaticos() {
  console.log(allData[this.id]);

  document.getElementById("idUnidadAdministrativa").value =
    allData[this.id].persona_unidadresponsable;
  document.getElementById("nombrecargoUr").value =
    allData[this.id].titular_nombre;
  document.getElementById("cargoUr").value = allData[this.id].titular_cargo;
  document.getElementById("numOficio").value = allData[this.id].oficio_numero;
  document.getElementById("documentDate").value = allData[this.id].oficio_fecha;
  document.getElementById("nombreUsuario").value =
    allData[this.id].persona_nombre;
  document.getElementById("cargoUsuario").value =
    allData[this.id].persona_cargo;
  document.getElementById("descripcionDetalles").value =
    allData[this.id].persona_descripcion_actividades;
  document.getElementById("objetivosComision").value =
    allData[this.id].persona_objetivos;
  document.getElementById("fechaInicio").value =
    allData[this.id].oficio_fecha_inicial;
  document.getElementById("fechaFinal").value =
    allData[this.id].oficio_fecha_final;
  document.getElementById("duracionDias").value = 
    allData[this.id].oficio_duracion_dias;
  document.getElementById("inputCiudades").value =
    allData[this.id].oficio_ciudad;
  document.getElementById("ShowCiudad1").textContent =
    allData[this.id].oficio_lugar_comision;
  document.getElementById("ShowFecha1").textContent =
    allData[this.id].oficio_showfecha1;
  document.getElementById("ShowCiudad2").textContent =
    allData[this.id].oficio_lugar_comision_2;
  document.getElementById("ShowFecha2").textContent =
    allData[this.id].oficio_showfecha2;
  document.getElementById("ShowAlimentacion1").value =
    allData[this.id].recibo_alimentacion;
  document.getElementById("ShowAlimentacion2").value =
    allData[this.id].recibo_alimentacion_2;
  document.getElementById("alimentosT").textContent =
    allData[this.id].recibo_alimentacion_total;
  document.getElementById("ShowHospedaje1").value =
    allData[this.id].recibo_hospedaje;
  document.getElementById("ShowHospedaje2").value =
    allData[this.id].recibo_hospedaje_2;
  document.getElementById("hospedajeT").textContent =
    allData[this.id].recibo_hospedaje_total;
  document.getElementById("ShowTotal1").textContent =
    allData[this.id].recibo_total1 ;
  document.getElementById("ShowTotal2").textContent =
    allData[this.id].recibo_total2;
  document.getElementById("ShowTotal3").textContent =
    allData[this.id].recibo_total;

  document.getElementById("vehicleInput").value = allData[this.id].auto_tipo;
  document.getElementById("marcaVehiculo").value = allData[this.id].auto_marca;
  document.getElementById("modeloAuto").value = allData[this.id].auto_modelo;
  document.getElementById("modeloAnio").value = allData[this.id].auto_año;
  document.getElementById("placasInput").value = allData[this.id].auto_placa;

  document.getElementById("sC1").textContent =
    allData[this.id].oficio_lugar_comision;
  document.getElementById("sF1").textContent =
    allData[this.id].oficio_showfecha1;
  document.getElementById("sC2").textContent =
    allData[this.id].oficio_lugar_comision_2;
  document.getElementById("sF2").textContent =
    allData[this.id].oficio_showfecha2;
  document.getElementById("ShowComb1").value =
    allData[this.id].recibo_combustible;
  document.getElementById("ShowPeajes1").value = 
  allData[this.id].recibo_peajes;
  document.getElementById("ShowPasajes1").value =
    allData[this.id].recibo_pasajes;
  document.getElementById("totalDinero").textContent =
    allData[this.id].recibo_totalDinero;
  document.getElementById("ShowComb2").value =
    allData[this.id].recibo_combustible_2;
  document.getElementById("ShowPeajes2").value =
    allData[this.id].recibo_peajes_2;
  document.getElementById("ShowPasajes2").value =
    allData[this.id].recibo_pasajes_2;
  document.getElementById("totalDinero2").textContent =
    allData[this.id].recibo_totalDinero2;
  document.getElementById("tot3").textContent =
    allData[this.id].recibo_tot3;

  document.getElementById("fechaRSalida").value = allData[this.id].fechaReal_salida;
  document.getElementById("fechaRRetorno").value = allData[this.id].fechaReal_retorno;
  document.getElementById("duracion_Comprobacion").value = allData[this.id].comprobacion_duracion_real;
  document.getElementById("alS").textContent =
    allData[this.id].comprobacion_alS;
  document.getElementById("hS").textContent =
    allData[this.id].comprobacion_hS;
  document.getElementById("peS").textContent =
    allData[this.id].comprobacion_peS;
  document.getElementById("comS").textContent =
    allData[this.id].comprobacion_comS;
  document.getElementById("paS").textContent =
    allData[this.id].comprobacion_paS;
  document.getElementById("sumaS").textContent =
    allData[this.id].comprobacion_sumaS;
  document.getElementById("aldev").value =
    allData[this.id].devengado_alimentacion;
  document.getElementById("hdev").value = allData[this.id].devengado_hospedaje;
  document.getElementById("pedev").value = allData[this.id].devengado_peajes;
  document.getElementById("comdev").value =
    allData[this.id].devengado_combustible;
  document.getElementById("padev").value = allData[this.id].devengado_pasajes;
  document.getElementById("otrodev").value = allData[this.id].devengado_otros;
  document.getElementById("sumadev").textContent =
    allData[this.id].devengado_total;
  document.getElementById("aldif").textContent =
    allData[this.id].comprobacion_aldif;
  document.getElementById("hdif").textContent =
    allData[this.id].comprobacion_hdif;
  document.getElementById("pedif").textContent =
    allData[this.id].comprobacion_pedif;
  document.getElementById("comdif").textContent =
    allData[this.id].comprobacion_comdif;
  document.getElementById("padif").textContent =
    allData[this.id].comprobacion_padif;
  document.getElementById("otrodif").textContent =
    allData[this.id].comprobacion_otrodif;
  document.getElementById("sumaTotal").textContent =
    allData[this.id].comprobacion_sumaTotal;  
  document.getElementById("fecha_Dcomprobacion").value =
    allData[this.id].comprobacion_fecha;
  document.getElementById("liquidacionC").value = allData[this.id].liquidacion;
  document.getElementById("gastosRurales").value = allData[this.id].gastosR;
  document.getElementById("DescripcionI").value = allData[this.id].descripcion_informativa;
  nextPrev(1);
  /*
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

*/
}
/*
  // Go to page n with nextPrev(n)
  nextPrev(camposArray[16])
  
  //LLENADO A MANO
    document.getElementById('idUnidadAdministrativa').value = camposArray[0];
    document.getElementById('numOficio').value = camposArray[1] ;
    document.getElementById('documentDate').value = camposArray[2];
    document.getElementById('inputCiudades').value = camposArray[8];

  document.getElementById('nombreUsuario').value = camposArray[3];
  document.getElementById('cargoUsuario').value = camposArray[4];

  document.getElementById('duracionDias').value = camposArray[5];        
  document.getElementById('descripcionDetalles').value = camposArray[7];
  document.getElementById('fechaInicio').value = camposArray[9];
  document.getElementById('fechaFinal').value = camposArray[10];


  document.getElementById('vehicleInput').value = camposArray[11];
  document.getElementById('marcaVehiculo').value = camposArray[12];
  document.getElementById('modeloAuto').value = camposArray[13];
  document.getElementById('modeloAnio').value = camposArray[14];
  document.getElementById('placasInput').value = camposArray[15];


 */
