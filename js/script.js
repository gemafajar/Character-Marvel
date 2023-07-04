var url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dc6f0244db163ed561dc9ca202d00c59&hash=ff92df978fd93edd7a6ba1dec72d9ddd";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var characters = data.data.results;

        var characterDetails = document.getElementById('characterDetails');
        characters.forEach(character => {
          var characterDiv = document.createElement('div');
          characterDiv.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="Character Image">
            <p>${character.description}</p>
            <h3>Comics:</h3>
            <ul>
              ${character.comics.items.map(comic => `<li>${comic.name}</li>`).join('')}
            </ul>
            <h3>Series:</h3>
            <ul>
              ${character.series.items.map(series => `<li>${series.name}</li>`).join('')}
            </ul>
          `;
          characterDetails.appendChild(characterDiv);
        });
      })
      .catch(error => console.log(error));