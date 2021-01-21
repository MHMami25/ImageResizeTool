cd ../
SET /P version="バージョン："
npm install -D --save sqlite3 --build-from-source --runtime=electron --target=%version% --dist-url=https://atom.io/download/electron --python=c:\Python27\python.exe