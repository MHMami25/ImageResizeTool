import { defineComponent, onErrorCaptured, reactive, ref } from "vue";
import path from "path";
import fs from "fs";
import Jimp from "jimp";
import { FileListInterface } from "@/common/class/index";
import { Size, ImageData } from "@/common/interface/index";
import { ImageField, InputValue } from "@/components/index";

export default defineComponent({
    name: "Body",
    components: {
        ImageField,
        InputValue,
    },

    setup(prop, context) {
        let imagedata: ImageData = reactive({
            files: new FileListInterface(),
            beforeFilePath: "",
            afterFilePath: "",
            width: 0,
            height: 0,
            inputsize: {
                width: 0,
                height: 0,
                percent: 0
            }
        });

        //Image→Body:ファイルリストを取得
        const getFiles = async (files: FileList) => {
            imagedata.files.setFileList(files);

            //取得ファイルのサイズを取得
            let image = new Image();
            image.src = URL.createObjectURL(files[0]);
            imagedata = await getImageSize(imagedata, image);

            imagedata.beforeFilePath = files[0].path;
            imagedata.afterFilePath = createReName(files[0].path);
        };

        //Body→InputValue:画像のサイズを送信
        const sentImageData = () => {
            return imagedata;
        }

        //
        const getResizeValue = async (size: Size) => {

            //入力値データ
            imagedata.inputsize.width = size.width;
            imagedata.inputsize.height = size.height;

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

        return { getFiles, sentImageData, getResizeValue };
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

const getImageSize = async (imagedata: ImageData, image: HTMLImageElement) => {
    imagedata.width = image.naturalWidth;
    imagedata.height = image.naturalHeight;

    return imagedata;
}

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