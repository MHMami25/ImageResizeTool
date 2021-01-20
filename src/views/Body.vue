<template>
  <div class="body">
    <Image @getFileEvent="getFiles"></Image>
    <InputValue
      :files="sendFiles"
      @getResizeEvent="getResizeValue"
    ></InputValue>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Image from "@/components/Image.vue";
import InputValue from "@/components/InputValue.vue";

interface ImageData {
  files: FileList[];
  width: number;
  height: number;
}

export default defineComponent({
  name: "Body",
  components: {
    Image,
    InputValue,
  },

  setup(prop, context) {
    let imagedata: ImageData = reactive({
      files: [],
      width: 0,
      height: 0,
    });

    const getFiles = (files: FileList[]) => {
      imagedata.files = files;
    };

    const sendFiles = () => {
      return imagedata.files;
    };

    const getResizeValue = () => {};
  },
});
</script>