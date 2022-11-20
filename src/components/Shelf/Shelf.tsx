import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

import Pokemon from "../../typings/Pokemon";
import ShelfItem from "../ShelfItem/ShelfItem";
import loadingImg from "../../assets/images/loading.gif";

interface Props {
  quantity?: number;
  query?: string;
}

const Shelf = ({ quantity = 2, query }: Props) => {
  const GET_POKEMON = loader("../../graphql/getPokemon.gql");

  const variables = {
    limit: quantity,
    where: { name: { _regex: query?.trim().toLowerCase() } },
    offset: 0,
  };

  const { loading, data, error, fetchMore } = useQuery(GET_POKEMON, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  if (loading || error) {
    return (
      <div className="shelf">
        <div className="loading">
          <img src={loadingImg} alt="Loading..." />
        </div>
      </div>
    );
  }

  return (
    <>
      <ul className="shelf">
        {data?.pokemon_v2_pokemon?.length > 0 ? (
          data?.pokemon_v2_pokemon?.map((pokemon: Pokemon) => (
            <ShelfItem key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <h1>Pokémon not found</h1>
        )}
      </ul>
      <button
        className="loadMore"
        type="button"
        onClick={() =>
          fetchMore({
            variables: {
              offset: data?.pokemon_v2_pokemon?.length,
            },
          })
        }
      >
        Load More
      </button>
    </>
  );
};

export default Shelf;
