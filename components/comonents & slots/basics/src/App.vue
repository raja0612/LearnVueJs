<template>
    <div class="container">

      <!-- Here child component is used as html attribute -->
      <app-quote>
         <!-- Here We are passing h2 and p html attribute to child component Quote
         so in Quote component this can be displayed by <slot> vue attribute -->
         <h2>Quote Title</h2>
         <p> No Pain.No Gain</p>
      </app-quote>

    </div>
</template>

<script>
// import Quote.vue component
 import Quote from './components/Quote.vue';

  export default {

     components:{
       //register above Quote component locally in App.vue. So parent is App component and Quote
       // is child component
       appQuote: Quote
     }

  }
</script>

<style scoped>
  h2 {
  color:blue
  }

</style>
