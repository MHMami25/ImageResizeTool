import { defineComponent, toRef } from "vue";

export default defineComponent({
    name: "ErroeModal",
    props: {
        errormessage: String
    },

    setup(props, context) {

        let errormessage = props;

        const closeErrorModal = (() => {
            context.emit("closeErrorModalEvent");
        })
        return { errormessage, closeErrorModal };
    }
})