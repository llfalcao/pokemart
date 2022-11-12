import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

import Pokemon from "../../typings/Pokemon";
import ShelfItem from "../ShelfItem/ShelfItem";

interface Props {
  quantity?: number;
}

const Shelf = ({ quantity = 2 }: Props) => {
  const GET_POKEMON = loader("../../graphql/getPokemon.gql");
  const { loading, data, error } = useQuery(GET_POKEMON, {
    variables: { limit: quantity },
  });

  if (loading || error) return <h1>Loading...</h1>;

  return (
    <ul className="shelf">
      {data?.pokemon_v2_pokemon.map((pokemon: Pokemon) => (
        <ShelfItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default Shelf;
