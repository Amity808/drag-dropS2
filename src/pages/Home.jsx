import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import CardList from '../components/CardList'
import SearchBar from '../components/Search'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Suspense } from 'react'

function Loading() {
  return <h2 className=" text-white flex justify-center items-center">🌀 Loading...</h2>;
}

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate();
  const { user } = useAuthContext()

    // handle serach through the waste data through their name
  useEffect(() => {
    if(user == null ) navigate("/signin")
  }, [user])
  
    const handleSearch = (query) => {
        setSearchQuery(query)
    }

  return (
    <>
      <Suspense fallback={<Loading />}>

        <NavBar />
        <SearchBar onSearch={handleSearch} />
        <CardList searchQuery={searchQuery} />
      </Suspense>
    </>
  )
}

export default Home
