import Link from 'next/link'

export default function MenuItem({ title, address, icon,  }) {
  return (
    <div>
        <Link href={address && address} className='mx-4 lg:mx-6 hover:text-amber-600' >{icon && icon} <p className='hidden sm:inline my-2 text-sm'>{title && title}</p></Link>
    </div>
  )
}
