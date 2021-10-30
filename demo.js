//  GET https://pokeapi.co/api/v2/pokemon/snorlax


//Put Image on Page 

 fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(pokemon => {
        const img = document.createElement("img")
        img.src = pokemon.sprites.front_default
        console.log(pokemon)
        document.body.append(img)

    })