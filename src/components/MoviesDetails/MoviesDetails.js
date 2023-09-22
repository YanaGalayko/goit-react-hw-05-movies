import { ContainerDetails,
   TitleName,
   TextUser, 
   TitlInfo,
   TextInfo,
   GenresList } from "./MoviesDetailsStyled";

const MoviesDetails = ({movieDetails}) => {
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    const {
        title,
        release_date,
        vote_average,
        overview,
        genres,
        poster_path,
        original_title,
      } = movieDetails;

      const releaseYear = date => {
        let releaseDate = new Date(date);
        return releaseDate.getFullYear();
      };

      const scoreUser = Math.round((vote_average * 100) / 10);

      return (
        <ContainerDetails>
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
          <TitleName>
            {title} ({releaseYear(release_date)})
          </TitleName>
          <TextUser>User score: {scoreUser}%</TextUser>
          <TitlInfo>Overview</TitlInfo>
          <TextInfo>{overview}</TextInfo>
          <TitlInfo>Genres</TitlInfo>
          {genres?.length > 0 ? (
          <GenresList>
            {genres.map(({ id, name }) => {
              return (
                <li key={id}>
                  <TextUser>{name}</TextUser>
                </li>
              );
            })}
          </GenresList>
        ) : (
          <TextUser>not published</TextUser>
        )}
        </div>
      </ContainerDetails>
      )
}

export default MoviesDetails