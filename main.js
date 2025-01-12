const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        // intention is to filter for the item id and remove the most recent of that id from the array
        removeFromCart(id) {
            if (this.cart.includes(id))
            {
                this.cart = this.cart.filter((x) => x.value = id) 
                this.cart.pop()
            }
            return this.cart
        }
    }
})
