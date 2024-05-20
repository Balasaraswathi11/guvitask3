function compare(obj1,obj2){

let a= Object.keys(obj1)
let b=Object.keys(obj2)

if (a.length!==b.length){return false}

for (let i = 0; i < a.length; i++) {
      let key = a[i];
      if (obj1[key] !== obj2[key]) {
        return false;
}}
return true;}
let obj1={name: "person 1",age:5}
let obj2={age:5,name: "person 1"}

console.log(compare(obj1,obj2))
