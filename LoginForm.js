/**
 * Formulaire de connexion sans gestion de la requète API.
 *
 * @param {string} loginWith - Indique si le formulaire doit utiliser un `mail` ou un `user`.
 * @param {function(string, string)} onSubmit - La fonction à appeler lorsque l'utilisateur soumet le formulaire. La fonction reçoit deux paramètres : l'identifiant de l'utilisateur (mail ou user) et le password de l'utilisateur.
 *
 * @returns {JSX.Element} Le composant de formulaire d'inscription.
 */

"use client";
import React, { useState } from "react";

const LoginForm = ({ loginWith, onSubmit }) => {
  const [mail, setMail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (value) => {
    if (loginWith === "mail") setMail(value);
    if (loginWith === "user") setUser(value);
  };

  const login = (event) => {
    event.preventDefault();
    if (loginWith === "mail") onSubmit(mail, password);
    if (loginWith === "user") onSubmit(user, password);
  };

  return (
    <form onSubmit={(event) => login(event)}>
      <input
        required
        type={loginWith === "mail" ? "email" : "text"}
        id={`login${loginWith}`}
        placeholder={`votre ${loginWith}`}
        aria-label={`votre ${loginWith}`}
        value={loginWith === mail ? mail : user}
        onChange={(event) => handleIdChange(event.target.value)}
      />
      <input
        required
        type="password"
        id={`loginPassword`}
        placeholder={`votre password`}
        aria-label={`votre password`}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
