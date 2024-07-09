# odin-testing

This is my thirteenth project within the Full Stack JavaScript course from The Odin Project, continuing my coursework within the JavaScript chapter of the course. This project responds to the prompt wherein students are challenged to practice Test-Driven Development (TDD) in JavaScript to write functions which: 

- capitalize the first letter of a string (I challenged myself a tad further by making this ONLY the first letter, where all other letters have to be lowercase)
- reverse the letter order of a string
- calculate basic operations between two numbers using a calculator object, rather than a function (factoring in time complexity, this is the most efficient method for this use case)
- encrypt a string in the fashion of a Caesar cipher (shifting each letter of a string through the alphabet by a numeric shift factor), and
- analyze an array to return properties average, min, max, and length

This project implements knowledge in TDD using Jest, not only learning Jest syntax and usage but learning how the mindset for writing code can change when you focus on writing the test (what does the code need to do? What should it not do?) first. Additionally, I learned what all has to be exported and imported for a function to be properly defined in testing, and for Jest to be able to test properly (ex. the class and the object it is stored in both have to be imported to test on the class).