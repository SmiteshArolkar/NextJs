import { resolve } from "styled-jsx/css"

async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data;
}

function UserList(){
    getStaticProps().then((e) => {

    })
    return <h1>List of Users</h1>
}

export default UserList;
