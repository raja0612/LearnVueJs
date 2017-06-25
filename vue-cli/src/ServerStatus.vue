<template>
  <div>
      <p> Server Status : {{ status }}</p>
      <button @click="changeStatus"> Change Status</button>
  </div>
</template>

<script>
    export default {

      data : function(){
          return {
            status : 'Critical'
          }

      },
      methods : {

         changeStatus(){ // ES6 function specification which is eqvivalant to changeStatus: fucntion(){}

           this.status = 'Normal'
         }
      }
    }
</script>
