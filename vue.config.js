module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "ImageResizeTool",
                appId: "com.sample.myapplication",
                win: {
                    icon: "src/asset/app.ico",
                    target: [
                        {
                            target: 'portable',
                            arch: ['x64']
                        }
                    ]
                }
            },
            nodeIntegration: true,
            nodemodulesPath: ['./node_modules']
        }
    }
};