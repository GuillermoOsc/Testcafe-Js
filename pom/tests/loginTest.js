//Scripts para automatizar login en saucedemo.com

import loginPage from '../pages/loginPage';
import inventoryPage from '../pages/inventoryPage'

fixture `Login test suite`
    .page `https://www.saucedemo.com/`
test('El usuario debe iniciar sesión correctamente', async t => {
    await loginPage.submitLoginForm('standard_user', 'secret_sauce')
    await t.expect(inventoryPage.title.exists).ok()
} )