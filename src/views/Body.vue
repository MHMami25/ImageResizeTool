<template>
  <div class="body">
    <Image @getFileEvent="getFiles"></Image>
    <InputValue
      :filelength="sendFileLength"
      @getResizeEvent="getResizeValue"
    ></InputValue>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { Image, InputValue } from "@/components/index";

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

    const sendFileLength = () => {
      console.log(imagedata.files);
      return imagedata.files.length;
    };

    const getResizeValue = () => {};

    return { sendFileLength };
  },
});
</script>