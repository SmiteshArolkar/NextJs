import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing Order")
    router.push('./product') //pushes new route 
    // router.replace('./product')// replaces routes so when we go back we go to  tab
  }
  return(
  <>
    <h1>Hello World</h1>
    <Link href = "/blog" style={{margin : 20}}>
    <span>Blog</span>
    </Link>
    <Link href = "/product" style={{margin : 20}}>
    <span>Products</span>
    </Link>
    <button onClick={handleClick}>
      Place Order
    </button>
  </>
  );
}

export default Home;
