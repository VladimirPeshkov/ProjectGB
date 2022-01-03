import ProductCard from "./productCard.js";


export default class ProductsList {
    constructor(parentElementSelector){
        this._parentElement = document.querySelector(parentElementSelector);
        this._productsData = this._fetchProductsData();
        this._productsList = [];
        this._creeteProductsList();
        this._renderProductsList();
        this.getSum();
    }

    _fetchProductsData = url => {
       return [
            {id: 1, title: 'Notebook', price: 1000},
            {id: 2, title: 'Mouse', price: 100},
            {id: 3, title: 'Keyboard', price: 250},
            {id: 4, title: 'Gamepad', price: 150}
        ];
    }

    _creeteProductsList = () =>{
        this._productsData.forEach(({id, title, price, img}) => {
            this._productsList.push(new ProductCard(id, title, price, img)._createProductCard());
        });
    }

    _renderProductsList = () => {
        const productsListNode = document.createElement('ul');
        productsListNode.classList.add('catalog__list');
    
        this._productsList.forEach(productNode => {
            productsListNode.insertAdjacentHTML('beforeend', productNode);
        });

        this._parentElement.insertAdjacentElement('beforeend', productsListNode);
    }

    getSum = () => {
        let sum = 0;
        this._productsData.forEach(({price}) => sum += price);
        document.querySelector('.sum').innerHTML = `${sum} $`;
    }




}