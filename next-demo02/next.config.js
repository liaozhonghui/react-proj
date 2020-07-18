const withCss = require('@zeit/next-css')

if (typeof require !== 'underfined') {
    require.extensions['.css'] = file => { }
}

module.exports = withCss({})