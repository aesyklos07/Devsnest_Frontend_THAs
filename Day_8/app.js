
const box =document.querySelectorAll('.box');
for(let index=0;index<400;index++)
{
    if(index==129 || index==130|| index==148||index==149||index==150||index==151||index==167||index==168||index==169||index==170||index==171||index==172||index==186||index==187||index==189||index==190||index==192||index==193||index==206||index==207||index==209||index==210||index==212||index==213||index==208||index==211||index==228||index==231||index==247||index==249||index==250||index==252||index==266||index==268||index==271||index==273){
        box[index].classList.add('active');
    }
}

box.forEach((el)=>{
    el.addEventListener('click',()=>{
    // if(el.classList.contains('active')){
    //     el.classList.remove('active')
    // }
    // else{ 
    //     el.classList.add('active')
    // }
    el.classList.toggle('active');
})});



// let squares = document.querySelectorAll('.box');

// // // 2. Assign click
// Array.prototype.forEach.call(squares,(el)=>{
//   el.addEventListener('click', (event)=>{
//     //2.1 Toggle Class
//     el.classList.toggle('active');
//   })
// });