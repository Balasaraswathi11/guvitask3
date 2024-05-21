## 1. How to compare two json have same properties without order?

### To compare two JSON objects to check if they have the same properties regardless of the order of the properties, we can convert them to strings and compare the strings.

i. `let a = Object.keys(obj1)
let b = Object.keys(obj2)`
###  This returns an array of keys from obj1 and obj2

ii. `if (a.length !== b.length) 
{ return false;}`
### This check whether the number of keys in obj1 and obj2 are same.
### If the number of keys in obj1 is not the same as the number of keys in obj2, the objects cannot be the same, so the function returns false

iii. `for (let i = 0; i < a.length; i++) {
    let key = a[i];
    if (obj1[key] !== obj2[key]) {
        return false;}}`
### This checks whether the value of both obj1 and obj2 are same.
### If the value in obj1 is not the same as the value in obj2, the objects cannot be the same, so the function returns false

`return true;`
### if all the the value and keys of the obj matches, true will be returned.

