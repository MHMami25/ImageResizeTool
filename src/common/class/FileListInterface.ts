export default class FileListInterface implements FileList{
    
    [index: number]: File;
    length!: number;
    datatransfer!: DataTransfer;
    filelist!: FileList;

    __constructor() {
        this.datatransfer = new DataTransfer();
        this.datatransfer.items.add(new File([], ""));
        this.filelist = this.datatransfer.files;
        this.length = 1;
    }

    getFileList(): FileList {
        return this.filelist;
    }

    setFileList(filelist: FileList) {
        this.filelist = filelist
    }

    //FileListインターフェース
    item(index: number): File | null {
        throw new Error("Method not implemented.");
    }
    [Symbol.iterator](): IterableIterator<File> {
        throw new Error("Method not implemented.");
    }
}