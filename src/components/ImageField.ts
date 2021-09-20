import { defineComponent, onErrorCaptured, ref } from "vue";
import { FileListInterface } from "@/common/class/index";

export default defineComponent({
  name: "ImageField",
  setup(props, context) {
    let isEnter = ref(false);
    let isFile = ref(false);
    let files: FileListInterface = new FileListInterface();

    const dragEnter = () => {
      isEnter.value = true;
    };

    const dragLeave = () => {
      isEnter.value = false;
      isFile.value = false;
      context.emit("changeFileEvent", isFile.value);
    };

    const dropFile = (event: any) => {
      files.setFileList(event.dataTransfer.files);
      context.emit("getFileEvent", files.getFileList());
      isEnter.value = false;
      isFile.value = true;
      context.emit("changeFileEvent", isFile.value);
    };

    onErrorCaptured((err, vm, info) => {
      return true;
    });

    return { isEnter, isFile, dragEnter, dragLeave, dropFile };
  },
});