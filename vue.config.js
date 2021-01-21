module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "ImageResizeTool",
                appId: "com.sample.myapplication",
                win: {
                    //icon: "src/assets/app.ico",
                    target: [
                        {
                            target: 'zip',
                            arch: ['x64'] // 'x64', 'ia32'
                        }
                    ]
                }
            }
        }
    }
};