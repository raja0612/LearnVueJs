<template>
  <div>
     <slot></slot>
   </div>
</template>


<script>
</script>

<style scoped>
// even though h2 class style defined in Parent (App,vue) component but here child component style will
//override
  h2{
    color:red;
  }
</style>
