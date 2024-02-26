import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className='flex justify-center items-center dark:bg-gray-600 bg-amber-100 lg:text-lg'>
      <NavBarItem title={'Trending'} params={'fetchTrending'} />
      <NavBarItem title={'Top Rated'} params={'fetchTopRated'} />
    </div>
  )
}
