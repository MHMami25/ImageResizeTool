<template>
  <div class="body">
    <ImageField @getFileEvent="getFiles"></ImageField>
    <InputValue
      :imagedata="sendImageData"
      @getResizeEvent="getResizeValue"
    ></InputValue>
  </div>
</template>

<script lang="ts" src="./Body.ts"></script>