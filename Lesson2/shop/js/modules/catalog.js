import ProductCardForCatalog from "./productCardForCatalog.js";


export default class Catalog {
    constructor () {
        this._productsData = [];
        this._fetchProductsData();
    }

    _fetchProductsData() {
        let promise = new Promise((resolve, reject)=> {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json', true);
            xhr.onreadystatechange = function() {
    
                if (xhr.readyState !== 4) return

                if (xhr.status !== 200) {
                    reject(xhr.status);
                    return
                }

                resolve(xhr.response);
            }
            xhr.send()
        });
        promise
        .then((data) => this._productsData = JSON.parse(data))
        .then(()=> this._render())
        .catch( status=> console.log(status))
    }


    _render() {
        let catalog = document.querySelector('.catalog'),
            productsList = document.createElement('ul');

        productsList.classList.add('catalog__list');
        catalog.insertAdjacentElement('beforeend', productsList);

        this._productsData.forEach(({id_product, product_name, price}) => {
            productsList.insertAdjacentElement('beforeend', new ProductCardForCatalog(id_product, product_name, price)._createCard())
        })

        console.log(1);

    }
}