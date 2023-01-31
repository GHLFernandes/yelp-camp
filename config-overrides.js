module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"], // other stuff
        fallback: {
            "querystring": require.resolve("querystring-es3")
        }
    },
};