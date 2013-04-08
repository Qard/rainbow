!(function (name, definition) {
  if (typeof module !== 'undefined') {
    definition(module.exports)
  } else if (typeof define === 'function' && typeof define.amd === 'object') {
    define(function () {
      var exports = {}
      definition(exports)
      return exports
    })
  } else {
    definition(this[name] = {})
  }
})('rainbow', function (exports) {
  // Convert hex color to [red, green, blue] array
  exports.hexToRgb = function (h) {
    var res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      h.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i
        , function (m, r, g, b) { return r + r + g + g + b + b }
      )
    )
    return res ? [
      parseInt(res[1], 16)
      , parseInt(res[2], 16)
      , parseInt(res[3], 16)
    ] : null
  }

  // Convert [red, green, blue] array to hex color
  exports.rgbToHex = function (d) {
    return '#' + ((1 << 24) + (d[0] << 16) + (d[1] << 8) + d[2]).toString(16).slice(1)
  }

  // Generate a color range
  exports.range = function (a, b, n) {
    ;(typeof a === 'string') && (a = exports.hexToRgb(a))
    ;(typeof b === 'string') && (b = exports.hexToRgb(b))
    var diff = [a[0] - b[0], a[1] - b[1], a[2] - b[2]]

    function generator (n) {
      var res = []
      for (var i = 0; i < n; i++) {
        var val = [
          a[0] - Math.floor((diff[0] / (n - 1)) * i)
          , a[1] - Math.floor((diff[1] / (n - 1)) * i)
          , a[2] - Math.floor((diff[2] / (n - 1)) * i)
        ]
        res.push(exports.rgbToHex(val))
      }
      return res
    }

    return n ? generator(n) : generator
  }
})