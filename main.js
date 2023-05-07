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


  const bookNowButtons = document.querySelectorAll('.book-now');

  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('book-now')) {
      e.preventDefault();
      const participantsInput = e.target.parentElement.querySelector('.participants');
      const numberOfParticipants = participantsInput.value;
      if (numberOfParticipants > 0 && numberOfParticipants <= 10) {
        alert(`Booking for ${numberOfParticipants} participants, a confirmation Email will be sent to you.`);
      } else if (numberOfParticipants > 10) {
        alert(`Fully Booked: Max is 10 participants`);
      }
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


const gallery = document.querySelector('.gallery');
const image = gallery.querySelector('.gallery-image');

image.addEventListener('mouseover', function() {
  // Do something when mouse is over the image
  image.style.opacity = '0.5';
});

image.addEventListener('mouseout', function() {
  // Do something when mouse is not over the image
  image.style.opacity = '1';
});

