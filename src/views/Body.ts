import { defineComponent, onErrorCaptured, reactive, ref } from "vue";
import path from "path";
import fs from "fs";
import Jimp from "jimp";
import ImageData from "@/common/interface/ImageData";
import Size from "@/common/interface/Size";
import FileListInterface from "@/common/class/FileListInterface";
import { Image, InputValue } from "@/components/index";

export default defineComponent({
    name: "Body",
    components: {
        Image,
        InputValue,
    },

    setup(prop, context) {
        let imagedata: ImageData = reactive({
            files: new FileListInterface(),
            beforeFilePath: "",
            afterFilePath: "",
            width: 0,
            height: 0,
        });

        let modal = ref(false);

        //Image→Body:ファイルリストを取得
        const getFiles = (files: FileList) => {
            imagedata.files.setFileList(files);
            imagedata.beforeFilePath = files[0].path;
            imagedata.afterFilePath = createReName(files[0].path);
        };
        //Body→InputValue:ファイルリストの長さを送信
        const sendFileLength = () => {
            console.log(imagedata.files);
            return imagedata.files.length;
        };
        //
        const getResizeValue = async (size: Size) => {

            //格納画像データ
            imagedata.width = size.width;
            imagedata.height = size.height;

            //一時フォルダ作成
            //imagedata.tmpFilePath = makeTmpDir();
            //リサイズ処理へ
            await doResizeImage(imagedata);
            //画像を指定のフォルダに保存
            //await saveImage(imagedata);
        };

        //エラーハンドラー
        onErrorCaptured((err, vm, info) => {
            return true;
        });

        return { getFiles, sendFileLength, getResizeValue };
    },
});

//次のバージョンまで保留
/*const makeTmpDir = () => {

    //tmpディレクトリ作成
    if (!fs.existsSync(DefineValueObject.appPath + "/tmp")) {
        fs.mkdirSync(DefineValueObject.appPath + "/tmp");
    }

    return DefineValueObject.appPath + "/tmp/" + DefineValueObject.tmpFileName + ".png";
}*/

const doResizeImage = async (imagedata: ImageData) => {

    Jimp.read(imagedata.beforeFilePath, (err, data) => {
        if (err) {
            throw err;
        } else {
            data.resize(Number(imagedata.width), Number(imagedata.height)).write(imagedata.afterFilePath);
        }
    })
};

//次のバージョンまで保留
/*const saveImage = async (imagedata: ImageData) => {

}*/

const createReName = (filepath: string) => {
    let dirname: string;
    let beforefilename: string;
    let format: string;
    let afterfilename: string;

    dirname = path.dirname(filepath);
    format = path.extname(filepath);
    beforefilename = path.basename(filepath, format);

    //仮のリネーム+01足しただけ
    afterfilename = beforefilename + "_01";

    return path.resolve(dirname, afterfilename) + format;
}