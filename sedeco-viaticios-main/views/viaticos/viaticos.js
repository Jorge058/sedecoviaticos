const ciudadesMich = [
  "Acuitzio",
  "Aguililla",
  "Álvaro Obregón",
  "Angamacutiro",
  "Angangueo",
  "Apatzingán",
  "Aporo",
  "Aquila",
  "Ario",
  "Arteaga",
  "Briseñas",
  "Buenavista",
  "Carácuaro",
  "Coahuayana",
  "Coalcomán de Vázquez Pallares",
  "Coeneo",
  "Contepec",
  "Copándaro",
  "Cotija",
  "Cuitzeo",
  "Charapan",
  "Charo",
  "Chavinda",
  "Cherán",
  "Chilchota",
  "Chinicuila",
  "Chucándiro",
  "Churintzio",
  "Churumuco",
  "Ecuandureo",
  "Epitacio Huerta",
  "Erongarícuaro",
  "Gabriel Zamora",
  "Hidalgo",
  "La Huacana",
  "Huandacareo",
  "Huaniqueo",
  "Huetamo",
  "Huiramba",
  "Indaparapeo",
  "Irimbo",
  "Ixtlán",
  "Jacona",
  "Jiménez",
  "Jiquilpan",
  "Juárez",
  "Jungapeo",
  "Lagunillas",
  "Madero",
  "Maravatío",
  "Marcos Castellanos",
  "Lázaro Cárdenas",
  "Morelia",
  "Morelos",
  "Múgica",
  "Nahuatzen",
  "Nocupétaro",
  "Nuevo Parangaricutiro",
  "Nuevo Urecho",
  "Numarán",
  "Ocampo",
  "Pajacuarán",
  "Panindícuaro",
  "Parácuaro",
  "Paracho",
  "Pátzcuaro",
  "Penjamillo",
  "Peribán",
  "La Piedad",
  "Purépero",
  "Puruándiro",
  "Queréndaro",
  "Quiroga",
  "Cojumatlán de Régules",
  "Los Reyes",
  "Sahuayo",
  "San Lucas",
  "Santa Ana Maya",
  "Salvador Escalante",
  "Senguio",
  "Susupuato",
  "Tacámbaro",
  "Tancítaro",
  "Tangamandapio",
  "Tangancícuaro",
  "Tanhuato",
  "Taretan",
  "Tarímbaro",
  "Tepalcatepec",
  "Tingambato",
  "Tingüindín",
  "Tiquicheo de Nicolás Romero",
  "Tlalpujahua",
  "Tlazazalca",
  "Tocumbo",
  "Tumbiscatío",
  "Turicato",
  "Tuxpan",
  "Tuzantla",
  "Tzintzuntzan",
  "Tzitzio",
  "Uruapan",
  "Venustiano Carranza",
  "Villamar",
  "Vista Hermosa",
  "Yurécuaro",
  "Zacapu",
  "Zamora",
  "Zináparo",
  "Zinapécuaro",
  "Ziracuaretiro",
  "Zitácuaro",
  "José Sixto Verduzco"
];

//******************************************************************* */

//FORM controller
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";

    //LocalStorage BUTTON
    /*
    if (localStorage.getItem('Campos') !== null) {
      document.getElementById("loadCookiesBtn").style.display = "inline";
    } else {
      document.getElementById("loadCookiesBtn").style.display = "none";
    }
    */

    //Button "Crear nuevo" shows
    document.getElementById("loadDataBtn").style.display = "inline";
 
  } else {
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("loadCookiesBtn").style.display = "none"; 
    document.getElementById("loadDataBtn").style.display = "none";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Terminar";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("saveLeave").style.display = "";
  } else {
    document.getElementById("nextBtn").innerHTML = "Siguiente";
    document.getElementById("nextBtn").style.display = "";
    document.getElementById("saveLeave").style.display = "none";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  //if (!validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    //document.getElementById("regForm").submit();
    document.getElementById("regForm").reload();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }

  //textarea
  textAreaCheck = x[currentTab].getElementsByTagName("textarea");
  for (i = 0; i < textAreaCheck.length; i++) {
    // If a field is empty...
    if (textAreaCheck[i].value == "") {
      textAreaCheck[i].className += " invalid";
      valid = false;
    }
  }

  /*
  selectCheck = x[currentTab].getElementsByTagName("select");
  for (i = 0; i < selectCheck.length; i++) {
    // If a field is empty...
    if (selectCheck[i].value == "") {
      selectCheck[i].className += " invalid";
      valid = false;
    }
  }
*/

  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

