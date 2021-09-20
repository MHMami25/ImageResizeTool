import {Size} from '@/common/interface/index'
import {FileListInterface} from '@/common/class/index'
export default interface ImageData {
    files: FileListInterface;
    beforeFilePath: string,
    afterFilePath: string;
    width: number;
    height: number;
    //入力値のsize
    inputsize: Size;
}