// Object is preference data type object is used to store key value pair
// object access in two types dot notation and bracket notation

// let person ={
//     name:"Kishore kumar",
//     age:24,
//     education:"Bsc(cs)"
// }
// console.log(person.name)// this is dot notation
// console.log(person['education']);// this is bracket notation

// now we create object in function
let details = (name,age,education)=> {
    const person ={
        name:name,
        age:age,
        education:education
        }
    let result=`Hi my name is ${person['name']} and my age is ${person.age} i am graducate on ${person.education}`
    return result;
}
console.log(details("Kishore kumar",24,"Bsc(cs)"))
