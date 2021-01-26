import {
  defineComponent,
  onErrorCaptured,
  reactive,
  ref,
  toRefs, PropType, watch
} from "vue";
import { Size, ImageData } from "@/common/interface/index"


export default defineComponent({
  name: "InputValue",
  props: {
    imagedata: Object as PropType<ImageData>,
  },

  setup(props, context) {
    let size: Size = reactive({
      width: 200,
      height: 200,
      percent: 50
    });

    let filelength = ref(0);

    const { imagedata } = toRefs(props);

    //Body→InputValue:画像データ(imagedata)を取得
    const getImageData = () => {
      console.log("値反映")
      size.width = Number(imagedata?.value?.width);
      size.height = Number(imagedata?.value?.height);
      filelength.value = Number(imagedata?.value?.files.getFileList().length);
    }

    const doResize = () => {
      context.emit("getResizeEvent", size);
    };

    watch(props, () => {
      console.log("値反映1")
      getImageData();
    })

    onErrorCaptured((err, vm, info) => {
      return true;
    });
    return { size, getImageData, filelength, doResize };
  },
});