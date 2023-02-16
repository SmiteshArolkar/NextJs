import { useRouter } from "next/router";

function Doc_All()
{
    const router = useRouter();
    const { params } = router.query
    console.log(params)
    return <h1>Docs Home Page</h1>
}

export default Doc_All;