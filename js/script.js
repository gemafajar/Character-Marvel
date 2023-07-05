var url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dc6f0244db163ed561dc9ca202d00c59&hash=ff92df978fd93edd7a6ba1dec72d9ddd";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var characters = data.data.results;

        var characterDetails = document.getElementById('characterDetails');
        characters.forEach(character => {
          var characterDiv = document.createElement('div');
          characterDiv.classList.add('character-card', 'card');
          characterDiv.innerHTML = `
            <div class="card-body">
              <h2 class="card-title">${character.name}</h2>
              <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="Character Image" class="card-img-top">
              <p class="card-text">${character.description}</p>
              <h3 class="card-subtitle">Comics:</h3>
              <ul class="list-group list-group-flush">
                ${character.comics.items.map(comic => `<li class="list-group-item">${comic.name}</li>`).join('')}
              </ul>
              <h3 class="card-subtitle">Series:</h3>
              <ul class="list-group list-group-flush">
                ${character.series.items.map(series => `<li class="list-group-item">${series.name}</li>`).join('')}
              </ul>
            </div>
          `;
          characterDetails.appendChild(characterDiv);
        });
      })
      .catch(error => console.log(error));