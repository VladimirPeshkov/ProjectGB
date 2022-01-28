import Header from './components/Header.js';
import Main from './components/Main.js';


const app = new Vue({

    el: '#app',

    template: `<div class="app" ref="app">
                    <Header />
                    <Main />
                </div>`
});