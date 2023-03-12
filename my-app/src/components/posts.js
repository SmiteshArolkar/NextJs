function Post({ post }) {
    return (
       
        <div key={post.id}>
            <br></br>
            <p>Post Number : {post.userId}</p>
            <p>{post.title}</p>
        </div>
    )
}

export default Post;