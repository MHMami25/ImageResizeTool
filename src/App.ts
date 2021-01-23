import { defineComponent, onErrorCaptured, reactive, ref } from "vue";
import { ErrorModal } from "@/components/index";

export default defineComponent({
    name: "App",
    components: {
        ErrorModal,
    },

    setup(prop, context) {
        let modal: boolean = false;

        //エラーハンドラー
        onErrorCaptured((err, vm, info) => {
            modal = true;
            return true;
        });
        return { modal };
    },
});