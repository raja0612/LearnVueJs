<template>
    <div class="container">
          <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <server-info></server-info>
        </div>
        <hr>
        <div class="row">
          <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
  import Header from './Header.vue';
  import Servers from './Servers.vue';
  import ServerInfo from './ServerInfo.vue';
  import Footer from './Footer.vue';

  export default {
      components : {
      'app-header' : Header,
      'app-servers' : Servers,
      'server-info-' : ServerInfo,
      'app-footer' : Footer
      }
  }
</script>

<style>

</style>
