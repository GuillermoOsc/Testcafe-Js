//Scripts para automatizar login en saucedemo.com
// npm run test (para ejecutar las pruebas)


// El metodo "only" se utiliza para ejecutar un solo test. Ej. test.only('El usuario debe iniciar sesión correctamente', async t => {...
// El metodo "skip" se utiliza para saltar un test en especifico. Ej. test.skip('El usuario debe iniciar sesión correctamente', async t => {...

import loginPage from '../pages/loginPage';
import inventoryPage from '../pages/inventoryPage'
import { URL, CREDENTIALS, MESSAGES } from '../data/constantes'


fixture `Login test suite`
    .page`${URL.URL_BASE_TEST}` // Plantillas literales

// TC-01 El usuario ingresa correctamente los datos en los campos user y password e ingresa a su perfil correctamente
test('El usuario debe iniciar sesión correctamente', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.USER_BASE_TEST,CREDENTIALS.VALID_CREDENTIALS.PASS_BASE_TEST)
    await t.expect(inventoryPage.title.exists).ok()
} )

// TC-02 El usuario ingresó valores incorrectos en los campos user y password
test('Usuario y password incorrectos', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_CREDENTIALS.INVALID_USER_TEST,CREDENTIALS.INVALID_CREDENTIALS.INVALID_PASS_TEST)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.INVALID_USER_AND_PASS) // innerText valida el texto dentro del elemento html
} )

// TC-03 El usuario no ingresó ningún valor en el campo user
test('Campo de usuario vacío', async t => {
    await loginPage.submitLoginForm(null, CREDENTIALS.VALID_CREDENTIALS.PASS_BASE_TEST)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.NULL_USER) 
} )

// TC-04 El usuario no ingresó ningún valor en el campo password
test('Campo de contraseña vacío', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.USER_BASE_TEST, null)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.NULL_PASS) 
} )



// TC-05 El usuario no ingresó ningún valor en los campos user y password
test('Campos de Usuario y contraseña vacíos ', async t => {
    await loginPage.submitLoginForm(null, null)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.NULL_USER_AND_NULL_PASS) 
} )