
function Unidades(num){

    switch(num)
    {
        case 1: return "Un";
        case 2: return "Dos";
        case 3: return "Tres";
        case 4: return "Cuatro";
        case 5: return "Cinco";
        case 6: return "Seis";
        case 7: return "Siete";
        case 8: return "Ocho";
        case 9: return "Nueve";
    }

    return "";
}//Unidades()

function Decenas(num){

    let decena = Math.floor(num/10);
    let unidad = num - (decena * 10);

    switch(decena)
    {
        case 1:
            switch(unidad)
            {
                case 0: return "Diez";
                case 1: return "Once";
                case 2: return "Doce";
                case 3: return "Trece";
                case 4: return "Catorce";
                case 5: return "Quince";
                default: return "Dieci" + Unidades(unidad);
            }
        case 2:
            switch(unidad)
            {
                case 0: return "Veinte";
                default: return "Veinti" + Unidades(unidad);
            }
        case 3: return DecenasY("Treinta", unidad);
        case 4: return DecenasY("Cuarenta", unidad);
        case 5: return DecenasY("Cincuenta", unidad);
        case 6: return DecenasY("Sesenta", unidad);
        case 7: return DecenasY("Setenta", unidad);
        case 8: return DecenasY("Ochenta", unidad);
        case 9: return DecenasY("Noventa", unidad);
        case 0: return Unidades(unidad);
    }
}//Unidades()

function DecenasY(strSin, numUnidades) {
    if (numUnidades > 0)
    return strSin + " Y " + Unidades(numUnidades)

    return strSin;
}//DecenasY()

function Centenas(num) {
    let centenas = Math.floor(num / 100);
    let decenas = num - (centenas * 100);

    switch(centenas)
    {
        case 1:
            if (decenas > 0)
                return "Ciento " + Decenas(decenas);
            return "Cien";
        case 2: return "Doscientos " + Decenas(decenas);
        case 3: return "Trescientos " + Decenas(decenas);
        case 4: return "Cuatrocientos " + Decenas(decenas);
        case 5: return "Quinientos " + Decenas(decenas);
        case 6: return "Seiscientos " + Decenas(decenas);
        case 7: return "Setecientos " + Decenas(decenas);
        case 8: return "Ochocientos " + Decenas(decenas);
        case 9: return "Novecientos " + Decenas(decenas);
    }

    return Decenas(decenas);
}//Centenas()

function Seccion(num, divisor, strSingular, strPlural) {
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let letras = "";

    if (cientos > 0)
        if (cientos > 1)
            letras = Centenas(cientos) + " " + strPlural;
        else
            letras = strSingular;

    if (resto > 0)
        letras += "";

    return letras;
}//Seccion()

function Miles(num) {
    let divisor = 1000;
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let strMiles = Seccion(num, divisor, "Un Mil", "Mil");
    let strCentenas = Centenas(resto);

    if(strMiles == "")
        return strCentenas;

    return strMiles + " " + strCentenas;
}//Miles()

function Millones(num) {
    let divisor = 1000000;
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let strMillones = Seccion(num, divisor, "Un Millon De", "Millones De");
    let strMiles = Miles(resto);

    if(strMillones == "")
        return strMiles;

    return strMillones + " " + strMiles;
}//Millones()

function NumeroALetras(num) {
    var data = {
        numero: num,
        enteros: Math.floor(num),
        centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
        letrasCentavos: "",
        letrasMonedaPlural: 'Pesos',//"PESOS", 'Dólares', 'Bolívares', 'etcs'
        letrasMonedaSingular: 'Peso', //"PESO", 'Dólar', 'Bolivar', 'etc'

        letrasMonedaCentavoPlural: "Centavos",
        letrasMonedaCentavoSingular: "Centavo"
    };

    if (data.centavos > 0) {
        data.letrasCentavos = "Con " + (function (){
            if (data.centavos == 1)
                return Millones(data.centavos) + " " + data.letrasMonedaCentavoSingular;
            else
                return Millones(data.centavos) + " " + data.letrasMonedaCentavoPlural;
            })();
    };

    if(data.enteros == 0)
        return "Cero " + data.letrasMonedaPlural + " " + data.letrasCentavos;
    if (data.enteros == 1)
        return Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
    else
        return Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
}//NumeroALetras()
/**************************************************************************************** */

