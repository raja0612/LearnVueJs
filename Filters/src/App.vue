<template>
    <div class="container">

        <h1>Filters and Mixins</h1>
        <p>{{text | toUpperCase | to-lower-case}}</p>

    </div>
</template>

<script>
    export default {

      data(){
        return {
            text: 'Welcome to Filters and Mixins'
        }

      },

      //local filter declaration
        filters: {
          // value parameter actual value that is defined before the pipe | operator.
          toUpperCase(value){
              return value.toUpperCase();
          }
        }

      }

</script>

<style>

</style>
