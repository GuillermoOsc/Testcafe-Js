// Mediante el constructor se reduce la cantidad de codigo y se agiliza el uso de diferentes páginas para seleccionar los elementos
// Este patrón de diseño se denomina POM (Page Objet Model)


import { Selector, t } from "testcafe";

class loginPage {
    constructor(){
        this.user = Selector('#user-name')
        this.pass = Selector('input[data-test="password"]')
        this.button = Selector('input[name="login-button"]')
    }

    async submitLoginForm(user, pass) {
        await t.typeText(this.user, user)
        await t.typeText( this.pass, pass)
        await t.click(this.button)
    }
} 


export default new loginPage