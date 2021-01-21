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