const app = Vue.createApp({
    data() 
    {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: 
    {
        addToCart()
        {
            this.cart += 1;
        },
        removeFromCart()
        {
            this.cart -= 1;
        },
        updateImage(variantImage)
        {
            // variant.image exists alongside variant.color, so hovering over updates the current and passes it into the v-bind:src="image"
            this.image = variantImage
        }
    }
})
