import { loadViaticos } from '../../db/loadData_BD_ToForm.js';
import { allData } from '../../db/GetAllOficios.js';
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

// Event listeners refactorizados
document.querySelector('#btn-GenerarPDF1').addEventListener('click', function () {
    llenarOficio({ imprimir: true });
});
document.querySelector('#generadorPDF2').addEventListener('click', function () {
    llenarRecibo({ imprimir: true });
});
document.querySelector('#generadorPDF3').addEventListener('click', function () {
    llenarComprobacion({ imprimir: true });
});
document.querySelector('#generadorPDF4').addEventListener('click', function () {
    llenarGastosRurales({ imprimir: true });
});
document.querySelector('#generadorPDF5').addEventListener('click', function () {
    llenarTarjetaInformativa({ imprimir: true });
});


/*

// Función refactorizada para mostrar todos los documentos PDF (5 iframes)
// Función principal para mostrar los 5 iframes juntos
function mostrarTodosPDFs(id, opciones = {}) {
    const {
        actualizarDatos = true,
        abrirEnNuevaVentana = true,
        disposicion = 'grid' // 'grid', 'vertical', 'horizontal'
    } = opciones;

    // Si se requiere actualizar datos, ejecutar todos los llenadores
    if (actualizarDatos) {
        console.log("Actualizando datos para todos los iframes con ID:", id);
        loadViaticos(id, false, allData);
        llenarTodosLosIframes();
    }

    // Obtener todos los iframes
    const iframes = [
        { id: "frame1", titulo: "Oficio de Comisión" },
        { id: "frame2", titulo: "Recibo de Viáticos" },
        { id: "frame3", titulo: "Comprobación de Gastos" },
        { id: "frame4", titulo: "Gastos Rurales" },
        { id: "frame5", titulo: "Tarjeta Informativa" }
    ];

    if (abrirEnNuevaVentana) {
        abrirVistaConjuntaEnVentana(iframes, disposicion);
    } else {
        mostrarVistaConjuntaEnPagina(iframes, disposicion);
    }
}

// Función que ejecuta todos los llenadores de datos sin imprimir
function llenarTodosLosIframes() {
    console.log("Actualizando datos en todos los iframes...");
    //loadViaticos('', true, allData);
    
    // Llenar iframe 1 - Oficio
    llenarOficio();
    
    // Llenar iframe 2 - Recibo
    llenarRecibo();
    
    // Llenar iframe 3 - Comprobación
    llenarComprobacion();
    
    // Llenar iframe 4 - Gastos Rurales
    llenarGastosRurales();
    
    // Llenar iframe 5 - Tarjeta Informativa
    llenarTarjetaInformativa();
}

// Función para abrir vista conjunta en nueva ventana
function abrirVistaConjuntaEnVentana(iframes, disposicion) {
    const numeroOficio = document.getElementById('numOficio').value;
    const lugarComision = document.getElementById('ShowCiudad1').textContent;
    
    const win = window.open("", "_blank", "width=1400,height=900,scrollbars=yes,resizable=yes");
    
    const estilosCSS = obtenerEstilosVista(disposicion);
    
    win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Documentos de Viáticos - Oficio ${numeroOficio}</title>
            <style>${estilosCSS}</style>
        </head>
        <body>
            <div class="header-info">
                <h1>Documentos de Viáticos</h1>
                <p><strong>Oficio:</strong> ${numeroOficio} | <strong>Lugar:</strong> ${lugarComision}</p>
                <div class="controls">
                    <button onclick="window.print()" class="btn-print">🖨️ Imprimir Todo</button>
                    <button onclick="cambiarDisposicion('grid')" class="btn-layout">📱 Grid</button>
                    <button onclick="cambiarDisposicion('vertical')" class="btn-layout">📄 Vertical</button>
                    <button onclick="cambiarDisposicion('horizontal')" class="btn-layout">📜 Horizontal</button>
                </div>
            </div>
            <div class="pdf-container ${disposicion}" id="pdfContainer">
                ${generarHTMLIframes(iframes)}
            </div>
            <script>
                function cambiarDisposicion(nuevaDisposicion) {
                    const container = document.getElementById('pdfContainer');
                    container.className = 'pdf-container ' + nuevaDisposicion;
                }
            </script>
        </body>
        </html>
    `);
    
    win.document.close();
    
    // Esperar a que cargue y luego llenar con datos actualizados
    setTimeout(() => {
        actualizarIframesEnVentana(win, iframes);
    }, 500);
}

// Función para generar HTML de los iframes
function generarHTMLIframes(iframes) {
    return iframes.map(iframe => {
        const src = document.getElementById(iframe.id).src;
        return `
            <div class="pdf-frame">
                <div class="pdf-title">
                    ${iframe.titulo}
                    <button onclick="document.getElementById('${iframe.id}New').contentWindow.print()" class="btn-print-single">🖨️</button>
                </div>
                <iframe id="${iframe.id}New" src="${src}" loading="lazy"></iframe>
            </div>
        `;
    }).join('');
}

// Función para obtener estilos CSS según disposición
function obtenerEstilosVista(disposicion) {
    const estilosBase = `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; }
        .header-info {
            background: #4A001F;
            color: white;
            padding: 20px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        .header-info h1 { margin-bottom: 10px; }
        .controls { margin-top: 15px; }
        .btn-print, .btn-layout, .btn-print-single {
            background: rgba(255,255,255,0.2);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 8px 16px;
            margin: 0 5px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.3s;
        }
        .btn-print:hover, .btn-layout:hover, .btn-print-single:hover {
            background: rgba(255,255,255,0.3);
        }
        .pdf-frame {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        .pdf-title {
            background: #f8f9fa;
            padding: 12px 16px;
            font-weight: 600;
            color: #4A001F;
            border-bottom: 2px solid #e9ecef;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .pdf-frame iframe {
            width: 100%;
            flex: 1;
            border: none;
            min-height: 400px;
        }
        @media print {
            .header-info { display: none; }
            .pdf-container { display: block !important; }
            .pdf-frame { page-break-inside: avoid; margin-bottom: 20px; }
        }
    `;

    const disposiciones = {
        grid: `
            .pdf-container.grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                gap: 20px;
                padding: 20px;
                max-width: 1400px;
                margin: 0 auto;
            }
            .pdf-container.grid .pdf-frame {
                height: 500px;
            }
        `,
        vertical: `
            .pdf-container.vertical {
                display: flex;
                flex-direction: column;
                gap: 20px;
                padding: 20px;
                max-width: 1000px;
                margin: 0 auto;
            }
            .pdf-container.vertical .pdf-frame {
                height: 600px;
            }
        `,
        horizontal: `
            .pdf-container.horizontal {
                display: flex;
                flex-direction: row;
                gap: 10px;
                padding: 20px;
                overflow-x: auto;
            }
            .pdf-container.horizontal .pdf-frame {
                min-width: 300px;
                height: 500px;
                flex-shrink: 0;
            }
        `
    };

    return estilosBase + (disposiciones[disposicion] || disposiciones.grid);
}

// Función para actualizar iframes en la ventana nueva
function actualizarIframesEnVentana(ventana, iframes) {
    iframes.forEach(iframe => {
        const iframeOriginal = document.getElementById(iframe.id);
        const iframeNuevo = ventana.document.getElementById(iframe.id + 'New');
        
        if (iframeOriginal && iframeNuevo) {
            // Copiar el contenido del iframe original al nuevo
            try {
                const contenidoOriginal = iframeOriginal.contentDocument.documentElement.innerHTML;
                iframeNuevo.onload = function() {
                    iframeNuevo.contentDocument.documentElement.innerHTML = contenidoOriginal;
                };
            } catch (e) {
                console.log('No se pudo copiar contenido del iframe:', iframe.id);
            }
        }
    });
}

// Función para mostrar vista conjunta en la misma página
function mostrarVistaConjuntaEnPagina(iframes, disposicion) {
    // Crear contenedor modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        z-index: 10000;
        overflow: auto;
    `;

    const contenido = document.createElement('div');
    contenido.style.cssText = `
        position: relative;
        background: white;
        margin: 20px;
        border-radius: 10px;
        min-height: calc(100vh - 40px);
    `;

    // Botón cerrar
    const btnCerrar = document.createElement('button');
    btnCerrar.textContent = '✕ Cerrar';
    btnCerrar.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 10001;
        background: #4A001F;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    `;
    btnCerrar.onclick = () => document.body.removeChild(modal);

    contenido.innerHTML = generarHTMLIframes(iframes);
    contenido.appendChild(btnCerrar);
    modal.appendChild(contenido);
    document.body.appendChild(modal);
}
*/

