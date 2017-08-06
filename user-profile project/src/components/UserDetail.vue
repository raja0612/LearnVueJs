<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> User Name :  {{name}} </p>
        <p> Reverse User Name :  {{reverseName()}} </p>

        <button @click='resetName'>Reset To Original</button>
    </div>
</template>

<script>
  export default {
    // props : ['name'] default way

    // below is the validate the parent property
    props : {
      name: {
          type: String,
          required: true
       }
    },

    methods : {
       reverseName: function(){
         return this.name.split("").reverse().join("");
       },
       resetName(){
        this.name = 'Raj';
         //to notify parent component from child component name propety is reset

         this.$emit('nameWasReset',this.name);
        }

    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
