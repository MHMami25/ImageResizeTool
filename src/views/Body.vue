<template>
  <div id="body" :style="style">
    <ImageField @getFileEvent="getFiles"></ImageField>
    <InputValue
      :imagedatavalue="imagedata"
      @getResizeEvent="getResizeValue"
    ></InputValue>
  </div>
</template>

<script lang="ts" src="./Body.ts"></script>