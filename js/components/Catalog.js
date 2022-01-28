import CatalogList from "./Catalog-list.js";
import Error from "./Error.js";


const Catalog = Vue.component('Catalog', {

    data() {
        return {
            goods: [],
            filterGoods: [],
            isError: false,
        }
    },
    

    methods: {
        fetchGoods(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => this.isError = true);
        },
    },

    created() {
        this.fetchGoods('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
            .then((data)=> {
                this.goods = [...data];
                this.filterGoods = [...this.goods];
            });
    },

    template: `<div class="catalog">
                    <div class="container catalog__container">
                        <Error v-if="isError"/>
                        <Catalog-list :goods="goods"/>
                    </div>
                </div>`
})

export default Catalog;