//*************************************************************************** */
//Autocomplete

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")  == val.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ) {
        
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value + ", Michoacán";
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("inputCiudades"), ciudadesMich);

//*************************************** */

/*   HIDE SELECTS ON OFICIAL VEHICLE     */
hideSelectsVehicle(document.getElementById("vehicleInput"));

function hideSelectsVehicle(selectValue) {

  selectValue.addEventListener("change", function(e) {

    let disableNode = document.querySelectorAll(".disableOption");
    console.log(disableNode)

    if (selectValue.options[selectValue.selectedIndex].value !== "Oficial"){
      for (let i = 0; i < disableNode.length; i++) {
        disableNode[i].disabled=true;
      }
    }
    else {
      for (let i = 0; i < disableNode.length; i++) {
        disableNode[i].disabled=false;
      }
    }
  })
}

/***************************************** */
// VALIDATE DATES - SUBSTRACT DAYS
checksMayDate(document.getElementById("fechaInicio"), document.getElementById("fechaFinal"));
function checksMayDate(inicioDate, finalDate) {
  
  finalDate.addEventListener("change", function(e) {
    console.log(inicioDate.value, finalDate.value)


    let date1 = new Date(inicioDate.value);
    let date2 = new Date(finalDate.value);
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    diffDays = diffDays +1;
    console.log(diffDays)
    document.getElementById('duracionDias').value = diffDays
  })
}

//BTN CARGAR COOKIES FORMULARIO
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
  document.getElementById('descripcionDetalles').value = camposArray[7];

/* USUARIO */
  document.getElementById('nombreUsuario').value = camposArray[3];
  document.getElementById('cargoUsuario').value = camposArray[4];

  document.getElementById('duracionDias').value = camposArray[5];        //Duracion dias
  document.getElementById('fechaInicio').value = camposArray[9];
  document.getElementById('fechaFinal').value = camposArray[10];

/*  Vehiculo  */
  document.getElementById('vehicleInput').value = camposArray[11];
  document.getElementById('marcaVehiculo').value = camposArray[12];
  document.getElementById('modeloAuto').value = camposArray[13];
  document.getElementById('modeloAnio').value = camposArray[14];
  document.getElementById('placasInput').value = camposArray[15];

}



/********************************************* */
/******************    VALUES FORM */

/* Comision */
let unidadResponsable = document.getElementById('idUnidadAdministrativa').value;
let numeroOficio = document.getElementById('numOficio').value;
let fechaDocumento = document.getElementById('documentDate').value;
let lugarComision = document.getElementById('inputCiudades').value;

/* USUARIO */
let nombreUsuario = document.getElementById('nombreUsuario').value;
let cargoUsuario = document.getElementById('cargoUsuario').value;

let duracionDias = document.getElementById('duracionDias').value;        //Duracion dias
let descripcionDetalles = document.getElementById('descripcionDetalles').value;
let fechaInicio = document.getElementById('fechaInicio').value;
let fechaFinal = document.getElementById('fechaFinal').value;

let fechaInicio1 = null;
let fechaFinal1 = null;
let fechaInicio2 = null;
let fechaFinal2 = null;

let lugarComision1 = null;
let lugarComision2 = null;

/*  Vehiculo  */
let tipoVehiculo = document.getElementById('vehicleInput').value;
let marcaVehiculo = document.getElementById('marcaVehiculo').value;
let submodeloVehiculo = document.getElementById('submodeloVehiculo').value;
let modeloAnioVehiculo = document.getElementById('modeloAnio').value;
let placasVehiculo = document.getElementById('placasInput').value;

/* Comrpobacion */
let estadoLiquidacion = document.getElementById('liquidacionC');

