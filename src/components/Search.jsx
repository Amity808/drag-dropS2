import React, { useState, useEffect } from 'react'
import { data } from '../data'


export default  function SearchBar({ onSearch }) {  

  return (
    <div className=' mt-20 mb-7 flex items-center rounded-sm justify-center max-sm:ml-16'>
      <input type='text' onChange={(e) => onSearch(e.target.value)} placeholder=' Search Image' className=' text-base font-normal border-none text-black bg-white h-[40px]  w-[525px] max-sm:w-[200px] max-md:w-[250px] pl-3 max-sm:pl-0 rounded-lg' />
    </div>
  )
}
