import Link from 'next/link';
import Image from 'next/image';
import { FaThumbsUp } from "react-icons/fa";

export default function Card({ result={} }) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-500 shadow-md rounded-lg sm:border sm:border-slate-500 sm:m-2 transition-shadow transition-duration-200 group h-fit'>
        <Link href={`/movie/${result.id}`}>
            {(result.backdrop_path || result.poster_path) ? (<Image src={`https://image.tmdb.org/t/p/original${result.backdrop_path || result.poster_path}`} width='640' height='300' alt={result.original_title || 'Image not found'} className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity transition-duration-200' placeholder='blur' blurDataURL='/spinner.svg' style={{height:'auto', maxWidth: '100%'}} />) :
            (<div className='rounded-lg w-full lg:w-1/2 text-center'>No Image</div>)}
            <div className='p-2'>
                <p className='line-clamp-2 text-sm'>{result.overview}</p>
                <h2 className='text-lg truncate font-bold '>{result.title || result.name}</h2>
                <p className='flex items-center'>{result.release_date || result.first_air_date} <FaThumbsUp className='h-5 mr-1 ml-3' /> {result.vote_count}</p>
            </div>
        </Link>
    </div>
  )
}