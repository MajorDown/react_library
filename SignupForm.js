/**
 * Formulaire d'inscription sans gestion de la requète API.
 *
 * @param {boolean} requiredUser - Indique si le champ `username` est requis.
 * @param {function(string, string)} onSubmit - La fonction à appeler lorsque l'utilisateur soumet le formulaire. La fonction reçoit deux paramètres : l'adresse e-mail de l'utilisateur et le mot de passe de l'utilisateur.
 *
 * @returns {JSX.Element} Le composant de formulaire d'inscription.
 */

"use client";
import React, { useState, useEffect } from "react";

const SignupForm = ({ requiredUser, onSubmit }) => {
  const [mail, setMail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerif, setPasswordVerif] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // VERIFICATION DU NIVEAU DE SECURITE DU PASSWORD
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Le mot de passe doit contenir au moins 12 caractères, incluant une lettre, un chiffre et un caractère spécial (@$!%*?&)"
      );
    } else {
      setErrorMessage(null);
    }
    // VERIFICATION DE LA CONCORDANCE DES DEUX PASSWORDS
    if (password && passwordVerif && password !== passwordVerif) {
      setErrorMessage("Il y a une différence entre vos deux passwords !");
    } else {
      setErrorMessage(null);
    }
    // VERIFICATION DU NOMBRE DE CARACTERES DU USERNAME
    const usernameRegex = /^[a-zA-Z0-9]{8,}$/;
    if (requiredUser && !usernameRegex.test(user)) {
      setErrorMessage(
        "Le nom d'utilisateur doit contenir au moins 8 caractères."
      );
    }
  }, [password, passwordVerif]);

  const signup = (event) => {
    event.preventDefault();
    if (requiredUser) onSubmit(mail, user, password);
    if (!requiredUser) onSubmit(user, password);
  };

  return (
    <form onSubmit={(event) => signup(event)}>
      <input
        required
        type="email"
        id="signupMail"
        placeholder={`votre email`}
        aria-label={"votre email"}
        value={mail}
        onChange={(event) => setMail(event.target.value)}
      />
      {requiredUser && (
        <input
          required
          type="Text"
          id="signupUser"
          placeholder={`votre username`}
          aria-label={"votre username"}
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
      )}
      <input
        required
        type="password"
        id="signupPassword"
        placeholder={`votre password`}
        aria-label={"votre password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        required
        type="password"
        id="signupPasswordVerif"
        placeholder={`vérification de votre password`}
        aria-label={"vérification de votre password"}
        value={passwordVerif}
        onChange={(event) => setPasswordVerif(event.target.value)}
      />
      {errorMessage && (
        <p id="errorMessage" style={{ color: red }}>
          {errorMessage}
        </p>
      )}
      <button type="submit" disabled={errorMessage}>
        Se connecter
      </button>
    </form>
  );
};

export default SignupForm;
