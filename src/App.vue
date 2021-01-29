<template>
  <div id="app" :style="style">
    <router-view />
    <ErrorModal
      @closeErrorModalEvent="closeErrorModal"
      v-if="modal"
      :errormessage="message"
      :errorinfo="infomation"
    >
    </ErrorModal>
  </div>
</template>
<script lang="ts" src="./App.ts"></script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .body{
    width: 100%;
    height: 100%;
  }
}
</style>