
//TASK 1:

//Declare four variables without assigning values and print them in console
//solution 1: 
 
 let a,b,c,d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


//How to get value of the variable myvar as output
//var myvar= 1;
//console.log("myvar");

//solution 2:
var myvar= 1;
console.log(myvar);
//output
1

///3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
//solution 3:
let firstname="Vishnu";
let lastname ="priya";
let maritalstatus="No";
let country ="India";
let age =26;

//4. Declare variables to store your first name, last name, marital status, country and age in a single line
//soution 4:
let details=['vishnu','priya','No','India','26'];

//5. Declare variables and assign string, boolean, undefined and null data types

//I am 25 years old. 
//You are 30 years old.
//solution 5:
let a ="string";
let b =true;
let c;
let d=0;

//6. Convert the string to integer
//solution 6:
let a='25';
//parseInt:
     console.log(parseInt(a));
//number():
    console.log(number(a));
//plus sign         
    console.log(+a);

//7. Write 6 statement which provide truthy & falsey values.

//solution 7:
let a=10;
let b=20;
let c=10;

    //truthy:
    a!=b;
    a==c;
    b!=c;
    a===c;
    a!==b;
    b!==c;
    //falsey
    a==b;
    b==c;
    a!=c;
    a===b;
    b===c;
    a!==c;

//TASK 2:

//Square of a number
//solution 1:
let a=10;
let b=20;
console.log(a**2);
console.log(b**2);
//output:
100
400

//Swapping 2 numbers
//solution2 :






//Addition of 3 numbers
//solution 3:
let a=2;
let b=3;
let c=4;
console.log(a+b+c);
//output:
9

//Celsius to Fahrenheit conversion
//solution 4:
let c=100;
let f=  (c* (9/5)) + 32;
console.log(f);
//output
212

//Meter to miles
//solution 5:
let metre= 100;
let mile=(m)/(1,609.344) ;
console.log(mile);

//pounds to kg
let pounds=10;
let kg=(pounds ) * (0.45359237);
console.log(kg);
//output:
4.5359237

//Calculate Batting Average
//solution 7






//Calculate five test scores and print their average
//solution8:
let a=10;
let b=20;
let c=35;
let d=25;
let e=50;
let n=(a+b+c+d+e) /5;

//Power of any number x ^ y.
//solution 9:
let x=2
let y =5;
console.log(x**y);

//Calculate Simple Interest
//solution 10;
let p=1000;
let n=3;
let r=10;
let SI= (p*n*r)/100;
console.log(SI);


//Calculate area of an equilateral triangle
//solution 11;
let b=4;
let a=((Math.sqrt(3))/4) *(b**2);
console.log(a);

//Area Of Isosceles Triangle
//solution 12;
let b=4;
let h=5;
let a=(b*h)/2;


//Volume Of Sphere
//solution 13:
let r=3;
let v=(4/3) * (22/7) * Math.cbrt(r);
console.log(r);



//Volume Of Prism
//solution 14;
let b=7;
let h=9;
let volume=b*h;
console.log(volume);


//Find area of a triangle.
//solution 15;
let b=5;
let h=7;
let area=(1/2)*b*h;
console.log(area);

//Give the Actual cost and Sold cost, Calculate Discount Of Product
//solution 16;
let markedprice=10;
let sellingprice =15;
let discount= ((markedprice-sellingprice)/(markedprice))*100;
console.log(discount);

//Given their radius of a circle and find its diameter, circumference and area.
//solution 17:
let r=3;
let d=2*r;
let circum= 2* (22/7) *r;
let area= (22/7) * (r*r);
console.log(d);
console.log(circum);
console.log(area);

//Given two numbers and perform all arithmetic operations.
//solution 18;
let a=10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Display the asterisk pattern as shown below(No loop needed):
//solution 19:

console.log(*****);
console.log(*****);
console.log(*****);
console.log(*****);
console.log(*****);

//Calculate electricity bill?
//For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
//solution 20;
let watt=1000;
let hrs=24;
let days=30
let energy= watt * hrs *days;
conoosole.log(energy);


//Program To Calculate CGPA
//solution 21:
let English = 9.1;  
let Hindi = 8.5;  
let Maths = 9.5;  
let Science =9.6;  
let SocialStudy = 8.6;
CGPA = (9.1+8.5+9.5+9.6+8.6)/(5.0);  
CGPAper = (9.5 * (CGPA));  
console.log(CGPAper);


//TASK 3: Simple Programs todo for Condition , Looping and Arrays
//solution 1:

 for(i=0;i<7;i++)
 {
     let a='';
     for(j=0;j<i;j++)
     {
         a+='#';
     }        console.log(a);
 }

//output:
#
##
###
####
#####
######
#######


//2. Iterate through the string array and print it contents
// var strArray= ["<option>Jazz</option>",
// ,"<option>Blues</option>",
// ,"<option>New Age</option>",
// ,"<option>Classical</option>",
// ,"<option>Opera</option>"]


//var a=[11,22,33,44,55]
//solution:
let count=0;
for(i=0;i<a.length;i++)
{
  count++;
}
console.log(count);


//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=[];
foods.push('idli');
foods.push('dosa');
foods.push('briyani');
foods.push('friedrice');
foods.push('chutney');
foods.push('pizza');
foods.push('burger');
foods.push('shwarma');
foods.push('sandwitch');
foods.push('idlipodi');
foods.push('apple');
foods.push('orange');
foods.push('pineapple');
foods.push('upma');
foods.push('pongal');
foods.push('chicken');
foods.push('mutton');
foods.push('paneer');
foods.push('mushroom');
foods.push('sambar');
console.log(foods);

//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?

console.log(foods[4]);

//Find the length of your foods array

console.log(foods.length);

//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {
friends[0]="Munnabai";
}return input;
}

console.log(dataHandling(friends));

//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    for(i=0;i<3;i++)
    console.log(friends[i]);

//       




























//Get the first item, the middle item and the last item of the array
const friends = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
    ];
    let a=(Math.floor((friends.length-1)/2));
console.log(friends[0]);
console.log(a);
console.log(friends[friends.length-1]);


//2. Add your name to the end of the friends array, and add another name to beginning.
const friends = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
    ];
    friends.push("vishnu");
        console.log(friends);
        friends.unshift("Ragu");
        console.log(friends);


//. Concat all the names the friends array and return as comma “,” seperated string.
console.log(friends.join(','));

//5. Find the friends names who has letter ‘a’ and return the list.
const friends = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
    ];

  console.log(friends[i].startsWith('A'));

//6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.






//7. Find the names and return the list starting with letter M.



const friends = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
    ];

  console.log(friends[i].startsWith('M'));
  

