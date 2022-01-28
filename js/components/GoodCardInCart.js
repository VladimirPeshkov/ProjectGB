const GoodCardInCart = Vue.component('Good-card-in-cart', {

    props: ['good'],

    template: `<li class="goodCart">
                    <img src="http://placehold.it/120x80" alt="Изображение товара" class="goodCart__img">
                    <div class="goodCart__desc">
                        <h3 class="goodCart__title">{{good.product_name ? good.product_name : 'Неизвестно'}}</h3>
                        <p class="goodCart__id">ID: {{good.id_product ? good.id_product : 'Неизвестно'}}</p>
                        <p class="goodCart__price">{{good.price ? good.price : 'Неизвестно'}} &#8381</p>
                        <div class="goodCart__quantity">
                            <button class="goodCart__decr" @click="$emit('decrQuantity', good)">-</button>
                            <span class="goodCart__num">{{good.quantity}}</span>
                            <button class="goodCart__incr" @click="$emit('incrQuantity', good)">+</button>
                        </div>
                    </div>
                    <button class="goodCart__btn-delete" @click="$emit('removeGoodFromCart', good)">X</button>
                </li>`
})


export default GoodCardInCart;