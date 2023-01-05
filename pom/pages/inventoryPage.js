import { Selector } from 'testcafe'

class dashBoard {
    constructor(){
        this.title = Selector('h6.oxd-text').withText('Dashboard')
    }
}

export default new dashBoard