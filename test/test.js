var assert = require('assert')
  , rainbow = require('../')

describe('rainbow', function () {
  it('should convert hex to rgb', function () {
    rainbow.hexToRgb('#f00').should.eql([255,0,0])
  })

  it('should convert rgb to hex', function () {
    rainbow.rgbToHex([255,0,0]).should.eql('#ff0000')
  })

  describe('range', function () {
    it('should generate range from hex', function () {
      var generator = rainbow.range('#0f0', '#00f')
      generator.should.be.a('function')
      generator(10).should.eql([
        '#00ff00'
        , '#00e31d'
        , '#00c739'
        , '#00aa55'
        , '#008e72'
        , '#00728e'
        , '#0055aa'
        , '#0039c7'
        , '#001de3'
        , '#0000ff'
      ])
    })

    it('should generate range from rgb', function () {
      var generator = rainbow.range([0,255,0],[0,0,255])
      generator.should.be.a('function')
      generator(10).should.eql([
        '#00ff00'
        , '#00e31d'
        , '#00c739'
        , '#00aa55'
        , '#008e72'
        , '#00728e'
        , '#0055aa'
        , '#0039c7'
        , '#001de3'
        , '#0000ff'
      ])
    })
  })
})