    const listaProductos = [{
            id: 1,
            nombre: "HELADERA",
            precioVenta: 90000,
            boton: "comprar-1"
        },
        {
            id: 2,
            nombre: "CALEFACTOR",
            precioVenta: 10000,
            boton: "comprar-2"

        },
        {
            id: 3,
            nombre: "AIRE ACONDICIONADO",
            precioVenta: 100000,
            boton: "comprar-3"
        },
        {
            id: 4,
            nombre: "COMPUTADORA",
            precioVenta: 120000,
            boton: "comprar-4"
        },
        {
            id: 5,
            nombre: "LAVAVAJILLAS",
            precioVenta: 55000,
            boton: "comprar-5"
        },
        {
            id: 4,
            nombre: "TELEVISOR",
            precioVenta: 68000,
            boton: "comprar-6"
        },
    ];

    const contenedorProductos = document.getElementById("contenedor-productos");

    for (const producto of listaProductos) {
        let column = document.createElement("div");
        column.className = "col-md-4 mt-3 ";
        column.id = `columna-${producto.id}`;
        column.innerHTML = `
    <div class="card">
        <div class="card-body">
        <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
        <p class="card-text">Precio venta: <b>${producto.precioVenta}</b></p>
        <button class="btn btn-primary" id=${producto.boton}> ${producto.boton} </button>
        </div>
    </div>`;

        contenedorProductos.append(column);
    }



    let botonUno = document.getElementById("comprar-1")
    botonUno.onclick = () =>{
        console.log(listaProductos[0])
        alert("Usted compró un/a: " + listaProductos[0].nombre + " al precio de: $" + listaProductos[0].precioVenta)
    }

    let botonDos = document.getElementById("comprar-2")
    botonDos.onclick = () =>{
        console.log(listaProductos[1])
        alert("Usted compró un/a: " + listaProductos[1].nombre + " al precio de: $" + listaProductos[1].precioVenta)
    }

    let botonTres = document.getElementById("comprar-3")
    botonTres.onclick = () =>{
        console.log(listaProductos[2])
        alert("Usted compró un/a: " + listaProductos[2].nombre + " al precio de: $" + listaProductos[2].precioVenta)
    }
    let botonCuatro = document.getElementById("comprar-4")
    botonCuatro.onclick = () =>{
        console.log(listaProductos[3])
        alert("Usted compró un/a: " + listaProductos[3].nombre + " al precio de: $" + listaProductos[3].precioVenta)
    }

    let botonCinco = document.getElementById("comprar-5")
    botonCinco.onclick = () =>{
        console.log(listaProductos[4])
        alert("Usted compró un/a: " + listaProductos[4].nombre + " al precio de: $" + listaProductos[4].precioVenta)
    }

    let botonSeis = document.getElementById("comprar-6")
    botonSeis.onclick = () =>{
        console.log(listaProductos[5])
        alert("Usted compró un/a: " + listaProductos[5].nombre + " al precio de: $" + listaProductos[5].precioVenta)
    }


