import { useQuery } from "@apollo/client";

//local imports
import { FilmsQueries } from "graphql/queries";

const useGetFilms = () => {
  const { loading, error, data } = useQuery(FilmsQueries.GET_FILMS);

  return { loading, error, data: data?.allFilms?.films };
};

export default useGetFilms;
