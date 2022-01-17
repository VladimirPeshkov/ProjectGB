export default class ProductCardForCatalog {
    constructor(id, title, price, img){

        this._title = title || 'Название не указано';
        this._id = id || 'ID не указан';
        this._price = price || 'Цена не указана';
        this._img = img || 'http://placehold.it/300x200';
    }

    _createCard(){
        let producCard = document.createElement('li');
        producCard.classList.add('product-card');
        producCard.innerHTML = `
                <img class="product-card__img" src="${this._img}" alt="Product's image">
                <div class="product-card__desc">
                    <h3 class="product-card__title">${this._title}</h3>
                    <p class="product-card__id">ID: ${this._id}</p>
                    <p class="product-card__price">${this._price} руб</p>
                </div>
                <button class="product-card__btn">Добавить</button>`

        return producCard;
    }
}