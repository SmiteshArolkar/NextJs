import Post from "@/components/posts";

function PostList({ posts }) {
    return (
        <>
        <h1>
            List of Posts
        </h1>
        {
            posts.map((post) => {
                return (
                    <Post post={post}></Post>
                )
            })
        }
        </>
    )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.splice(0,3)
    },
  };
}

export default PostList;
