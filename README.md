# cesium-sensors-es6

[![npm version](https://badge.fury.io/js/cesium-sensors-es6.svg)](https://badge.fury.io/js/cesium-sensors-es6)

A Cesium plugin for visualizing sensor volumes. Based on [cesium-sensors](https://github.com/AnalyticalGraphicsInc/cesium-sensors) and evolved to support more recent Cesium versions and typescript typings.

## Install

```sh
$ npm install --save cesium-sensors-es6
```

## Usage

Prebuilt minified and unminified versions of the plugin are in the [dist](dist/) directory.

The plugin automatically adds support for the CZML properties `agi_conicSensor`, `agi_customPatternSensor`, and `agi_rectangularSensor`.  The corresponding `Entity` properties are `conicSensor`, `customPatternSensor`, and `rectangularSensor`.

In order to load data directly into `Entity` objects that you create directly, you must call `entity.addProperty` to create each of the sensor properties you wish to use.  The CZML processing does this automatically.

```html
<script src="path/to/Cesium.js"></script>
<script src="path/to/cesium-sensors-es6.cjs.development.js"></script>
<script>
// To create an entity directly
var entityCollection = new Cesium.EntityCollection();

var entity = entityCollection.getOrCreateEntity('test');
entity.addProperty('conicSensor');

// configure other entity properties, e.g. position and orientation...

entity.conicSensor = new CesiumSensorVolumes.ConicSensorGraphics();
entity.conicSensor.intersectionColor = new Cesium.ConstantProperty(new Cesium.Color(0.1, 0.2, 0.3, 0.4));
</script>
```

## License

MIT Free for commercial and non-commercial use.  See [LICENSE.md](LICENSE.md).

# TSDX Bootstrap

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
