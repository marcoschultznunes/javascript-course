"use strict";
exports.__esModule = true;
var hello = 'Hello There';
console.log(hello);
/*
    Command to compile TS to JS:
        tsc ex02-hello_world

    Command to automatically recompile:
        tsc ex02-hello_world --watch

    Now a file with the same name, but with the .js extension will be created, and can be run
    with the node command.
*/
/*
    The typescript file should now have an error "Cannot redeclare block-scoped variable
    'hello'". This is because typescript treats its files as scripts instead of modules, so the
    variable is shared in a global scope.

    To fix this, just add an export default, then the typescript file will be treated as a
    module.
*/
exports["default"] = {};
