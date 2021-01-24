import { defineComponent, onErrorCaptured, reactive, ref } from "vue";
import { BrowserWindow, dialog } from "electron";
import fs from "fs";
import Jimp from "jimp";
import ImageData from "@/common/interface/ImageData";
import Size from "@/common/interface/Size";
import FileListInterface from "@/common/class/FileListInterface";
import DefineValueObject from '@/common/lib/DefineValueObject'
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
            tmpFilePath: "",
            width: 0,
            height: 0,
        });

        let modal = ref(false);

        //Image→Body:ファイルリストを取得
        const getFiles = (files: FileList) => {
            imagedata.files.setFileList(files);
            imagedata.beforeFilePath = files[0].path;
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
            imagedata.tmpFilePath = makeTmpDir();
            //リサイズ処理へ
            await doResizeImage(imagedata);
            //画像を指定のフォルダに保存
            await saveImage(imagedata);
        };

        //エラーハンドラー
        onErrorCaptured((err, vm, info) => {
            return true;
        });

        return { getFiles, sendFileLength, getResizeValue };
    },
});

const makeTmpDir = () => {

    //tmpディレクトリ作成
    if (!fs.existsSync(DefineValueObject.appPath + "/tmp")) {
        fs.mkdirSync(DefineValueObject.appPath + "/tmp");
    }

    return DefineValueObject.appPath + "/tmp/" + DefineValueObject.tmpFileName + ".png";
}

const doResizeImage = async (imagedata: ImageData) => {

    Jimp.read(imagedata.beforeFilePath, (err, data) => {
        if (err) {
            throw err;
        } else {
            data.resize(Number(imagedata.width), Number(imagedata.height)).write(imagedata.tmpFilePath);
        }
    })
};

const saveImage = async (imagedata: ImageData) => {

    dialog.showSaveDialog(
        BrowserWindow.getAllWindows()[0],
        {
            title: "title",
            filters: [
                {
                    name: 'Documents',
                    extensions: ['jpg', 'png', 'bmp']
                }
            ]
        }
    )


}