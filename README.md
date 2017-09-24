# Parg

[![Greenkeeper badge](https://badges.greenkeeper.io/Qard/rainbow.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/Qard/rainbow.png)](https://travis-ci.org/Qard/rainbow)

Rainbow is a little helper to generate color ranges

## Install

    npm install rainbow

## Usage
    
    var rgb = rainbow.hexToRgb('#ff0')
    var hex = rainbow.rgbToHex([0,255,0])

    var range = rainbow.range('#0f0', '#00f', 10)

## API

### rainbow.hexToRgb(hex)
Takes a 3 or 6 digit hex string in the form of #fff or #ffffff and translates it to a 3-element array of numbers from 0-255

### rainbow.rgbToHex(rgb)
Takes a 3-element array of numbers from 0-255 and translates it to a hex color

### rainbow.range(from, to [, count])
Accepts either hex strings or rgb arrays to define a start and end point for a color range. If count is specified, it will go ahead and generate the range. If not, it will return a generator function that can be used later.

---

### Copyright (c) 2013 Stephen Belanger
#### Licensed under MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.