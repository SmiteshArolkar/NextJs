import Post from "@/components/posts";

function Post_render({ post }) {
  return (
    <>
      <Post post = {post}></Post>
      <p>Post Body : {post.body}</p>
    </>
  );
}

export default Post_render;

export async function getStaticProps(Context) {
  const { params } = Context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  console.log(data)
  return {
    props: {
      post: data,
    },
  };
}


export async function getStaticPaths(){
    return {
        paths : [
            {
            params : { postId : '1'}
        },
        {
            params : { postId : '2'}
        },
        {
            params : { postId : '3'}
        },
    ],
    fallback : false

    }
}