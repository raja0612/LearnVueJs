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
  import Header from './components/shared/Header.vue';
  import Servers from './components/servers/Servers.vue';
  import ServerInfo from './components/servers/ServerInfo.vue';
  import Footer from './components/shared/Footer.vue';

  export default {
      components : {
      'app-header' : Header,
      'app-servers' : Servers,
      'server-info' : ServerInfo,
      'app-footer' : Footer
      }
  }
</script>

<style>

</style>
