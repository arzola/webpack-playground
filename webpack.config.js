module.exports = {
    entry: ['./src/source.js'],
    output: {
        path: __dirname + '/build',
        filename: 'app.js'
        ,
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            test: "/\.js$/",
            exclude: "/node_modules/"
        }]
    },
    devServer:{
        port: 3000,
        contentBase: __dirname + '/build',
        inline: true
    }
}
