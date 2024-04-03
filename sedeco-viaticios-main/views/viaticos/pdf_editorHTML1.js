

document.querySelector('#btn-GenerarPDF1').addEventListener('click', function () {
    
        /* Documento */
        let unidadResponsable = document.getElementById('idUnidadAdministrativa').value;
        let numeroOficio = document.getElementById('numOficio').value;
        let fechaDocumento = document.getElementById('documentDate').value;

    /* COMISION */
        let lugarComision1 = document.getElementById('ShowCiudad1').textContent;
        let lugarComision2 = document.getElementById('ShowCiudad2').textContent || '';


        let duracionDias = document.getElementById('duracionDias').value;        //Duracion dias
        let descripcionDetalles = document.getElementById('descripcionDetalles').value;

        let fechaInicio1 = document.getElementById('fechaInicio').value;
        let fechaFinal1 = document.getElementById('fechaFinal').value;

        let Fecha1 = document.getElementById('ShowFecha1').textContent;
        let Fecha2 = document.getElementById('ShowFecha2').textContent;

        //let fechaInicio2 = document.getElementById('fechaInicio').value || '' ;
        //let fechaFinal2 = document.getElementById('fechaFinal').value || '';
        
        /* USUARIO */
        let nombreUsuario = document.getElementById('nombreUsuario').value;
        let cargoUsuario = document.getElementById('cargoUsuario').value;
           
        
        /*  Vehiculo  */
        let tipoVehiculo = document.getElementById('vehicleInput').value;
        let marcaVehiculo = document.getElementById('marcaVehiculo').value;
        let modeloVehiculo = document.getElementById('modeloAuto').value;
        let modeloAnioVehiculo = document.getElementById('modeloAnio').value;
        let placasVehiculo = document.getElementById('placasInput').value;

        /* Dinero */


    
    // FORMATO 1 HTML
    
    // iframe.contentWindow.document.getElementById(" ")
    const iframe = document.getElementById("frame1");

    //******** EXTRAS ************/
    const d = new Date();
    let year = d.getFullYear();

    function mayusculas(palabra) {
        const mySentence = palabra;
        const words = mySentence.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
        return words.join(" ");
    }

    function numeroALetra(numero){
        const wordnumber= ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve","veinte"];
        return wordnumber[numero-1]
    }

    //SAVE IN LOCALSTORAGE  
// BOTON RELLENAR CAMPOS  GUARDAR CAmpos
let todosCampos = [
    unidadResponsable,
    numeroOficio,
    fechaDocumento,
    mayusculas(nombreUsuario),
    mayusculas(cargoUsuario),
    duracionDias,
    numeroALetra(duracionDias),
    descripcionDetalles,
    lugarComision1,
    fechaInicio1,
    fechaFinal1,
    tipoVehiculo,
    marcaVehiculo,
    modeloVehiculo,
    modeloAnioVehiculo,
    placasVehiculo
        ]
let string = JSON.stringify(todosCampos);
localStorage.setItem("Campos", string);
    //******************* *********/
//console.log(fechaDocumento)
//Rellenado de primer oficio 

iframe.contentWindow.document.getElementById("f1-UnidadResponsable").innerHTML = unidadResponsable;
iframe.contentWindow.document.getElementById("f1-NumeroOficio").innerHTML = numeroOficio + "/" + year;
iframe.contentWindow.document.getElementById("f1-FechaOficio").innerHTML = new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"})
iframe.contentWindow.document.getElementById("f1-NombreUsuario").innerHTML = mayusculas(nombreUsuario);
iframe.contentWindow.document.getElementById("f1-CargoUsuario").innerHTML = mayusculas(cargoUsuario);
iframe.contentWindow.document.getElementById("f1-DuracionDias").innerHTML = duracionDias;
iframe.contentWindow.document.getElementById("f1-DuracionDiasLetra").innerHTML = numeroALetra(duracionDias) +" días";
iframe.contentWindow.document.getElementById("f1-DescripcionDetalles").innerHTML = descripcionDetalles;
iframe.contentWindow.document.getElementById("f1-DescripcionDetalles2").innerHTML = descripcionDetalles;


iframe.contentWindow.document.getElementById("f1-LugarComision").innerHTML = lugarComision1;
iframe.contentWindow.document.getElementById("f1-LugarComision2").innerHTML = lugarComision2;
//iframe.contentWindow.document.getElementById("f1-FechasComision").innerHTML = "Del "+ new Date(fechaInicio1).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) +" al "+ new Date(fechaFinal1).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+ new Date(fechaFinal1).toLocaleDateString('es-mx', { year:"numeric"});
iframe.contentWindow.document.getElementById("f1-FechasComision").innerHTML = Fecha1;
iframe.contentWindow.document.getElementById("f1-FechaComision2").innerHTML = Fecha2;

//iframe.contentWindow.document.getElementById("f1-LugarComision2").innerHTML = lugarComision;
//iframe.contentWindow.document.getElementById("f1-FechasComision2").innerHTML = "Del "+ new Date(fechaInicio1).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) +" al "+ new Date(fechaFinal1).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+ new Date(fechaFinal1).toLocaleDateString('es-mx', { year:"numeric"});

iframe.contentWindow.document.getElementById("f1-TipoVehiculo").innerHTML = tipoVehiculo;
iframe.contentWindow.document.getElementById("f1-MarcaVehiculo").innerHTML = marcaVehiculo;
iframe.contentWindow.document.getElementById("f1-ModeloVehiculo").innerHTML = modeloVehiculo;
iframe.contentWindow.document.getElementById("f1-AnioVehiculo").innerHTML = modeloAnioVehiculo;
iframe.contentWindow.document.getElementById("f1-PlacasVehiculo").innerHTML = placasVehiculo;

iframe.contentWindow.document.getElementById("f1-NombreUsuario2").innerHTML = mayusculas(nombreUsuario);
iframe.contentWindow.document.getElementById("f1-CargoUsuario2").innerHTML = mayusculas(cargoUsuario);




//IMPRIMIR EN PANTALLA PDF VISUALIZADOR DE NAVEGADOR -- PARA GUARDAR O IMPRIMIR
    let wspFrame = document.getElementById('frame1').contentWindow;
    wspFrame.focus();
    wspFrame.print();

});

//Llenado de oficio 2
document.querySelector('#generadorPDF2').addEventListener('click', function () {

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
    
    /*  Vehiculo  */
    let tipoVehiculo = document.getElementById('vehicleInput').value;
    let marcaVehiculo = document.getElementById('marcaVehiculo').value;
    let modeloVehiculo = document.getElementById('modeloAuto').value;
    let modeloAnioVehiculo = document.getElementById('modeloAnio').value;
    let placasVehiculo = document.getElementById('placasInput').value;

    /* Dinero */
    let alimentacionDinero = document.getElementById('alimentacionDinero').value;
    let hotelDinero = document.getElementById('hotelDinero').value;

    //Obtenemos el iframe para mandarle los datos
    const iframe2 = document.getElementById("frame2");

    //Envio de informacion al documento 2
    iframe2.contentWindow.document.getElementById('UR').innerHTML = unidadResponsable;

    

    let wspFrame = document.getElementById('frame2').contentWindow;
        wspFrame.focus();
        wspFrame.print();
})



