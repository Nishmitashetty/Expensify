//
// Object Destructuring
//

// console.log('Destructuring!');

// const Person = {
//     age:24,
//     location:{
//         city:'Mumbai',
//         temp:88
//     }
// };

// const {name:Name='g2',age:Age} = Person;

// console.log(`${Name} is ${Age}`);

// const {city,temp} = Person.location;

// if(city && temp)
// {
//     console.log(`It's ${temp} in ${city}.`);
// }


// const book = {
//     name:'Ego is the Enemy',
//     author:'rr',
//     publisher:
//     {
//         name:'Nishmita'
//     }
// };

// const {name:publisherName='self-published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// console.log(`I am in ${dist} ${state}.`);

const item = ['Coffee (iced)','8 RS','15 Rs','234 Rs'];

const [itemName,,mediumPrice] = item;

console.log(`A Medium ${itemName} Costs ${mediumPrice}.`);

