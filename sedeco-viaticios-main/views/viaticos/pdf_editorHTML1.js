

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
    let Fecha1 = document.getElementById('ShowFecha1').textContent;
    let Fecha2 = document.getElementById('ShowFecha2').textContent;
    let lugarComision1 = document.getElementById('ShowCiudad1').textContent;
    let lugarComision2 = document.getElementById('ShowCiudad2').textContent || '';
    let ShowAlimentacion1 = document.getElementById('ShowAlimentacion1').value;
    let ShowAlimentacion2 = document.getElementById('ShowAlimentacion2').value;
    let ShowHospedaje1 = document.getElementById('ShowHospedaje1').value;
    let ShowHospedaje2 = document.getElementById('ShowHospedaje2').value;
    let resultado = document.getElementById("ShowTotal1").textContent
    let resultado2 = document.getElementById("ShowTotal2").textContent
    let resultado3 = document.getElementById("alimentosT").textContent
    let resultado4 = document.getElementById("hospedajeT").textContent
    let resultado5 = document.getElementById("ShowTotal3").textContent

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
    let combustibleDinero = document.getElementById('combustibleDinero').value;
    let peajesDinero = document.getElementById('peajesDinero').value;
    let pasajesDinero = document.getElementById('pasajesDinero').value;
    let totalDinero = document.getElementById('totalDinero1').value;

    //let alimentacionDinero = document.getElementById('alimentacionDinero').value;
    //let hotelDinero = document.getElementById('hotelDinero').value;

    //Obtenemos el iframe para mandarle los datos
    const iframe2 = document.getElementById("frame2");

    //Envio de informacion al documento 2
    iframe2.contentWindow.document.getElementById('f2_uRes').innerHTML = unidadResponsable;
    iframe2.contentWindow.document.getElementById("f2_fecha1").innerHTML = Fecha1;
    iframe2.contentWindow.document.getElementById("f2_lugar1").innerHTML = lugarComision1;
    iframe2.contentWindow.document.getElementById("f2_fecha2").innerHTML = Fecha2;
    iframe2.contentWindow.document.getElementById("f2_lugar2").innerHTML = lugarComision2;
    iframe2.contentWindow.document.getElementById("f2_alimentacion1").innerHTML = "$   "+ShowAlimentacion1;
    iframe2.contentWindow.document.getElementById("f2_hospedaje1").innerHTML = "$   "+ShowHospedaje1;
    iframe2.contentWindow.document.getElementById("f2_resultado").innerHTML = "$   "+resultado;

    iframe2.contentWindow.document.getElementById("f2_alimentacion2").innerHTML = "$   "+ShowAlimentacion2;
    iframe2.contentWindow.document.getElementById("f2_hospedaje2").innerHTML = "$   "+ShowHospedaje2;
    iframe2.contentWindow.document.getElementById("f2_resultado2").innerHTML = "$   "+resultado2;
    iframe2.contentWindow.document.getElementById("f2_resultado3").innerHTML = "$   "+resultado3;
    iframe2.contentWindow.document.getElementById("f2_resultado4").innerHTML = "$   "+resultado4;
    iframe2.contentWindow.document.getElementById("f2_resultado5").innerHTML = "$   "+resultado5;
    iframe2.contentWindow.document.getElementById("f2_cantidadF").innerHTML = "$   "+resultado5;

    iframe2.contentWindow.document.getElementById("f2_lugarC").innerHTML = lugarComision1;
    iframe2.contentWindow.document.getElementById("f2_detalles").innerHTML = descripcionDetalles;
    iframe2.contentWindow.document.getElementById("f2_nOficio").innerHTML = numeroOficio +"/"+ new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric"});
    iframe2.contentWindow.document.getElementById("f2_fechaD").innerHTML =  new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"})
    iframe2.contentWindow.document.getElementById("f2_diasD").innerHTML = duracionDias;
    
    //Recibo de anticipo de gastos

    iframe2.contentWindow.document.getElementById("f2_cantidadFG").innerHTML ="$   "+ resultado5;
    iframe2.contentWindow.document.getElementById("f2_nombre").innerHTML=nombreUsuario;
    iframe2.contentWindow.document.getElementById("f2_cargo").innerHTML=cargoUsuario;
    
    iframe2.contentWindow.document.getElementById("f2_lugar1G").innerHTML = lugarComision1;
    iframe2.contentWindow.document.getElementById("f2_fecha1G").innerHTML = Fecha1;
    iframe2.contentWindow.document.getElementById("f2_lugar2G").innerHTML = lugarComision2;
    iframe2.contentWindow.document.getElementById("f2_fecha2G").innerHTML = Fecha2;

    iframe2.contentWindow.document.getElementById("f2_combustible").innerHTML = "$   "+combustibleDinero;
    iframe2.contentWindow.document.getElementById("f2_peajes").innerHTML = "$   "+peajesDinero;
    iframe2.contentWindow.document.getElementById("f2_pasajes").innerHTML = "$   "+pasajesDinero;
    iframe2.contentWindow.document.getElementById("f2_total1").innerHTML = "$   "+totalDinero;

    iframe2.contentWindow.document.getElementById("f2_fechaDF").innerHTML = " " + new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"})

    let wspFrame = document.getElementById('frame2').contentWindow;
        wspFrame.focus();
        wspFrame.print();
})



