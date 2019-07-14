<template>
  <div id="app" class="h-100">
    <div class="container d-flex">
      <div class="row align-self-center w-100 mx-0">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  height: calc(100% - 48px);
}
.feather {
  margin-bottom: -2px;
}
</style>
