//Question 1
function is_array(arr){
    return Array.isArray(arr);
}
console.log(is_array('w3resources'));
console.log(is_array([1,2,4,0]));
//Output:
// false
// true

//Question 2
function clone_array(arr){
    return arr.slice(0,arr.length);
}
console.log(clone_array([1, 2, 4, 0]));
console.log(clone_array([1, 2, [4, 0]]));
//Output:
// [ 1, 2, 4, 0 ]
// [ 1, 2, [ 4, 0 ] ]

// Question 3
function first(x,n){
    if(n==null){
    return x[0];
    }
    if (n<0){
    return [];
    }

    return x.slice(0,n);
}
    
    console.log(first([7, 9, 0, -2]));
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));
//Output
// 7
// []
// [ 7, 9, 0 ]
// [ 7, 9, 0, -2 ]
// []

//Question 5
var myColor = ["Red", "Green", "White", "Black"];
var ans1=myColor.join();
var ans2=myColor.join(",")
var ans3=myColor.join("+")
console.log(ans1);
console.log(ans2);
console.log(ans3);
// output:
// Red,Green,White,Black
// Red,Green,White,Black
// Red+Green+White+Black

//Question 6
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var c=0;
var max_c=0;
var element;
for(var i=0;i<arr1.length;i++)
{
    for(var j=0;j<arr1.length;j++)
{
    if(arr1[i]==arr1[j]){
    c++;
    if(max_c<c)
    {
        max_c=c;
        element=arr1[i];
    }
  }
}
c=0;
    }
console.log(element,"(",max_c,"times)");
//Output:
// a ( 5 times)