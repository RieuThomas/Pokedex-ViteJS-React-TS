function PokemonCard({ pokemon }) {
  return pokemon.imgSrc ? (
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  ) : (
    <p>???</p>
  );
}

export default PokemonCard;
