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

// const instagramUser = {};
// //it is the single ton  objects and this
// instagramUser.id = "tanish_tirpathi_00";
// instagramUser.username = "warrior";
// instagramUser.islogin = false;

// const regularUser = {
//   email: "tanishtirpathi0@gmail.com",
//   password: "123",
//   fullName: {
//     firstName: "tanish",
//     lastName: "tirpathi",
//   },
// };
// // console.log(regularUser.fullName.firstName);
// const obj1 = {
//   1: "a",
//   2: "b",
//   3: "c",
// };
// const obj2 = {
//   4: "d",
//   5: "e",
//   6: "f",
// };
// const obj5 = {
//   7: "g",
//   8: "h",
//   9: "i",
// };
// const obj3 = { ...obj1, ...obj2, ...obj5, ...regularUser };
// // console.log(obj3);

// const instsgram = [
//   {
//     username: "tanish00",
//     password: "123",
//   },
//   {
//     username: "tandsfsfsish00",
//     password: "123fsdfdsf",
//   },
//   {
//     username: "tadfsdfsdnish00",
//     password: "sdfdsfsdfsdfds",
//   },
//   {
//     username: "tanish00",
//     password: "123",
//   },
//   {
//     username: "tanish00",
//     password: "123",
//   },
// ];

// console.log(Object.entries(instagramUser));
// console.log(instagramUser.hasOwnProperty("islogn"));
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

// ! map /filter / reduce in javscript

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newnum = numbers.filter( (num)=> {return num > 5 } )

// console.log(newnum)

// * mainly this is the filters
// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// const userBooks = books.filter( (bk)=> {
//   return bk.publish >= 1992 && bk.genre === 'Science'
// })

// console.table(userBooks)

// * map uses
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = numbers.map( (i) => i * 10 )

// console.log(newNum)

// const newnum = numbers.map( (i)=> i *10 ).map( (i)=>i+3 ).filter( (i)=> i>40)

// console.log(newnum)

// * reduce

// const numbers = [1,2,3,4]

// const mytotal = numbers.reduce( (acc , cur)=> acc + cur,0)

// console.log(mytotal)

// const myCourses = shoppingCart.reduce( (acc ,items) => acc + items.price ,0)

// console.log(myCourses)

// ! from here this is the fuction i made from just a filter as such as the used in many website
/*  
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
      itemName: " science course",
      price: 17999
  },
  {
    itemName: "ai ml basics  course",
    price: 32999
  },
  {
    itemName: "java  course",
    price: 72999
  },
  {
    itemName: "javscript course",
    price: 1999
  }, {
    itemName: "wev devlopment course",
    price: 199
  },
  {
    itemName: "wev designing  course",
    price: 18900
  },
  ]
  
 const books = [
      { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
      { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
      { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
      { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
      { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
      { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
      { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
      { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
      { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    ];
    
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', ()=>{
const myCourses = books.filter( (genre)=>
     genre.genre == input.value
)

console.table(myCourses)
})*/

// ! spreed things in javascrpts

//   let arr = [ 3,5,23,23,23,24,234,23,23,5]
//  let [a, b , ...rest]= arr
//   console.log(a,b,...rest)

// let arr = [2, 4, 5, 6,3, 5, 6];

// // let [a , , ...rest] =arr
// //  console.log(a, rest)

// // let [a, b,...rest] = arr.filter((num)=> num > 5)

// * for objects
// let { a, b } = {
//   a: 1,
//   b: 4,
// };
// console.log(a ,b)

// let obj2 = {...arr}
// console.log(obj2)

// function sum (v1,v2,v3,v4,v5,v9){
//  return v1+v2+v3+v4-v5**v9
// }
// console.log(sum(...arr))
// let obj2 ={
//   nAme:"tanish ",
//   class:12,
//   address:"rattangarh",
//   phone: 9876543210,
//   hobbies:["reading","painting","cooking"],
//   subjects:["maths","science","english"],
//   isStudent:true,
//   score:95,
//   grade:"A+"
// }
// let h = {...obj2 ,nAme:"john",score:10}
// console.table(h)

// ! only for checking the node work in terinal
//? firstly write "node then file relative pathe just like for this it have javscript-pratice\sc.js"

// let obj3 = {
//   name: "tanish",
//   class: 12,
//   address: "rattangarh",
//   phone: 9876543210,
//   hobbies: ["reading", "painting", "cooking"],
//   subjects: ["maths", "science", "english"],
//   isStudent: true,
//   score: 95,
//   grade: "A+",
//   id: 8945570,
// };
// console.table(obj3);
