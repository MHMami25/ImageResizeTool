import { defineComponent, onErrorCaptured, ref } from "vue";
import FileListInterface from "@/common/class/FileListInterface";

export default defineComponent({
  name: "ImageField",
  setup(props, context) {
    let isEnter = ref(false);
    let files: FileListInterface = new FileListInterface();

    const dragEnter = () => {
      console.log("Enter Drop Area");
      isEnter.value = true;
    };

    const dragLeave = () => {
      isEnter.value = false;
    };

    const dropFile = (event: any) => {
      files.setFileList(event.dataTransfer.files);
      context.emit("getFileEvent", files.getFileList());
      isEnter.value = false;
    };

    onErrorCaptured((err, vm, info) => {
      return true;
    });

    return { isEnter, dragEnter, dragLeave, dropFile };
  },
});