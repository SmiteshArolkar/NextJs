import Link from "next/link";

function Home() {
  return(
  <>
    <h1>Hello World</h1>
    <Link href = "/blog" style={{margin : 20}}>
    <span>Blog</span>
    </Link>
    <Link href = "/product" style={{margin : 20}}>
    <span>Products</span>
    </Link>
  </>
  );
}

export default Home;