let fechaRSalida = document.getElementById('fechaRSalida').value;
let fechaRRetorno = document.getElementById('fechaRRetorno').value;
let duracionComprobacion = document.getElementById('duracion_Comprobacion').value;


// Variable para autosumas
/* let inputs1 = document.querySelectorAll('.suma1')
let inputs2 = document.querySelectorAll('.suma2') */

/* const comisionMenu = document.querySelector('.comisionMenu')
const btnComisionsi = document.querySelector('.btnComisionsi')
const btnComisionno = document.querySelector('.btnComisionno') */

//Sumas variables

/* //Evento para la suma
inputs1.forEach(input => {
  input.addEventListener("change", sumaAlimentos);
});

//FUNCTION TO GET THE TOTAL AMOUNT
function sumaAlimentos() {
  let contador=0
  inputs1.forEach(input => contador+= parseInt(input.value)
  )
  document.getElementById('totalDinero').value=contador;
}

//Evento para la suma dos
inputs2.forEach(input=>{
  input.addEventListener('change', sumaGastos);
})

function sumaGastos() {
  let contador = 0
  inputs2.forEach(input => contador+= parseInt(input.value))
  document.getElementById('totalDinero1').value = contador
} */

//Evento para despkegar menu o ocultarlo
/*
  btnComisionsi.addEventListener('click', ()=>{
    comisionMenu.style.display = "block";

    inputs2.forEach(inputs => {
      inputs.value = ""
    });
    document.getElementById('totalDinero1').value = "" 

  });
  //Evento para darle vaores en 0 al document 
  btnComisionno.addEventListener('click', ()=>{
    comisionMenu.style.display = "none";

    inputs2.forEach(inputs=>{
      inputs.value = 0
    })
    document.getElementById('totalDinero1').value = 0
  })

/************************************************** */
// Bloquear calendario picker 2 - no pueda seleccionar fechas antes de inicio
document.getElementById("fechaInicio").addEventListener("input", function(){
  let today = new Date().toISOString().split('T')[0];
  document.getElementById("fechaFinal").setAttribute('min',  document.getElementById("fechaInicio").value);
});

  //Button ADD
