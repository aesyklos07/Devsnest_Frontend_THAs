//Question 1
var student=  { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.keys(student).toString());
//Output:
// name,sclass,rollno


//Question 2
var student=  { name : "David Rayy", sclass : "VI", rollno : 12 };
delete student.rollno;
console.log(Object.keys(student).toString());
//Output:
// name,sclass


//Question 3
var student=  { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.keys(student).length);
//Output:
// 3


//Question 4
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
console.log((Object.keys(library[0])).toString());
for(var i=0;i<3;i++){
console.log((Object.values(library[i])).toString());
}
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
console.log((Object.entries(library[0])).toString());
//Output:
// author,title,readingStatus
// Bill Gates,The Road Ahead,true
// Steve Jobs,Walter Isaacson,true
// Suzanne Collins,Mockingjay: The Final Book of The Hunger Games,false
// author,Bill Gates,title,The Road Ahead,readingStatus,true


//Question 5
// const p=Math.PI;
// var r,h;
// var r = window.prompt("Enter radius: ");
// // alert("Radius is " + r);
// var h = window.prompt("Enter height: ");
// // alert("Height is " + h);
// function volume(r,h){
//     return p*r*r*h;
// }
// console.log(volume(r,h).toFixed(4));


//Question 6
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title:
    'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];


    function sort1(a,b){
        return b.libraryID-a.libraryID
    }

    console.log(library.sort(sort1));