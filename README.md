# generator-alika [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generates getting started projects which are used in tutorials as teaching examples and easy starter projects. 

It aims to create project structures, with build facilities, which are as simple as possible for statisfying the teaching goals of the tutorials. 

For example, you can easily use it to create a project for experimenting with using browser based ES6 Javascript (i.e. module support, javascript bundles and classes, etc) along with SCSS stylesheets. You will be able launch a webserver with one command that will automatically refresh your browser as you experiment with editing Javascript ES6 files and SCSS stylesheet files.  

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

After the webserver has started your default web browser should launch and load the home page of the sample project. Start playing with ES6 Javascript and SCSS stylesheets by editing the files in the project. Your browser will refresh automatically as you save your changes.

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
