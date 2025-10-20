interface props {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({ pokemon }: props) {
  return pokemon.imgSrc ? (
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  ) : (
    <figure>
      <p>???</p>
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
