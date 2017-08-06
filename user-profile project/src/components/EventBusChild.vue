<template>
    <div class="component">
        <h3>Event Bus communication between child components</h3>
        <p>User Age {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>

    </div>
</template>

<script>

import { eventBus } from '../main';
   export default {
      props: ['userAge'],

      methods : {
        editAge : function(){
          this.userAge = 35;
          eventBus.$emit('ageWasEditedByBus',this.userAge);
        }
      }

   }


</script>
<style scoped>
    div {
        background-color: dark;
    }
</style>
