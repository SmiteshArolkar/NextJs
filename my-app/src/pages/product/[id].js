import { useRouter } from "next/router";

function ProductDetails(props) {
  const router = useRouter();
  const id = router.query.id;

  return <h2>Details About Product {id}</h2>;
}

export default ProductDetails;
