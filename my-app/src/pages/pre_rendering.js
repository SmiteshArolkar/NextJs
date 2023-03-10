


const PreRender = ({ users }) => {
    return (
        <>
        <h1>Pre-Rendering List Of Users</h1>
        {
            users.map( user => {
                return(
                    <div key = {user.id}>
                        <p>Name : {user.name}</p>
                        <br></br>
                        <p>Email : {user.email}</p>
                    </div>
                )
            })
        }
        </>
    );
}


export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    return {
        props:{
            users : data,
        }
    }
}


export default PreRender;