// Funciones individuales de llenado (extraídas del código original)
function llenarOficio({ imprimir = false } = {}) {
  

      /* Documento */
        let unidadResponsable = document.getElementById('idUnidadAdministrativa').value;
        let numeroOficio = document.getElementById('numOficio').value;
        let fechaDocumento = document.getElementById('documentDate').value;
        let nombreUr = document.getElementById('nombrecargoUr').value;
        let cargoUr = document.getElementById('cargoUr').value;
        let autorizaNombre = document.getElementById('autorizaNombre').value;
        let autorizaCargo = document.getElementById('autorizaCargo').value;

        let objetivosComision = document.getElementById('objetivosComision').value;

        /* COMISION */
        let lugarComision1 = document.getElementById('ShowCiudad1').textContent;
        let lugarComision2 = document.getElementById('ShowCiudad2').textContent || '';


        let duracionDias = document.getElementById('duracionDias').value;        //Duracion dias
        let descripcionDetalles = document.getElementById('descripcionDetalles').value;

        let Fecha1 = document.getElementById('ShowFecha1').textContent;
        let Fecha2 = document.getElementById('ShowFecha2').textContent;

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

//Rellenado de primer oficio 
iframe.contentWindow.document.getElementById("f1-UnidadResponsable").innerHTML = unidadResponsable;
iframe.contentWindow.document.getElementById("f1-NumeroOficio").innerHTML = numeroOficio + "/" + year;
iframe.contentWindow.document.getElementById("f1-FechaOficio").innerHTML = new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"})
iframe.contentWindow.document.getElementById("f1_nombreUr").innerHTML = nombreUr
iframe.contentWindow.document.getElementById("f1_cargoUr").innerHTML = cargoUr
iframe.contentWindow.document.getElementById("f1-NombreUsuario").innerHTML = mayusculas(nombreUsuario);
iframe.contentWindow.document.getElementById("f1-CargoUsuario").innerHTML = mayusculas(cargoUsuario);

iframe.contentWindow.document.getElementById("f1_autorizaNombre").innerHTML = mayusculas(autorizaNombre);
iframe.contentWindow.document.getElementById("f1_autorizaCargo").innerHTML = mayusculas(autorizaCargo);


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
    document.getElementById('titleHome').textContent = "Oficio " + numeroOficio + " " + lugarComision1;
    
    if (imprimir) {
        wspFrame.focus();
        wspFrame.print();
    }
}

