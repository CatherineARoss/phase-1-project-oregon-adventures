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

  const participantsInput = document.querySelector('.participants');
  const bookNowButton = document.querySelector('.book-now');
  
  bookNowButton.addEventListener('click', function(e) {
    e.preventDefault();
  
    const numberOfParticipants = participantsInput.value;
    if(participantsInput.value) {
    alert(`Booking for ${numberOfParticipants} participants`);
    }
  });

const emailElement = document.querySelector('#email');
const messageElement = document.querySelector('#message');
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
	e.preventDefault();

	const emailValue = emailElement.value;
	const messageValue = messageElement.value;

	console.log('Email: ', emailValue);
	console.log('Message: ', messageValue);

	if(emailValue.includes('@')) {
		alert('Thank You');
	} else {
		alert('Please enter a valid email address.');
	}
});

