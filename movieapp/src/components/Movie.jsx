// function Movie({ movie }) {
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div key={id}>
      <img src={coverImg} alt={title}></img>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genres) => (<li key={genres}>{genres}</li>))}
      </ul>
    </div>
  );
}

export default Movie;