function llenarRecibo({ imprimir = false } = {}) {
  

    /* Comision */
    let unidadResponsable = document.getElementById('idUnidadAdministrativa').value;
    let numeroOficio = document.getElementById('numOficio').value;
    let fechaDocumento = document.getElementById('documentDate').value;
    let autorizaNombre = document.getElementById('autorizaNombre').value;
    let autorizaCargo = document.getElementById('autorizaCargo').value;

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

    let fechaInicio1 = document.getElementById('fechaI1').value;
    let fechaFinal1 = document.getElementById('fechaF1').value;
    let fechaInicio2 = document.getElementById('fechaI2').value;
    let fechaFinal2 = document.getElementById('fechaF2').value;

    /*  Vehiculo  */
    let tipoVehiculo = document.getElementById('vehicleInput');
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

    //Obtenemos el iframe para mandarle los datos
    const iframe2 = document.getElementById("frame2");

    //Envio de informacion al documento 2

    iframe2.contentWindow.document.getElementById('f2_uRes').innerHTML = unidadResponsable;
    if (lugarComision2 != "") {
        iframe2.contentWindow.document.getElementById("f2_lugarC").innerHTML = lugarComision1 + '&nbsp; y &nbsp; '+ lugarComision2;
    } else {
        iframe2.contentWindow.document.getElementById("f2_lugarC").innerHTML = lugarComision1;
    }
    iframe2.contentWindow.document.getElementById("f2_cantidadF").innerHTML = "$   "+numeral(resultado5).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_autorizaNombre").innerHTML = mayusculas(autorizaNombre);
    iframe2.contentWindow.document.getElementById("f2_autorizaCargo").innerHTML = mayusculas(autorizaCargo);

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

    if (fechaInicio2 && fechaFinal2 == " ") {

        console.log(" LOGGER 1 IF")
            console.log(fechaInicio2, fechaFinal2)
        iframe2.contentWindow.document.getElementById("f2_fechaI").innerHTML = new Date(fechaInicio1).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"});
        iframe2.contentWindow.document.getElementById("f2_fechaF").innerHTML = new Date(fechaFinal1).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"});
    }else{
         console.log(" LOGGER 2 ELSE")
            console.log(fechaInicio2, fechaFinal2)
        iframe2.contentWindow.document.getElementById("f2_fechaI").innerHTML = new Date(fechaInicio1).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"});
        iframe2.contentWindow.document.getElementById("f2_fechaF").innerHTML = new Date(fechaFinal2).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"});
    } 
    //Recibo anticipo de viaticos
    iframe2.contentWindow.document.getElementById("f2_fecha1").innerHTML = Fecha1;
    iframe2.contentWindow.document.getElementById("f2_lugar1").innerHTML = lugarComision1;
    iframe2.contentWindow.document.getElementById("f2_fecha2").innerHTML = Fecha2;
    iframe2.contentWindow.document.getElementById("f2_lugar2").innerHTML = lugarComision2;
    iframe2.contentWindow.document.getElementById("f2_alimentacion1").innerHTML = ShowAlimentacion1 == 0 ? "$ -" : "$   "+numeral(ShowAlimentacion1).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_hospedaje1").innerHTML = ShowHospedaje1 == 0 ? "$ -" : "$   "+numeral(ShowHospedaje1).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_resultado").innerHTML = resultado == 0 ? "$ -" : "$   "+numeral(resultado).format('0,0.00');

    iframe2.contentWindow.document.getElementById("f2_alimentacion2").innerHTML = ShowAlimentacion2 == 0 ? "$ -" : "$   "+numeral(ShowAlimentacion2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_hospedaje2").innerHTML = ShowHospedaje2 == 0 ? "$ -" : "$   "+numeral(ShowHospedaje2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_resultado2").innerHTML = resultado2 == 0 ? "$ -" : "$   "+numeral(resultado2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_resultado3").innerHTML = resultado3 == 0 ? "$ -" : "$   "+numeral(resultado3).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_resultado4").innerHTML = resultado4 == 0 ? "$ -" : "$   "+numeral(resultado4).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_resultado5").innerHTML = resultado5 == 0 ? "$ -" : "$   "+numeral(resultado5).format('0,0.00');
    
    //Recibo de anticipo de gastos
    iframe2.contentWindow.document.getElementById("f2_cantidadFG").innerHTML ="$   "+ numeral(totl3).format('0,0.00');

    iframe2.contentWindow.document.getElementById("f2_nombre").innerHTML=nombreUsuario;
    iframe2.contentWindow.document.getElementById("f2_cargo").innerHTML=cargoUsuario;

    switch (tipoVehiculo.selectedIndex) {
        case 0:
            iframe2.contentWindow.document.getElementById("f2_vAutobus").innerHTML="X";
            iframe2.contentWindow.document.getElementById("f2_vOficial").innerHTML="";
            iframe2.contentWindow.document.getElementById("f2_vParticular").innerHTML="";
            iframe2.contentWindow.document.getElementById("f2_vOtros").innerHTML="";
            break;
        case 1:
            iframe2.contentWindow.document.getElementById("f2_vOficial").innerHTML="X";
            iframe2.contentWindow.document.getElementById("f2_vAutobus").innerHTML="";
            iframe2.contentWindow.document.getElementById("f2_vParticular").innerHTML="";
            iframe2.contentWindow.document.getElementById("f2_vOtros").innerHTML="";
            break;
        case 2:
            iframe2.contentWindow.document.getElementById("f2_vParticular").innerHTML="X";
            iframe2.contentWindow.document.getElementById("f2_vAutobus").innerHTML="";
            iframe2.contentWindow.document.getElementById("f2_vOficial").innerHTML="";
            iframe2.contentWindow.document.getElementById("f2_vOtros").innerHTML="";
            break;
        default:
            iframe2.contentWindow.document.getElementById("f2_vOtros").innerHTML="X";
            iframe2.contentWindow.document.getElementById("f2_vAutobus").innerHTML="";
            iframe2.contentWindow.document.getElementById("f2_vOficial").innerHTML="";
            iframe2.contentWindow.document.getElementById("f2_vParticular").innerHTML="";
            break;
    }

    iframe2.contentWindow.document.getElementById("f2_lugar1G").innerHTML = lugarComision1;
    iframe2.contentWindow.document.getElementById("f2_fecha1G").innerHTML = Fecha1;
    iframe2.contentWindow.document.getElementById("f2_lugar2G").innerHTML = lugarComision2;
    iframe2.contentWindow.document.getElementById("f2_fecha2G").innerHTML = Fecha2;

    iframe2.contentWindow.document.getElementById("f2_combustible").innerHTML = combustibleDinero == 0 ? "$ -" : "$   "+numeral(combustibleDinero).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_peajes").innerHTML = peajesDinero == 0 ? "$ -" : "$   "+numeral(peajesDinero).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_pasajes").innerHTML = pasajesDinero== 0 ? "$ -" : "$   "+numeral(pasajesDinero).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_total1").innerHTML = totalDinero == 0 ? "$ -" : "$   "+numeral(totalDinero).format('0,0.00');

    iframe2.contentWindow.document.getElementById("f2_combustible2").innerHTML = combustibleDinero2 == 0 ? "$ -" : "$   "+numeral(combustibleDinero2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_peajes2").innerHTML = peajesDinero2 == 0 ? "$ -" : "$   "+numeral(peajesDinero2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_pasajes2").innerHTML = pasajesDinero2 == 0 ? "$ -" : "$   "+numeral(pasajesDinero2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_total2").innerHTML = totalDinero2 == 0 ? "$ -" : "$   "+numeral(totalDinero2).format('0,0.00');
    iframe2.contentWindow.document.getElementById("sumaT").innerHTML = totl3 == 0 ? "$ -" : "$   "+numeral(totl3).format('0,0.00');

    iframe2.contentWindow.document.getElementById("f2_cantidadFLetra").innerHTML = "("+ NumeroALetras(resultado5) +" 00/100 M.N)";
    iframe2.contentWindow.document.getElementById("f2_cantidadF2Letra").innerHTML = "("+ NumeroALetras(totl3) +" 00/100 M.N)";

    iframe2.contentWindow.document.getElementById("f2_viaticosyGas").innerHTML = "$   "+numeral(sumaF).format('0,0.00');
    iframe2.contentWindow.document.getElementById("f2_fechaDF").innerHTML = " " + new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"})

    let wspFrame = document.getElementById('frame2').contentWindow;
    document.getElementById('titleHome').textContent = "Recibo " + numeroOficio + " " + lugarComision1;


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
    fechaInicio,
    fechaFinal,
    tipoVehiculo.value,
    marcaVehiculo,
    modeloVehiculo,
    modeloAnioVehiculo,
    placasVehiculo,
        ]