document.querySelector('#BtnAgregarComision').addEventListener('click', function () {
  let fechaInicio = document.getElementById('fechaInicio').value;
  let fechaFinal = document.getElementById('fechaFinal').value;
  let lugarComision = document.getElementById('inputCiudades').value;

  //Agregar y ver si el espacio 1 esta ocupado para agregar al espacio 2
  if (document.getElementById('ShowCiudad1').innerHTML === '' && document.getElementById('ShowFecha1').innerHTML === '') {
      document.getElementById('ShowCiudad1').innerHTML = lugarComision;
      document.getElementById('sC1').innerHTML = lugarComision;
    
      fechaInicio1 = new Date(fechaInicio);
      fechaFinal1 = new Date(fechaFinal);
      lugarComision1 = lugarComision;

      document.getElementById('duracionDias').value = calcularDiferencia();
      document.getElementById('fechaI1').value = fechaInicio1;
      document.getElementById('fechaF1').value = fechaFinal1;

    if (new Date(fechaInicio).toLocaleDateString('es-mx', {timeZone: 'UTC', month:"numeric"}) == new Date(fechaFinal).toLocaleDateString('es-mx', {timeZone: 'UTC', month:"numeric"}) ) {
  
      if (new Date(fechaInicio).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) == new Date(fechaFinal).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"})) {
        document.getElementById('ShowFecha1').innerHTML = 
        ""+ new Date(fechaInicio).toLocaleDateString('es-mx', {timeZone: 'UTC',month:"long", day:"numeric"})+" de "+
        new Date(fechaFinal).toLocaleDateString('es-mx', {timeZone: 'UTC',year:"numeric"});
        document.getElementById('sF1').innerHTML = document.getElementById('ShowFecha1').innerHTML
        return;
      }

      document.getElementById('ShowFecha1').innerHTML = 
      "Del "+ new Date(fechaInicio).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) +" al "
      + new Date(fechaFinal).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+
      new Date(fechaFinal).toLocaleDateString('es-mx', { year:"numeric"});
      document.getElementById('sF1').innerHTML = document.getElementById('ShowFecha1').innerHTML
      
    } else {
      document.getElementById('ShowFecha1').innerHTML = 
      "Del "+ new Date(fechaInicio).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" al "
      + new Date(fechaFinal).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+
        new Date(fechaFinal).toLocaleDateString('es-mx', { year:"numeric"});

      document.getElementById('sF1').innerHTML = document.getElementById('ShowFecha1').innerHTML
    }

} else if(document.getElementById('ShowCiudad1').innerHTML != '' && document.getElementById('ShowFecha1').innerHTML != ''){

  document.getElementById('ShowCiudad2').innerHTML = lugarComision;
  document.getElementById('sC2').innerHTML = lugarComision;

  document.getElementById('BtnAgregarComision').disabled = true;
  document.getElementById('BtnAgregarComision').style.backgroundColor = "gray"
  document.getElementById('BtnAgregarComision').style.cursor = "not-allowed"

  fechaInicio2 = new Date(fechaInicio);
  fechaFinal2 = new Date(fechaFinal);
  lugarComision2 = lugarComision;

  document.getElementById('duracionDias').value = calcularDiferencia();
  document.getElementById('fechaI2').value = fechaInicio2;
  document.getElementById('fechaF2').value = fechaFinal2;

    if (new Date(fechaInicio).toLocaleDateString('es-mx', {timeZone: 'UTC', month:"numeric"}) == new Date(fechaFinal).toLocaleDateString('es-mx', {timeZone: 'UTC', month:"numeric"}) ) {
        
      if (new Date(fechaInicio).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) == new Date(fechaFinal).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"})) {
        document.getElementById('ShowFecha2').innerHTML = 
        ""+ new Date(fechaInicio).toLocaleDateString('es-mx', {timeZone: 'UTC', month:"long", day:"numeric"})+" de "+
        new Date(fechaFinal).toLocaleDateString('es-mx', {timeZone: 'UTC',year:"numeric"})
        document.getElementById('sF2').innerHTML = document.getElementById('ShowFecha2').innerHTML;
        return;
      }

      document.getElementById('ShowFecha2').innerHTML = 
      "Del "+ new Date(fechaInicio).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) +" al "
      + new Date(fechaFinal).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+
      new Date(fechaFinal).toLocaleDateString('es-mx', { year:"numeric"})

      document.getElementById('sF2').innerHTML = document.getElementById('ShowFecha2').innerHTML;
    }

    else {
      document.getElementById('ShowFecha2').innerHTML = 
      "Del "+ new Date(fechaInicio).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" al "
      + new Date(fechaFinal).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+
        new Date(fechaFinal).toLocaleDateString('es-mx', { year:"numeric"});

      document.getElementById('sF2').innerHTML = document.getElementById('ShowFecha2').innerHTML;
      }
    }
})

/*Funcion para limpiar los espacios */
document.querySelector('#btnLimpiarC').addEventListener('click',function () {
  event.preventDefault()
  document.getElementById('ShowCiudad1').innerHTML = ''
  document.getElementById('ShowFecha1').innerHTML = ''
  document.getElementById('ShowCiudad2').innerHTML = ''
  document.getElementById('ShowFecha2').innerHTML = ''

  /*Comprobamos que los espacios esten en blanco para volver a activar el boton */
  if (document.getElementById('ShowCiudad1').innerHTML === '' ) {
    document.getElementById('BtnAgregarComision').disabled = false
    document.getElementById('BtnAgregarComision').style.backgroundColor = "#4A001F"
    document.getElementById('BtnAgregarComision').style.cursor = "pointer"
  } 
})

  //? Funcion para calcular la diferencia de dias entre la fecha de inicio y la fecha final
