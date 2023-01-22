import { useGetFilms } from "hooks";
import "./App.css";

function App() {
  const { loading, error, data } = useGetFilms();

  if (!!loading) return <p>Loading...</p>;
  if (!loading && !!error) return <p>Error : {error.message}</p>;

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
