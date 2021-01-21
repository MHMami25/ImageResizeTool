<template>
  <div id="inputvalue">
    <input
      type="number"
      min="0"
      class="inputvalue-form"
      placeholder="例： 640"
      v-model="size.width"
    />
    <input
      type="number"
      min="0"
      class="inputvalue-form"
      placeholder="例： 0（自動）"
      v-model="size.height"
    />
    <div v-show="filelength">
      <button class="inputvalue-button" @click="doResize">リサイズ</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef, toRefs } from "vue";

interface Size {
  width: number;
  height: number;
}

export default defineComponent({
  name: "InputValue",
  props: {
    filelength: String,
  },
  setup(props, context) {
    let size: Size = {
      width: 0,
      height: 0,
    };
    const { filelength } = toRefs(props);

    const doResize = () => {
      context.emit("getResizeEvent");
    };
    return { size, filelength };
  },
});
</script>

<style lang="scss">
</style>