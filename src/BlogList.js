import {Link} from 'react-router-dom'

const BlogList = ({props}) => {
    return ( 
        <div className="blog-list">
            {props.map( blog => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                        </Link>
                        <p>{blog.body}</p>
                        <em>Written by {blog.author}</em>
                    </div>
                )
            )}
        </div>
    );
}
 
export default BlogList;