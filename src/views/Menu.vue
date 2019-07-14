<template>
  <b-row class="justify-content-center">
    <b-col cols="8" class="d-none d-md-block text-center">
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
    </b-col>
    <b-col cols="8" class="d-block d-md-none text-center">
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
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Menu extends Vue {}
</script>
