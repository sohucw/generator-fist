/**
 * @file
 * @author cjw
 * Created by cjw on 16/1/20.
 */

var generators = require('yeoman-generator');
var chalk = require('chalk');

module.exports = generators.Base.extend({
    // 构造函数
    constructor: function () {
        // 调用父类构造函数
        generators.Base.apply(this, arguments);

        // 执行的时候接收 `--coffee` 参数
        this.option('coffee');
        this.log(this.options.coffee +"????");
/*
        // 这样在运行命令的时候就必须要有这个参数，不然会报错
        this.argument('appname', { type: String, required: true });

        // 取出来
        this.log(this.appname +" appname");*/
    },
    prompting: function () {
        var done = this.async();
        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Your project name',
            default : this.appname
        }, function (answers) {
            this.log(answers.name);
            done();
        }.bind(this));
    },

    initializing: function () {
        this.log(chalk.red.bold('this name is : ' + this.name));
    },
    configuring: function () {

    },
    writing: function () {

    },
    install: function () {

    },

    end : function () {
        this.log(chalk.blue.bold('Current work path : ' + this.destinationRoot()));
    },
    priorityName: {
        test1: function () {
            console.log('test1');
        },
        test2: function () {
            console.log('test2');
        }
    },
    method1: function () {
        console.log('method 1 just ran');
    },
    method2: function () {
        console.log('method 2 just ran');
    }
});