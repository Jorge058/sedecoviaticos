import { allData } from "../../../db/GetAllOficios";
console.log (allData)


function loadCookies() {
    // Retrieving the string
  let retString = localStorage.getItem("Campos")
  
  // Retrieved array
  let camposArray = JSON.parse(retString)
  console.log(camposArray)
  
  
  // Go to page n with nextPrev(n)
  nextPrev(camposArray[16])
  
  //LLENADO A MANO
    document.getElementById('idUnidadAdministrativa').value = camposArray[0];
    document.getElementById('numOficio').value = camposArray[1] ;
    document.getElementById('documentDate').value = camposArray[2];
    document.getElementById('inputCiudades').value = camposArray[8];
  
  /* USUARIO */
    document.getElementById('nombreUsuario').value = camposArray[3];
    document.getElementById('cargoUsuario').value = camposArray[4];
  
    document.getElementById('duracionDias').value = camposArray[5];        //Duracion dias
    document.getElementById('descripcionDetalles').value = camposArray[7];
    document.getElementById('fechaInicio').value = camposArray[9];
    document.getElementById('fechaFinal').value = camposArray[10];
  
  /*  Vehiculo  */
    document.getElementById('vehicleInput').value = camposArray[11];
    document.getElementById('marcaVehiculo').value = camposArray[12];
    document.getElementById('modeloAuto').value = camposArray[13];
    document.getElementById('modeloAnio').value = camposArray[14];
    document.getElementById('placasInput').value = camposArray[15];
  
  /* Dinero */
   // document.getElementById('alimentacionDinero').value;
   // document.getElementById('hotelDinero').value;
  
  
  
  }