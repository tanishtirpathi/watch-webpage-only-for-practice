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




 const myCourses = shoppingCart.reduce( (items) => items.. ,0)














