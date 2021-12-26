import { useState } from 'react'
import './CreatePost.css'
import { useNavigate } from 'react-router-dom';


const CreatePost = ()=>{
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        const newPost = {title,body,author}
        fetch('http://localhost:8000/posts',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        })
        .then(()=>{
            setIsLoading(false)
            navigate('/')
        })
      
    }
    return(
        <div className="create-post">
             <h1>Create Post</h1>
             <form onSubmit={handleSubmit}>
                 <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required placeholder="Title"/>
                 <textarea placeholder='Content' onChange={(e)=>setBody(e.target.value)}  rows="4" cols="50" value={body}></textarea>
                 <select value={author} onChange={(e)=>setAuthor(e.target.value)} >
                     <option>Select Author</option>
                     <option>Mario</option>
                     <option>Yoshi</option>
                 </select>
       
                {!isLoading&&<button>Submit</button> }
                {isLoading&&<button disabled>Adding Post</button> }
   
                
    
             </form>
        </div>

    )
}


export default CreatePost