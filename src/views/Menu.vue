<template>
  <div class="row justify-content-center">
    <div class="col-8 d-none d-md-block text-center">
      <span class="px-2">
        <b-button
          pill
          size="lg"
          @click="
            $router.push({
              name: 'post'
            })
          "
        >
          <feather type="edit-2"></feather> Post data
        </b-button>
      </span>
      <span class="px-2">
        <b-button
          pill
          size="lg"
          @click="
            $router.push({
              name: 'search'
            })
          "
        >
          <feather type="search"></feather> Search data
        </b-button>
      </span>
    </div>
    <div class="col-8 d-block d-md-none text-center">
      <div class="py-2">
        <b-button
          pill
          size="lg"
          @click="
            $router.push({
              name: 'post'
            })
          "
        >
          <feather type="edit-2"></feather> Post data
        </b-button>
      </div>
      <div class="py-2">
        <b-button
          pill
          size="lg"
          @click="
            $router.push({
              name: 'search'
            })
          "
        >
          <feather type="search"></feather> Search data
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Menu extends Vue {}
</script>