function calcularDiferencia() {
  let dias = null;

  // Si solo hay datos del primer renglón
  if (fechaInicio1 && fechaFinal1 && !fechaFinal2) {
    const diferenciaMs = fechaFinal1 - fechaInicio1;
    dias = (diferenciaMs / (1000 * 60 * 60 * 24))+1;
  }

  // Si también está lleno el segundo renglón
  else if (fechaInicio1 && fechaFinal2) {
    const diferenciaMs = fechaFinal2 - fechaInicio1;
    dias = (diferenciaMs / (1000 * 60 * 60 * 24))+1;
  }
  
  return duracionDias = dias;
}
var fecha2Comprobacion = document.getElementById('fechaRRetorno');
fecha2Comprobacion.addEventListener('input',calcularDiferenciaDias);

function calcularDiferenciaDias() {
  let dias = null;

    const diferenciaMs = fechaRRetorno - fechaRSalida;
    dias = (diferenciaMs / (1000 * 60 * 60 * 24))+2;
    document.getElementById('duracion_Comprobacion').value = dias;
}



// todo /////////////////////////////////////////////////////////////////////////////////////

/*Funcion para realizar la autosuma de todos los campos al hacer click */
//Primera fila
var campo1 = document.getElementById("ShowAlimentacion1");
var campo2 = document.getElementById("ShowHospedaje1");
var resultado = document.getElementById("ShowTotal1");
var campo3 = document.getElementById("ShowAlimentacion2");
var campo4 = document.getElementById("ShowHospedaje2");
var resultado2 = document.getElementById("ShowTotal2");
var resultado3 = document.getElementById("alimentosT");
var resultado4 = document.getElementById("hospedajeT");
var resultado5 = document.getElementById("ShowTotal3");

//primera fila
campo1.addEventListener("input", calcularSuma);
campo2.addEventListener("input", calcularSuma);

//Segunda fila
campo3.addEventListener("input", calcularSuma2);
campo4.addEventListener("input", calcularSuma2);

//Primer columna
campo1.addEventListener("input", calcularSuma3);
campo3.addEventListener("input", calcularSuma3);

//Segunda columna 
campo2.addEventListener("input", calcularSuma4);
campo4.addEventListener("input", calcularSuma4);

campo1.addEventListener('input',sumaToltal)
campo2.addEventListener('input',sumaToltal)
campo3.addEventListener('input',sumaToltal)
campo4.addEventListener('input',sumaToltal)



function calcularSuma() {
  var valor1 = parseFloat(campo1.value) || 0; // Si no se puede convertir a número, usar 0
  var valor2 = parseFloat(campo2.value) || 0;

  var suma = valor1 + valor2;

  resultado.textContent = suma;
  
}

function calcularSuma2() {
  var valor1 = parseFloat(campo3.value) || 0; // Si no se puede convertir a número, usar 0
  var valor2 = parseFloat(campo4.value) || 0;
  var suma = valor1 + valor2;
  resultado2.textContent = suma;
}


function calcularSuma3() {
  var valor1 = parseFloat(campo1.value) || 0; // Si no se puede convertir a número, usar 0
  var valor2 = parseFloat(campo3.value) || 0;
  var suma = valor1 + valor2;
  resultado3.textContent = suma;
  //enviamos la suma al tercer documento
  document.getElementById('alS').textContent = suma;
}

function calcularSuma4() {
  var valor1 = parseFloat(campo2.value) || 0; // Si no se puede convertir a número, usar 0
  var valor2 = parseFloat(campo4.value) || 0;
  var suma = valor1 + valor2;
  resultado4.textContent = suma;
  document.getElementById('hS').textContent = suma;

}

function sumaToltal(){
  let total1 = parseFloat(document.getElementById('ShowTotal1').textContent || 0)
  let total2 = parseFloat(document.getElementById('ShowTotal2').textContent || 0)

  let sumaTotal = total1+total2
  document.getElementById('ShowTotal3').textContent = sumaTotal
}

/* Dinero */

let com1 = document.getElementById("ShowComb1");
let peaj1  = document.getElementById("ShowPeajes1");
let pas1  = document.getElementById("ShowPasajes1");
let tot1  = document.getElementById("totalDinero");

let com2  = document.getElementById("ShowComb2");
let peaj2  = document.getElementById("ShowPeajes2");
let pas2  = document.getElementById("ShowPasajes2");
let tot2  = document.getElementById("totalDinero2");

