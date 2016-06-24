
if (global._babelPolyfill) {
  throw new Error('only one instance of babel-polyfill is allowed')
}
global._babelPolyfill = true

require('./shim-esnext')

function define(O, key, value) {
  O[key] || Object.defineProperty(O, key, {
    configurable: true,
    writable: true,
    value: value
  })
}

define(String.prototype, 'padLeft', ''.padStart)
define(String.prototype, 'padRight', ''.padEnd)

'pop,reverse,shift,keys,values,entries,some,find,findIndex,includes,concat,push,splice,unshift,copyWithin,fill'.split(',').forEach(function(key) {
  [][key] && define(Array, key, Function.call.bind([][key]))
})
