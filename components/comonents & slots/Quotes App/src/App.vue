<template>
    <div class="container">


      <!-- when quoteAdded emits from NewQuote.vue , app-new-quote will be notified and calls the newQuote function
    with this.quote value in this component-->
      <app-new-quote  @quoteAdded="newQuote"></app-new-quote>

      <app-quote-grid :quotes="quotes"></app-quote-grid>

    </div>
</template>

<script>

   import QuoteGrid from "./components/QuoteGrid.vue";
   import NewQuote from "./components/NewQuote.vue";

    export default {

      data: function(){

        return {
          quotes : ['This Array holds the user entered quotes'],
          maxQuotes : 10
        };
      },
      methods:{
        newQuote(quote){
          this.quotes.push(quote);
        }
      },

      components:{
        //QuoteGrid is Child. App is root and parent component.
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote

      }

    }
</script>

<style>
</style>