function mayusculas(palabra) {
    const mySentence = palabra;
    const words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
    return words.join(" ");
}

function nLetra(numero){
    const wordnumber= ["un", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve","veinte"];
    return wordnumber[numero-1]
}

document.querySelector('#btn-GenerarPDF1').addEventListener('click', function () {
    
        /* Documento */
        let unidadResponsable = document.getElementById('idUnidadAdministrativa').value;
        let numeroOficio = document.getElementById('numOficio').value;
        let fechaDocumento = document.getElementById('documentDate').value;
        let nombreUr = document.getElementById('nombrecargoUr').value;
        let cargoUr = document.getElementById('cargoUr').value;
        let objetivosComision = document.getElementById('objetivosComision').value;

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

        // FORMATO 1 HTML
    
    // iframe.contentWindow.document.getElementById(" ")
    const iframe = document.getElementById("frame1");

    //******** EXTRAS ************/
    const d = new Date();
    let year = d.getFullYear();

  

    //SAVE IN LOCALSTORAGE  
    /*
let todosCampos = [
    unidadResponsable,
    numeroOficio,
    fechaDocumento,
    mayusculas(nombreUsuario),
    mayusculas(cargoUsuario),
    duracionDias,
    nLetra(duracionDias),
    descripcionDetalles,
    lugarComision1,
    fechaInicio1,
    fechaFinal1,
    tipoVehiculo,
    marcaVehiculo,
    modeloVehiculo,
    modeloAnioVehiculo,
    placasVehiculo,
    pageTab=4
        ]
let string = JSON.stringify(todosCampos);
localStorage.setItem("Campos", string);
*/
    //******************* *********/
//console.log(fechaDocumento)

//Rellenado de primer oficio 
iframe.contentWindow.document.getElementById("f1-UnidadResponsable").innerHTML = unidadResponsable;
iframe.contentWindow.document.getElementById("f1-NumeroOficio").innerHTML = numeroOficio + "/" + year;
iframe.contentWindow.document.getElementById("f1-FechaOficio").innerHTML = new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"})
iframe.contentWindow.document.getElementById("f1_nombreUr").innerHTML = nombreUr
iframe.contentWindow.document.getElementById("f1_cargoUr").innerHTML = cargoUr
iframe.contentWindow.document.getElementById("f1-NombreUsuario").innerHTML = mayusculas(nombreUsuario);
iframe.contentWindow.document.getElementById("f1-CargoUsuario").innerHTML = mayusculas(cargoUsuario);
iframe.contentWindow.document.getElementById("f1-DuracionDias").innerHTML = duracionDias;
if (duracionDias == 1) {
    iframe.contentWindow.document.getElementById("f1-DuracionDiasLetra").innerHTML = nLetra(duracionDias) +" día";
}else{
    iframe.contentWindow.document.getElementById("f1-DuracionDiasLetra").innerHTML = nLetra(duracionDias) +" días";
}
iframe.contentWindow.document.getElementById("f1-DescripcionDetalles").innerHTML = descripcionDetalles;
iframe.contentWindow.document.getElementById("f1-objetivosComision").innerHTML = objetivosComision;


iframe.contentWindow.document.getElementById("f1-LugarComision").innerHTML = lugarComision1;
iframe.contentWindow.document.getElementById("f1-LugarComision2").innerHTML = lugarComision2;
//iframe.contentWindow.document.getElementById("f1-FechasComision").innerHTML = "Del "+ new Date(fechaInicio1).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) +" al "+ new Date(fechaFinal1).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+ new Date(fechaFinal1).toLocaleDateString('es-mx', { year:"numeric"});
iframe.contentWindow.document.getElementById("f1-FechasComision").innerHTML = Fecha1;
iframe.contentWindow.document.getElementById("f1-FechaComision2").innerHTML = Fecha2;

//iframe.contentWindow.document.getElementById("f1-LugarComision2").innerHTML = lugarComision;
//iframe.contentWindow.document.getElementById("f1-FechasComision2").innerHTML = "Del "+ new Date(fechaInicio1).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) +" al "+ new Date(fechaFinal1).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+ new Date(fechaFinal1).toLocaleDateString('es-mx', { year:"numeric"});

iframe.contentWindow.document.getElementById("f1-TipoVehiculo").innerHTML = "&nbsp" + tipoVehiculo;
iframe.contentWindow.document.getElementById("f1-MarcaVehiculo").innerHTML = "&nbsp" + marcaVehiculo;
iframe.contentWindow.document.getElementById("f1-ModeloVehiculo").innerHTML = "&nbsp" + modeloVehiculo;
iframe.contentWindow.document.getElementById("f1-AnioVehiculo").innerHTML = "&nbsp" + modeloAnioVehiculo;
iframe.contentWindow.document.getElementById("f1-PlacasVehiculo").innerHTML = "&nbsp" + placasVehiculo;

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
    let nombreUr2 = document.getElementById('nombrecargoUr').value;
    let cargoUr2 = document.getElementById('cargoUr').value;
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
    let objetivosComision = document.getElementById('objetivosComision').value;
    let fechaInicio = document.getElementById('fechaInicio').value;
    let fechaFinal = document.getElementById('fechaFinal').value;
    
    /*  Vehiculo  */
    let tipoVehiculo = document.getElementById('vehicleInput').value;
    let marcaVehiculo = document.getElementById('marcaVehiculo').value;
    let modeloVehiculo = document.getElementById('modeloAuto').value;
    let modeloAnioVehiculo = document.getElementById('modeloAnio').value;
    let placasVehiculo = document.getElementById('placasInput').value;

    /* Dinero */
    let combustibleDinero = document.getElementById('ShowComb1').value;
    let peajesDinero = document.getElementById('ShowPeajes1').value;
    let pasajesDinero = document.getElementById('ShowPasajes1').value;
    let totalDinero = document.getElementById('totalDinero').textContent;

    let combustibleDinero2 = document.getElementById('ShowComb2').value;
    let peajesDinero2 = document.getElementById('ShowPeajes2').value;
    let pasajesDinero2 = document.getElementById('ShowPasajes2').value;
    let totalDinero2 = document.getElementById('totalDinero2').textContent;

    let totl3 = document.getElementById('tot3').textContent;
    let sumaF= parseFloat(document.getElementById('tot3').textContent) + parseFloat(document.getElementById("ShowTotal3").textContent);



    //let alimentacionDinero = document.getElementById('alimentacionDinero').value;
    //let hotelDinero = document.getElementById('hotelDinero').value;

    //Obtenemos el iframe para mandarle los datos
    const iframe2 = document.getElementById("frame2");



    //Envio de informacion al documento 2


    iframe2.contentWindow.document.getElementById('f2_uRes').innerHTML = unidadResponsable;
    iframe2.contentWindow.document.getElementById("f2_lugarC").innerHTML = lugarComision1;
    iframe2.contentWindow.document.getElementById("f2_cantidadF").innerHTML = "$   "+numeral(resultado5).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_nombreUr").innerHTML = nombreUr2
    iframe2.contentWindow.document.getElementById("f2_cargoUr").innerHTML = cargoUr2
    iframe2.contentWindow.document.getElementById("f2_detalles").innerHTML = descripcionDetalles;
    iframe2.contentWindow.document.getElementById("f2_objetivosComision").innerHTML = objetivosComision;
    iframe2.contentWindow.document.getElementById("f2_nOficio").innerHTML = numeroOficio +"/"+ new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric"});
    iframe2.contentWindow.document.getElementById("f2_fechaD").innerHTML =  new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"});
    iframe2.contentWindow.document.getElementById("f2_DuracionDias").innerHTML = duracionDias;
    if (duracionDias == 1) {
        iframe2.contentWindow.document.getElementById("f2_DuracionDiasLetra").innerHTML = nLetra(duracionDias) +" día";
    }else{
        iframe2.contentWindow.document.getElementById("f2_DuracionDiasLetra").innerHTML = nLetra(duracionDias) +" días";
    }
    iframe2.contentWindow.document.getElementById("f2_nombreUr").innerHTML = nombreUr2;
    iframe2.contentWindow.document.getElementById("f2_cargoUr").innerHTML = cargoUr2;

    

    //Recibo anticipo de viaticos
    iframe2.contentWindow.document.getElementById("f2_fecha1").innerHTML = Fecha1;
    iframe2.contentWindow.document.getElementById("f2_lugar1").innerHTML = lugarComision1;
    iframe2.contentWindow.document.getElementById("f2_fecha2").innerHTML = Fecha2;
    iframe2.contentWindow.document.getElementById("f2_lugar2").innerHTML = lugarComision2;
    iframe2.contentWindow.document.getElementById("f2_alimentacion1").innerHTML = "$   "+numeral(ShowAlimentacion1).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_hospedaje1").innerHTML = "$   "+numeral(ShowHospedaje1).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_resultado").innerHTML = "$   "+numeral(resultado).format('0,0.00');

    iframe2.contentWindow.document.getElementById("f2_alimentacion2").innerHTML = "$   "+numeral(ShowAlimentacion2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_hospedaje2").innerHTML = "$   "+numeral(ShowHospedaje2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_resultado2").innerHTML = "$   "+numeral(resultado2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_resultado3").innerHTML = "$   "+numeral(resultado3).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_resultado4").innerHTML = "$   "+numeral(resultado4).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_resultado5").innerHTML = "$   "+numeral(resultado5).format('0,0.00');
    
    //Recibo de anticipo de gastos

    iframe2.contentWindow.document.getElementById("f2_cantidadFG").innerHTML ="$   "+ numeral(totl3).format('0,0.00');

    iframe2.contentWindow.document.getElementById("f2_nombre").innerHTML=nombreUsuario;
    iframe2.contentWindow.document.getElementById("f2_cargo").innerHTML=cargoUsuario;
    
    iframe2.contentWindow.document.getElementById("f2_lugar1G").innerHTML = lugarComision1;
    iframe2.contentWindow.document.getElementById("f2_fecha1G").innerHTML = Fecha1;
    iframe2.contentWindow.document.getElementById("f2_lugar2G").innerHTML = lugarComision2;
    iframe2.contentWindow.document.getElementById("f2_fecha2G").innerHTML = Fecha2;

    iframe2.contentWindow.document.getElementById("f2_combustible").innerHTML = "$   "+numeral(combustibleDinero).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_peajes").innerHTML = "$   "+numeral(peajesDinero).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_pasajes").innerHTML = "$   "+numeral(pasajesDinero).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_total1").innerHTML = "$   "+numeral(totalDinero).format('0,0.00');

    iframe2.contentWindow.document.getElementById("f2_combustible2").innerHTML = "$   "+numeral(combustibleDinero2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_peajes2").innerHTML = "$   "+numeral(peajesDinero2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_pasajes2").innerHTML = "$   "+numeral(pasajesDinero2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_total2").innerHTML = "$   "+numeral(totalDinero2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("sumaT").innerHTML = "$   "+numeral(totl3).format('0,0.00');

    iframe2.contentWindow.document.getElementById("f2_cantidadFLetra").innerHTML = "("+ NumeroALetras(resultado5) +" 00/100 M.N)";
    iframe2.contentWindow.document.getElementById("f2_cantidadF2Letra").innerHTML = "("+ NumeroALetras(totl3) +" 00/100 M.N)";




    iframe2.contentWindow.document.getElementById("f2_viaticosyGas").innerHTML = "$   "+numeral(sumaF).format('0,0.00');


    iframe2.contentWindow.document.getElementById("f2_fechaDF").innerHTML = " " + new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"})

    let wspFrame = document.getElementById('frame2').contentWindow;
        wspFrame.focus();
        wspFrame.print();


//SAVE IN LOCALSTORAGE  
    
let todosCampos = [
    unidadResponsable,
    numeroOficio,
    fechaDocumento,
    mayusculas(nombreUsuario),
    mayusculas(cargoUsuario),
    duracionDias,
    nLetra(duracionDias),
    descripcionDetalles,
    lugarComision1,
    fechaInicio,
    fechaFinal,
    tipoVehiculo,
    marcaVehiculo,
    modeloVehiculo,
    modeloAnioVehiculo,
    placasVehiculo,
    pageTab=5
        ]
let string = JSON.stringify(todosCampos);
localStorage.setItem("Campos", string);
    //******************* *********/
})

