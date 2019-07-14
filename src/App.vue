<template>
  <div id="app" class="h-100">
    <b-container class="d-flex">
      <b-row class="align-self-center w-100 mx-0">
        <b-col cols="12">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
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
