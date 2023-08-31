/* 

Absolutely, practicing with exercises is a great way to solidify your understanding of objects in JavaScript. Let's start with some object-related exercises:

**Exercise 1: Create an Object**
Create an object representing a person with properties for their name, age, and favorite hobby. Then, log the object to the console.

**Exercise 2: Access Object Properties**
Using the object you created in Exercise 1, access and log each property (name, age, hobby) individually.

**Exercise 3: Update Object Properties**
Change the person's age in the object you created in Exercise 1 to a new value and log the updated object to the console.

**Exercise 4: Add New Property**
Add a new property to the person object from Exercise 1, representing their email address. Log the updated object to the console.

**Exercise 5: Object Methods**
Create a method within the person object that returns a string introducing the person, like "Hi, I'm [name], and I'm [age] years old." Call this method and log its result.

**Exercise 6: Object with Nested Objects**
Create an object representing a student. This object should have properties for the student's name, age, and an object representing their favorite subjects (each subject should have a name and a grade). Log the student object to the console.

**Exercise 7: Nested Object Access**
Using the student object from Exercise 6, access and log one of their favorite subjects along with its grade.

**Exercise 8: Array of Objects**
Create an array of objects, where each object represents a book. Each book should have properties for title, author, and year of publication. Log the array to the console.

**Exercise 9: Loop through Array of Objects**
Using the array of book objects from Exercise 8, loop through the array and log each book's title and author.

**Exercise 10: Modify Array of Objects**
Change the author of one of the books in the array from Exercise 8 to a new author and log the updated array.

**Exercise 11: Object References**
Create two objects: `person1` and `person2`, each representing a person. Assign the same object to both variables. Modify a property of one person and observe the effect on the other person. Explain the result.

Remember to practice these exercises in your code editor or browser's developer console. Feel free to ask for help or explanations if you encounter any difficulties along the way!

*/

// Exercise 1

let person = {
    name: "John",
    age: 24,
    favoriteHobby: "Coding"
}

// Exercise 2
console.log(person.name);
console.log(person.age);
console.log(person.favoriteHobby);

// Exercise 3
person.name = "Doe"
console.log(person.name);

// Exercise 4
person.email = "johndoe@example.com"
console.log(person.email);

// Exercise 5
let person = {
    name: "John",
    age: 24,
    favoriteHobby: "Coding",
    email: "johndoe@example.com",
    introduce: function() {
        return `Hi, I'm${this.name}, and I'm ${this.age} year`
    }
}

console.log(person.introduce());

// Exercise 6
let students = {
    name: "Lana",
    age: 21,
    favoriteSubject: [
        {subject: "Math", grade: "6"},
        {subject: "English", grade: "6"}
    ]
}

console.log(students.favoriteSubject[0].subject);

// Exercise 7. First way
console.log(students.favoriteSubject[0])
console.log(students.favoriteSubject[1])

// Second way
for (let i = 0; students.favoriteSubject.length; i++) {
    console.log(students.favoriteSubject[i]);
}

// Third way. forEach method
students.favoriteSubject.forEach(subject => {
    console.log(subject)
})

// Exercise 8
let bookArray = [
    {
    book: "Black Swan",
    title: "psychology",
    author: "Taleb"
    },
    {
    book: "Grit",
    title: "psychology",
    author: "Angela Duckworth"
    }
];

// Exercise 9
let bookArray1 = [
    {
    book: "Black Swan",
    title: "psychology",
    author: "Taleb"
    },
    {
    book: "Grit",
    title: "psychology",
    author: "Angela Duckworth"
    }
];

for (let i=0; i < bookArray1.length; i++) {
    console.log(bookArray1)
}

// Exercise 10
bookArray1[1].author = "umerov"
console.log(bookArray1)

// Exercise 11
let person1 = {name: "Alana", age: 35}
let person2 = person1;

person1.age = 30;

console.log(person2.age);