document.querySelector('#generadorPDF3').addEventListener('click', function () {

    let unidadResponsable = document.getElementById('idUnidadAdministrativa').value;
    let nombreUr = document.getElementById('nombrecargoUr').value;
    let cargoUr = document.getElementById('cargoUr').value;
    let numeroOficio = document.getElementById('numOficio').value;
    let fechaDocumento = document.getElementById('documentDate').value;

    let lugarComision1 = document.getElementById('ShowCiudad1').textContent;
    let descripcionDetalles = document.getElementById('descripcionDetalles').value;

    let duracionDias = document.getElementById('duracionDias').value;        //Duracion dias
    let tipoVehiculo = document.getElementById('vehicleInput').value;
    let marcaVehiculo = document.getElementById('marcaVehiculo').value;
    let modeloVehiculo = document.getElementById('modeloAuto').value;
    let modeloAnioVehiculo = document.getElementById('modeloAnio').value;
    let placasVehiculo = document.getElementById('placasInput').value;

    //anticipados 
    let alAnt = document.getElementById('alS').textContent;
    let hosAnt = document.getElementById('hS').textContent;
    let peaAnt = document.getElementById('peS').textContent;
    let comAnt = document.getElementById('comS').textContent;
    let pasAnt = document.getElementById('paS').textContent;
    let otrosAnt = document.getElementById('otroS').textContent;
    let sumAnt = document.getElementById('sumaS').textContent;

    let aldev = document.getElementById('aldev').value;
    let hosdev = document.getElementById('hdev').value;
    let peadev = document.getElementById('pedev').value;
    let comdev = document.getElementById('comdev').value;
    let pasdev = document.getElementById('padev').value;
    let otrosdev = document.getElementById('otrodev').value;
    let sumdev = document.getElementById('sumadev').textContent;

    let aldif = document.getElementById('aldif').textContent;
    let hosdif = document.getElementById('hdif').textContent;
    let peadif = document.getElementById('pedif').textContent;
    let comdif = document.getElementById('comdif').textContent;
    let pasdif = document.getElementById('padif').textContent;
    let otrosdif = document.getElementById('otrodif').textContent;
    let sumdif = document.getElementById('sumaTotal').textContent;

    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let cargoUsuario = document.getElementById('cargoUsuario').value;






    const iframe3 = document.getElementById("frame3");

    iframe3.contentWindow.document.getElementById('f3_uRes').innerHTML = unidadResponsable
    iframe3.contentWindow.document.getElementById('f3_nombreUr').innerHTML = nombreUr
    iframe3.contentWindow.document.getElementById('f3_cargoUr').innerHTML = cargoUr
    iframe3.contentWindow.document.getElementById('f3_numOf').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+numeroOficio +"/"+ new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric"});
    iframe3.contentWindow.document.getElementById("f3_fechaD").innerHTML =  new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"})
    iframe3.contentWindow.document.getElementById("f3_lugarC").innerHTML = lugarComision1;
    iframe3.contentWindow.document.getElementById("f3_detalles").innerHTML = descripcionDetalles;

    //vehiculo
    iframe3.contentWindow.document.getElementById("f3_duracionD").innerHTML = duracionDias;
    iframe3.contentWindow.document.getElementById("f3_tipoVehiculo").innerHTML = "&nbsp;&nbsp;"+"&nbsp;Vehículo "+ tipoVehiculo;
    iframe3.contentWindow.document.getElementById("f3-MarcaVehiculo").innerHTML = marcaVehiculo;
    iframe3.contentWindow.document.getElementById("f3-ModeloVehiculo").innerHTML = modeloVehiculo;
    iframe3.contentWindow.document.getElementById("f3-AnioVehiculo").innerHTML = modeloAnioVehiculo;
    iframe3.contentWindow.document.getElementById("f3-PlacasVehiculo").innerHTML = placasVehiculo;

    //Gastos de cmision

    iframe3.contentWindow.document.getElementById("f3_alAnt").innerHTML = "$   "+numeral(alAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_hosAnt").innerHTML = "$   "+numeral(hosAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_peaAnt").innerHTML = "$   "+numeral(peaAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_comAnt").innerHTML = "$   "+numeral(comAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_pasAnt").innerHTML = "$   "+numeral(pasAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_otrosAnt").innerHTML = "$   "+numeral(otrosAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_sumAnt").innerHTML = "$   "+numeral(sumAnt).format('0,0.00');

    iframe3.contentWindow.document.getElementById("f3_aldev").innerHTML = "$   "+numeral(aldev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_hosdev").innerHTML = "$   "+numeral(hosdev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_peadev").innerHTML = "$   "+numeral(peadev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_comdev").innerHTML = "$   "+numeral(comdev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_pasdev").innerHTML = "$   "+numeral(pasdev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_otrosdev").innerHTML = "$   "+numeral(otrosdev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_sumdev").innerHTML = "$   "+numeral(sumdev).format('0,0.00');

    iframe3.contentWindow.document.getElementById("f3_aldif").innerHTML = "$   "+numeral(aldif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_hosdif").innerHTML = "$   "+numeral(hosdif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_peadif").innerHTML = "$   "+numeral(peadif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_comdif").innerHTML = "$   "+numeral(comdif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_pasdif").innerHTML = "$   "+numeral(pasdif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_otrosdif").innerHTML = "$   "+numeral(otrosdif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_sumdif").innerHTML = "$   "+numeral(sumdif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_total").innerHTML = "$   "+numeral(sumdif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_sumafinalLetra").innerHTML = "("+ NumeroALetras(sumdif) +" 00/100 M.N)";

    if (document.getElementById('nombrecargoUr').value == "Dra. Mariana Gudiño Paredes") {
        iframe3.contentWindow.document.getElementById("f3_textoDependeUr").innerHTML = "de la/ a la "+document.getElementById('nombrecargoUr').value +", "+document.getElementById('cargoUr').value+", la cantidad de:";
    } else {
        iframe3.contentWindow.document.getElementById("f3_textoDependeUr").innerHTML = "del / al "+document.getElementById('nombrecargoUr').value +", "+document.getElementById('cargoUr').value+", la cantidad de:"
    }
    iframe3.contentWindow.document.getElementById("f3_nombreUrf").innerHTML=nombreUr;
    iframe3.contentWindow.document.getElementById("f3_cargoUrf").innerHTML=cargoUr;

    iframe3.contentWindow.document.getElementById("f3_nombreUsuario").innerHTML=nombreUsuario;
    iframe3.contentWindow.document.getElementById("f3_cargoUsuario").innerHTML=cargoUsuario;
    iframe3.contentWindow.document.getElementById("f3_fechaf").innerHTML=new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"});


//IMPRIMIR EN PANTALLA PDF VISUALIZADOR DE NAVEGADOR -- PARA GUARDAR O IMPRIMIR
    let wspFrame = document.getElementById('frame3').contentWindow;
    wspFrame.focus();
    wspFrame.print();


    
})



