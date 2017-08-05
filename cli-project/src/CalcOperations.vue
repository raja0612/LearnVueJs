<template>
  <div>
    <p>Addition: {{x+y}}</p>
    <p>subtraction: {{x-y}}</p>
    <p>Multiplication: {{x*y}}</p>
    <p>Division: {{x/y}}</p>
  </div>
</template>

<script>
   export default {
          data:function(){
            return {
                x:10,
                y:20
            };
          }

   }
</script>
