function color(){

	alert(`My favorite color is red!`)
}
function place(){
    alert(`My favorite place is Vietnam <3`)
}
function ritual(){
    alert('My favorite ritual is Bedtime stories that promote calm minds and open hearts!')
}

let colorB = document.querySelector('#color');
let placeB = document.querySelector('#place');
let ritualB = document.querySelector('#ritual')

placeB.addEventListener('click',place);
ritualB.addEventListener('click',ritual)
colorB.addEventListener('click',color);