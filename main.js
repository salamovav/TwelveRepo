// Задание 1

// let a=15;
// let height= 140;
// let width=140;
// document.querySelector('.one').onclick=function(event){
//     document.querySelector('.one').style.width=width + 15 + 'px'
//     width++
//     document.querySelector('.one').style.height=height + 15 + 'px'
//     height++
// }

// Задание 2
// let b=('Всем хорошего дня')

// document.querySelector('.two').ondblclick=function(event){
//     document.querySelector('.two').innerHTML=(b);
//     console.log(b);
// }

// Задание 3

// document.querySelector('.image').onclick=function(event){
// if (document.querySelector('.image').src.indexOf('/img/1.jpg')>0){
//     document.querySelector('.image').src="/img/2.jpg";}
// else{
//     document.querySelector('.image').src="/img/1.jpg";}
// }

// Задание 4 и 5
var c= document.querySelector('.inp');
var d=document.querySelector('.four');
var e=document.querySelector('.five');
document.querySelector('.inp').onkeypress=function(event){
console.log(event);
if(c==Number){
    e.innerHTML=false
    }
else{
    d.innerHTML=(event.code)
    console.log(event.code);
}
}