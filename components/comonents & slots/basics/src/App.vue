<template>
    <div class="container">



        <button @click="selectedComponent='appQuote'"> Quote</button>
        <button @click="selectedComponent='appAuthor'"> Author</button>
        <button @click="selectedComponent='appNew'"> New</button>

      <!-- Here child component is used as html attribute -->
      <start-quote>
         <!-- Here We are passing h2 and p html attribute to child component StartQuote
         so in Quote component this can be displayed by <slot> vue attribute -->
         <h2>{{quoteTitle}}</h2>
         <p class="alert alert-success">No Pain.No Gain</p>
      </start-quote>


    <!-- Multiple components -->
    <div class="row">
       <component :is="selectedComponent"></component>
   </div>




    </div>
</template>

<script>
// import StartQuote.vue component
 import StartQuote from './components/StartQuote.vue';

 import Author from './components/Author.vue';
 import Quote from './components/Quote.vue';
 import New from './components/New.vue';

  export default {

    data:function(){

          return {
            quoteTitle:'The Quote',
            selectedComponent:'appQuote' //this name must macth with components names
          };
    },

     components:{
       //register above Quote component locally in App.vue. So parent is App component and StartQuote
       // is child component
       startQuote: StartQuote,
       appQuote: Quote,
       appAuthor: Author,
       appNew: New

     }

  }
</script>

<style scoped>
  h2 {
  color:blue
  }

</style>
