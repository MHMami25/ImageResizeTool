import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "Image",
  setup(props, context) {
    let isEnter = ref(false);
    let files: FileList[];

    const dragEnter = () => {
      console.log("Enter Drop Area");
      isEnter.value = true;
    };

    const dragLeave = () => {
      isEnter.value = false;
    };

    const dropFile = (event: any) => {
      files = [event.dataTransfer.files];
      isEnter.value = false;
    };
    return { isEnter, dragEnter, dragLeave, dropFile };
  },
});