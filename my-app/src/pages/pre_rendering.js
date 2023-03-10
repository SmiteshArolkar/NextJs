


const PreRender = ({ users }) => {
    return (
        <>
        <h1>Pre-Rendering List Of Users</h1>
        {
            users.map( user => {
                return(
                    <div key = {user.id}>
                        <h4>UserName : {user.username}</h4>
                        <p>Name : {user.name}</p>
                        <p>Email : {user.email}</p>
                        <br></br>
                        
                    </div>
                )
            })
        }
        </>
    );
}

//returns json object
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
