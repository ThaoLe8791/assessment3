console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}
function mouseOverPhoto(){
	alert('Thank you for your bussiness! You are doing great!')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let imageB = document.querySelector('#logoPhoto');
imageB.addEventListener('mouseover',mouseOverPhoto);