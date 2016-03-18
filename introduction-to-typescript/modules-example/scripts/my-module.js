System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function sayHello() {
        console.log('Hello world!');
    }
    exports_1("sayHello", sayHello);
    function sayHelloAgain() {
        console.log('Hello again!');
    }
    exports_1("sayHelloAgain", sayHelloAgain);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=my-module.js.map