'use strict';

// const res = document.querySelector('.btn--new');
// const hol = document.querySelector('.btn--hold');
// const rol = document.querySelector('.btn--roll');
// const dice = document.querySelector('.dice');

// const p1 = document.querySelector('.player--0');
// const p2 = document.querySelector('.player--1');

// const p = document.querySelector('.player--active');

// const ps1 = document.querySelector('#score--0');
// const ps2 = document.querySelector('#score--1');
// ps1.textContent=0;
// ps2.textContent=0;
// const pc1 = document.querySelector('#current--0');
// const pc2 = document.querySelector('#current--1');

// var pc=0;
// var p1s=0;
// var p2s=0;

// var p1a = true;
// var won=false;
// var s;

// res.addEventListener('click', function(){
//     dice.classList.remove('hidden');
//     won=false;
//     pc=p1s=p2s=0;
//     ps1.textContent=ps2.textContent=pc1.textContent=pc2.textContent=0;
//     p1.classList.remove('player--winner');
//     p2.classList.remove('player--winner');
//     pla=true;
//     if(!p1.classList.contains('player--active')){
//         p1.classList.add('player--active');
//         if(p2.classList.contains('player--active'))
//         p2.classList.remove('player--active');
//     }
//     else{
//         if(p2.classList.contains('player--active'))
//         p2.classList.remove('player--active');
//     }
// })

// rol.addEventListener('click', function(){
//     if(!won){
//         let val= Math.trunc(Math.random()*6)+1;
//         //console.log(val);
//         dice.src=`dice-${val}.png`;
//         if(val==1){
//             pc=0;
//             if(p1a){
//                 pc1.textContent=pc;
//                 p1.classList.remove('player--active');
//                 p1a = false;
//                 p2.classList.add('player--active');
//             }
//             else{
//                 pc2.textContent=pc;
//                 p2.classList.remove('player--active');
//                 p1.classList.add('player--active');
//                 p1a=true;
//             }
//         }
//         else{
//             pc=pc+val;
//             if(p1a)
//             pc1.textContent= pc;
//             else
//             pc2.textContent= pc;
//         }
//     }
// })

// hol.addEventListener('click', function(){
//     if(!won){
//         if(p1a){
//             p1s+=pc;
//             s= p1s;
//             pc=0;
//             ps1.textContent = p1s;
//             pc1.textContent = pc;
//         }
//         else{
//             p2s+=pc;
//             s= p2s;
//             pc=0;
//             ps2.textContent = p2s;
//             pc2.textContent = pc;
//         }
//         if(s>= 100){
//             if(p1a){
//                 p1.classList.add('player--winner');
//             }
//             else{
//                 p2.classList.add('player--winner');
                
//             }
//             won=true;
//             dice.classList.add('hidden');
//         }
//         else{
//             if(p1a){
//                 p1.classList.remove('player--active');
//                 p1a = false;
//                 p2.classList.add('player--active');
//             }
//             else{
//                 p2.classList.remove('player--active');
//                 p1.classList.add('player--active');
//                 p1a=true;
//             }
//         }
//     }
// })







// irrelavent to the project...above is only the project code
// testing code
// let a=1;
// var a=1;
// const c=5;

// function ab(){
//     {
//         var b=2;
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c+1);
// }

// ab();
// var a="abcd"
// console.log(a);

// console.log(a);//undefined
// var a=1;


//Regular vs arrow function. We should not use arrow function as a method
// console.log(this===window);
// var firstname = 'abcd';

// const jonas ={
//     firstname: 'Jonas',
//     year: 1991,
//     calcage: function(){
//         console.log(this === window);//why is this false ? Because it is not an arrow function
//         console.log(this);
//         console.log(2037 - this.year);
//     },

//     // greet: function(){ //This should actually be used as an object's method
//     greet: ()=> {
//         console.log(this === window);//why is this true ?
//         console.log(`Hey ${this.firstname}`);
//     }
// };

// jonas.calcage();
// jonas.greet(); 

//And also see in the video another pitfall(function inside function) and solutions to it.

//arguments keyword
// function fun(a, b){
//     console.log(arguments);
//     return a+b;
// }
// fun(2,5, 8, 12);