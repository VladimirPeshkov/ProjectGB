import GoodCart from "./goodCard.js";


const CatalogList = Vue.component('Catalog-list', {

    props: ['goods'],

    methods: {
        show(){
            console.log(this)
        },

        fetchGoods(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.error(error));
        },

    },

    created(){
        this.show()
    },

    template: `<ul class="catalog__list">
                    <Good-card 
                        v-for="good in goods" 
                        :key="good.id_product"
                        :good="good"
                        @addGoodToCard="addGoodToCard(good)"
                    />
                </ul>`
})


export default CatalogList;