let string = JSON.stringify(todosCampos);
localStorage.setItem("Campos", string);
    //******************* *********/

      if (imprimir) {
        wspFrame.focus();
        wspFrame.print();
    }
}



function llenarComprobacion({ imprimir = false } = {}) {
    
    let unidadResponsable = document.getElementById('idUnidadAdministrativa').value;
    let nombreUr = document.getElementById('nombrecargoUr').value;
    let cargoUr = document.getElementById('cargoUr').value;
    let numeroOficio = document.getElementById('numOficio').value;
    let fechaDocumento = document.getElementById('documentDate').value;
    let autorizaNombre = document.getElementById('autorizaNombre').value;
    let autorizaCargo = document.getElementById('autorizaCargo').value;

    let lugarComision1 = document.getElementById('ShowCiudad1').textContent;
    let lugarComision2 = document.getElementById('ShowCiudad2').textContent;

    let descripcionDetalles = document.getElementById('descripcionDetalles').value;

    let duracionDias = document.getElementById('duracionDias').value; 

    let fechaRsalida = document.getElementById('fechaRSalida').value;
    let fechaRRetorno = document.getElementById('fechaRRetorno').value;

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

    let estadoLiquidacion = document.getElementById('liquidacionC');

    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let cargoUsuario = document.getElementById('cargoUsuario').value;
    let fecha_Dcomprobacion = document.getElementById('fecha_Dcomprobacion').value;
    let duraciondiasC = document.getElementById('duracion_Comprobacion').value;
    const iframe3 = document.getElementById("frame3");

    iframe3.contentWindow.document.getElementById('f3_uRes').innerHTML = unidadResponsable;
    iframe3.contentWindow.document.getElementById('f3_nombreCargoUr').innerHTML = nombreUr;
    iframe3.contentWindow.document.getElementById('f3_cargoUr').innerHTML = cargoUr;

    iframe3.contentWindow.document.getElementById('f3_numOf').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+numeroOficio +"/"+ new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric"});
    iframe3.contentWindow.document.getElementById("f3_fechaD").innerHTML =  new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"})
    if (lugarComision2 != "") {
        iframe3.contentWindow.document.getElementById("f3_lugarC").innerHTML = lugarComision1 + '&nbsp; y &nbsp; '+ lugarComision2;
    } else {
        iframe3.contentWindow.document.getElementById("f3_lugarC").innerHTML = lugarComision1;
    }
    iframe3.contentWindow.document.getElementById("f3_detalles").innerHTML = descripcionDetalles;
    iframe3.contentWindow.document.getElementById("f3_fechaRSalida").innerHTML = new Date(fechaRsalida).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"});
    iframe3.contentWindow.document.getElementById("f3_fechaRRetorno").innerHTML = new Date(fechaRRetorno).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"});

    if (duraciondiasC == 1) {
        iframe3.contentWindow.document.getElementById("f3_DuracionDiasLetra").innerHTML = nLetra(duraciondiasC) +" día";
    }else{
        iframe3.contentWindow.document.getElementById("f3_DuracionDiasLetra").innerHTML = nLetra(duraciondiasC) +" días";
    }
    //vehiculo
    iframe3.contentWindow.document.getElementById("f3_duracionD").innerHTML = duraciondiasC;
    iframe3.contentWindow.document.getElementById("f3_tipoVehiculo").innerHTML = "&nbsp;&nbsp;"+"&nbsp;Vehículo "+ tipoVehiculo;
    iframe3.contentWindow.document.getElementById("f3-MarcaVehiculo").innerHTML = marcaVehiculo;
    iframe3.contentWindow.document.getElementById("f3-ModeloVehiculo").innerHTML = modeloVehiculo;
    iframe3.contentWindow.document.getElementById("f3-AnioVehiculo").innerHTML = modeloAnioVehiculo;
    iframe3.contentWindow.document.getElementById("f3-PlacasVehiculo").innerHTML = placasVehiculo;

    //Gastos de cmision
    iframe3.contentWindow.document.getElementById("f3_alAnt").innerHTML = alAnt == 0 ? "$ -" :  "$   "+numeral(alAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_hosAnt").innerHTML = hosAnt == 0 ? "$ -" :  "$   "+numeral(hosAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_peaAnt").innerHTML = peaAnt == 0 ? "$ -" :  "$   "+numeral(peaAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_comAnt").innerHTML = comAnt == 0 ? "$ -" :  "$   "+numeral(comAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_pasAnt").innerHTML = pasAnt == 0 ? "$ -" :  "$   "+numeral(pasAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_otrosAnt").innerHTML = otrosAnt == 0 ? "$ -" :  "$   "+numeral(otrosAnt).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_sumAnt").innerHTML = sumAnt == 0 ? "$ -" :  "$   "+numeral(sumAnt).format('0,0.00');

    iframe3.contentWindow.document.getElementById("f3_aldev").innerHTML = aldev == 0 ? "$ -" :  "$   "+numeral(aldev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_hosdev").innerHTML = hosdev == 0 ? "$ -" :  "$   "+numeral(hosdev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_peadev").innerHTML = peadev == 0 ? "$ -" :  "$   "+numeral(peadev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_comdev").innerHTML = comdev == 0 ? "$ -" :  "$   "+numeral(comdev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_pasdev").innerHTML = pasdev == 0 ? "$ -" :  "$   "+numeral(pasdev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_otrosdev").innerHTML = otrosdev == 0 ? "$ -" :  "$   "+numeral(otrosdev).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_sumdev").innerHTML = sumdev == 0 ? "$ -" :  "$   "+numeral(sumdev).format('0,0.00');

    iframe3.contentWindow.document.getElementById("f3_aldif").innerHTML = aldif == 0 ? "$ -" :  "$   "+numeral(aldif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_hosdif").innerHTML = hosdif == 0 ? "$ -" :  "$   "+numeral(hosdif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_peadif").innerHTML = peadif == 0 ? "$ -" :  "$   "+numeral(peadif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_comdif").innerHTML = comdif == 0 ? "$ -" :  "$   "+numeral(comdif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_pasdif").innerHTML = pasdif == 0 ? "$ -" :  "$   "+numeral(pasdif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_otrosdif").innerHTML = otrosdif == 0 ? "$ -" :  "$   "+numeral(otrosdif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_sumdif").innerHTML = sumdif == 0 ? "$ -" :  "$   "+numeral(sumdif).format('0,0.00');
    iframe3.contentWindow.document.getElementById("f3_total").innerHTML = "$   "+numeral((sumdif)).format('0,0.00');
    console.log(sumdif*(-1));

    if (sumdif>0 || sumdif == 0) {
        iframe3.contentWindow.document.getElementById("f3_sumafinalLetra").innerHTML = "("+ NumeroALetras(sumdif) +" 00/100 M.N)";
    }else{
        iframe3.contentWindow.document.getElementById("f3_sumafinalLetra").innerHTML = "("+ NumeroALetras(sumdif*(-1)) +" 00/100 M.N)";
    }

    switch (estadoLiquidacion.selectedIndex) {
        case 1:
            iframe3.contentWindow.document.getElementById("f3_recibido").innerHTML="X";
            iframe3.contentWindow.document.getElementById("f3_entregado").innerHTML="";
            break;
        case 2:
            iframe3.contentWindow.document.getElementById("f3_entregado").innerHTML="X";
            iframe3.contentWindow.document.getElementById("f3_recibido").innerHTML="";
            break;
        case 3:
            iframe3.contentWindow.document.getElementById("f3_entregado").innerHTML="";
            iframe3.contentWindow.document.getElementById("f3_recibido").innerHTML="";
        default:
            break;
    }

    if (autorizaNombre == "Dra. Mariana Gudiño Paredes") {
        iframe3.contentWindow.document.getElementById("f3_textoDependeUr").innerHTML = "de la/ a la "+autorizaNombre+", "+autorizaCargo+", la cantidad de:";
    } else {
        iframe3.contentWindow.document.getElementById("f3_textoDependeUr").innerHTML = "del / al "+autorizaNombre+", "+autorizaCargo+", la cantidad de:"
    }

    iframe3.contentWindow.document.getElementById("f3_nombreUrf").innerHTML=nombreUr;
    iframe3.contentWindow.document.getElementById("f3_cargoUrf").innerHTML=cargoUr;

    iframe3.contentWindow.document.getElementById("f3_nombreUsuarioR").innerHTML=nombreUsuario;
    iframe3.contentWindow.document.getElementById("f3_cargoUsuarioR").innerHTML=cargoUsuario;
    iframe3.contentWindow.document.getElementById("f3_fechaf").innerHTML=new Date(fecha_Dcomprobacion).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"});

//IMPRIMIR EN PANTALLA PDF VISUALIZADOR DE NAVEGADOR -- PARA GUARDAR O IMPRIMIR
    let wspFrame = document.getElementById('frame3').contentWindow;
    document.getElementById('titleHome').textContent = "Comprobación " + numeroOficio + " " + lugarComision1;

    if (imprimir) {
        wspFrame.focus();
        wspFrame.print();
    }
}

