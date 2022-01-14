export default class ProductCardForCart {
    constructor(id, title, price, img){

        this._title = title || 'Название не указано';
        this._id = id || 'ID не указан';
        this._price = price || 'Цена не указана';
        this._img = img || 'http://placehold.it/300x200';
    }

    _createCard() {
        let card = document.createElement('li');
        card.classList.add('cart-card');

        card.innerHTML = `
            <img class="cart-card__img" src="${this._img}" alt="Product's image">
            <div class="cart-card__desc">
                <h3 class="cart-card__title">${this._title}</h3>
                <p class="cart-card__id">ID: ${this._id}</p>
                <p class="cart-card__price">${this._price} руб</p>
            </div>
            <button class="cart-card__btn">Удалить</button>`
        
        return card;
    }
}