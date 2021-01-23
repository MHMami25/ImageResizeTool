import { defineComponent } from "vue";

export default defineComponent({

    setup(props, context) {

        const closeErrorModal = (() => {
            context.emit("closeErrorModalEvent");
        })
        return { closeErrorModal };
    }
})