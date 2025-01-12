app.component('review-form', {
    template:
    /*html*/
    `
        <!-- @submit.prevent is a modifier that prevents the browser from refreshing-->
        <form class="review—form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
                <!-- v-model binds by name attribute in data()-->
            <input id="name" v-model="name">
            
            <label for="review">Review:</label>
            <!-- v-model binds by review attribute in data()-->
            <textarea id="review" v-model="review"></textarea>

        <div class="radio">

            <div class="item">
                <label for="yes">Yes</label>
                <input type="radio" id="yes" name="recommended" value="" v-model="recommended">
            </div>

           <div class="item" id="no">
                <label for="no">No</label>
                <input type="radio" id="no" name="recommended" value="not" v-model="recommended">
           </div>

        </div><br>
        

            <label for="rating">Rating:</label>
            <!-- v-model.number is a modifier that typecasts value as a number-->
            <!-- v-model binds by rating attribute in data()-->
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>l</option>
            </select>

            <input class="button" type="submit" value="Submit">
        </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommended: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name == '' || this.review == '' || this.rating == null || this.recommended == null)
            {
                alert('Review is incomplete. Please fill out every field')
                return
            }
            // payload to be emitted to submitted form
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommended: this.recommended
            }
            this.$emit('review-submitted', productReview)

            // refreshes data after submit
            this.name = '',
            this.review = '',
            this.rating = null,
            this.recommended = null
        }
    }
})