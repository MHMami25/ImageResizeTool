import { setupMaster } from "cluster";
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

        watch(() => props, () => {
            console.log(props.filename)
            console.log(props.resultflag)
            if (props.filename != filename.value) {
                filename.value = readResizingFile(props.filename)
            }

            if (props.resultflag) {
                resultmessage.value = pushResizeButton(1)
            }

        }, { deep: true })

        return { filename, resultmessage, readResizingFile, pushResizeButton };
    }
})

//ファイルが読み込まれた時に実行する処理
const readResizingFile = (filename: string | undefined) => {

    let buffilename = ""

    if (typeof filename == 'string') {
        buffilename = filename
    }

    return buffilename
}

//リサイズボタン押下時に実行する処理
const pushResizeButton = (code: Number): string => {

    let message = ""

    if (code == 1) {
        message = "処理が完了しました"
    }

    return message
}