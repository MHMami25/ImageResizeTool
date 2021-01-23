<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-view />
    <ErrorModal @close="closeModal" v-if="modal">
      <p>Vue.js Modal Window!</p>
      <div><input v-model="message" /></div>
      <!-- /default -->
      <!-- footer スロットコンテンツ -->
      <template slot="footer">
        <button>送信</button>
      </template>
    </ErrorModal>
  </div>
</template>
<script lang="ts">
import { defineComponent, onErrorCaptured, reactive, ref } from "vue";
import { ErrorModal } from "@/components/index";

export default defineComponent({
  name: "App",
  components: {
    ErrorModal,
  },

  setup(prop, context) {
    let modal: boolean = false;

    //エラーハンドラー
    onErrorCaptured((err, vm, info) => {
      modal = true;
      return true;
    });
    return { modal };
  },
});
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>