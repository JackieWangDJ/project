const o = (() => {
  const obj = {
    a: 1,
    b: 2,
  };
  // 要么就把这个原型设置为null
  Object.setPrototypeOf(obj, null);
  return {
    get: (k) => {
      // 传入的k是不是对象本身已有的，如果不是就返回空
      if (obj.hasOwnProperty(k)) {
        return obj[k];
      }
      return undefined;
    },
  };
})();
// 给Object的原型添加一个 “abc” 属性，这个属性作用是返回当前的 this
Object.defineProperty(Object.prototype, "abc", {
  get() {
    return this;
  },
});

const obj2 = o.get("abc");
obj2.a = "222222";
obj2.b = "333333";
console.log(o.get("a"));
console.log(o.get("b"));
