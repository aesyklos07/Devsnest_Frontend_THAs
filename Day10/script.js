var arr = new Array();
const main = document.getElementById("main");
const score = document.querySelector("#scoring");

let images = ["./dhallow.png", "./snitch.jpg", "./sortinghat.png", "./specs.png", "./num.png", "./dark.png"];
let size = images.length;
const delay = 150;

images = [...images, ...images];
images.sort(() => 0.5 - Math.random());

score.innerHTML = 0;
let selection_Stack = [];


for (let i = 0; i < size * 2; i++) {
    let ele = document.createElement("img");
    ele.src = "./hp.png";

    ele.classList.add("content");
    main.appendChild(ele);


    let random_index = Math.floor((Math.random() * images.length) / 2);

    ele.custom_attr = images[random_index];
    images.splice(random_index, 1);

    ele.addEventListener("click", () => {

        if (selection_Stack.length < 2 && !ele.classList.contains('cleared')) {
            ele.classList.toggle('onToggle1');
            ele.src = ele.custom_attr;
            selection_Stack.push(ele);
        }

        if (selection_Stack.length == 2) {
            //CARDS mismatch
            if (ele.custom_attr != selection_Stack[0].custom_attr || ele == selection_Stack[0]) {

                setTimeout(() => {
                    selection_Stack[0].classList.toggle('onToggle1');
                    selection_Stack[0].src = "./hp.png";

                    ele.src = "./hp.png";
                    ele.classList.toggle('onToggle1');

                    selection_Stack = [];
                }, delay);
            }

            //selection stack cleared
            else {
                setTimeout(() => {
                    selection_Stack[0].classList.toggle('onToggle1');
                    selection_Stack[0].classList.toggle('cleared');

                    ele.classList.toggle('cleared');
                    score.innerHTML = Number(score.innerHTML) + 2;
                    selection_Stack = [];
                    if (score.innerHTML == 12) {
                        let e1 = document.createElement("img");
                        e1.src = "./dumbledore.gif";
                        e1.classList.add("end");
                        main.appendChild(e1);
                    }
                }, delay);
            }
        }

    });




    arr.push(ele);
}