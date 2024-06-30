# Session-6-summer-school

## Slides

Slides: https://docs.google.com/presentation/d/1tvGVVymT1kKgrzec2lKUsTuB7S5Y_hw5hRZrzSuMM84/edit?usp=sharing

Recording : https://youtu.be/d515u3ghYs0

## Task : 

Grade Book Smart Contract

## Objective: 

Develop a smart contract in Solidity for managing student grades.

#### Requirements:

#### Structs: 
Define a struct named Grade with fields studentName, subject, and grade to store student grade information.

#### Array: 
Utilize an array to store instances of the Grade struct, representing grades for multiple students.

#### Modifiers: 
Implement a modifier named onlyOwner to restrict functions (e.g., adding or updating grades) to be accessible only by the contract owner.

#### Constructor: 
Create a constructor to initialize the contract owner (instructor) 

#### Functions:

#### addGrade: 
Function to add a new grade entry for a student.
#### updateGrade: 
Function to update the grade of a student for a specific subject.
#### getGrade: 
Function to retrieve the grade of a student for a particular subject.
#### averageGrade:
Function to calculate and return the average grade of all students for a specific subject.

## Instructions:

Use the provided structure and functionalities to develop the contract using Solidity.
Ensure that only the contract owner (instructor) can modify grade entries using the onlyOwner modifier.
Test the contract thoroughly to ensure accurate functionality in storing, updating, retrieving, and calculating student grades.

## Submission link: 

https://forms.gle/R5rXh8nGyRFiuFXGA

## Deadline

July 2nd EOD.
