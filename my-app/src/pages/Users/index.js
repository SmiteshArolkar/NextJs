import User from "@/components/user";
import { resolve } from "styled-jsx/css";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log("User-List")
  return {
    props: {
      users: data,
    },
  };
}

function UserList({ users }) {
  return (
    <>
      <h1>User List</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <br></br>
            <User user = {user}></User>
            <br></br>
          </div>
        );
      })}
    </>
  );
}

export default UserList;
