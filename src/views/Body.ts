import { defineComponent, onErrorCaptured, onMounted, reactive, ref } from "vue";
import path from "path";
import Jimp from "jimp";
import moment from "moment";
import { FileListInterface } from "@/common/class/index";
import { Size, ImageData } from "@/common/interface/index";
import { DefineValueObject } from "@/common/lib/index";
import { ImageField, InputValue } from "@/components/index";

export default defineComponent({
    name: "Body",
    components: {
        ImageField,
        InputValue,
    },

    setup(prop, context) {
        //スタイル設定
        let style = {
            width: DefineValueObject.window_width * 0.8 + "px",
            height: DefineValueObject.window_height * 0.9 + "px"
        }

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
        const getFiles = (files: FileList) => {
            imagedata.files.setFileList(files);

            //取得ファイルのサイズを取得
            let image = new Image();
            image.src = files[0].path;
            image.addEventListener('load', (e) => {
                imagedata = getImageSize(imagedata, image);

                imagedata.beforeFilePath = files[0].path;
                imagedata.afterFilePath = createReName(files[0].path);

            }, false)
        };

        //
        const getResizeValue = async (size: Size) => {
            //入力値データ
            imagedata.inputsize.width = size.width;
            imagedata.inputsize.height = size.height;
            //一時フォルダ作成
            //imagedata.tmpFilePath = makeTmpDir();
            //リサイズ処理へ
            await doResizeImage(imagedata);

        };

        //エラーハンドラー
        onErrorCaptured((err, vm, info) => {
            return true;
        });

        return { style, imagedata, getFiles, getResizeValue };
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

const getImageSize = (imagedata: ImageData, image: HTMLImageElement) => {
    imagedata.width = image.naturalWidth;
    imagedata.height = image.naturalHeight;

    return imagedata;
}

const doResizeImage = async (imagedata: ImageData) => {

    try {
        Jimp.read(imagedata.beforeFilePath, (err, data) => {
            if (err) {
                throw err;
            } else {
                data.resize(Number(imagedata.width), Number(imagedata.height)).write(imagedata.afterFilePath);
            }
        })
    } catch (err) {
        throw err;
    }
};

const createReName = (filepath: string) => {
    let date = moment();

    let dirname: string;
    let beforefilename: string;
    let format: string;
    let afterfilename: string;

    dirname = path.dirname(filepath);
    format = path.extname(filepath);
    beforefilename = path.basename(filepath, format);

    afterfilename = beforefilename + "_" + String(date.get('day')) + String(date.get('hour')) + String(date.get('minute')) + String(date.get('second'));

    return path.resolve(dirname, afterfilename) + format;
}