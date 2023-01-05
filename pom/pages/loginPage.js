// Mediante el constructor se reduce la cantidad de codigo y se agiliza el uso de diferentes páginas para seleccionar los elementos
// Este patrón de diseño se denomina POM (Page Objet Model)



import { Selector, t } from "testcafe";

class loginPage {
    constructor(){
        this.user = Selector('input[name="username"]')
        this.pass = Selector('input[name="password"]')
        this.button = Selector('button[type="submit"]')
        this.title = Selector('p.oxd-alert-content-text')
    }


// Se valida si los campos user y password son nulos para establecer happypath y escenarios negativos en el folder loginTest.js

    async submitLoginForm(user, pass) {
        if(user != null){
            await t.typeText(this.user, user)
        }
        if(pass != null){
            await t.typeText(this.pass, pass)
        }
        await t.click(this.button)
    }

};


export default new loginPage