'use strict'

var util = require('util')
var Session = require('./Session')

function S2XSession (opts) {
  Session.call(this, opts)
}

util.inherits(S2XSession, Session)

S2XSession.prototype.NS_COMPONENT = 'jabber:component:connect'

module.exports = S2XSession
