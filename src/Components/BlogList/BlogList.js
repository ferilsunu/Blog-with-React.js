import { Link } from "react-router-dom";

const BlogList = ({ list }) => {
    return (
      <div className="blog-list">
        {list.map(list => (
        <Link to={`/posts/${list.id}`}>
          <div className="blog-preview" key={list.id} >
        
            <h1>{ list.title }</h1>
            <h2>Written by { list.author }</h2>
          </div>
          </Link>
        ))}
      </div>
    );
  }
   
  export default BlogList;