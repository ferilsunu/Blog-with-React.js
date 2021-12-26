import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer"
import './app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "../CreatePost/CreatePost";
import PostPage from "../PostPage/PostPage";
import NotFound from '../NotFound/NotFound'

const App = ()=>{
    return(

    <>
    <Router>
        <Nav />
        <Routes>
            <Route excat path="/" element={<Home/>} />           
            <Route path="create" element={<CreatePost/>} />
            <Route path="/posts/:id" element={<PostPage/>} />
            <Route path="*" element={<NotFound />}  />  
        </Routes>
        <Footer />
    </Router>
    </>
    )
}


export default App

