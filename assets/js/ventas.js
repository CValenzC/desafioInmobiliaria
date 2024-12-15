import { propertiesVenta} from './data/propiedades.js'

const renderizarPropiedades = (propiedades, contenedorId) => {
    const contenedor = document.getElementById(contenedorId)
    contenedor.innerHTML = '' 

    propiedades.forEach(propiedad => {
        const divCard = document.createElement('div')
        divCard.classList.add('col-md-4', 'mb-4')

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
        `

        divCard.innerHTML = cardContent
        contenedor.appendChild(divCard)
    })
};

 
renderizarPropiedades(propertiesVenta, 'properties-for-sale')