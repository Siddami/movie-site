import { Link} from "react-router-dom";


const Card = ({movies})=>{
    return(
        <>
          <div className="flex justify-between px-6 pt-6">
              <h3 className="text-lg md:text-xl text-bold">Featured Movie</h3>
              <span className="flex text-rose-700 text-sm">
                <p>See More</p> <img src="./chevron-right.png" className="hidden md:inline-flex w-5 h-5" />
              </span>
          </div>
            <div className="grid grid-cols-2 md:grid-cols-5 p-4 items-center gap-4">
            {movies.slice(0, 10).map((movie) => {
              const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              console.log({movie});
              ;
              return (
                // movie card
                <Link to={`/movies/${movie.id}`} key={movie.id} >
                <div data-testid="movie-card" key={movie.id} className="flex flex-col justify-start items-center">
                  <img
                    src={imageURL}
                    alt={movie.title}
                    className="rounded shadow-lg w-48 h-64 object-cover"
                    data-testid="movie-poster"
                  />

                  <small className="text-gray-600 pt-2">
                  <span data-testid="movie-release-date">{
                      movie.release_date}
                  </span></small>
                  <h3 className="text-center text-sm font-bold" data-testid="movie-title">{movie.title}</h3>
                 <div className="flex justify-between item-start">
                    <span className="text-gray-600 flex justify-start items-start gap-1 px-5">
                      <img src="./vectors/imdb.svg" className="w-5 h-5" />
                      <small>{Math.floor(movie.popularity)}/100</small>
                    </span>
                    <span className="text-gray-600 flex justify-start items-start gap-1 px-5">
                      <img src="./vectors/tomato.svg" className="w-4 h-4" />
                      <small>{(parseFloat(movie.vote_average)/10 * (100)).toFixed()}%</small>
                    </span>
                  </div>
                </div>
                </Link>
          );
        })}
        </div>
      </>
    )
}
export default Card
