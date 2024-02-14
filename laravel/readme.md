# LARAVEL API

En la api se ecnuentran diferentes tablas a las cuales acceder:
    - Users_api (funcional, todo correcto)
    - Domains (funcional, todo correcto)
    - Tags (creada, falta comprobar)
    - domain_tag (creada, falta comprobar)

Las tablas estan relacionadas entre ellas,
    en Domains se guarda el "user_id" de la persona que crea su web(dominio).
    en domain_tag se guarda el ide de dominio y ide de tag por cada que se relacionan siendo esta tabla una table "PIVOTE".

## Rutas
    Publicas --> 👀
        Hay 4 rutas públicas:
            ### Users:
                - /register --> http://127.0.0.1:8000/api/register --> Method: POST
                    #### Parámetros
                        Todos los campos son NECESARIOS, además de user y email ser UNIQUE. Contraseña min. 8 caracteres una minúscula, una mayúscula y un número.
                        json {
                            'user': 'exampleUser',
                            'name': 'exampleName',
                            'surnames': 'exampleSurnames',
                            'email': 'exampleEmail@gmail.com',
                            'password': 'examplePassword1',
                            'password_confirmation': 'examplePassword1'
                        }
                    #### Respuesta
                        json --> data {
                                    'user' = {
                                        'user': 'exampleUser',
                                        'name': 'exampleName',
                                        'surnames': 'exampleSurnames',
                                        'email': 'exampleEmail@gmail.com',
                                        'id': 1
                                    },
                                    'token'=> '1|6SKsuaoILMeBcfMr8iOaziz3KAsa7BKmrDa8Xuml6e73618a'
                                }
                - /login --> http://127.0.0.1:8000/api/login --> Method: POST
                    Los parámetros son Obligatorios.
                    En caso de que la contraseña sea incorrecta o que el usuario no exista se devuelve error 401, 'Credencials incorrectes'.
                    #### Parámetros
                        json {
                            'user': 'exampleUser',
                            'password': 'examplePassword1'
                        }
                    #### Respuesta
                        json --> data {
                                    'user' = {
                                        'user': 'exampleUser',
                                        'name': 'exampleName',
                                        'surnames': 'exampleSurnames',
                                        'email': 'exampleEmail@gmail.com',
                                        'id': 1
                                    },
                                    'token'=> '1|6SKsuaoILMeBcfMr8iOaziz3KAsa7BKmrDa8Xuml6e73618a'
                                }
            ### Domains:
                - /domains --> http://localhost:8000/api/domains --> Method: GET
                    #### Parámetros
                        No hace falta enviar nada.
                    #### Respuesta
                        Devuelve un array con todos los dominios PÚBLICOS, de los dominios devuelve solo el id, webURL, y category.
                        json --> data [
                            0: {   
                                'category': 'exampleCategory',
                                'id': 1
                                'webURL': 'exampleWeb.com'
                            }
                        ]
                - /domains/{id} --> http://localhost:8000/api/domains/${id} --> Method: GET
                    #### Parámetros
                        En el propio enlace se envia el parámetro necesario en este caso el ID del DOMINIO a buscar. Ejemplo: http://localhost:8000/api/domains/1.
                    #### Respuesta
                        json --> data {
                            'domini': {
                                'webURL': 'exampleWeb.com',
                                'content': 'contentExample',
                                'category': 'exampleCategory',
                                'isPublic': 1,
                                'id': 1
                            }
                        }
    Privadas --> 🔏
        Hay 7 rutas privadas:
            ### Users:
                - /logout --> http://localhost:8000/api/logout --> Method: POST
                    #### Parámetros
                        Se debe enviar el token de la persona que quiere cerrar sesión.
                        EJEMPLO -->
                            headers: { 
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token
                            }
                    #### Respuesta
                        No devuelve nada.
                - /users/update --> http://localhost:8000/api/users/update --> Method: PUT
                    #### Parámetros
                        Se debe enviar el token del usuario que quiere modificar sus datos y los datos a modificar.
                        Solo se pueden modificar los campos name, surnames y user.
                        EJEMPLO -->
                            headers: { 
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token
                            }
                            json {
                                'user': 'exampleUser',
                                'name': 'exampleName',
                                'surnames': 'exampleSurnames'
                            }
                    #### Respuesta
                        json --> data {
                            'user': {
                                'user': 'exampleUser',
                                'name': 'exampleName',
                                'surnames': 'exampleSurnames',
                                'email': 'exampleEmail@gmail.com'
                            },
                            'message': 'User updated!'
                        }
                - /users/changePassword --> http://localhost:8000/api/users/changePassword --> Method: PUT
                    #### Parámetros
                        Se debe enviar el token del usuario que quiere modificar su contraseña y la nueva contraseña.
                        EJEMPLO -->
                            headers: { 
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token
                            }
                            json {
                                'oldPassword': 'examplePassword1',
                                'password': 'examplePassword2',
                                'password_confirmation': 'examplePassword2'
                            }
                    #### Respuesta
                        En caso de que la contraseña antigua sea incorrecta devuelve error 401, 'Old password incorrect'.
                        json --> data {
                            'message': 'Password updated!'
                        }
                - /users/delete --> http://localhost:8000/api/users/delete --> Method: DELETE
                    #### Parámetros
                        Se debe enviar el token del usuario que quiere eliminar su cuenta.
                        EJEMPLO -->
                            headers: { 
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token
                            }
                    #### Respuesta
                        Al eliminar el usuario se elimina también el dominio/web que haya creado.
                        json --> data {
                            'message': 'User deleted!'
                        }
            ### Domains:
                - /domains --> http://localhost:8000/api/domains --> Method: POST
                    #### Parámetros
                        Se debe enviar el token del usuario que quiere crear un dominio/web y los datos del dominio/web.
                        Todos los campos son NECESARIOS. Además de webURL ser UNIQUE.
                        EJEMPLO -->
                            headers: { 
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token
                            }
                            json {
                                'webURL': 'exampleWeb.com',
                                'content': 'contentExample',
                                'category': 'exampleCategory',
                                'isPublic': 1
                            }
                    #### Respuesta
                        En caso de que el token no sea valido no te deja acceder a la ruta. Error 500.
                        Si tienes ya un dominio creado te devuelve error 403, 'Ja tens un portfoli creat!'.
                        json --> data {
                            'domain': {
                                'webURL': 'exampleWeb.com',
                                'content': 'contentExample',
                                'category': 'exampleCategory',
                                'isPublic': 1,
                                'id': 1
                            },
                            'user': {
                                'user': 'exampleUser',
                                'name': 'exampleName',
                                'surnames': 'exampleSurnames',
                                'email': 'exampleEmail@gmail.com'
                            },
                            'id_user': 1
                        }
                - /domains/update --> http://localhost:8000/api/domains/update --> Method: PUT
                    #### Parámetros
                        Se debe enviar el token del usuario que quiere modificar su dominio/web y los datos a modificar.
                        Solo se pueden modificar los campos webURL, content, category y isPublic.
                        EJEMPLO -->
                            headers: { 
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token
                            }
                            json {
                                'webURL': 'exampleWeb.com',
                                'content': 'contentExample',
                                'category': 'exampleCategory',
                                'isPublic': 1
                            }
                    #### Respuesta
                        json --> data {
                            'domain': {
                                'webURL': 'exampleWeb.com',
                                'content': 'contentExample',
                                'category': 'exampleCategory',
                                'isPublic': 1,
                                'id': 1
                            },
                            'user': {
                                'user': 'exampleUser',
                                'name': 'exampleName',
                                'surnames': 'exampleSurnames',
                                'email': 'exampleEmail@gmail.com'
                            }
                        }
                - /domains/delete --> http://localhost:8000/api/domains/delete --> Method: DELETE
                    #### Parámetros
                        Se debe enviar el token del usuario que quiere eliminar su dominio/web.
                        EJEMPLO -->
                            headers: { 
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token
                            }
                    #### Respuesta
                        Si el usuario al cual pertenence el token no tiene un dominio creado devuelve error 403, 'No tens cap portfoli creat!'.
                        json --> data {
                            'message': 'Portfoli eliminat!'
                        }