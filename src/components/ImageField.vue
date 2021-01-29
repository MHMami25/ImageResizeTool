<template>
  <div id="imagefield">
    <div
      class="imagefield-drop-area"
      @dragenter="dragEnter"
      @dragleave="dragLeave"
      @dragover.prevent
      @drop.prevent="dropFile"
      :class="{ enter: isEnter }"
    ></div>
  </div>
</template>

<script lang="ts" src="./ImageField.ts"></script>

<style lang="sass">
#imagefield
  width: 100%
  height: 60%

.imagefield-drop-area
  color: gray
  font-weight: bold
  font-size: 1.2em
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100%
  border: 5px solid gray
  border-radius: 15px

.enter
  border: 10px dotted powderblue
</style>
