import { useState, useEffect} from "react"
import BlogList from "../BlogList/BlogList"
import './home.css'
import useFetch from "../../Hooks/useFetch"


const Home = ()=>{

const {data,error,isLoading} = useFetch('http://localhost:8000/posts')


  return(
      <div className="home">
        {error && <p>{error}</p>}
        {isLoading && <p>Loading</p>}
        {data && <BlogList list={data}  />}
      </div>
  )

}

export default Home