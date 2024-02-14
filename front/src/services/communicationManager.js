// functions USERS
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
                // console.log('Usuari registrat');
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
        }).then( response => {
            if (response.status == 201) {
                console.log('Usuari loguejat');
                return response.json();
            } else if (response.status == 401) {
                reject('Credencials incorrectes');
            } else {
                reject('Error al loguejar-se');
            }
        }).then( data => {   
            resolve(data);         
            // console.log(data.user);
            // console.log(data.token);
        }).catch(error => {
            reject(error);
        });
    });
}

export function logoutUser(token) {
    console.log(token);
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            
        }).then( response => {
            if (response.status == 200) {
                // console.log('Usuari desloguejat');
                resolve('Usuari desloguejat');
            } else {
                reject('Error al desloguejar-se');
            }
        }).catch(error => {
            reject(error);
        });
    });
}

export function updateUser(user, token) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8000/api/users/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(user)
        }).then( response => {
            if (response.status == 201) {
                // console.log('Usuari actualitzat');
                return response.json();
            } else {
                reject('Error al actualitzar usuari');
            }
        }).then(data => {
            resolve(data);
            // console.log(data);
        }).catch(error => {
            reject(error);
        });
    });
}

export function changePassword(password, token) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8000/api/users/changePassword', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(password)
        }).then( response => {
            if (response.status == 200) {
                // console.log('Contrasenya canviada');
                return response.json();
            } else {
                reject('Error al canviar contrasenya');
            }
        }).then(data => {
            resolve(data);
            // console.log(data.message);
        }).catch(error => {
            reject(error);
        });
    });
}

export function deleteUser(token) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8000/api/users/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then( response => {
            if (response.status == 200) {
                // console.log('Usuari eliminat');
                return response.json();
            } else {
                reject('Error al eliminar usuari');
            }
        }).then(data => {
            resolve(data);
            // console.log(data.message);
        }).catch(error => {
            reject(error);
        });
    });
}

// functions DOMAINS
export function createDomain(domain, token) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8000/api/domains', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(domain)
        }).then( response => {
            if (response.status == 201) {
                console.log('Domini creat');
                return response.json();
            } else if (response.status == 403) {
                reject('Ja tens un portfoli creat!');
            } else {
                reject('Error al crear domini');
            }
        }).then(data => {
            resolve(data);
            // console.log(data);
        }).catch(error => {
            reject(error);
        });
    });
}

export function updateDomain(domain, token) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8000/api/domains/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(domain)
        }).then( response => {
            if (response.status == 201) {
                console.log('Domini actualitzat');
                return response.json();
            } else if (response.status == 403) {
                reject('No tens cap portfoli creat!');
            } else {
                reject('Error al actualitzar domini');
            }
        }).then(data => {
            resolve(data);
            // console.log(data);
        }).catch(error => {
            reject(error);
        });
    });
}

export function deleteDomain(token) {
    return new Promise((resolve, reject) => {
        fetch('http://laravel:8000/api/domains/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then( response => {
            if (response.status == 200) {
                console.log('Domini eliminat');
                return response.json();
            } else if (response.status == 403) {
                reject('No tens cap portfoli creat!');
            } else {
                reject('Error al eliminar domini');
            }
        }).then(data => {
            resolve(data);
            // console.log(data.message);
        }).catch(error => {
            reject(error);
        });
    });
}

export function getDomains() {
    return new Promise((resolve, reject) => {
        fetch('http://web/public/api/domains', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( response => {
            if (response.status == 200) {
                return response.json();
            } else {
                reject('Error al obtenir els dominis');
            }
        }).then(data => {
            resolve(data);
            console.log(data);
        }).catch(error => {
            reject(error);
        });
    });
}

export function showDomain(id) {
    return new Promise((resolve, reject) => {
        fetch(`http://web/public/api/domains/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( response => {
            if (response.status == 200) {
                return response.json();
            } else {
                reject('Error al mostrar el domini');
            }
        }).then(data => {
            resolve(data);
            console.log(data);
        }).catch(error => {
            reject(error);
        });
    });
}

export async function getProbes() {
    const response = await fetch('http://localhost:1337/api/domains',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer a63cadd90d1cbc549966934103895d03cb2ea90f22ff04f3ae3eea150163a1c65d4159e598f280982988fa2733516489f58840ec9465d23a913d3594ccfeaf1a606719fb0e51c07dae7895e362609d05105d07cb72ca3471e7cd4a647c19708c4faffe9f26b597ab653de495815e1ece2252f7f6ca7a5054fc6e5ea4637d6a4b'
        },

    });
    
    const data = await response.json();
    return data.data;
}

export async function getProba(id) {
    const response = await fetch(`http://localhost:1337/api/domains/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer a63cadd90d1cbc549966934103895d03cb2ea90f22ff04f3ae3eea150163a1c65d4159e598f280982988fa2733516489f58840ec9465d23a913d3594ccfeaf1a606719fb0e51c07dae7895e362609d05105d07cb72ca3471e7cd4a647c19708c4faffe9f26b597ab653de495815e1ece2252f7f6ca7a5054fc6e5ea4637d6a4b'
        },

    });
    
    const data = await response.json();
    return data.data;
}

