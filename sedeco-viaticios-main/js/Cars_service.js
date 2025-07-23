import { getAllAutos } from '../db/firebase_config.js';



// Variables globales
        //const cars = await getAllAutos();// Asignar el array de autos desde firebase_config.js
       
       
        const cars = await getAllAutos();

       /*
       const cars = [
        { id: 1, marca: "Toyota", modelo: "Corolla", anio: 2020, placa: "ABC123" },
            { id: 2, marca: "Honda", modelo: "Civic", anio: 2019, placa: "DEF456" },
            { id: 3, marca: "Nissan", modelo: "Sentra", anio: 2021, placa: "GHI789" },
            { id: 4, marca: "Volkswagen", modelo: "Jetta", anio: 2018, placa: "JKL012" },
            { id: 5, marca: "Mazda", modelo: "3", anio: 2022, placa: "MNO345" },
            { id: 6, marca: "Chevrolet", modelo: "Aveo", anio: 2017, placa: "PQR678" },
            { id: 7, marca: "Ford", modelo: "Focus", anio: 2020, placa: "STU901" },
            { id: 8, marca: "Hyundai", modelo: "Elantra", anio: 2021, placa: "VWX234" },
            { id: 9, marca: "Kia", modelo: "Rio", anio: 2019, placa: "YZA567" },
            { id: 10, marca: "Subaru", modelo: "Impreza", anio: 2020, placa: "BCD890" },
            { id: 11, marca: "Mitsubishi", modelo: "Lancer", anio: 2018, placa: "EFG123" },
            { id: 12, marca: "Volvo", modelo: "S60", anio: 2021, placa: "HIJ456" }
       ]
*/
        console.log(cars); // Verificar que los autos se carguen correctamente

 // Variables globales
        let currentPage = 1;
        const itemsPerPage = 6;
        let selectedCar = null;
        let filteredCars = [...cars];
        
        // Elementos del DOM
        const carListElement = document.getElementById('carList');
        const paginationElement = document.getElementById('pagination');
        const searchInput = document.getElementById('searchInput');
        //const confirmBtn = document.getElementById('confirmBtn');
        //const carModal = new bootstrap.Modal(document.getElementById('carModal'));
        
        // Función para renderizar los autos según la página actual
        function renderCars() {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const carsToShow = filteredCars.slice(startIndex, endIndex);
            
            carListElement.innerHTML = '';
            
            if (carsToShow.length === 0) {
                carListElement.innerHTML = `
                    <div class="col-12 text-center py-4">
                        <i class="bi bi-exclamation-circle fs-1 text-muted"></i>
                        <h5 class="mt-3">No se encontraron autos</h5>
                        <p class="text-muted">Intenta con otro término de búsqueda</p>
                    </div>
                `;
                return;
            }
            
            carsToShow.forEach(car => {
                const isSelected = selectedCar && selectedCar.id === car.id;
                const cardClass = isSelected ? 'car-card selected' : 'car-card';
                
                const card = document.createElement('div');
                card.className = 'col-md-4';
                card.innerHTML = `
    <div class="card h-100 ${cardClass}" data-id="${car.id}">
        <div class="card-body">
            <div class="d-flex align-items-start mb-3">
                <i class="fas fa-car fa-2x text-primary me-3 mt-1"></i>
                <div>
                    <h5 class="card-title mb-0">${car.marca} ${car.modelo} ${car.anio}</h5>
                    <p class="text-muted mb-1">${car.placa}</p>
                    <!--<small class="text-muted">Sedán</small>-->
                </div>
            </div>
            <button class="btn btn-sm btn-outline-secondary w-100 mb-2" onclick="selectCar('${car.id}', event)">
                ${isSelected ? '<i class="fas fa-check-circle text-success me-1"></i>' : '<i class="fas fa-check me-1"></i>'}
            </button>
        </div>
    </div>
`;
                carListElement.appendChild(card);
            });
        }
        
        // Función para renderizar la paginación
        function renderPagination() {
            const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
            
            if (totalPages <= 1) {
                paginationElement.innerHTML = '';
                return;
            }
            
            let paginationHTML = '';
            
            // Botón Anterior
            paginationHTML += `
                <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                    <a class="page-link " href="#" onclick="changePage(${currentPage - 1})" aria-label="Previous">
                        <span aria-hidden="true" class="text-primary">&laquo;</span>
                    </a>
                </li>
            `;
            
            // Números de página
            for (let i = 1; i <= totalPages; i++) {
                paginationHTML += `
                    <li class="page-item ${i === currentPage ? 'active' : ''}">
                        <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
                    </li>
                `;
            }
            
            // Botón Siguiente
            paginationHTML += `
                <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                    <a class="page-link" href="#" onclick="changePage(${currentPage + 1})" aria-label="Next">
                        <span aria-hidden="true" class="text-primary">&raquo;</span>
                    </a>
                </li>
            `;
            
            paginationElement.innerHTML = paginationHTML;
        }
        
        // Función para cambiar de página
        function changePage(page) {
            if (page < 1 || page > Math.ceil(filteredCars.length / itemsPerPage)) return;
            currentPage = page;
            renderCars();
            renderPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Función para seleccionar un auto
        function selectCar(carId, event) {
            selectedCar = cars.find(car => car.id === carId);
            renderCars();
            //confirmBtn.disabled = false;

           
            
            // Mostrar tarjeta de confirmación
            const selectedCard = document.getElementById('selectedVehicleCard');
            const selectedTitle = document.getElementById('selectedVehicleTitle');
            const selectedDetails = document.getElementById('selectedVehicleDetails');
            
            selectedTitle.textContent = `${selectedCar.marca} ${selectedCar.modelo} ${selectedCar.anio}`;
            selectedDetails.textContent = `${selectedCar.placa} `;
            selectedCard.style.display = 'block';


             //Insertare valores en los input    
            const marcaVehiculo = document.getElementById('marcaVehiculo');
            const modeloVehiculo = document.getElementById('modeloAuto');
            const anioVehiculo = document.getElementById('modeloAnio');
            const placasVehiculo = document.getElementById('placasInput');
            const idVehiculo = document.getElementById('idVehiculo');
            
            marcaVehiculo.value = selectedCar.marca;
            modeloVehiculo.value = selectedCar.modelo;
            anioVehiculo.value = selectedCar.anio;
            placasVehiculo.value = selectedCar.placa; 
            idVehiculo.value = selectedCar.id; // Asignar el ID del vehículo

            
            // Efecto de scroll suave hacia el botón de confirmar
            if (event) {
                event.preventDefault();
                const carDetailsSelected = document.getElementsByClassName("card-body");
                setTimeout(() => {
                    carDetailsSelected[0].scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 100);
            }
        }
        
        // Función para buscar autos
        function searchCars() {
            const searchTerm = searchInput.value.toLowerCase();
            
            filteredCars = cars.filter(car => 
                car.marca.toLowerCase().includes(searchTerm) ||
                car.modelo.toLowerCase().includes(searchTerm) ||
                car.anio.toString().includes(searchTerm) ||
                car.placa.toLowerCase().includes(searchTerm)
            );
            
            currentPage = 1;
            renderCars();
            renderPagination();
        }


          // Funcion eliminar seleccion
        function deselectCar(carId, event) {
            selectedCar = null;
            renderCars();
            //confirmBtn.disabled = true;

            // Ocultar tarjeta de confirmación
            const selectedCard = document.getElementById('selectedVehicleCard');
            selectedCard.style.display = 'none';

            // Limpiar los inputs
            document.getElementById('marcaVehiculo').value = '';
            document.getElementById('modeloAuto').value = '';
            document.getElementById('modeloAnio').value = '';
            document.getElementById('placasInput').value = '';
            document.getElementById('idVehiculo').value = ''; // Limpiar el ID del vehículo

            // Efecto de scroll suave hacia el botón de confirmar
            if (event) {
                event.preventDefault();
                const carDetailsSelected = document.getElementsByClassName("card-body");
                setTimeout(() => {
                    carDetailsSelected[0].scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 100);
            }
        }
        
        
        // Event listeners
        searchInput.addEventListener('input', searchCars);
        
        /*
        confirmBtn.addEventListener('click', () => {
            if (selectedCar) {
                document.getElementById('modalMarca').textContent = selectedCar.marca;
                document.getElementById('modalModelo').textContent = selectedCar.modelo;
                document.getElementById('modalAnio').textContent = selectedCar.anio;
                document.getElementById('modalPlaca').textContent = selectedCar.placa;
                carModal.show();
            }
        });
        */
        
        /*
        document.getElementById('finalConfirm').addEventListener('click', () => {
            alert(`Auto confirmado: ${selectedCar.marca} ${selectedCar.modelo} (${selectedCar.placa})`);
            carModal.hide();
        });
        */



      
        // Inicializar
        renderCars();
        renderPagination();

        // Modules cuando se importa 
        window.selectCar = selectCar;
        window.changePage = changePage;
        window.deselectCar = deselectCar;