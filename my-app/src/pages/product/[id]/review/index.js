const { useRouter } = require("next/router");

function Review() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Review for Product {id}</h1>;
}

export default Review;
