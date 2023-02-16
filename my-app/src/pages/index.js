import Link from "next/link";

function Home() {
  return(
  <>
    <h1>Hello World</h1>
    <Link href = "/blog">
    <h1>Blog</h1>
    </Link>
  </>
  );
}

export default Home;
