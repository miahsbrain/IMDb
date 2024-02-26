import Image from 'next/image';

export default function loading() {
  return (
    <div className='flex justify-center items-center'>
      <Image src={'/spinner.svg'} width='150' height='150' alt='spinner' />
      {/* <img className='h-96' src="spinner.svg" alt="Loading..." /> */}
    </div>
  )
}
