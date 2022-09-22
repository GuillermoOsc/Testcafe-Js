//Scripts para automatizar login en saucedemo.com

import loginPage from '../pages/loginPage';
import inventoryPage from '../pages/inventoryPage'
import { URL, CREDENTIALS } from '../data/constantes'


fixture `Login test suite`
    .page`${URL.URL_BASE_TEST}` // Plantillas literales

test('El usuario debe iniciar sesión correctamente', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.USER_BASE_TEST,CREDENTIALS.VALID_CREDENTIALS.PASS_BASE_TEST)
    await t.expect(inventoryPage.title.exists).ok()
} )