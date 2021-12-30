import productCart from "./productCard.js";

const catalogList = (productsList) => {
    let catalogNode = document.createElement('ul');

    catalogNode.classList.add('catalog__list');

    productsList.forEach(({title, id, price}) => {
        catalogNode.insertAdjacentHTML('beforeend', productCart(id, title, price));
    });

    document.querySelector('.catalog').appendChild(catalogNode);
}

export default catalogList;