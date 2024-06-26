// lets create a variable 
// var let and const from these key words we can create the variables 

var string = "string"
console.log(string)
let string = "name"
console.log(string)
const integer = 9
console.log(integer);
// here string and integer is called an indentifier
// Identifier must start with a letter (A-Z or a-z), a dollar sign ($), or an underscore (_).

// properties of the string
let string ="hello world     "
console.log(typeof(string));
console.log(string);

console.log(string[0])
console.log(string.length)
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.slice(0,5))
let new_strings = string.replace("hello","hi")
console.log(new_strings);
let new_string1 = string.concat(" hi everyone ");
console.log(new_string1);
console.log(string + " hi everyone")

let new_string = string.trim()
console.log(new_string);
console.log(string.length , new_string.length)

console.log(string.indexOf("e"))
console.log(string.indexOf("l"))
console.log(string.lastIndexOf("l"));
console.log("")
// properties of the array
let array = [1,"string", true, null, 2 , "elements"];
console.log(array)
console.log(array[2]);

let array2 = array.push("new_element");
console.log(array2)
console.log(array);
let array3 = array.pop();
console.log(array)
let array4 = array.unshift(2);
console.log(array)

let array5 = array.join("*");
console.log(array5);
console.log(array);

let array6 = array.slice(0,4);
console.log(array6);

let new_array = [1,2,3,5,4,9,7];
console.log(new_array);
console.log(new_array.sort());
console.log(array.indexOf("elements"));


// Boolean
console.log(Boolean(undefined))
console.log(Boolean(""),Boolean("s"))
console.log(Boolean(0),Boolean(1),Boolean(-1))

// operators 
// arithmetic operators
let x =6;
let y = 10;
console.log(x%5,x+5,x-5,x*5,x++,x--,x%5)
//Assignment operators
x+=y // equvalent to x=x+y
x-=y// equvalent to x=x-y
x*=y// equvalent to x=x*y
x/=// equvalent to x=x/y
x%=y// equvalent to x=x%y
x**=y// equvalent to x=x**y

//comparision operators
console.log("1"==1)// gives true as it check the value irrespective of datatype
console.log("1"===1)// gives false as it check the data type also 
console.log("1"!=1)
console.log("1"!==1)
console.log(1>2)
console.log("a"<"b")// works on strign based on alphabet wise 
console.log("a">"b")


// while loop 
i = 0 ;
while(i<5){
  console.log(i);
  i++
}
// if else statement 
let age =99;
if(age<18){
    console.log("you are a minor")
}
else if(age<50){
    console.log(" you are fit")
}
else{
    console.log("you are too old")
};
// function declaration
function greet(){
    console.log("namaste")
}
greet()

// fucntion expression
let greet1 = function(name){
    console.log(`hi ${name}`)
}
greet1(" name")

// regular function

const  area = function(radii){
    let area = 3.14 * radii**2
    console.log(area);
    return area
}
area(3)
// arrow function
const area1 = (radii1) =>{
    let area = 3.14 * radii1**2
    console.log(area);
    return area


}
area1(3)

// call back function and foreach function
array.forEach((Element) =>{
    console.log(`The element is ${Element}`)
})
// call back function 
// defining a function1 with argument name and callback.( callback is also an function)
const fun = function(name, callback){
    console.log(name);
    callback()

}

// defining another function2
function callme(){
    console.log("hi")
}
fun("hemanth", callme)// when we call the function 1 with a argument name and another function2 
// we can see that in the output the function2 is also executed after the function1


// learning about the object
let user = {
    age : 19,// key value pair
    name : 'shrey',
    email: ' shreyas@gmail.com',
    location: ' hasssan',
    blog:['nice','new','cool','heat'],
    blog1:[
        {title:'ever wondwer y you r ',likes:39},
        {title:'the way you live',likes:29}
    ],
    login: function(){// you can add a function (method) to an object by extending its prototype.

        console.log('you have logged in');
    }, 
    logout(){
        console.log('you have logged out');
    },
    logblog:function(){// we cannot use arrow function here 

        console.log('this user  has written the following blog:');
        this.blog.forEach(blog => {
            console.log(blog);
        })},
    logblog1(){
        console.log('the new blog 2 which i need to write is');
        this.blog1.forEach(blog1 =>{
            console.log(blog1.title,blog1.likes);}
        )
    }
    
    };

