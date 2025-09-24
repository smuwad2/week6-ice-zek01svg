<script>
    export default { 
        data() {
            return {
                // Add code here
                isActive: false,
                id: 'demo1'
            }
        },
        methods: { 
   			// Add code here
            changeColor ()  {
                this.isActive = !this.isActive
            }
		}
    }
</script>

<template>
    
    <!-- Modify code here -->
    <div class="container">
        <div v-bind:id="id" v-bind:class="{'redBox':isActive, 'blueBox':!isActive}">
            div ID : {{id}} 
        </div>
        
        <button type="button" @click="changeColor" v-bind:class="{'btn btn-danger':isActive, 'btn btn-primary':!isActive}">Change Color</button>
    </div>

</template>

<style scoped>
    .redBox {
        background-color: red;
    }
    .blueBox {
        background-color: blue;
    }
    #demo1 {
        color: white;
    }
</style>