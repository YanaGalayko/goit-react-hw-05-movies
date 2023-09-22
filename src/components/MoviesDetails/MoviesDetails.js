const MoviesDetails = ({movieDetails}) => {
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    const {
        title,
        release_date,
        popularity,
        overview,
        genres,
        poster_path,
        original_title,
      } = movieDetails;

      return (
        <div>
        <img
          width="300px"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImg
          }
          alt={original_title}
        />
        <div>
          <h1>
            {title} ({release_date})
          </h1>
          <p>User score: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres?.length > 0 ? (
          <ul>
            {genres.map(({ id, name }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>not published</p>
        )}
        </div>
      </div>
      )
}

export default MoviesDetails