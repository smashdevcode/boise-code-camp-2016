
namespace Demos.ArrowFunctions {

  // Example taken from Basarat Ali Syed's TypeScript Deep Dive book
  // https://basarat.gitbooks.io/typescript/content/docs/arrow-functions.html

  // The motivation to use arrow functions is:
  // 1) You don't need to keep typing function
  // 2) It lexically captures the meaning of `this`

  function Person(age) {
      this.age = age
      this.growOld = function() {
          this.age++;
      }
  }

  var person = new Person(1);
  setTimeout(person.growOld, 1000);

  setTimeout(function() { console.log(person.age); }, 2000); // 1, should have been 2
}
