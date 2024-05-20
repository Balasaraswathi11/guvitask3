## 1. How to compare two json have same properties without order?

### To compare two JSON objects to check if they have the same properties regardless of the order of the properties, we can convert them to strings and compare the strings.

`let a = Object.keys(obj1)
let b = Object.keys(obj2)`
### returns an array of keys from obj1 and obj2

`if (a.length !== b.length) 
{ return false;}`
### If the number of keys in obj1 is not the same as the number of keys in obj2, the objects cannot be the same, so the function returns false

`for (let i = 0; i < a.length; i++) {
    let key = a[i];
    if (obj1[key] !== obj2[key]) {
        return false;}}`
### For each key, it checks if the value in obj1 is the same as the value in obj2.

`return true;`
### if all the the value and keys of the obj matches true will be returned.

