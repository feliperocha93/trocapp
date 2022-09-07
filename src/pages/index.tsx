import { useAuthProvider } from "../context/authContext";

function Home() {
  const { user } = useAuthProvider();

   // TODO: solve the issue -> Use can see login page before redirect
   // Actually, user can't see, but this way is not the best.
  if (!user) return;

  return (
    <ul>
      <li key={user}>Name: {user.name}</li>
    </ul>
  );
}

export default Home;
