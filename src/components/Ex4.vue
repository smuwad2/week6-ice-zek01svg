<script>
    export default { 
        data() {
            return {
                // Add code here
            }
        },
        methods: { 
   			// Add code here
		}
    }
</script>

<template>
    
    <!-- Modify code here -->
    <div class="container">
        <div v-bind:id="id" class="m-2">
            div ID : {{id}} 
        </div>
        
        <button type="button">Change Color</button>
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
