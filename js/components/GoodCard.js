const GoodCart = Vue.component('Good-card', {
    props: ['good'],

    template: `<li class="good">
                    <img class="good__img" src="http://placehold.it/250x160" alt="Фото продукта">
                    <div class="good__desc">
                        <h3 class="good__title">{{good.product_name ? good.product_name : Неизвестно}}</h3>
                        <p class="good__id">ID: {{good.id_product ? good.id_product : 'Неизвестно'}}</p>
                        <p class="good__price">{{good.price ? good.price : 'Неизвестно'}} &#8381</p>
                    </div>
                    <button class="good__button-add" @click="$emit('addGoodToCard', good)">В корзину</button>
                </li>`
})


export default GoodCart;