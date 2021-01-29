import { defineComponent, onErrorCaptured, reactive, ref } from "vue";
import { ErrorModal } from "@/components/index";
import DefineValueObject from "./common/lib/DefineValueObject";

export default defineComponent({
    name: "App",
    components: {
        ErrorModal,
    },

    setup(prop, context) {
        //スタイル設定
        let style = {
            width: DefineValueObject.window_width,
            height: DefineValueObject.window_height
        }

        let modal = ref(false);
        let message = ref("");
        let infomation = ref("");

        const closeErrorModal = (() => {
            modal.value = false;
        });

        //エラーハンドラー
        onErrorCaptured((err, vm, info) => {
            modal.value = true;
            message.value = "だめです";
            infomation.value = info;

            return false;
        });
        return { style, modal, message, infomation, closeErrorModal };
    },
});