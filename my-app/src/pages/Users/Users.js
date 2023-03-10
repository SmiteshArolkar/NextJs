async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
}

function UserList(){
    getStaticProps();
    return <h1>List of Users</h1>
}

export default UserList;
