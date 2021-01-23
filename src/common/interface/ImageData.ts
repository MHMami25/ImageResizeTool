import FileListInterface from '@/common/class/FileListInterface'
export default interface ImageData {
    files: FileListInterface;
    beforeFilePath: string,
    tmpFilePath: string;
    width: number;
    height: number;
}