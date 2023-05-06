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
