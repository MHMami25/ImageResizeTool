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
import imageCompression from "browser-image-compression";
import fs from "fs";
import ImageData from "@/common/interface/ImageData";
import Size from "@/common/interface/Size";
import { Image, InputValue } from "@/components/index";

export default defineComponent({
  name: "Body",
  components: {
    Image,
    InputValue,
  },

  setup(prop, context) {
    let imagedata: ImageData = reactive({
      files: new FileList(),
      width: 0,
      height: 0,
    });

    //Image→Body:ファイルリストを取得
    const getFiles = (files: FileList) => {
      imagedata.files = files;
    };
    //Body→InputValue:ファイルリストの長さを送信
    const sendFileLength = () => {
      console.log(imagedata.files);
      return imagedata.files.length;
    };
    //
    const getResizeValue = async (size: Size) => {
      //格納画像データ
      let resizedimage: File;
      imagedata.width = size.width;
      imagedata.height = size.height;

      //リサイズ処理へ
      resizedimage = await doResizeImage(imagedata);
      //画像保存処理へ
      saveResizedImage(resizedimage);
    };

    return { sendFileLength };
  },
});

const doResizeImage = async (imagedata: ImageData) => {
  fs.copyFile("data.txt", "data.bak", (err) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log("Done.");
    }
  });

  console.log("lets resize");
  const options = {
    maxSizeMB: 3,
  };
  return await imageCompression(imagedata.files[0], options);
};

const saveResizedImage = (file: File) => {};
</script>