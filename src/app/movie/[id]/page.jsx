import Image from 'next/image';

async function getMovie(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US&page=1`, { next: { revalidate: 3600 } });
    const data = await res.json();
    return data;
}

export default async function MovieDynamicPage({ params }) {
    const movieId = params.id;
    const movie = await getMovie(movieId);
 
  return (
    <div classname='w-full'>
      <div className='p-4 md:pt-8 flex flex-col lg:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`} width={640} height={300} alt={movie.original_title || 'Movie poster'} className='rounded-lg w-full lg:w-1/2' placeholder='blur' blurDataURL='/spinner.svg' style={{ height: 'auto', maxWidth: '100%' }} />
        <div className='p-2'>
            <p>{movie.genres?.map(genre => (
                <span key={genre.id} className='mr-2 py-1 px-2 bg-amber-100 dark:bg-amber-500 rounded-lg'>{genre.name}</span>
            ))}</p>
            <h2 className='text-lg mt-2 mb-3 font-bold ' >{movie.title || movie.name}</h2>
            <p className='text-lg mb-3'><span className='font-semibold mr-1'>Overview:</span> {movie.overview}</p>
            <p className='mb-3'><span className='font-semibold mr-1'>Date Released:</span> {movie.release_date || movie.first_air_date}</p>
                  <p className='mb-3'><span className='font-semibold mr-1'>Rating:</span> <span className='font-semibold'>{movie.vote_average.toFixed(2)}</span> of {movie.vote_count} votes</p>
        </div>
      </div>
    </div>
  )
}
