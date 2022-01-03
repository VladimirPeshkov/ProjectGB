import ProductCardInBasket from './productCardInBasket.js';


export default class BasketList {
    constructor(){
        this._basketNode = document.querySelector('.cart');
        this._products = [];
        this._basketList = []
        this._fetchProducts();
        this._createBasketList()
        this._openButton();
        this._render();
    }

    _fetchProducts = () => {}

    _openButton = () =>{
        const buttonCart = document.querySelector('.cart__btn'),
            cartFieldWrapp = document.querySelector('.cart__field-wrapp');
            
        buttonCart.addEventListener('click', ()=> {
            cartFieldWrapp.classList.toggle('cart__field-wrapp--open')
        })
    }

    _createBasketList = () => {
        this._products.forEach(({id, title, price, img}) => {
            this._basketList.push(new ProductCardInBasket(id, title, price, img)._createProductCard())
        })
    }

    _checkoutOrder = () => {}

    _toClearCart = () => {}

    _getSumOrders = () => {}

    _render = () =>{
        const basketListNode = document.querySelector('.cart__list');
        
        this._basketList.forEach(productNode =>{
            basketListNode.insertAdjacentHTML('beforeend', productNode);
        })
    }


}