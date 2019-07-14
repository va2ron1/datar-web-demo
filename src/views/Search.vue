<template>
  <div class="search">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Search extends Vue {
  data() {
      return {
        items: []
      }
    }
}
</script>
