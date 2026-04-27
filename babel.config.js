module.exports = {
    presets: [
        [
            '@babel/preset-env', {
                targets: '> 1%, last 2 versions, not dead, not ie 11',
                useBuiltIns: 'usage',
                corejs: 3
            }
        ]
    ]
};