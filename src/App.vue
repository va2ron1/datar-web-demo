<template>
  <div id="app" class="h-100">
    <div class="d-flex flex-column h-100">
      <header>
        <b-navbar toggleable="lg">
          <b-navbar-brand>
            <img
              src="logo.png"
              class="d-inline-block align-top"
              width="30"
              alt="Logo"
            />DATAR
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse v-if="this.$route.path !== '/'" id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item :to="{ name: 'submit' }">Post Data</b-nav-item>
              <b-nav-item :to="{ name: 'search' }">Search Data</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </header>

      <!-- Begin page content -->
      <main role="main" class="d-flex h-100">
        <b-container>
          <router-view class="align-items-center justify-content-center h-100" />
        </b-container>
      </main>


      <footer class="footer mt-auto py-3">
        <b-navbar>
          <b-navbar-nav>
            <b-nav-item href="https://github.com/va2ron1/datar-management">Github</b-nav-item>
          </b-navbar-nav>
          <span class="ml-auto">Copyright © 2019 Victor Ortiz</span>
        </b-navbar>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>

<style>
.feather {
  margin-bottom: -2px;
}
</style>
