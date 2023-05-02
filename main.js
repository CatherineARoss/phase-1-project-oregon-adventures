fetch("http://localhost:3000/Adventures")
    .then(response => response.json())
    .then((adventures) => {
        const container = document.querySelector("ul#adventureList");
        adventures.forEach(adventure)
    });