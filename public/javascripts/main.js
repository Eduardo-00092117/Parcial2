mostrar();

function mostrar(){
    fetch('/api/Navegadores_web', {
            method: 'GET'
        }
    ).then(res => res.json())
    .then(data => {
        let filas = '';
        data.forEach(element => {
            filas = filas `<tr>
            <td>${element.nombre}</td>
            <td>${element.nombre}</td>
            <td>${element.nombre}</td>
            </tr>`
        });
        document.querySelector('#fila').innerHTML = filas;
        alert('werwer');
    })
}