import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

import Pokemon from "../../typings/Pokemon";
import ShelfItem from "../ShelfItem/ShelfItem";

interface Props {
  quantity?: number;
  query?: string;
}

const Shelf = ({ quantity = 2, query }: Props) => {
  const GET_POKEMON = loader("../../graphql/getPokemon.gql");
  const { loading, data, error } = useQuery(GET_POKEMON, {
    variables: {
      limit: quantity,
      where: { name: { _regex: query?.trim().toLowerCase() } },
    },
  });

  if (loading || error) return <h1>Loading...</h1>;

  return (
    <ul className="shelf">
      {data?.pokemon_v2_pokemon.length > 0 ? (
        data?.pokemon_v2_pokemon.map((pokemon: Pokemon) => (
          <ShelfItem key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <h1>Pokémon not found</h1>
      )}
    </ul>
  );
};

export default Shelf;