com1.addEventListener("input", calSuma);
peaj1.addEventListener("input", calSuma);
pas1.addEventListener("input", calSuma);

function calSuma() {
  var valor1 = parseFloat(com1.value) || 0; // Si no se puede convertir a número, usar 0
  var valor2 = parseFloat(peaj1.value) || 0;
  var valor3 = parseFloat(pas1.value) || 0;

  var suma = valor1 + valor2 + valor3;

  tot1.textContent = suma;
}

com2.addEventListener("input", calSuma2);
peaj2.addEventListener("input", calSuma2);
pas2.addEventListener("input", calSuma2);

function calSuma2() {
  var valor1 = parseFloat(com2.value) || 0; // Si no se puede convertir a número, usar 0
  var valor2 = parseFloat(peaj2.value) || 0;
  var valor3 = parseFloat(pas2.value) || 0;

  var suma = valor1 + valor2 + valor3;

  tot2.textContent = suma;
}

//Calculamos suma de combustible para el tercer documento
com1.addEventListener("input", sumaComb);
com2.addEventListener("input", sumaComb);

function sumaComb() {
  var valor1 = parseFloat(com1.value) || 0; // Si no se puede convertir a número, usar 0
  var valor2 = parseFloat(com2.value) || 0;

  var suma = valor1 + valor2;
  document.getElementById('comS').textContent = suma
}

//Calculamos suma de peajes para el tercer documento
peaj1.addEventListener("input", sumaPeaj);
peaj2.addEventListener("input", sumaPeaj);

function sumaPeaj() {
  var valor1 = parseFloat(peaj1.value) || 0; // Si no se puede convertir a número, usar 0
  var valor2 = parseFloat(peaj2.value) || 0;

  var suma = valor1 + valor2;
  document.getElementById('peS').textContent = suma
}

//Calculamos suma de pasajes para el tercer documento
pas1.addEventListener("input", sumaPas);
pas2.addEventListener("input", sumaPas);

function sumaPas() {
  var valor1 = parseFloat(pas1.value) || 0; // Si no se puede convertir a número, usar 0
  var valor2 = parseFloat(pas2.value) || 0;

  var suma = valor1 + valor2;
  document.getElementById('paS').textContent = suma
}

com1.addEventListener("input", sumaTot);
peaj1.addEventListener("input", sumaTot);
pas1.addEventListener("input", sumaTot);
com2.addEventListener("input", sumaTot);
peaj2.addEventListener("input", sumaTot);
pas2.addEventListener("input", sumaTot);


function sumaTot(){
  var total1 = parseFloat(document.getElementById('totalDinero').textContent || 0)
  var total2 = parseFloat(document.getElementById('totalDinero2').textContent || 0)

  let sumaTotal = total1 + total2
  document.getElementById('tot3').textContent = sumaTotal
}

//SUMAS PARA EL DCUMENTO 3

//Anticipado
let alimentoC  = document.getElementById("alS");
let hospedajeC  = document.getElementById("hS");
let peajeC  = document.getElementById("peS");
let combustibleC  = document.getElementById("comS");
let pasajeC  = document.getElementById("paS");
let sumaC  = document.getElementById("sumaS");


//Devengado
let alimentoD  = document.getElementById("aldev");
let hospedajeD  = document.getElementById("hdev");
let peajeD = document.getElementById("pedev");
let combustibleD = document.getElementById("comdev");
let pasajeD = document.getElementById("padev");
let otrosD = document.getElementById("otrodev");
let sumaD = document.getElementById("sumadev");


//Suma para el Anticipo
alimentoD.addEventListener('input', sumaAnt)

function sumaAnt(){
  var total1 = parseFloat(alimentoC.textContent || 0)
  var total2 = parseFloat(hospedajeC.textContent || 0)
  var total3 = parseFloat(peajeC.textContent || 0)
  var total4 = parseFloat(combustibleC.textContent || 0)
  var total5 = parseFloat(pasajeC.textContent || 0)

  let suma = total1 + total2 + total3 + total4 + total5
  document.getElementById('sumaS').textContent = suma
}

