import {
    Component,
    defineComponent,
    onErrorCaptured,
    reactive,
    ref,
    toRef,
    toRefs
  } from "vue";
  import Size from "@/common/interface/Size";
  
  
  export default defineComponent({
    name: "InputValue",
    props: {
      filelength: String,
    },
    setup(props, context) {
      let size: Size = {
        width: 200,
        height: 200,
      };
      const { filelength } = toRefs(props);
  
      const doResize = () => {
        context.emit("getResizeEvent", size);
      };
  
      onErrorCaptured((err, vm, info) => {
        return true;
      });
      return { size, filelength, doResize };
    },
  });