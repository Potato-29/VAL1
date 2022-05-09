import { useState } from "react"

const Home = () => {

   const [blogs, setBlogs] = useState([
       {title: "my new site", body: 'lorem ipsum', author: 'prayas', id:1 },
       {title: "my new site2", body: 'lorem ipsum2', author: 'prayas', id:2 },
       {title: "my new site3", body: 'lorem ipsum3', author: 'prayas', id:3 },
   ])

    return ( 
        <div className="home">
            {blogs.map((blog) => (
             <div className="blog-preview" key={blog.id}>
                 <h2>{blog.title}</h2>
                 <p>{blog.author}</p>
                 
             </div>
            ))}
        </div>
        
    );
}
 
export default Home;