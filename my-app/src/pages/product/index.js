import Link from "next/link";
function Product() {
  return (
    <>
      <Link href="/" style={{ margin: 30 , padding : 20}}>
        <span>Home</span>
      </Link>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </>
  );
}

export default Product;
