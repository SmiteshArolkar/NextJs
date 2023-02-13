const { useRouter } = require("next/router");

function Concept(){
    const router = useRouter();
    const {featureId , conceptId} = router.query

    return(
        <>
        <h1>Feature {featureId}</h1>
        <h2> Concept {conceptId}</h2>
        </>
    )
}

export default Concept