

document.addEventListener('DOMContentLoaded', () => {
fetch('http://localhost:3000/adventures')
.then((response) => response.json())
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.error('Error fetching data:', error);
})
});