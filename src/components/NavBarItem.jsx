'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavBarItem({ title, params }) {

    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');

  return (
        <Link href={`/?genre=${params}`} className={`m-4 hover:text-amber-600 font-semibold ${genre && genre === params && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'}`} >{title}</Link>
  )
}