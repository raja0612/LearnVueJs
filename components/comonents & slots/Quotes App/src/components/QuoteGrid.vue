<template>
  <div class="row">

    <!-- Iterate all quotes from Quote component.-->
    <app-quote v-for = "quote in quotes">
      {{quote}}
    </app-quote>
  </div>
</template>
<script>

     import Quote from "./Quote.vue";

     export default {
       props : ['quotes'], // Here quotes come from parent component App.vue

       components:{
         //QuoteGrid is Parent and Quote is Child
         appQuote : Quote
       },

       methods : {

       }
     }



</script>

<style>
</style>
