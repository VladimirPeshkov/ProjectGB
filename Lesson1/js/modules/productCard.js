const productCart = (id = "не указан", title ="название товара неизвестно", price = "цена не указана", img = "http://placehold.it/300x200") => `
        <div class="product-card">
            <img class="product-card__img" src="${img}" alt="Product's image">
            <div class="product-card__desc">
                <h3 class="product-card__title">${title}</h3>
                <p class="product-card__id">ID: ${id}</p>
                <p class="product-card__price">${price}$</p>
            </div>
        </div>
    `


export default productCart;