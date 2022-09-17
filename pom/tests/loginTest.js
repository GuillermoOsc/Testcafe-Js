//Scripts para automatizar login en saucedemo.com

import loginPage from '../pages/loginPage';
import inventoryPage from '../pages/inventoryPage'
import dotenv from 'dotenv'

dotenv.config() // Se importa la configuración para procesamiento de las variables de ambiente.

fixture `Login test suite`
    .page`${process.env.URL_TEST}` // Plantillas literales

test('El usuario debe iniciar sesión correctamente', async t => {
    await loginPage.submitLoginForm(process.env.USER_TEST,process.env.PASS_TEST)
    await t.expect(inventoryPage.title.exists).ok()
} )