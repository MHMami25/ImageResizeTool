module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "ImageResizeTool",
                appId: "com.sample.myapplication",
                win: {
                    //icon: "public/app.ico",
                    target: [
                        {
                            target: ['zip', 'nsis', 'portable'],
                            arch: ['x64']
                        }
                    ]
                }
            },
            nodeIntegration:true,
            nodemodulesPath:['./node_modules']
        }
    }
};