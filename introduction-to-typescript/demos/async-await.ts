
namespace Demos.AsyncAwait {
  'use strict';

  // `async`/`await` is only available in browsers that support generator functions
  // This changes in TypeScript 2.0

  // printDelayed is a 'Promise<void>'
  // async function printDelayed(elements: string[]) {
  //     for (const element of elements) {
  //         await delay(500);
  //         console.log(element);
  //     }
  // }
  //
  // async function delay(milliseconds: number) {
  //     return new Promise<void>(resolve => {
  //         setTimeout(resolve, milliseconds);
  //     });
  // }
  //
  // printDelayed(['Hello', 'beautiful', 'asynchronous', 'world']).then(() => {
  //     console.log();
  //     console.log('Printed every element!');
  // });

  // `await` can only be used within an `async` function
  // await printDelayed(['Hello', 'beautiful', 'asynchronous', 'world']);
  // console.log();
  // console.log('Printed every element!');
}
