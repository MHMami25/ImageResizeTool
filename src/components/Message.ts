import { defineComponent, ref, watch } from "vue";


export default defineComponent({
    name: "Message",
    props: {
        filename: String,
        resultflag: Boolean
    },

    setup(props, context) {
        //メッセージ変数
        let filename = ref("");
        let resultmessage = ref("");
        let resultflag = ref(false);

        watch(() => props, () => {
            console.log(props.filename)
            console.log(props.resultflag)

            if (props.filename != filename.value) {
                filename.value = readResizingFile(props.filename)
            }

            if (props.resultflag) {
                resultmessage.value = changeresultMessage(1)
                resultflag.value = true;
            } else {
                resultmessage.value = changeresultMessage(0)
                resultflag.value = false;
            }

        }, { deep: true })

        return { filename, resultmessage, resultflag, readResizingFile, changeresultMessage };
    }
})

//ファイルが読み込まれた時に実行する処理
const readResizingFile = (filename: string | undefined) => {

    let buffilename = ""

    if (typeof filename == 'string') {
        buffilename = "ファイルパス：  " + filename
    }

    return buffilename
}

//メッセージ処理
const changeresultMessage = (code: Number): string => {

    let message = ""

    if (code == 1) {
        message = "処理が完了しました"
    } else if (code == 0) {
        message = ""
    }

    return message
}