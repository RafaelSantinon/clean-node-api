module.exports = {
  mongodbMemoryServer: {
    version: 'latest'
  },
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '6.0.6',
      skipMD5: true
    },
    autoStart: false
  }
}
