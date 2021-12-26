import { useEffect,useState } from "react"
const useFetch = (url)=>{

    const [data,setData] = useState(null) 
    const [isLoading, setIsLoading] = useState(true)
    const [error,setError] = useState(null) 
    
      useEffect(()=>{
        const abrtCont = new AbortController()
        fetch(url,{signal: abrtCont.signal})
        .then((res)=>{
          return res.json()
        })
        .then((data)=>{
          setIsLoading(false)
          setData(data)
          setError(null)
        })
        .catch((err)=>{
          setIsLoading(false)
          setError(err.message)
        })

        return ()=> abrtCont.abort()

      },[url])

      return {data,error,isLoading}





}

      


export default useFetch