function llenarGastosRurales({ imprimir = false } = {}) {
    const iframe4 = document.getElementById("frame4");

    let unidadResponsable = document.getElementById('idUnidadAdministrativa').value;
    let nombreUr = document.getElementById('nombrecargoUr').value;
    let cargoUr = document.getElementById('cargoUr').value;

    let numeroOficio = document.getElementById('numOficio').value;
    let fechaDocumento = document.getElementById('documentDate').value;
    let lugarComision1 = document.getElementById('ShowCiudad1').textContent;
    let lugarComision2 = document.getElementById('ShowCiudad2').textContent;

    let fechaRsalida = document.getElementById('fechaRSalida').value;
    let fechaRRetorno = document.getElementById('fechaRRetorno').value;

    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let cargoUsuario = document.getElementById('cargoUsuario').value;

    let gastosRurales = document.getElementById('gastosRurales').value;
    let fecha_Dcomprobacion = document.getElementById('fecha_Dcomprobacion').value;

    iframe4.contentWindow.document.getElementById('f4_uRes').innerHTML = unidadResponsable
    iframe4.contentWindow.document.getElementById('f4_nombreUr').innerHTML = nombreUr
    iframe4.contentWindow.document.getElementById('f4_cargoUr').innerHTML = cargoUr
    iframe4.contentWindow.document.getElementById('f4_numOf').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+numeroOficio +"/"+ new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric"});
    iframe4.contentWindow.document.getElementById("f4_fechaD").innerHTML =  new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"})
    
    if (lugarComision2 != "") {
        iframe4.contentWindow.document.getElementById("f4_lugarC").innerHTML = lugarComision1 + '&nbsp; y &nbsp; '+ lugarComision2;
    } else {
        iframe4.contentWindow.document.getElementById("f4_lugarC").innerHTML = lugarComision1;
    }

    if (new Date(fechaRsalida).toLocaleDateString('es-mx', {timeZone: 'UTC', month:"numeric"}) == new Date(fechaRRetorno).toLocaleDateString('es-mx', {timeZone: 'UTC', month:"numeric"}) ) {

        if (new Date(fechaRsalida).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) == new Date(fechaRRetorno).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"})) {
            iframe4.contentWindow.document.getElementById('f4_fechaConsumo').innerHTML = 
            new Date(fechaRsalida).toLocaleDateString('es-mx', {timeZone: 'UTC',month:"long", day:"numeric"})+" de "+
            new Date(fechaRRetorno).toLocaleDateString('es-mx', {timeZone: 'UTC',year:"numeric"});
        }else{
            iframe4.contentWindow.document.getElementById('f4_fechaConsumo').innerHTML = 
            "Del "+ new Date(fechaRsalida).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) +" al "
            + new Date(fechaRRetorno).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+
            new Date(fechaRRetorno).toLocaleDateString('es-mx', { year:"numeric"});
        }
    } else {
        iframe4.contentWindow.document.getElementById('f4_fechaConsumo').innerHTML = 
        "Del "+ new Date(fechaRsalida).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" al "
        + new Date(fechaRRetorno).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+
        new Date(fechaRRetorno).toLocaleDateString('es-mx', { year:"numeric"});
    }

    iframe4.contentWindow.document.getElementById("f4_nombreUrf").innerHTML=nombreUr;
    iframe4.contentWindow.document.getElementById("f4_cargoUrf").innerHTML=cargoUr;
    iframe4.contentWindow.document.getElementById("f4_nombreUsuario").innerHTML=nombreUsuario;
    iframe4.contentWindow.document.getElementById("f4_cargoUsuario").innerHTML=cargoUsuario;
    iframe4.contentWindow.document.getElementById("f4_fechaDrural").innerHTML=new Date(fecha_Dcomprobacion).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"});

    iframe4.contentWindow.document.getElementById("f4_gastoR").innerHTML= gastosRurales == 0 ? "$ -" :  "$   "+numeral(gastosRurales).format('0,0.00');
    iframe4.contentWindow.document.getElementById("f4_gastoRnumero").innerHTML= "("+ NumeroALetras(gastosRurales) +" 00/100 M.N)";

    //IMPRIMIR EN PANTALLA PDF VISUALIZADOR DE NAVEGADOR -- PARA GUARDAR O IMPRIMIR
    let wspFrame = document.getElementById('frame4').contentWindow;
    document.getElementById('titleHome').textContent = "Gastos Rurales " + numeroOficio + " " + lugarComision1;

    if (imprimir) {
        wspFrame.focus();
        wspFrame.print();
    }
}

