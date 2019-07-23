<template>
  <b-row class="mb-5">
    <b-col cols="12">
      <b-row>
        <b-col md="6" class="my-1 mx-auto">
          <b-row>
            <b-col md="12">
              <b-navbar class="p-2">
                <p class="m-0">Submit Data</p>
                <b-navbar-nav class="ml-auto">
                  <b-button :disabled="isLoading" @click="doSubmit()"
                    >Submit</b-button
                  >
                  <div
                    class="pl-3 text-center justify-content-between"
                    v-bind:class="{ 'd-none': !isLoading }"
                  >
                    <b-spinner variant="secondary"></b-spinner>
                  </div>
                </b-navbar-nav>
              </b-navbar>
              <b-form-group>
                <b-form-textarea
                  id="textarea-rows"
                  placeholder="Type important messages, news, data, etc."
                  rows="8"
                  v-model="text"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class Submit extends Vue {
  text = "";
  isLoading = false;

  mounted() {}

  doSubmit() {
    this.isLoading = true;
    axios
      .post("https://api.datar.online/v1/data/?auth_key=" + process.env.VUE_APP_DATAR_API_KEY, {
        data: this.text
      })
      .then((response: any) => {
        this.isLoading = false;
        this.$bvToast.toast(response.data.message, {
          title: "DATAR",
          toaster: "b-toaster-top-center",
          solid: true,
          variant: "success",
          appendToast: false
        });
      })
      .catch(e => {
        this.isLoading = false;
        if (e.response) {
          this.$bvToast.toast(e.response.message, {
            title: "DATAR",
            toaster: "b-toaster-top-center",
            solid: true,
            variant: "danger",
            appendToast: false
          });
        } else {
          this.$bvToast.toast("Something happens with the request.", {
            title: "DATAR",
            toaster: "b-toaster-top-center",
            solid: true,
            variant: "danger",
            appendToast: false
          });
        }
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
