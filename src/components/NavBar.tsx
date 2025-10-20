function handleClick(pokemon) {
  return pokemon.name === "pikachu" && alert("pika pika");
}

function NavBar({ setPokemonName, pokemonList }) {
  return (
    <nav>
      {pokemonList.map((pokemon) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => {
            setPokemonName(pokemon.name);
            handleClick(pokemon);
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