function llenarTarjetaInformativa({ imprimir = false } = {}) {
    const iframe5 = document.getElementById("frame5");

    let numeroOficio = document.getElementById('numOficio').value;
    let fechaDocumento = document.getElementById('fecha_Dcomprobacion').value;
    let nombreUr = document.getElementById('nombrecargoUr').value;
    let cargoUr = document.getElementById('cargoUr').value;
    let lugarComision1 = document.getElementById('ShowCiudad1').textContent;
    let lugarComision2 = document.getElementById('ShowCiudad2').textContent;

    let fechaRsalida = document.getElementById('fechaRSalida').value;
    let fechaRRetorno = document.getElementById('fechaRRetorno').value;
    
    let descripcion = document.getElementById('DescripcionI').value;
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let cargoUsuario = document.getElementById('cargoUsuario').value;

    iframe5.contentWindow.document.getElementById("f5_fechaDoc").innerHTML = "Morelia, Mich. a "+new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric", month:"long", day:"numeric"})
    iframe5.contentWindow.document.getElementById('f5_urNombre').innerHTML = nombreUr+"<br>"+cargoUr;
    iframe5.contentWindow.document.getElementById("f5_numeroOficio").innerHTML = numeroOficio +"/"+ new Date(fechaDocumento).toLocaleDateString('es-mx', {timeZone: 'UTC',  year:"numeric"});

    iframe5.contentWindow.document.getElementById('f5_descripcionI').innerHTML = descripcion;
    iframe5.contentWindow.document.getElementById('f5_usuarioNombre').innerHTML = nombreUsuario;
    iframe5.contentWindow.document.getElementById('f5_usuarioCargo').innerHTML = cargoUsuario;

    if (lugarComision2 != "") {
        iframe5.contentWindow.document.getElementById("f5_LugarC").innerHTML = lugarComision1 + '&nbsp; y &nbsp; '+ lugarComision2;
    } else {
        iframe5.contentWindow.document.getElementById("f5_LugarC").innerHTML = lugarComision1;
    }
    

    if (new Date(fechaRsalida).toLocaleDateString('es-mx', {timeZone: 'UTC', month:"numeric"}) == new Date(fechaRRetorno).toLocaleDateString('es-mx', {timeZone: 'UTC', month:"numeric"}) ) {

        if (new Date(fechaRsalida).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) == new Date(fechaRRetorno).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"})) {
            iframe5.contentWindow.document.getElementById('f5_fechaComision').innerHTML = 
            new Date(fechaRsalida).toLocaleDateString('es-mx', {timeZone: 'UTC',month:"long", day:"numeric"})+" de "+
            new Date(fechaRRetorno).toLocaleDateString('es-mx', {timeZone: 'UTC',year:"numeric"});
        }else{
            iframe5.contentWindow.document.getElementById('f5_fechaComision').innerHTML = 
            "Del "+ new Date(fechaRsalida).toLocaleDateString('es-mx', {timeZone: 'UTC', day:"numeric"}) +" al "
            + new Date(fechaRRetorno).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+
            new Date(fechaRRetorno).toLocaleDateString('es-mx', { year:"numeric"});
        }
    } else {
        iframe5.contentWindow.document.getElementById('f5_fechaComision').innerHTML = 
        "Del "+ new Date(fechaRsalida).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" al "
        + new Date(fechaRRetorno).toLocaleDateString('es-mx', {timeZone: 'UTC',  month:"long", day:"numeric"}) +" de "+
        new Date(fechaRRetorno).toLocaleDateString('es-mx', { year:"numeric"});
    }
        
    //IMPRIMIR EN PANTALLA PDF VISUALIZADOR DE NAVEGADOR -- PARA GUARDAR O IMPRIMIR
    let wspFrame = document.getElementById('frame5').contentWindow;
    document.getElementById('titleHome').textContent = "Tarjeta Informativa " + numeroOficio + " " + lugarComision1;

   if (imprimir) {
        wspFrame.focus();
        wspFrame.print();
    }
}

