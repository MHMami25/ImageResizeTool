<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-view />
    <ErrorModal @closeErrorModalEvent="closeErrorModal" v-if="modal">
      <p>Vue.js Modal Window!</p>
      <div><input v-model="message" /></div>
      <!-- /default -->
      <!-- footer スロットコンテンツ -->
    </ErrorModal>
  </div>
</template>
<script lang="ts" src="./App.ts"></script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>