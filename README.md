# localStorage
无痛使用localStorage

#### localStorage

封装了Html5标准的localStorage，使其具有更良好和便捷的操作性

```javascript
// Number
localStorage.number = 110;
console.log(typeof localStorage.number); // number

// String
localStorage.string = 'string';
console.log(typeof localStorage.string); // string

// Boolean
localStorage.bool = true;
console.log(typeof localStorage.bool); // boolean

// undefined
localStorage.undefined = undefined;
console.log(typeof localStorage.undefined); // undefined

// object
localStorage.obj = { value: 'object', name: { first: 'yang' } };
console.log(typeof localStorage.obj); // object

// array
localStorage.arr = [[1, 2, 3]];
console.log(typeof localStorage.arr); // array

// 支持本身的 setItem、getItem、removeItem、clear
```
