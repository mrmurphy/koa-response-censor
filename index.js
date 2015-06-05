var omitDeep = require('omit-deep')

module.exports = function(settings) {
  var keysToOmit = []
  if (settings && settings.keys) {
    keysToOmit = settings.keys
  }

  return function*(next) {
    yield next
    if (!this.body) {
      return
    }
    this.body = omitDeep(this.body, keysToOmit)
  }
}
