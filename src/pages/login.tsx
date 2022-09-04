import { useState } from "react";

function Login() {
  const [name, setName] = useState('');
  const [pswd, setPswd] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    console.log({name, pswd});
  }

  return (
    <form style={{display: 'flex', flexDirection: 'column', width: '500px', margin: '50px auto', gap: '10px'}}>
      <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
      <input type="password" placeholder="Senha" onChange={(e) => setPswd(e.target.value)}/>
      <button onClick={(e) => handleLogin(e)} type="submit">Login</button>
    </form>
  );
}

export default Login;