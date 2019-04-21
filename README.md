# grunt-js-task-runner
A sample application to get started with javascript task runner grunt

## What is Grunt??
Grunt is a Javascript task runner. At its bare core it does file manipulation (mkdir, reads, write, copy), print messages and helper methods to organize and configure multiple tasks.
It takes care of differences among Operating Systems for you. However, the real power comes in with the number of available plugins ready to use, usually named grunt-contrib-*.

## Grunt config, task and warnings: 

### Grunt config:

`grunt.initConfig(configObject)`: Initialize a configuration object. 

It can be accessed by grunt.config.get.

`grunt.config.get([prop])`: get the prop value from the grunt.initConfig. 


### Grunt tasks:

1. `grunt.registerTask(taskName[, description], taskFunction)`: register a task.

`taskName`: required to register the task and it allows the task to be executed with grunt taskName or called by other grunt task.
`description`: (optional) string describing task.
`taskFunction`: function which can accept parameters separated by colons (:). E.g. grunt taskName:arg1:arg2

2. `grunt.task.registerTask(taskName, taskList)`: register task.
`taskList`: array of taskNames to be executed, in the order specified, when the taskName is called. 
`e.g.: grunt.registerTask('concatAll', ['concat:templates', 'concat:javascripts', 'concat:stylesheets']);`

3. `grunt.registerMultiTask(taskName[, description], taskFunction)`: multi-tasks accepts the same parameters as grunt.registerTask. 
However, it reads grunt.initConfig parameters differently: Grunt looks for a config that matches the taskName.
MultiTask can have multiple configurations referred as this.target and the value as this.data.
All the “targets” are run if it is not specified otherwise.

### Grunt Errors and Warnings:

`grunt.fail.warn(error [, errorcode])`: prints to STDOUT a message and abort grunt executions. 
It can be override using --force and it can show the stack trace if --stack is given. 
`e.g. grunt taskName --force --stack.`

`grunt.fail.fatal(error [, errorcode])`: similar to warn, displays message to STDOUT and terminate Grunt. 
Cannot be --forceed and it emits a beep unless --no-color parameter is passed. It also accepts --stack. 
`e.g. grunt taskName --no-color --stack.`
