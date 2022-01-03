export default class Gamburger {
    constructor(){
        this._gamburger = document.querySelector('.gamburger');
        this._size = 'Маленький';
        this._price = 0;
        this._colories = 0;
        this._toppingsArr = [];
        this._additional = [];
        this._selectSize();
        this._addAndRemoveTopping(this._toppingsArr, '.gamburger__toppings-label');
        this._addAndRemoveTopping(this._additional, '.gamburger__additional-toppings-label');

    }


    _selectSize = () => {
        document.querySelectorAll('.gamburger__size-label').forEach(size => {
            size.addEventListener('change', (event)=>{
                this._size = event.target.value;
                this._getFullPrice();
                this._getFullColories();
                this._renderOutcome();
            })
        })
    }


    _addAndRemoveTopping = (arr, className) => {
    
        document.querySelectorAll(className).forEach(topping => {
            topping.addEventListener('input', (event)=>{
                if(event.target.checked){
                    arr.push(event.target.value);
                } else {
                    let index = arr.indexOf(event.target.value);
                    arr.splice(index, 1);
                }
                this._getFullPrice();
                this._getFullColories();
                this._renderOutcome();

                return arr;
            })
        })
    }


    _checkToppingsInBurger = () => {
        this._toppings.length === 0 ? true : false; 
    }


    _calculaterPriceOnSize = () => {
        let inputsRadio = document.querySelectorAll('[name = "gamburger__size"]');
        let sum = 0;

        for (let inputRadio of inputsRadio){
            if (inputRadio.value.toUpperCase() === this._size.toUpperCase()){
                sum += Number(inputRadio.dataset.price);
                break;
            }
        } 
        return sum;
    }


    _calculaterCaloriesOnSize = () => {
        let inputsRadio = document.querySelectorAll('[name = "gamburger__size"]');
        let sum = 0;

        for (let inputRadio of inputsRadio){
            if (inputRadio.value.toUpperCase() === this._size.toUpperCase()){
                sum += Number(inputRadio.dataset.colories);
                break;
            }
        } 
        return sum;
    }


    _calculaterPriceOnToppings = (arr, tagName) => {
        let toppings = document.querySelectorAll(tagName);
        let sum = 0;

        for (let topping of arr) {
            for (let toppingNode of toppings) {
                if (topping === toppingNode.value){
                    sum += Number(toppingNode.dataset.price);
                    break;
                }
            }
        }

        return sum;
    }


    _calculaterCaloriesOnToppings = (arr, tagName) => {
        let toppings = document.querySelectorAll(tagName);
        let sum = 0;

        for (let topping of arr) {
            for (let toppingNode of toppings) {
                if (topping === toppingNode.value){
                    sum += Number(toppingNode.dataset.colories);
                    break;
                }
            }
        }

        return sum;
    }


    _getFullPrice = () =>{

        this._price = this._calculaterPriceOnSize()
            +this._calculaterPriceOnToppings(this._toppingsArr, '[name="gamburger__topping"]')
            +this._calculaterPriceOnToppings(this._additional, '[name="gamburger__additional-topping"]');
    } 
    

    _getFullColories = () => {
        this._colories = this._calculaterCaloriesOnSize()
            +this._calculaterCaloriesOnToppings(this._toppingsArr, '[name="gamburger__topping"]')
            +this._calculaterCaloriesOnToppings(this._additional, '[name="gamburger__additional-topping"]');
    }


    _renderOutcome = () => {
        const outcomeSize = document.querySelector('.size'),
            outcomeToppings = document.querySelector('.toppings'),
            outcomeAdditional = document.querySelector('.toppings__additional'),
            outcomePrice = document.querySelector('.price'),
            outcomeColories = document.querySelector('.colories');

            outcomeSize.innerHTML = `Размер: ${this._size}`;
            outcomePrice.innerHTML = `${this._price} руб`;
            outcomeColories.innerHTML = `${this._colories} кал`;


            outcomeToppings.innerHTML = '';
            this._toppingsArr.forEach(item => {
                outcomeToppings.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
            })

            outcomeAdditional.innerHTML = '';
            this._additional.forEach(item => {
                outcomeAdditional.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
            })
    }
} 