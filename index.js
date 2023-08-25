
// let myAge = 50;

// console.log(myAge);

//STEPS ON HOW TO MAKE OUR BUTTON ADD BY 1 WHEN CLICK

//1 store our COUNT somewhere and save it as 0

//2 listen for click on the increment button

//3 increment the count variable when the button is clicked.

//4 change the count-ul in the HTML reflect the new count.

let countUl = document.querySelector('#count-ul')

let count = 0;
//Global function: runs much more than once

function increment () {
   
// internal function: run once.

   count = count + 1;
   countUl.innerText = count
  
  

  // let lap1 = 34;
  // let lap2 = 33;
  // let lap3 = 63;

  // console.log(lap1+lap2+lap3);
  // // console.log(lap2)
  // // console.log(lap3)
}

