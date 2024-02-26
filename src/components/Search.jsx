'use client';
import {useState} from 'react';
import {useRouter} from 'next/navigation'

export default function Search() {

    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
        setSearch('');
    }

  return (
    <form className='flex max-w-6xl mx-auto px-2 justify-between items-center gap-1' onSubmit={handleSubmit}>
      <input type="text" placeholder='Search keywords...' className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent' value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type="submit" className='text-amber-700 disabled:text-gray-500 flex-1' disabled={!search}>Search</button>
    </form>
  )
}