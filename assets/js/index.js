import { propertiesArriendo, propertiesVenta} from './data/propiedades.js'

// Función para renderizar propiedades
const renderizarPropiedades = (propiedades, contenedorId) => {
    const contenedor = document.getElementById(contenedorId)

    // Limpiar solo el contenido interno de las cards sin eliminar la clase 'row'
    contenedor.innerHTML = ''

    propiedades.forEach(propiedad => {
        // Crear el div de la columna (Bootstrap)
        const divCard = document.createElement('div')
        divCard.classList.add('col-md-4', 'mb-4'); // Ocupa 1/3 del ancho en pantallas medianas

        // Contenido HTML de la card
        const cardContent = `
            <div class="card">
                <img src="${propiedad.imageUrl}" class="card-img-top" alt="Imagen de la propiedad" />
                <div class="card-body">
                    <h5 class="card-title">${propiedad.titulo}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} habitaciones</p>
                    <p><i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> $${propiedad.precio}</p>
                    <p class="${propiedad.fumadores ? 'text-success' : 'text-danger'}">
                        <i class="fas ${propiedad.fumadores ? 'fa-smoking' : 'fa-smoking-ban'}"></i> 
                        ${propiedad.fumadores ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedad.mascotas ? 'text-success' : 'text-danger'}">
                        <i class="fas ${propiedad.mascotas ? 'fa-paw' : 'fa-ban'}"></i> 
                        ${propiedad.mascotas ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        `;

        // Asignar el contenido HTML al div de la card
        divCard.innerHTML = cardContent

        // Agregar la card al contenedor
        contenedor.appendChild(divCard)
    });
};



// Solo mostrar 3 propiedades
const propiedadesMostrar = {
    venta: propertiesVenta.slice(0, 3),
    alquiler: propertiesArriendo.slice(0, 3)
  }
  
  // Llamar la función de renderizado para cada sección
  renderizarPropiedades(propiedadesMostrar.venta, 'properties-for-sale')
  renderizarPropiedades(propiedadesMostrar.alquiler, 'properties-for-rent')