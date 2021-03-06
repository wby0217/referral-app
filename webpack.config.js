let path=require('path');
let htmlWebpackPlugin=require('html-webpack-plugin');

//module.exports导出的是对象或者方法,require时不用再 变量.获取导出的东西了,直接使用即可

module.exports={
    entry:'./app/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./app/index.html'
        })
    ],
    devtool:'source-map',//会显示源码(react、es6)错误,不会只显示bundle。js错误
    devServer:{
        //??
        proxy:{
            '/api':'http://localhost:3000'
        }
    }
}
