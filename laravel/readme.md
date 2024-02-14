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
                - /register --> http://127.0.0.1:8000/api/register
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

    Privadas --> 🔏