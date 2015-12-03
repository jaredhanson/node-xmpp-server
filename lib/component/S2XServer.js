'use strict'

var util = require('util')
var net = require('net')
var Server = require('../Server')
var Session = require('./S2XSession')

var COMPONENT_PORT = 5347

/**
 * params:
 *   options : port on which to listen to component connections
 *   options.port : xmpp tcp socket port
 *   options.autostart : if we start listening at given port
 */
function S2XServer (options) {
  var server = this.server = (options && options.server || net.createServer())
  server.on('connection', this.acceptConnection.bind(this))
  server.on('close', this.emit.bind(this, 'close'))
  server.on('error', this.emit.bind(this, 'error'))
  server.on('listening', this.emit.bind(this, 'listening'))

  Server.call(this, options)
}

util.inherits(S2XServer, Server)

S2XServer.prototype.Session = Session

S2XServer.prototype.DEFAULT_PORT = COMPONENT_PORT

module.exports = S2XServer
