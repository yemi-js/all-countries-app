import React from 'react'
import Search from '../components/Search'
import RandomizeBtn from '../components/RandomizeBtn'

const Navbar = () => {
  return (
    <div className='border-b-2'>
      <nav className=' grid grid-cols-3 grid-flow-col gap-2 px-10 py-2 items-center'>
        {/* Logo */}
        <div className='grid'>
          <h1 className='font-bold text-xl'>Countries</h1>
        </div>
         {/* searchBar */}
         <div className='grid'>
            <Search />
         </div>
         {/* searchBar */}
         <div className='grid justify-end'>
            <RandomizeBtn/>
         </div>
         
      </nav>
  </div>
  )
}

export default Navbar