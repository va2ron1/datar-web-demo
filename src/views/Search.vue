<template>
  <b-row>
    <b-col cols="12">
      <b-row>
        <b-col
          md="6"
          class="my-1"
          v-bind:class="{ 'mx-auto': items.length === 0 }"
        >
          <b-row>
            <b-col md="10">
              <b-form-group label-cols-sm="3" label="Search">
                <b-input-group>
                  <b-form-input
                    v-model="search"
                    placeholder="Type to Search"
                    v-on:keyup.enter="doSearch()"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button
                      v-if="items.length === 0"
                      :disabled="!search"
                      @click="doSearch()"
                      >Search</b-button
                    >
                    <b-button v-else :disabled="!search" @click="search = ''"
                      >Clear</b-button
                    >
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col md="2" v-if="isLoading">
              <div class="text-center d-flex justify-content-between">
                <b-spinner variant="secondary"></b-spinner>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <!-- Main table element -->
      <template v-if="items.length > 0">
        <b-table
          show-empty
          stacked="md"
          :items="items"
          :current-page="currentPage"
          :per-page="perPage"
        >
        </b-table>
        <b-row class="justify-content-center justify-content-md-start">
          <div class="my-1">
            <b-pagination
              variant="danger"
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              class="my-0"
            ></b-pagination>
          </div>
        </b-row>
      </template>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class Search extends Vue {
  items = [] as Array<object>;
  totalRows = 4;
  currentPage = 1;
  perPage = 4;
  search = "";
  isLoading = false;

  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  }

  doSearch() {
    this.isLoading = true;
    axios
      .get(
        "https://api.datar.online/v1/data/?auth_key=" +
          process.env.VUE_APP_DATAR_API_KEY +
          "&search=" +
          this.search
      )
      .then(response => {
        this.isLoading = false;
        // for(let i = 0; i < 100; i++) {
        //   this.items.push(response.data.data[0]);
        // }
        this.items = response.data.data;
        this.totalRows = this.items.length;
      })
      .catch(e => {
        this.isLoading = false;
        this.items = [{ data: "Nothing has been found with your search." }];
        this.totalRows = this.items.length;
      });
  }
}
</script>
<style>
.page-item.active .page-link {
  background-color: #6c757d !important;
  border-color: #6c757d !important;
  color: #fff !important;
}
.page-link {
  color: #000 !important;
}
.page-item.disabled .page-link {
  color: #e5e5e5 !important;
}
</style>
