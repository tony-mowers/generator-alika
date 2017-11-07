# generator-alika [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generates starter projects used in tutorials as teaching examples and starter projects for learning. 

It aims to create project structures, with build facilities, which are as simple as possible for statisfying the teaching goals of the tutorials. 

For example, you can easily use it to create a project for experimenting with using browser based ES6 Javascript (i.e. module support and classes, etc) along with SCSS stylesheets. You will be able launch a webserver with one command that will automatically refresh your browser as you experiment with editing Javascript ES6 and SCSS stylesheet files.  Use the accompaning gulpfile as a starting point for your own projects.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-alika using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-alika
```

Then generate your new project and launch a webserver:

```bash
mkdir <projectname>
cd <projectname>
yo alika
gulp
```

After your webserver has started you can load the website into your browser and start playing with ES6 Javascript and SCSS stylesheets. Your browser will refresh automatically as you make changes.

## Getting To Know Alika

 Feel free to [check out the Alika Analytics tutorials](http://www.alika.ch/tutorials).

## License

MIT © [Tony Mowers](http://www.alika.ch/people/tony-mowers)


[npm-image]: https://badge.fury.io/js/generator-alika.svg
[npm-url]: https://npmjs.org/package/generator-alika
[travis-image]: https://travis-ci.org/tony-mowers/generator-alika.svg?branch=master
[travis-url]: https://travis-ci.org/tony-mowers/generator-alika
[daviddm-image]: https://david-dm.org/tony-mowers/generator-alika.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/tony-mowers/generator-alika
