import {
  defineComponent,
  onErrorCaptured,
  reactive,
  ref,
  toRefs, PropType, watch, onMounted
} from "vue";
import { Size, ImageData } from "@/common/interface/index"

enum WINDOWSIZE {
  WIDTH = "width",
  HEIGHT = "height"
}

export default defineComponent({
  name: "InputValue",
  props: {
    imagedatavalue: Object as PropType<ImageData>,
  },

  setup(props, context) {
    let size: Size = reactive({
      width: 0,
      height: 0,
      percent: 0
    });
    let sizeratiochecked = ref(false);
    let percentusechecked = ref(false);

    //sizeratiocheckedがチェックされた際に実行する処理
    const checkSizeRatioChecked = () => {
      if (sizeratiochecked.value) {
        size = getImageData(props.imagedatavalue, size);
      }
    }

    //percentusecheckedがチェックされた際に実行する処理
    const checkPercentuseChecked = () => {

    }

    //幅の入力値が変更された際に実行する処理
    const changeInputWidthValue = () => {
      if (sizeratiochecked.value) {
        size = changeSizeValue(size, props.imagedatavalue, WINDOWSIZE.WIDTH);
      }
    }

    //高さの入力値が変更された際に実行する処理
    const changeInputHeightValue = () => {
      if (sizeratiochecked.value) {
        size = changeSizeValue(size, props.imagedatavalue, WINDOWSIZE.HEIGHT);
      }
    }

    //パーセントの入力値が変更された際に実行する処理
    const changeInputPercentValue = () => {
      if (percentusechecked.value) {
        size.width = Math.round(Number(props.imagedatavalue?.width) * size.percent / 100);
        size.height = Math.round(Number(props.imagedatavalue?.height) * size.percent / 100);
      }
    }

    const doResize = () => {
      context.emit("getResizeEvent", size);
    };

    watch(() => props, () => {
      size = getImageData(props.imagedatavalue, size);
    }, { deep: true })

    onErrorCaptured((err, vm, info) => {
      return true;
    });
    return { size, sizeratiochecked, percentusechecked, checkSizeRatioChecked, checkPercentuseChecked, changeInputWidthValue, changeInputHeightValue, changeInputPercentValue, doResize };
  },
});

//Body→InputValue:画像データ(imagedata)を取得
const getImageData = (imagedatavalue: ImageData | undefined, size: Size) => {

  size.width = Number(imagedatavalue?.width);
  size.height = Number(imagedatavalue?.height);
  size.percent = 100;

  return size;
}

const changeSizeValue = (size: Size, imagedatavalue: ImageData | undefined, str: string) => {

  let calcratio = 1;

  if (str == WINDOWSIZE.WIDTH) {
    if (imagedatavalue?.width != 0) {
      calcratio = size.width / Number(imagedatavalue?.width);
      size.height = Math.round(Number(imagedatavalue?.height) * calcratio);
    }

  } else if (str == WINDOWSIZE.HEIGHT) {
    if (imagedatavalue?.height != 0) {
      calcratio = size.height / Number(imagedatavalue?.height);
      size.width = Math.round(Number(imagedatavalue?.width) * calcratio);
    }
  } else {
    throw new Error("error");
  }

  return size;
}