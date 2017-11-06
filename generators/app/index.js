'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  // prompting() {
  //   // Have Yeoman greet the user.
  //   this.log(yosay(
  //     'Welcome to the sublime ' + chalk.red('generator-alika') + ' generator!'
  //   ));
  //
  //   const prompts = [{
  //     type: 'confirm',
  //     name: 'someAnswer',
  //     message: 'Would you like to enable this option?',
  //     default: true
  //   }];
  //
  //   return this.prompt(prompts).then(props => {
  //     // To access props later use this.props.someAnswer;
  //     this.props = props;
  //   });
  // }

  writing() {
    this.fs.copy(
      this.templatePath('app/index.html'),
      this.destinationPath('app/index.html')
    );
    this.fs.copy(
      this.templatePath('app/style/main.scss'),
      this.destinationPath('app/style/main.scss')
    );
    this.fs.copy(
      this.templatePath('app/js/main.js'),
      this.destinationPath('app/js/main.js')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('app.config.js'),
      this.destinationPath('app.config.js')
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
  }

  install() {
    this.installDependencies();
  }
};
