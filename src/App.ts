import { defineComponent, onErrorCaptured, reactive, ref } from "vue";
import { ErrorModal } from "@/components/index";
import { setupMaster } from "cluster";

export default defineComponent({
    name: "App",
    components: {
        ErrorModal,
    },

    setup(prop, context) {
        let modal = ref(false);

        const closeErrorModal = (() => {
            modal.value = false;
        });

        //エラーハンドラー
        onErrorCaptured((err, vm, info) => {
            modal.value = true;
            console.log("Appキャッチ" + modal);
            return true;
        });
        return { modal, closeErrorModal };
    },
});