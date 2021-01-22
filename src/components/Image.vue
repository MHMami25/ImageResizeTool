<template>
  <div id="image">
    <div
      class="image-drop-area"
      @dragenter="dragEnter"
      @dragleave="dragLeave"
      @dragover.prevent
      @drop.prevent="dropFile"
      :class="{ enter: isEnter }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, reactive, ref } from "vue";

export default defineComponent({
  name: "Image",
  setup(props, context) {
    let isEnter = ref(false);
    let files: FileList;

    const dragEnter = () => {
      console.log("Enter Drop Area");
      isEnter.value = true;
    };

    const dragLeave = () => {
      isEnter.value = false;
    };

    const dropFile = (event: any) => {
      throw new Error("エラーを発生させた");

      files = event.dataTransfer.files;
      context.emit("getFileEvent", files);
      isEnter.value = false;
    };

    onErrorCaptured((err, vm, info) => {
      return true;
    });

    return { isEnter, dragEnter, dragLeave, dropFile };
  },
});
</script>

<style lang="scss">
.image-drop-area {
  color: gray;
  font-weight: bold;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  border: 5px solid gray;
  border-radius: 15px;
}

.enter {
  border: 10px dotted powderblue;
}
</style>
