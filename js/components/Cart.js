import GoodCardInCart from "./GoodCardInCart.js";
import Error from "./Error.js";


const Cart = Vue.component('Cart', {

    data() {
        return {
            isVisibleCart: false,
            cartGoods: [],
            cartSum: 0,
            cartQuantity: 0,
            isError: false,
        }
    },

    methods: {
        fetchGoods(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => this.isError = true);
        },

        activeCart(){
            this.isVisibleCart = !this.isVisibleCart;
        },

        decrQuantity(product){
            this.fetchGoods('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json')
                .then(data => {
                    console.log(data)
                    if (data.result == 1){
                        if(product.quantity > 1){
                            product.quantity--;
                            this.cartQuantity--;
                            this.cartSum -= product.price;
                        } else {
                            this.removeGoodFromCart(product);
                        }
                    } else {
                        console.error('error');
                    }
                })
        },

        incrQuantity(product){
            this.fetchGoods('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json')
                .then(data => {
                    if (data.result == 1){
                            product.quantity++;
                            this.cartQuantity++;
                            this.cartSum += product.price;
                    } else {
                        console.error('error');
                    }
                })
        },

        removeGoodFromCart(product){
            this.fetchGoods('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json')
                .then(data => {
                    if(data.result == 1){
                        this.cartQuantity -= product.quantity;
                        this.cartSum -= product.price * product.quantity;
                        this.cartGoods = this.cartGoods.filter(el => el.id_product != product.id_product);
                    } else {
                        console.error('error');
                    } 
                }) 
        },

        getSum(){
            this.cartGoods.forEach(good => this.cartSum += good.price * good.quantity)
        },

        getCartQuantity(){
            this.cartGoods.forEach(el => this.cartQuantity += el.quantity)
        }
    },


    
    created() {
        this.fetchGoods('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json')
            .then((data)=> this.cartGoods = [...data.contents])
                .then(()=> {
                    this.getCartQuantity();
                    this.getSum();
            });
    },

    template: `<div class="cart">
                    <button class="cart__open" @click="activeCart">Корзина</button>
                    <div class="cart__body--wrapp" :class ="{active: isVisibleCart}">
                        <div class="cart__body">
                            <Error v-if="isError"/>
                            <p v-if="!cartGoods.length" class="cart__empty">Корзина пустая</p>
                            <ul class="cart__list">
                                <Good-card-in-cart 
                                    v-for="good in cartGoods" 
                                    :key="good.id_product"
                                    :good="good"
                                    @decrQuantity="decrQuantity(good)"
                                    @incrQuantity="incrQuantity(good)"
                                    @removeGoodFromCart="removeGoodFromCart(good)"
                                />
                            </ul>
                            <p class="cart__quantity">В корзине: {{cartQuantity}} шт.</p>
                            <p class="cart__sum">Общая сумма: {{cartSum}} &#8381</p>
                        </div>
                    </div>
                </div>`
})

export default Cart;