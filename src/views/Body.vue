<template>
  <div id="body" :style="style">
    <ImageField @getFileEvent="getFiles"></ImageField>
    <InputValue
      :imagedatavalue="imagedata"
      @getResizeEvent="getResizeValue"
    ></InputValue>
    <Message :filename="filename" :resultflag="resultflag"></Message>
  </div>
</template>

<script lang="ts" src="./Body.ts"></script>