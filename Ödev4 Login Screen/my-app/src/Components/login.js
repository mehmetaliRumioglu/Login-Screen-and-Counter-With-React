import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const Navigate = useNavigate();

  const handleNickNameChange = (e) => {
    setNickName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (password === '12345') {
      setLoggedIn(true);
    } else {
      alert('Yanlış şifre! Lütfen tekrar deneyin.');
    }
  };

  if (loggedIn) {
   //return <Redirect to="/counter" />;
   Navigate("/counter")
  }

  return (
    <div>
      <h2>Giriş Yap</h2>
      <label>
        Kullanıcı Adı:
        <input type='text' value={nickName} onChange={handleNickNameChange}></input>
        <br></br>
        Şifre:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label> <br></br>
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
  
}

export default Login;
