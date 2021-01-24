module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "ImageResizeTool",
                appId: "com.sample.myapplication",
                win: {
                    icon: "public/app.ico",
                    target: [
                        {
                            target: 'zip',
                            arch: ['x64']
                        },
                        {
                            target: 'portable',
                            arch: ['x64']
                        }, 
                        {
                            target: 'nsis',
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