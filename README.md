# metalsmith-discover-partials

[![npm](https://img.shields.io/npm/v/metalsmith-discover-partials.svg)](https://www.npmjs.com/package/metalsmith-discover-partials) [![Dependencies](https://img.shields.io/david/timdp/metalsmith-discover-partials.svg)](https://david-dm.org/timdp/metalsmith-discover-partials) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

Discovers your template partials and registers them with Handlebars.

## Usage

In `metalsmith.json`:

```json
{
  "plugins": {
    "metalsmith-discover-partials": {
      "directory": "partials",
      "pattern": "/\\.hbs$/"
    }
  }
}
```

Using Metalsmith's API:

```js
var discoverPartials = require('metalsmith-discover-partials')

require('metalsmith')(__dirname)
  .use(discoverPartials({
    directory: 'partials',
    pattern: /\.hbs$/
  }))
  .build()
```

The displayed values for `directory` and `pattern` are the defaults. If you
don't need to change them, you can just leave them out.

## Author

[Tim De Pauw](https://tmdpw.eu/)

## License

MIT
