import { defineComponent, onErrorCaptured, reactive, ref } from "vue";
import { ErrorModal } from "@/components/index";

export default defineComponent({
    name: "App",
    components: {
        ErrorModal,
    },

    setup(prop, context) {
        let modal = ref(false);
        let message = ref("");

        const closeErrorModal = (() => {
            modal.value = false;
        });

        //エラーハンドラー
        onErrorCaptured((err, vm, info) => {
            modal.value = true;
            message.value = "だめです";
            return false;
        });
        return { modal, message, closeErrorModal };
    },
});