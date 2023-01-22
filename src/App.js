/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useMutation } from "@apollo/client";
import { useGetFilms } from "hooks";
import { FilmsMutations } from "graphql/mutations";
import "./App.css";

function App() {
  const { loading, error, data, refetch } = useGetFilms();

  if (!!loading) return <p>Loading...</p>;
  if (!loading && !!error) return <p>Error : {error.message}</p>;

  const [createFilm, { loading: createLoading, error: createError }] =
    useMutation(FilmsMutations.CREATE_FILM, {
      onCompleted: (data) => {
        console.log("Data from mutation", data);
        refetch();
      },
      onError: (error) => console.error("Error creating a film", error),
    });

  const [updateFilm, { loading: updateLoading, error: updateError }] =
    useMutation(FilmsMutations.UPDATE_FILM, {
      onCompleted: (data) => {
        console.log("Data from mutation", data);
        refetch();
      },
      onError: (error) => console.error("Error update a film", error),
    });

  const [deleteFilm, { loading: deleteLoading, error: deleteError }] =
    useMutation(FilmsMutations.DELETE_FILM, {
      onCompleted: (data) => {
        console.log("Data from mutation", data);
        refetch();
      },
      onError: (error) => console.error("Error delete a film", error),
    });

  const handleCreateFilm = (e) => {
    e.preventDefault();
    createFilm({ variables: { name: "örnek film" } });
  };

  const handleUpdateFilm = (e) => {
    e.preventDefault();
    updateFilm({ variables: { id: "1", name: "ismi değiştim" } });
  };

  const handleDeleteFilm = (e) => {
    e.preventDefault();
    deleteFilm({ variables: { id: "1" } });
  };

  return (
    <div className="app">
      {data.map((film) => (
        <div key={film.title} className="film-container">
          <h1>{film.title}</h1>
          <h2>{film.releaseDate}</h2>
          <h3>{film.director}</h3>
          <div className="species-wrapper">
            {film.speciesConnection.species.map((specy) => (
              <div key={specy.name} className="species">
                <h4>{specy.name}</h4>
                <h6>{specy?.homeworld?.name || "--"}</h6>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
