const withCss = require('@zeit/next-css')
// module.exports = withCss()

const withSass = require('@zeit/next-sass')
// module.exports = withSass()

const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
// const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')

module.exports = withSass(withCss({
  webpack(config) {
    // config = commonsChunkConfig(config, /\.(sass|scss|css)$/)
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  },
  env: {
    'API_KEY': process.env.API_KEY,
    'MONGO_ATLAS_PW': process.env.MONGO_ATLAS_PW
  }
}))