// Event listeners
/*
document.addEventListener('DOMContentLoaded', function() {
    // Reemplazar el event listener existente
    const btnViewer = document.getElementById('ViewerTodosPDF');
    if (btnViewer) {
        btnViewer.addEventListener('click', function() {
            mostrarTodosPDFs({
                actualizarDatos: true,
                abrirEnNuevaVentana: true,
                disposicion: 'grid'
            });
        });
    }
});
*/

/*
// Event listener para el botón existente
document.addEventListener('DOMContentLoaded', function() {
    const btnViewer = document.getElementById('ViewerTodosPDF');
    if (btnViewer) {
        btnViewer.addEventListener('click', mostrarTodosPDFsSimple);
    }
});
*/

/**
 * Función principal que orquesta la impresión de los 5 documentos.
 * @param {string} id - El ID del documento de viáticos a cargar.
 */
function mostrarTodosPDFs(id) {
    console.log("Iniciando proceso de impresión para todos los documentos con ID:", id);
    
    // 1. Carga los datos y rellena los 5 iframes en segundo plano
    // La función loadViaticos ya debe estar disponible en tu script
    loadViaticos(id, false, allData); 
    llenarTodosLosIframes();

    // 2. Prepara la vista de impresión en la página actual y lanza el diálogo
    prepararYMostrarImpresion();
}

