require('co-mocha')
var assert = require('assert')
var has = require('lodash.has')

var censor = require('../index')

describe('The censor module', function() {

  function* identityMiddleware () {
    return
  }

  it('should remove an attribute from this.body', function* () {
    var context = {
      body: {
        person: 'Luke Skywalker',
        ship: 'x-wing'
      }
    }

    var configuredCensor = censor({
      keys: [
        'person'
      ]
    })

    yield configuredCensor.call(context, identityMiddleware)

    assert(!has(context, 'body.person'))
    assert(has(context, 'body.ship'))
  });

  it('should deeply remove an attribute from this.body', function* () {
    var context = {
      body: {
        person: {
          name: 'Luke Skywalker',
          pwdHash: 'forceforceforceforceyoda'
        }
      }
    }

    var configuredCensor = censor({
      keys: [
        'pwdHash'
      ]
    })

    yield configuredCensor.call(context, identityMiddleware)

    assert(!has(context, 'body.person.pwdHash'))
    assert(has(context, 'body.person.name'))
  });
});
