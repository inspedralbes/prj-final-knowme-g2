export function registerUser(user) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then( response => {
            if (response.status == 201) {
                console.log('Usuari registrat');
                // Parsear la respuesta JSON
                return response.json();
            } else {
                console.log(response);
                reject('Error al registrar usuari');
            }
        }).then(data => {
            // Resolver la promesa con los datos obtenidos del servidor
            resolve(data);
            // console.log(data.user);
            // console.log(data.token);
        }).catch(error => {
            // Rechazar la promesa en caso de cualquier error durante la solicitud fetch
            reject(error);
        });
    });
}

export function loginUser(user) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then (response => {
            if (response.status == 201) {
                console.log('Usuari loguejat');
            } else if (response.status == 401) {
                reject('Credencials incorrectes');
            } else {
                reject('Error al loguejar-se');
            }
        }).then (data => {   
            resolve(data);         
            console.log(data.user);
            console.log(data.token);
        }).catch(error => {
            reject(error);
        });
    });
}
