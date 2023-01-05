// Data provider: Proveedor de datos: Implementación de data provider, practica para optimizar los datos
// generando un archivo aislado con las constantes y sus respectivos datos
// El propósito de los Data Providers es obtener información jerárquica para
//que quien la necesita pueda luego hacer algo con ella.
// Buscar más info sobre Data providers


import dotenv from 'dotenv'
dotenv.config()
// Se importa la configuración para procesamiento de las variables de ambiente.


export const URL = {
    URL_BASE_TEST: process.env.URL_TEST

}

export const CREDENTIALS = {
    VALID_CREDENTIALS:{
        USER_BASE_TEST: process.env.USER_TEST,
        PASS_BASE_TEST:process.env.PASS_TEST
    },
    INVALID_CREDENTIALS: {
        INVALID_USER_TEST: 'Invalid user',
        INVALID_PASS_TEST: 'Invalid pass'
    }  
}


export const MESSAGES = {
    INVALID_USER_AND_PASS:'Invalid credentials',
    NULL_USER:'Required',
    NULL_PASS:'Required',
    NULL_USER_AND_NULL_PASS: 'Required'
}