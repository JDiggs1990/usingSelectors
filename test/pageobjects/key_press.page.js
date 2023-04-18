import Page from './page.js';

// OLD and works with NodeJS16 

// const Page = require('./page'); 

// NEW and works with NodeJS 18 and above 


/**
 * sub page containing specific selectors and methods for a specific page
 */
class KeyPressesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get keyPressInput() {
       // add your code here
     }
    get keyPressResult() {
       // add your code here
    }

    async pressAkey (input) {
        await this.keyPressInput.setValue(input);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('key_presses');
    }
}

//module.exports = new KeyPressesPage();


export default new KeyPressesPage();

//OLD and works with NodeJS16 

// module.exports = new KeyPressesPage(); 

//NEW and works with NodeJS 18 and above 