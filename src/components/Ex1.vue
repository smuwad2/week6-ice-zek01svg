<script>
    export default { 
        // Add Code Here
        // challenge: use array  
        data () {
            return {
                message: 'choose your favorite fruit',
                fruit1: 'apple',
                fruit2: 'orange',
                fruit3: 'peach',
                fruits: ['apple', 'orange', 'pear']
            }
        }
    }
</script>

<template>
    <div id="app">
        {{ message }} </br>
        {{ fruit1 }} <input type="radio" name="fruit">
        {{ fruit2 }} <input type="radio" name="fruit">
        {{ fruit3 }} <input type="radio" name="fruit">

        <h3>Using Array</h3>
        {{ message }}

        <span v-for="fruit in fruits">
            {{ fruit }} <input type="radio"></input>
        </span>
    </div>
</template>

<style scoped>
</style>
