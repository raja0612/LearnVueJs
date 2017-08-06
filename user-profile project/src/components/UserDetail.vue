<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> User Name :  {{name}} </p>
        <p> Reverse User Name :  {{reverseName()}} </p>

        <p>User Age {{ userAge }}</p>

        <button @click='resetName'>Reset To Original</button>

          <button @click='resetFn()'>Reset Function</button>
    </div>
</template>

<script>

import { eventBus } from '../main';
  export default {
    // props : ['name'] default way

    // below is the validate the parent property
    props : {
      name: {
          type: String,
          required: true
       },
       resetFn :Function,
       userAge: Number
    },

    methods : {
       reverseName: function(){
         return this.name.split("").reverse().join("");
       },
       resetName(){
        this.name = 'Raj';
         //to notify parent component from child component name propety is reset

         this.$emit('nameWasReset',this.name);
       },

    },
   // vue js life cycle method
    created(){
        eventBus.$on('ageWasEditedByBus',(data)=>{
          this.userAge = data;
        });
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
