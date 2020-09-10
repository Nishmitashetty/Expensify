/* const person={
    name:'nishmita',
    age:23,
    location:{
        city:'sanpada',
        temp:100
    }
};

const {name:firstName='unknown', age } =person;
console.log(`${firstName} is ${age}.`);
const {temp,city } =person.location;
console.log(`it's ${temp} degrees in ${city}.`); */


/* const book={
    title:'Ego blah blah',
    author:'nishmita',
    publisher:{
       // name:'penguin'
    }
};
const {title, author } =book;
const {name:publisherName='Self Published' } =book.publisher;
console.log(publisherName);  */




const address=['Dreamland', 'sanpada', 'india','123'];
const[,city,country,]=address;
console.log(`you're in  ${city}, ${country} .`); 
