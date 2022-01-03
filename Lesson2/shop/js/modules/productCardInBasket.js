import ProductCard from './productCard.js'

export default class ProductCardInBasket {
    constructor(id, title, price, img){
        this._title = title || 'Название не указано';
        this._id = id || 'ID не указан';
        this._price = price || 'Цена не указана';
        this._img = img || 'http://placehold.it/300x200';
        this._count = 1;
    }


    _createProductCard = () =>{
        return `
            <div class="product-card-cart">
                <img class="product-card-cart__img" src="${this._img}" alt="Product's image">
                <div class="product-card-cart__desc">
                    <h3 class="product-card-cart__title">${this._title}</h3>
                    <p class="product-card-cart__id">ID: ${this._id}</p>
                    <p class="product-card-cart__price">${this._price}$</p>
                </div>
                <div class product-card-cart__count>
                    <button class="decr">-</button>
                    <span class="count">${this._count}</span>
                    <button class="incr">+</button>
                </div>
            </div>
        `
    }


    _incrCount = () => {}

    _decremCount = () => {}

    _deleteProduct = () => {}
}