user.login();// to execute the login function
user.logout();// to exectute the logout function
user.logblog();
user.logblog1();

// to get acessing the value
console.log(user.age,user["age"]);
// to modify the object
user.language ="Hindi"// to add new value 
user.age=20// to modify
delete user.age// to delete the things



// Javascript in browser( IMP!!! Some of these topics were not explained 
// completely due to time constrain please go through if you get any doubt for task)
alert("hi world ")
prompt(" enter a number:")



// getting reference of different  tag
let p_tag = document.querySelectorAll('p');
console.log(p_tag);// getting reference to all the p-tag referred like an array
console.log(p_tag[0]);// you can get reference to purticular p-tag
console.log(document.querySelector('p'))// getting reference to the first element of purticular tag

// getting reference by classname
let cls = document.querySelector('.new_class');
console.log(cls)
let cls1 = document.getElementsByClassName('new_class');
console.log(cls1)// get all the elements of the specified tag name in an array
console.log(cls1[0],cls)// you can see that both of these are similiar output

// getting reference by Id 
let id = document.querySelector('#new_id');
console.log(id)
let  id1 = document.getElementById('new_id');
console.log(id1)
// both give similiar output

let tag = document.getElementsByTagName('p')
console.log(tag)// get all the reference to the tag mentioned in an array
console.log(tag[1])// can choose by using its index

let name = document.getElementsByName('new_name');
console.log(name)// gives you the node list of all the element which has this name
console.log(name[0],name[1])// you can acess things by using it index

// getting acess to the attributes and changing them
let link = document.querySelector('a'); // getting reference to it 
console.log(link.getAttribute('href'));// get the attribute 
link.setAttribute("href","www.youtube.com");//setting new attribute 
link.removeAttribute("href")// removing the attribute


//The console.dir() function in JavaScript displays an interactive list of all the properties of a specified object
let div = document.querySelector('div');
console.dir(div)


let my_element = document.getElementById("div");
console.log(my_element.innerHTML);// gives HTML content you can also use this to manipulate the text
console.log(my_element.innerText)// gives the text content 
console.log(my_element.outerHTML)// gives outer HTML content which includes the div tag (it includes the tags)
// This is the differnce between the inner HTML and outer HTML use inner to manipulate the inside element use outerHTML to manipulate the entire element including tags

// Handling the properties 
// Events can be handeled through the HTML Attributes(<button onclick="myfunction()">Click me</button>)
// You can define the function in Js so what should be the corresponding response for that click
function myfunction(){
    alert("button was clicked")
  }

//  AddEventListner is used for to assign multiple handlerrs to an event
const even = document.getElementById("button");// button is the id for the corresponding button
even.addEventListener("click",()=> {
  alert("button clicked");
});

even.addEventListener("mouseenter", myfunction);

//asynchronnous Js 
setTimeout(() => {
    console.log(9)
}, 3000);

// creating an element using Js 
const inputBox = document.createElement('input'); // you can write the tagname which ever is necessary(by using input tag name you can get the input from that element)
// you can give the id and class name, placeholder and name and tagname.

inputBox.id = "id_new";
inputBox.className = "new_class"
inputBox.placeholder = `write something`
// you can even addd the text content if you are not taking any put by using  .textContent()


// To add the element to the page, use the appendChild() method on a parent element
const input = document.getElementById("new_input");//new_input is any existing element id 
input.appendChild(inputBox);     

// TO get the value inside the input element 
const value = document.getElementById("course_input").value
// you can use this entered value for your next tasks


// To find the corresponding credit from the code 
//const creditsByCode = [];
       // courses.forEach((course) => {
        //     const foundCourse = course_details.courseDetails.find((c) => c.code === course);
        //     if (foundCourse) {
        //         creditsByCode.push(foundCourse.credits);
        //     }
        // });
        // console.log(creditsByCode)


// console.log(p_tag[0].innerHTML)
// const new_elem = document.getElementsByClassName("new_class");
// console.log(new_elem);
// p_tag[0].innerHTML = "Hi everyone"

