import Link from "next/link";

function Post({ post }) {
    return (
       <>
       <Link href={`posts/${post.id}`} passHref>
        <div key={post.id} style={{
            margin : 'auto',
            border : '20px',
            borderRadius : '10px',
        }}>
            <br></br>
            <p>Post Number : {post.id}</p>
            <p>Post Title : {post.title}</p>
        </div>
        </Link>
        </>
    )
}

export default Post;