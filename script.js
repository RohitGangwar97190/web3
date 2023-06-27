
/////Events handelelers 
// function myfunction(){
//     console.log('I was clicked');
// }
// const mousemove =() =>{
//     console.log('mouse over');
// }
// function keyPressEvent(){
//     console.log('key was pressed');

// }
// function keyUpEvent(){
//     console.log('key up was pressed');
// }
// function keyDownEvent(){
//     console.log('key Down was pressed');
// }
/////events listener
// const box1=document.getElementById('box-1');
// box1.addEventListener('mousemove',(e) =>{
//     console.log('event object',e.clientX,e.clientY);
// }) yeh btayenga ki box ki x and y dimensions kya h .
const nameInput =document.getElementById('nameInput');
nameInput.addEventListener('keypress',(e) =>
{
    console.log('key',e.key);
})