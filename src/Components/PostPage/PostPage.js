import { useParams } from "react-router-dom"
import useFetch from "../../Hooks/useFetch"
import './PostPage.css'
import { useNavigate } from "react-router-dom"

const PostPage = ()=>{

    const navigate = useNavigate()
    const {id} = useParams()
    const {data:blog,error,isLoading} = useFetch('http://localhost:8000/posts/' + id )


    
    const deletePost = ()=>{
        fetch('http://localhost:8000/posts/' + id,{
            method: "DELETE",})
            .then(()=> navigate('/'))
    } 
    return(
        <div className="post-page">
        {isLoading && <p>Loading</p>}
        {error && <p>{error.message}</p>}
        {blog &&  (
            <article>
            <h1>{blog.title}</h1>
             <p className="author">by {blog.author}</p>
             <p>{blog.body}</p></article> ) }

             <button onClick={deletePost}>Delete</button>
           
        </div>
       
        
    )


}

export default PostPage