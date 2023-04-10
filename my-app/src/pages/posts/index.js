import Post from "@/components/posts";
import Link from "next/link";

function PostList({ posts }) {
    return (
        <>
        <h1>
            List of Posts
        </h1>
        {
            posts.map((post) => {
                return (
                    <div key={post.id}>
                    <Post post={post}></Post>
                    </div>
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
      posts: data.splice(0,10)
    },
  };
}

export default PostList;
