import { useRouter } from "next/router";

function Concepts() {
  const router = useRouter();
  const { featureId } = router.query;
  return (
    <>
      <h1>{featureId}</h1>
      <h2>Concept 1</h2>
      <h2>Concept 2</h2>
      <h2>Concept 3</h2>
      <h2>Concept 4</h2>
    </>
  );
}

export default Concepts;
