import Link from "next/link";
function Product({ id = 100 }) {
  return (
    <>
      <Link href="/" style={{ margin: 30, padding: 20 }}>
        <span>Home</span>
      </Link>
      <Link href="/product/1" style={{ margin: 30, padding: 20 }}>
        <h3>Product1</h3>
      </Link>
      <Link href="/product/2" style={{ margin: 30, padding: 20 }}>
        <h3>Product2</h3>
      </Link>
      <Link href="/product/3" style={{ margin: 30, padding: 20 }}>
        <h3>Product3</h3>
      </Link>
      <Link href={`/product/${id}`} style={{ margin: 30, padding: 20 }}>
        <h3>Product {id}</h3>
      </Link>
    </>
  );
}

export default Product;
