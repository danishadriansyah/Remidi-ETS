fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
  .then((response) => {
    return response.json();
  })

  .then((response) => {
    console.log(response);
    const data = response.results;
    let cards = "";
    data.forEach((m) => {
      cards += `

      <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-color-primary shadow h-100 py-2">
          <div class="card-body">
              <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                      <div class="h5 mb-0 text-center font-weight-bold text-gray-800">${m.name}</div>
                  </div>
                  <a href="${m.url}" class="btn btn-primary btn-icon-split btn-sm btn-block">
                      <span class="icon text-white-50">
                          <i class="fas fa-flag"></i>
                      </span>
                      <span class="text">Detail</span>
                  </a>
              </div>
          </div>
      </div>
  </div>`;
    });
    const pokemonContainer = document.querySelector("#card");
    pokemonContainer.innerHTML = cards;
  });