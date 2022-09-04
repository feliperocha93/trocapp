import { useAuthProvider } from "../context/authContext";

interface homeProps {}

function Home(props: homeProps) {
  const { user } = useAuthProvider();

  return (
    <ul>
      <li key={user}>Name: {user.name}</li>
    </ul>
  );
}

export default Home;
