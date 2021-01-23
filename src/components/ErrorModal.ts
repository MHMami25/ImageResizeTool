import { defineComponent } from "vue";

export default defineComponent({

    setup(props, context) {

        const closeErrorModal = (() => {
            console.log("クリックイベント")
            context.emit("closeErrorModalEvent");
        })
        return { closeErrorModal };
    }
})