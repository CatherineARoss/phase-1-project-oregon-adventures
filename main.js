const adventureWrapper = document.querySelectorAll('.adventure-image-wrapper');

document.addEventListener('DOMContentLoaded', () => {
fetch('http://localhost:3000/adventures')
  .then((response) => response.json())
  .then((adventures) => {
      adventures.forEach((adventure) => {
        const adventureWrapper = document.getElementById(`adventure-${adventure.id}`);

        const adventureName = document.createElement('h3');
        adventureName.textContent = `${adventure.name}`;
        adventureWrapper.appendChild(adventureName);

        const adventureDescription = document.createElement('p');
        adventureDescription.textContent = `${adventure.description}`;
        adventureWrapper.appendChild(adventureDescription);

        const adventureGear = document.createElement('p');
        adventureGear.textContent = `${adventure.gear}`;
        adventureWrapper.appendChild(adventureGear);
      });
    })
  });

let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	console.log('Email: ', emailValue);
	console.log('Message: ', messageValue);

	if(emailValue.includes('@')) {
		// all good
		alert('Thank You');
	} else {
		alert('Please enter a valid email address.');
	}
})