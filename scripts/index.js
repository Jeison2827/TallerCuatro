const url = "http://localhost:4000/"
let campo = document.querySelector("#obrascard")

const getData = async () => {

    const resp = await fetch(url);
    console.log(resp)

    const data = await resp.json();
    data.forEach(card => {
        const { nombre, imagen, categoria, precio, likes,coleccion,descripcion } = card;
        campo.innerHTML += ` 
        <div class="card">
                <img src="${imagen}" alt="">
                <p style="color:blue; font-weight:bold">${"@" + nombre}</p>
                <p>${precio}</p>
                <p>${"Categoría: " + categoria}</p>
                <p>${"Colección"+coleccion}</p>
                <p>${descripcion}</p>
                <button id="btnlikes" class="btn btn-primary" style="border-radius:50px" onclick="contar()">${likes} Like</button>
            </div> 
        `
    })
}

window.addEventListener('DOMContentLoaded', getData);