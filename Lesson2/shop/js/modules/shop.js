import Cart from "./cart.js";
import Catalog from "./catalog.js";

export default class Shop {
    constructor () {
        this._catalog = new Catalog();
        this._cart = new Cart();
        this._addProductToCard();
    }

    _addProductToCard() {
        let promise = new Promise(resolve => {
            document.addEventListener('load', ()=>resolve())
        })
        promise.then(()=>console.log(document.querySelector('.product-card')))
    }
}