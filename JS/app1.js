const dep = document.getElementById('btnDep');
dep.addEventListener('click', () => {
    let cadena = "";
    let total = document.getElementById('depe').value;
    for (i = 0; i < total; i++)
        cadena = cadena + ` 
        <form class="form">
        <label for="campo_${i}">nombre<br>
        <input id="campo_${i}">
        </label>
        <label for="campo${i}">edad
        <input id="campo_e${i}">
        </label>
        </form>`
    document.getElementById('campos').innerHTML = cadena;
})


const btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    let celular = document.getElementById('celular').value;
    let edad = document.getElementById('edad').value;
    let activo = document.getElementById('activo').value;
    let email = document.getElementById('email').value;
    let total = document.getElementById('depe').value;
    let depe = [];
    for (let i = 0; i < total; i++) {
        let nombre = document.getElementById(`campo_${i}`).value
        let edad = document.getElementById(`campo_e${i}`).value
        depe.push({ nombre: nombre, edad: edad })
    }
    let datos = {
        nombre: nombre,
        celular: celular,
        edad: edad,
        activo: activo,
        email: email,
        dependientes: depe
    }


    console.log(datos);

    fetch('http://localhost:3000/api/contactos/', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

})