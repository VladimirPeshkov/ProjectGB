import Cart from "./cart.js";
import Catalog from "./catalog.js";

export default class Shop {
    constructor () {
        this._catalog = new Catalog();
        this._cart = new Cart();
        this._addProductToCart();
    }

    _addProductToCart = () => {
        let catalog = document.querySelector('.catalog');

        catalog.addEventListener('click', event => {
            if(event.target.classList.contains('product-card__btn')){
    
                let productID = Number(event.target.parentNode.querySelector('.product-card__id').innerText.split(' ')[1]);
                let isСoincidence = false;
    
                for (let productFromCart of this._cart._products){
                    // if(isСoincidence){
                    //     if (productFromCart.id_product === productID) {    
                            // productFromCart.quantity++;
                            // document.querySelector('.cart__field').removeChild(document.querySelector('.cart__list'));
                            // this._cart._render();
                            // this._cart._deleteCard();
                            // this._cart._getSum();
                            // console.log(1);
                    //         break;
                    //     }
                    // }else{
                    //     for (let productFromCatalog of this._catalog._productsData){
                    //         if (productFromCatalog.id_product === productID){
                    //             productFromCatalog.quantity = 1;
                    //             this._cart._products.push(productFromCatalog);
                    //             document.querySelector('.cart__field').removeChild(document.querySelector('.cart__list'));
                    //             this._cart._render();
                    //             this._cart._deleteCard();
                    //             this._cart._getSum();
                    //             console.log(this._cart._products);
                    //             console.log(2);
                    //         }
                    //     }
                    // }  

                    if (productFromCart.id_product === productID){
                        isСoincidence = true;
                        break;
                    }
                }

                if (isСoincidence){
                    for (let product of this._cart._products) {
                        if (product.id_product === productID){
                            product.quantity++;
                            document.querySelector('.cart__field').removeChild(document.querySelector('.cart__list'));
                            this._cart._render();
                            this._cart._deleteCard();
                            this._cart._getSum();
                            console.log(this._cart._products);
                            break;
                        }
                    }
                }else{
                    for (let product of this._catalog._productsData){
                        if (product.id_product === productID) {
                            product.quantity = 1;
                            this._cart._products.push(product);
                        }
                    }
                }
            }
        })
    }
}




