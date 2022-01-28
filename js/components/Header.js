import Cart from "./Cart.js";
import SearchElem from "./serchElem.js";


const Header = Vue.component('Header', {

    props: ['cartGoods'],

    template: `<header class="header">
                    <div class="container header__container">
                        <Search-elem />
                        <Cart />
                    </div>
                </header>`
})

export default Header;