<template>
  <div class="body">
    <Image @getFileEvent="getFiles"></Image>
    <InputValue
      :filelength="sendFileLength"
      @getResizeEvent="getResizeValue"
    ></InputValue>
  </div>
</template>

<script lang="ts" src="./Body.ts"></script>