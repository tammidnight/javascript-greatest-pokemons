// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

function getAllFirePokemons(pokemon) {
  let firePokemon = pokemon.filter((element) => element.type.includes("Fire"));

  return firePokemon;
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortestPokemon(pokemon) {
  if (pokemon.length === 0) {
    return 0;
  }

  let shortest = "";
  let shortestHeight = Infinity;

  pokemon.forEach((eachPokemon) => {
    const heightAsNum = Number(eachPokemon.height.split(" ")[0]);

    if (heightAsNum < shortestHeight) {
      shortestHeight = heightAsNum;
      shortest = eachPokemon.name;
    }
  });

  return shortest;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

function candyAverage(pokemon) {
  if (pokemon.length === 0) {
    return 0;
  }

  let total = pokemon.reduce((sum, element) => {
    if (element.candy_count) {
      return sum + element.candy_count;
    } else {
      return sum;
    }
  }, 0);

  return Number((total / pokemon.length).toFixed(2));
}

// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(pokemon) {
  if (!pokemon.length) {
    return 0;
  }

  const groundPokemons = pokemons.filter((eachPoke) => {
    return eachPoke.type.includes("Ground");
  });

  const groundPokeImages = groundPokemons.map((eachPoke) => {
    return eachPoke.img;
  });

  const tenGroundPokeImages = groundPokeImages.slice(0, 10);

  return tenGroundPokeImages;
}

// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(pokemon) {
  if (!pokemons.length) {
    return 0;
  }

  const pikachuArr = pokemon.filter((eachPoke) => eachPoke.name === "Pikachu");
  const pikachu = pikachuArr[0];
  const pikachuWeight = Number(pikachu.weight.split(" ")[0]);

  const heavyPokemons = pokemon.filter((eachPoke) => {
    const pokemonWeight = Number(eachPoke.weight.split(" ")[0]);
    return pokemonWeight > pikachuWeight;
  });

  const heavyPokeNames = heavyPokemons.map((eachPoke) => eachPoke.name);

  return heavyPokeNames;
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(pokemon) {
  let pokemonCopy = JSON.parse(JSON.stringify(pokemon));

  pokemonCopy.sort((a, b) => {
    if (a.name > b.name) return 1;
    else if (a.name < b.name) return -1;
    else return 0;
  });

  const sortedPokeNames = pokemonCopy.map((eachPoke) => eachPoke.name);
  const firstTwentySortedPokeNames = sortedPokeNames.slice(0, 20);

  return firstTwentySortedPokeNames;
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them

function strongPokemons(pokemon) {
  const oneWeakPokemons = pokemon.filter((eachPoke) => {
    return eachPoke.weaknesses.length === 1;
  });

  const oneWeakPokeNames = oneWeakPokemons.map((eachPoke) => eachPoke.name);
  const firstFifteenOneWeakPokeNames = oneWeakPokeNames.slice(0, 15);

  return firstFifteenOneWeakPokeNames;
}
