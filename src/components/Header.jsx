import { FaInfoCircle, FaHome } from "react-icons/fa";
import MenuItem from "./MenuItem";
import Link from 'next/link';
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className='flex justify-between max-w-6xl sm:mx-auto items-center py-6 select-none'>

      <div className='flex'>
        <MenuItem title={'HOME'} address={'/'} icon={<FaHome className='text-3xl sm:hidden mx-2' />} />
        <MenuItem title={'ABOUT'} address={'/about'} icon={<FaInfoCircle className='text-3xl sm:hidden mx-2' />} />
      </div>

      <div className='flex items-center space-x-5'>
        <DarkModeSwitch />
        <Link href={'/'}>
            <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span> <span className='text-xl hidden sm:inline'>Clone</span></h2>
        </Link>
      </div>

    </div>
  )
}