//Suma para el devengado total 
alimentoD.addEventListener('input', sumaDev)
hospedajeD.addEventListener('input', sumaDev)
peajeD.addEventListener('input', sumaDev)
combustibleD.addEventListener('input', sumaDev)
pasajeD.addEventListener('input', sumaDev)
otrosD.addEventListener('input', sumaDev)

function sumaDev(){
  var total1 = parseFloat(alimentoD.value || 0)
  var total2 = parseFloat(hospedajeD.value || 0)
  var total3 = parseFloat(peajeD.value || 0)
  var total4 = parseFloat(combustibleD.value || 0)
  var total5 = parseFloat(pasajeD.value || 0)
  var total6 = parseFloat(otrosD.value || 0)

  let suma = total1 + total2 + total3 + total4 + total5+ total6
  document.getElementById('sumadev').textContent = suma
}

//Diferencia de alimentaion suma
alimentoD.addEventListener('input', alimDif)

function alimDif(){
  var total1 = parseFloat(alimentoC.textContent || 0)
  var total2 = parseFloat(alimentoD.value || 0)

  let suma = total2 - total1
  document.getElementById('aldif').textContent = suma
}

//Diferencia de hospedaje
hospedajeD.addEventListener('input', hospDif)

function hospDif(){
  var total1 = parseFloat(hospedajeC.textContent || 0)
  var total2 = parseFloat(hospedajeD.value || 0)

  let suma = total2 - total1
  document.getElementById('hdif').textContent = suma
}

//Diferencia de peaje
peajeD.addEventListener('input', peajeDif)

function peajeDif(){
  var total1 = parseFloat(peajeC.textContent || 0)
  var total2 = parseFloat(peajeD.value || 0)

  let suma = total2 - total1
  document.getElementById('pedif').textContent = suma
}

//Diferencia de combustible
combustibleD.addEventListener('input', comDif)

function comDif(){
  var total1 = parseFloat(combustibleC.textContent || 0)
  var total2 = parseFloat(combustibleD.value || 0)

  let suma = total2 - total1
  document.getElementById('comdif').textContent = suma
}

//Diferencia de pasajes
pasajeD.addEventListener('input', pasDif)

function pasDif(){
  var total1 = parseFloat(pasajeC.textContent || 0)
  var total2 = parseFloat(pasajeD.value || 0)

  let suma = total2 - total1
  document.getElementById('padif').textContent = suma
}

//Diferencia de otros
otrosD.addEventListener('input', otrosDif)

function otrosDif(){
  var total1= parseFloat(otrosD.value || 0)
  document.getElementById('otrodif').textContent = total1
}
//Diferencia de la suma
alimentoD.addEventListener('input', sumaDif)
hospedajeD.addEventListener('input', sumaDif)
peajeD.addEventListener('input', sumaDif)
combustibleD.addEventListener('input', sumaDif)
pasajeD.addEventListener('input', sumaDif)
otrosD.addEventListener('input', sumaDif)

function sumaDif(){
  var total1 = parseFloat(sumaC.textContent || 0)
  var total2 = parseFloat(sumaD.textContent || 0)

  let suma = total2 - total1
  document.getElementById('sumaTotal').textContent = suma
}

function resetFormulario () {
  let formToReset = document.getElementById('regForm');
  let loadDataBtn = document.getElementById('loadDataBtn')
  loadDataBtn.addEventListener('click', (e) => {
    e.preventDefault();
    formToReset.reset();
 });
  nextPrev(1);
}

  // Función para sincronizar select2 con select1 CARGO TITULAR
document.addEventListener('DOMContentLoaded', function() {
  const select1 = document.getElementById('nombrecargoUr');
  const select2 = document.getElementById('cargoUr');


  function syncSelects() {
    const selectedIndex = select1.selectedIndex;

    if (selectedIndex === 1) {
        select2.value = 'Delegada administrativa';
    } else if (selectedIndex === 2) {
        select2.value = 'Secretario de Desarrollo Económico';
    } else {
        //result.textContent = 'Please select an option.';
    }
}
  // Agregar evento 'change' a select1
  select1.addEventListener('change', syncSelects);
});

