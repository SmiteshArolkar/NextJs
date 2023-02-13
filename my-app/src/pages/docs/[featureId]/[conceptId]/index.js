const { useRouter } = require("next/router");

function Concept(){
    const router = useRouter();
    const {featureId , conceptId} = router.query

    return(
        <>
        <h1>{featureId}</h1>
        <h2>{conceptId}</h2>
        </>
    )
}

export default Concept