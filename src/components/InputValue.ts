import {
  defineComponent,
  onErrorCaptured,
  reactive,
  ref,
  toRefs
} from "vue";
import { Size, ImageData } from "@/common/interface/index"


export default defineComponent({
  name: "InputValue",
  props: {
    imagedata: ImageData
  },
  setup(props, context) {
    let size: Size = reactive({
      width: 200,
      height: 200,
      percent: 50
    });

    let filelength = ref(false);

    const { imagedata } = toRefs(props);

    //Body→InputValue:画像データ(imagedata)を取得
    const getImageData = () => {
      size.width = Number(imagedata?.value?.width);
      size.height = Number(imagedata?.value?.height);
      filelength = imagedata?.value.files.getFileList().length;
    }

    const doResize = () => {
      context.emit("getResizeEvent", size);
    };

    onErrorCaptured((err, vm, info) => {
      return true;
    });
    return { size, getImageData, filelength, doResize };
  },
});