/**
 * Ejecuta todas las funciones de llenado de datos sin activar la impresión.
 * Es un paso necesario para asegurar que los iframes tengan el contenido correcto.
 */
function llenarTodosLosIframes() {
    console.log("Rellenando todos los iframes en segundo plano...");
    llenarOficio();
    llenarRecibo();
    llenarComprobacion();
    llenarGastosRurales();
    llenarTarjetaInformativa();
}

/**
 * Manipula el DOM para crear una vista de impresión temporal,
 * llama al diálogo de impresión y luego restaura la página.
 */
function prepararYMostrarImpresion() {
    // Lista de los iframes de origen
    const iframesInfo = [
        { id: "frame1" }, { id: "frame2" }, { id: "frame3" },
        { id: "frame4" }, { id: "frame5" }
    ];

    // --- Paso 1: Crear el contenedor de impresión y sus estilos ---
    const printContainer = document.createElement('div');
    printContainer.id = 'vista-impresion-temporal';

    const printStyles = document.createElement('style');
    printStyles.id = 'estilos-impresion-temporal';
    printStyles.innerHTML = `
        /* Oculta todo en la página EXCEPTO nuestro contenedor cuando se imprime */
        @media print {
            body > *:not(#vista-impresion-temporal) {
                display: none !important;
            }
            #vista-impresion-temporal {
                display: block !important;
            }
            .pagina-imprimible {
                page-break-after: always; /* ¡La clave para separar páginas! */
                page-break-inside: avoid;
            }
            .pagina-imprimible:last-child {
                page-break-after: auto; /* Evita una página en blanco al final */
            }
        }
    `;
    
    // --- Paso 2: Copiar el contenido de cada iframe al contenedor ---
    iframesInfo.forEach(info => {
        const iframeOriginal = document.getElementById(info.id);
        if (iframeOriginal) {
            const contenidoHTML = iframeOriginal.contentDocument.documentElement.innerHTML;
            const pagina = document.createElement('div');
            pagina.className = 'pagina-imprimible';
            pagina.innerHTML = contenidoHTML;
            printContainer.appendChild(pagina);
        }
    });

    // --- Paso 3: Ocultar la vista principal y mostrar la de impresión ---
    const mainContent = document.querySelector('main');
    const headerContent = document.querySelector('header');
    mainContent.style.display = 'none';
    headerContent.style.display = 'none';

    document.head.appendChild(printStyles);
    document.body.appendChild(printContainer);

    // --- Paso 4: Llamar al diálogo de impresión del navegador ---
    window.print();

    // --- Paso 5: Limpiar y restaurar la vista original ---
    // Se usa un pequeño retraso para asegurar que el proceso de impresión se haya manejado.
    setTimeout(() => {
        if (document.body.contains(printContainer)) {
            document.body.removeChild(printContainer);
        }
        if (document.head.contains(printStyles)) {
            document.head.removeChild(printStyles);
        }
        mainContent.style.display = 'block'; // O 'flex', etc., según tu layout
        headerContent.style.display = 'block';
    }, 500);
}




// Exponer funciones globalmente
window.mostrarTodosPDFs = mostrarTodosPDFs;


