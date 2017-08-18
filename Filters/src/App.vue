<template>
    <div class="container">

        <h1>Filters and Mixins</h1>
        <p>{{text | toUpperCase | to-lower-case}}</p>
        <hr>
        <label>Search Fruit:</label>
        <input type="text" v-model="searchFruit" />

        <br>
        <ul v-for="fruit in fruits "| searchFruit>
          <li>{{fruit}}</li>
        </ul>

    </div>
</template>

<script>
    export default {

      data(){
        return {
            text: 'Welcome to Filters and Mixins',
            fruits:['Apple','Banana','Orange','Peach','Mango'],
            searchFruit:'a'
        }

      },

      //local filter declaration
        filters: {
          // value parameter actual value that is defined before the pipe | operator.
          toUpperCase(value){
              return value.toUpperCase();
          },
          searchFruit(value){
            return value;
          }

        }

      }

</script>

<style>

</style>
