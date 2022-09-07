import { useAuthProvider } from "../context/authContext";

function Home() {
  const { user } = useAuthProvider();

  if (!user) return;

  return (
    <ul>
      <li key={user}>Name: {user.name}</li>
    </ul>
  );
}

export default Home;
