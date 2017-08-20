<template>
  <div>
    <h3>Some User Details </h3>
    <p> User ID : {{ $route.params.id}} </p>

    <!-- <router-link class="btn btn-primary" :to ="'/user/'+ $route.params.id +'/edit'">Edit User</router-link> -->

    <router-link class="btn btn-primary" :to="{ name: 'userEdit',
    params: {
      id: $route.params.id},
       query:{locale:'en' ,q:100} }"
       >Edit User</router-link>
  </div>
</template>

<script>
</script>
