import ProductCardForCart from "./productCardForCart.js";

export default class Cart {
    constructor () {
        this._cartData;
        this._products = [];
        this._sum = 0;
        this._openCart();
    }


    _openCart() {
        let buttonOpen = document.querySelector('.cart__btn');

        buttonOpen.addEventListener('click', ()=> {
            document.querySelector('.cart__field-wrapp').classList.toggle('cart__field-wrapp--open');

            if (document.querySelector('.cart__field-wrapp').classList.contains('cart__field-wrapp--open')) {
                this._fetchCartData();
            } else {
                document.querySelector('.cart__field').removeChild(document.querySelector('.cart__list'));
            }
        })
    }

    _getNumProductsInCart() {
    
        if (this._products.length === 0){
            console.log(this._products.length)
            document.querySelector('.cart__field').insertAdjacentText('afterbegin', 'В корзине нет товаров');
        } 
    }


    _fetchCartData() {
        let promie = new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json', true);
            xhr.onreadystatechange = function(){
                if (xhr.readyState !== 4) return

                if (xhr.status !== 200) {
                    reject(xhr.status);
                    return
                }
                
                resolve(xhr.response)
            }
            xhr.send();
        })
        promie
            .then((data)=> {
                this._cartData = JSON.parse(data)
                this._getProductsData()
            })
            .then(()=> this._render())
            .then(()=> this._deleteCard())       
    }


    _getProductsData(){
        this._products = [...this._cartData.contents];
    }


    _deleteCard() {


        document.querySelectorAll('.cart-card__btn').forEach(button => {
            button.addEventListener('click', (event) =>{
                let parentELem = event.target.parentNode,
                    idProduct = Number(parentELem.querySelector('.cart-card__id').innerText.split(' ')[1]);

                this._products = this._products.filter(({id_product}) => id_product != idProduct)
                
                fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json')
                    .then(response => response)
                    .then(response => response.json()) 
                    .then(({result})=> {
                        if (result === 1) {
                            document.querySelector('.cart__field').removeChild(document.querySelector('.cart__list'));
                            console.log(this._products);
                            this._render();
                            this._deleteCard();
                        }
                    })  
            })
        })
    }

    _getSum() {
        this._sum = 0;
        for (let product of this._products){
            this._sum += product.price;
        }

        document.querySelector('.cart__sum').innerText = `${this._sum} руб`
    }


    _render() {

        let cartList = document.createElement('ul');
        cartList.classList.add('cart__list');

        let cartField = document.querySelector('.cart__field');
        cartField.insertAdjacentElement('afterbegin', cartList);

        this._products.forEach(({id_product, product_name, price}) => {
            cartList.insertAdjacentElement('beforeend', new ProductCardForCart(id_product, product_name, price)._createCard());
        });

        this._getNumProductsInCart();
        this._getSum();

        console.log('рендер')
    }
}