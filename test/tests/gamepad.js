define(function(require) {
  'use strict';

  var gamepad = require('../../lib/gamepad');

  describe('Gamepad', function() {
    it('exposes an object', function() {
      expect(gamepad).to.be.an('object');
    });

    describe('isSupported', function() {
      it('is a boolean', function() {
        expect(gamepad.isSupported).to.be.a('boolean');
      });

      it('matches the exported getGamepads value', function() {
        expect(!!gamepad.isSupported).to.equal(!!gamepad.getGamepads);
      });
    });

    describe('connected', function() {
      it('is an object', function() {
        expect(gamepad.connected).to.be.an('object');
      });
    });

    describe('polling', function() {
      it('does not error'
    });
  });
});
