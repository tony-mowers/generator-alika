# generator-alika [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generates starter projects used in tutorials as teaching examples and starter projects for learning. 

It aims to create project structures, with build facilites, which are as simple as possible while still statisfying the teaching goals. For example, you can easily use it to create a project for experimenting with using browser based Javascript ES6 (with module support) along with SCSS stylesheets. You will be able launch a webserver with one command that will automatically update your browser as you experiment with editing Javascript ES6 and SCSS stylesheet files.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-alika using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-alika
```

Then generate your new project and launch a webserver:

```bash
mkdir <dirname>
cd <dirname>
yo alika
gulp
```

After your webserver has started you can load the website into your browser and start playing with ES6 Javascript and SCSS stylesheets. Your browser will refresh automatically as you make changes.

## Getting To Know Alika

 Feel free to [learn more about Alika tutorials](http://www.alika.ch/tutorials).

## License

MIT © [Tony Mowers](http://www.alika.ch/people/tony-mowers)


[npm-image]: https://badge.fury.io/js/generator-alika.svg
[npm-url]: https://npmjs.org/package/generator-alika
[travis-image]: https://travis-ci.org/tony-mowers/generator-alika.svg?branch=master
[travis-url]: https://travis-ci.org/tony-mowers/generator-alika
[daviddm-image]: https://david-dm.org/tony-mowers/generator-alika.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/tony-mowers/generator-alika
