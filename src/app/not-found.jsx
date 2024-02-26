import Link from "next/link";

export default function NotFound({  }) {
  return (
    <div className='flex flex-col items-center content-center'>
      <p className='text-center text-4xl text-red-700'>404 - page not found</p>
      <Link href='/' className='my-4 bg-amber-600 py-1 px-3 hover:opacity-90 transition-opacity duration-300 rounded-lg'>Go to home</Link>
    </div>
  )
}
