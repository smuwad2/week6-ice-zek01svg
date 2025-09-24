<script>
    export default { 
        data() {
            return {
                width: '200',
                height: '200',
                myImg: '/assets/me.png'
            }
        },
    }
</script>

<template>

    <!-- add code here -->
     <img v-bind:src="myImg" v-bind:height="height" v-bind:width="width"></img>
   
</template>
