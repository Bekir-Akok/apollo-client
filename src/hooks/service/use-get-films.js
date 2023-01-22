import { useQuery } from "@apollo/client";

//local imports
import { FilmsQueries } from "graphql/queries";

const useGetFilms = () => {
  const { loading, error, data, refetch } = useQuery(FilmsQueries.GET_FILMS);

  return { loading, error, data: data?.allFilms?.films, refetch };
};

export default useGetFilms;
