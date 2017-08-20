<template>
  <div>
    <h3>Edit the User</h3>
      <p> You are Editing User has id : {{$route.params.id}} </p>

      <p>Query Params</p>

      <p> Locale : {{$route.query.locale}} </p>
      <p> Analytics : {{$route.query.q}} </p>

  </div>
</template>
