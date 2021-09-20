<template>
  <div id="imagefield">
    <div
      class="imagefield-drop-area"
      @dragenter="dragEnter"
      @dragleave="dragLeave"
      @dragover.prevent
      @drop.prevent="dropFile"
      :class="{ enter: isEnter }"
    >
      <h1 v-if="isFile">ファイルアップロード完了</h1>
    </div>
  </div>
</template>

<script lang="ts" src="./ImageField.ts"></script>

<style lang="scss">
#imagefield {
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.imagefield-drop-area {
  color: gray;
  font-weight: bold;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  border: 5px solid gray;
  border-radius: 15px;
}
.enter {
  border: 10px dotted powderblue;
}

h1 {
  position: relative;
  padding: 1em 0;
}
h1::before,
h1::after {
  position: absolute;
  left: 0;
  content: "";
  width: 100%;
  height: 6px;
  box-sizing: border-box;
}
h1::before {
  top: 0;
  border-top: 2px solid #ccc;
  border-bottom: 1px solid #ccc;
}
h1::after {
  bottom: 0;
  border-top: 1px solid #ccc;
  border-bottom: 2px solid #ccc;
}
</style>
