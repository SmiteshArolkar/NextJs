import UserList from "./Users";

const PreRender = ({ users }) => {
  return (
    <>
      <h1>Pre-Rendering List Of Users</h1>
      <UserList users = {users}></UserList>
    </>
  );
};

//returns json object
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}

export default PreRender;
