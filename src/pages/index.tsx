import { useAuthProvider } from "../provider/authContext";

interface homeProps {}

function Home(props: homeProps) {
  const { users } = useAuthProvider();

  return (
    <ul>
      {users.map(user => (
        <li key={user}>Name: {user.name}</li>
      ))}
    </ul>
  );
}

export default Home;
