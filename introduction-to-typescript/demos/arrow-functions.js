var Demos;
(function (Demos) {
    var ArrowFunctions;
    (function (ArrowFunctions) {
        function Person(age) {
            this.age = age;
            this.growOld = function () {
                this.age++;
            };
        }
        var person = new Person(1);
        setTimeout(person.growOld, 1000);
        setTimeout(function () { console.log(person.age); }, 2000);
    })(ArrowFunctions = Demos.ArrowFunctions || (Demos.ArrowFunctions = {}));
})(Demos || (Demos = {}));
//# sourceMappingURL=arrow-functions.js.map