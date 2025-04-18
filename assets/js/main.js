function renderCasas(casas, contenedor, max = 3){
    const cont = document.querySelector(contenedor)
    let html = ""
    for (let i = 0; i < Math.min(max, casas.length); i++){
        const casa = casas[i]; 
        html +=`
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${casa.src}"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">${casa.nombre}</h5>
                <p class="card-text">${casa.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${casa.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${casa.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${casa.baños} Baños </p>
                <p><i class="fas fa-dollar-sign"></i> ${casa.costo}</p>
                <p class="${casa.smoke ? 'text-success' : 'text-danger'}">
                <i class="${casa.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> 
                ${casa.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="${casa.pets ? 'text-success' : 'text-danger'}">
                <i class="${casa.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> 
                ${casa.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </p>
                </p>
              </div>
            </div>
          </div>`
    }
    cont.innerHTML = html
}

renderCasas(propiedadesEnVenta, ".props-venta")
renderCasas(propiedadesAlquiler, ".props-alquiler")