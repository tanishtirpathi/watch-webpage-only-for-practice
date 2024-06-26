// let obj = {
//     name: "John",
//     age: 30,
//     isMarried: false
// };
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.isMarried);
// obj.name = "Peter";
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.isMarried);
// obj.isMarried = true;
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.isMarried);
// delete obj.isMarried;
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.isMarried);
// obj.isMarried = true;
// console.log(obj.name);
// console.log(obj.age);*/

// ! singleton
// Object.create

const instagramUser = {};
//it is the single ton  objects and this
instagramUser.id = "tanish_tirpathi_00";
instagramUser.username = "warrior";
instagramUser.islogin = false;

const regularUser = {
  email: "tanishtirpathi0@gmail.com",
  password: "123",
  fullName: {
    firstName: "tanish",
    lastName: "tirpathi",
  },
};
// console.log(regularUser.fullName.firstName);
const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};
const obj2 = {
  4: "d",
  5: "e",
  6: "f",
};
const obj5 = {
  7: "g",
  8: "h",
  9: "i",
};
const obj3 = { ...obj1, ...obj2, ...obj5, ...regularUser };
// console.log(obj3);

const instsgram = [
  {
    username: "tanish00",
    password: "123",
  },
  {
    username: "tandsfsfsish00",
    password: "123fsdfdsf",
  },
  {
    username: "tadfsdfsdnish00",
    password: "sdfdsfsdfsdfds",
  },
  {
    username: "tanish00",
    password: "123",
  },
  {
    username: "tanish00",
    password: "123",
  },
];

console.log(Object.entries(instagramUser));
console.log(instagramUser.hasOwnProperty("islogn"));
//? object literals

// const mySymble = Symbol("key1")
// const jsUser ={
//     nme :"tanish",
//     age:13,
//     [mySymble]:"key1",
//     "full name":"tanish sharma arts",
//     loation :"pathankot",
//     isMarried:false,
//     lastLoginDays:["monday", "friday","satureday"]
// }

// console.log(jsUser.name) //not the right way to do this  but always use this method and only for interview use square brackit
//  console.log(jsUser["age"])//this is the right way because  you can't access the full name by using the console.(jsuser.full name)

// jsUser.nme = "Tanish Sharma"
// Object.freeze(jsUser)

// jsUser.nme = "Tnsh Sharma"
// console.log(jsUser)

// jsUser.greeting = function(){
//     console.log(`hello ${this.nme} `)
// }

// console.log(jsUser.greeting())
