import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Loader from "./Loader";

const MovieDetails = () => {
  const {movieId} = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        const res =
          await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
          );
        const data = await res.json();
        setMovie(data);

      } catch (e) {
        console.error('Error occured while fetching movie details',e);
      }
    };
      getData();
 }, []);
  return (
    <>
    {

    Object.keys(movie).length ?
    <div className="grid lg:grid-cols-4 justify-center absolute">
        <nav className="flex flex-col justify-center  items-center lg:col-span-1 w-full h-full gap-y-5 border-r-2 p-4 rounded-3xl">
            <div>
              <img src="/vectors/Logo.svg" className="w-38 h-12 m-6" />
            </div>
            <div className="flex flex-col text-slate-600 items-center">
                <Link to ='/'>
                  <span className="flex h-16 items-center w-24"><img src="/vectors/Home.svg" className="block w-6 h-6"/><p className="p-2">Home</p></span>
                </Link>
                <span className="flex h-16 items-center w-24">
                  <img src="/vectors/movie.svg" className="block w-6 h-6"/>
                  <p className="p-2">Movie</p></span>
                <span className="flex h-16 items-center w-24">
                  <img src="/vectors/TVShow.svg" className="block w-6 h-6"/>
                  <p className="p-2">TV Series</p></span>
                <span className="flex h-16 items-center w-24">
                  <img src="/vectors/Calendar.svg" className="block w-6 h-6"/><p className="p-2">Upcoming</p></span>
            </div>
            <div className="w-8/12 border-2 p-3 rounded-xl flex flex-col justify-center items-center h-48">
                <p className="text-sm p-2 font-bold">Play movie quizes and earn free tickets</p>
                <small className="text-gray-500 p-2">50k people are playing now</small>
                <button className="bg-rose-200 text-pink-700 text-xs rounded-xl p-2">start playing</button>
            </div>
            <img src="/vectors/logout.svg" className="h-10 w-24 m-2" />
          </nav>
          <main className="lg:col-span-3 p-4 flex flex-col">
                <div className="w-full flex-shrink-0 justify-center bg-transparent rounded-lg flex overflow-hidden">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className="flex object-contain w-full max-h-[400px] items-center" />
                </div>
                <section className="flex flex-col justify-center items-center gap-4">
                    <article className="flex flex-wrap justify-between items-center p-4 gap-x-4">
                          <div className="flex flex-wrap justify-center items-center gap-x-4">
                          <p className="flex justify-center items-center gap-2">
                                <span data-testid="movie-title" className="font-bold text-lg">{movie.title}</span>
                                <span data-testid="movie-release-date">{movie.release_date}</span>
                                <span>{movie.adult == false? 'PG-13': 'RATED 18'}</span>
                                <span data-testid="movie-runtime">{
                                 movie.runtime
                                }</span>
                          </p>
                        <p className="text-rose-600 text-sm flex gap-2">
                              {movie.genres.map((genre) => (
                                <span key={genre.id}>{genre.name}</span>
                              ))}
                        </p>
                      </div>
                        <p className="flex justify-center items-center gap-3">
                              <img src="/vectors/star.svg" className="w-5 h-6"/>
                              <span className=" text-gray-500">{movie.vote_average}</span>|
                              <span>{movie.vote_count}</span>
                        </p>
                    </article>
                </section>
              <section className="grid lg:grid-cols-3 p-4 gap-2">
                  <article className="lg:col-span-2 flex flex-col justify-center gap-5">
                        <p data-testid="movie-overview">
                          {movie.overview}
                        </p>
                        <div className="flex justify-start items-center w-full">
                            <p className="text-white bg-rose-700 p-2">Popularity #{movie.popularity}</p>
                            <p className="border border-l-0 border-gray-500 p-1 flex items-center  gap-24">
                            <button>Awards nominations </button>
                            <button><img src="/vectors/downarrow.svg" alt="downward arrow" className=" w-7 h-7" /></button></p>
                        </div>
                  </article>
                  <article className="lg:col-span-1 flex flex-col gap-y-3 justify-center">
                      <button className="bg-rose-700 text-white flex p-2 gap-2 items-center justify-center"><img src="/vectors/tickets.svg" /> See Showtimes</button>
                      <button className="bg-rose-200 flex p-2 gap-2 items-center justify-center" ><img src="/vectors/list.svg" /> More watch options</button>
                      <img src="/vectors/subs.svg" alt="other movies" />
                  </article>
              </section>
          </main>
    </div>
      :
      <Loader />
    }

    </>
  )
}

export default MovieDetails
