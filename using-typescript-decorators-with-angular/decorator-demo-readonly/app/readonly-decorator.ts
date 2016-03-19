
export function readonly(target: Object, propertyKey: string) {
  // property value
  var _val = target[propertyKey],
    isSet = false;

  // property getter
  var getter = function () {
    console.log(`Get: ${propertyKey} => ${_val}`);
    return _val;
  };

  // property setter
  var setter = function (newVal) {
    // only allow the property to be set once
    if (!isSet) {
      _val = newVal;
      isSet = true;
    } else {
        throw `Unable to set property value '${newVal}' on readonly property '${propertyKey}'.`;
    }
  };

  // delete the property
  if (delete target[propertyKey]) {
      // create new property with getter and setter
      Object.defineProperty(target, propertyKey, {
          get: getter,
          set: setter,
          enumerable: true,
          configurable: true
      });
  }
}
