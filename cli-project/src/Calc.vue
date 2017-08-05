<template>
  <div>
    <calc-operations></calc-operations>
  </div>
</template>
<script>
//CalcOperation component is registred as local component
  import CalcOperations from "./CalcOperations.vue";

  export default {

     components: {
       'calc-operations':CalcOperations
     }
  }

</script>
