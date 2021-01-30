import { defineComponent } from "vue";

export default defineComponent({
    name: "ErroeModal",
    props: {
        errormessage: String,
        errorinfo: String
    },

    setup(props, context) {

        let { errormessage, errorinfo } = props;

        const closeErrorModal = (() => {
            context.emit("closeErrorModalEvent");
        })
        return { errormessage, errorinfo, closeErrorModal };
    }
})