<template>
  <div id="body">
    <ImageField @getFileEvent="getFiles"></ImageField>
    <InputValue
      :imagedatavalue="imagedata"
      @getResizeEvent="getResizeValue"
    ></InputValue>
  </div>
</template>

<script lang="ts" src="./Body.ts"></script>