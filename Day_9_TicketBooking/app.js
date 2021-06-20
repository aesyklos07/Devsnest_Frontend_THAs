const book =document.querySelectorAll('.seat_left,.seat_right');
var count=0;
count2=100;
book.forEach((el)=>{
    el.addEventListener('click',()=>{
        el.classList.toggle('active');
        if(el.classList.contains('active')){
                count++;
            }
            else{ 
                count--;
            }
            console.log(count);
        a.innerHTML=count 
        b.innerHTML=100-count
            

    })});


