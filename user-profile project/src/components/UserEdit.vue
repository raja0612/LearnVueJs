<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
   export default {
      // From parent User componene we are pasing age value in userAge propery.
      // So props should have same name
       props : ['userAge'],

        methods:{
          editAge:function(){
              this.userAge = 30;
              this.$emit('ageWasEdited',this.userAge);
          }
        }

   }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
