const Encore = require('@symfony/webpack-encore')

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore
  .setOutputPath('public/')
  .setPublicPath('/')
  .setManifestKeyPrefix('bundles/kazetenncore')
  .enableSourceMaps(false)
  .enableVersioning(false)
  .disableSingleRuntimeChunk()
  .enableSassLoader()

  /* entries */
  .addEntry('admin_page_form', '/assets/js/content_form.js')

  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()


module.exports = Encore.getWebpackConfig()
