import { TMDB_IMG_URL } from "../utils/constant";

function MovieCard({ posterPath }) {
  return (
    <div className="w-48 pr-2">
      <img src={`${TMDB_IMG_URL}${posterPath}`} alt="movie_banner"></img>
    </div>
  );
}

export default MovieCard;
