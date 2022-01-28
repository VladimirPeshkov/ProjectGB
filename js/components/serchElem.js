const SearchElem = Vue.component('Search-elem', {

    data(){
        return {
            searchText: '',
        }
    },

    template: `<form action="" class="search" name="search">
                    <input  
                        class="search__input" type="text" 
                        name="search__input" id="search__input" 
                        v-model="searchText" 
                    >
                    <button class="search__btn">Найти</button>
                </form>`
})


export default SearchElem;