const pxtorem = require('postcss-pxtorem');

module.exports = {
    plugins: [
        pxtorem({
            rootValue: 16,
            propList: ['*'],
            mediaQuery: true,
            minPixelValue: 0
        })
    ]
};
