const path            = require('path')
const withTypescript  = require('@zeit/next-typescript')
const withCSS         = require('@zeit/next-css')
const {exportPathMap} = require('nextjs-export-path-map')

module.exports = withTypescript(
  withCSS({
    cssModules: true,
  })
)
