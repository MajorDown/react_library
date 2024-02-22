/**
 * Bouton de type toggle.
 *
 * @param {function} onToggle - Fonction de rappel appelée lorsque le bouton est basculé.
 * @param {string} title - Titre du bouton.
 * @param {string} color - Couleur du bouton lorsqu'il est activé.
 *
 * @returns {JSX.Element} Le composant de bouton de bascule.
 */

"use client";
import React, { useState, useEffect } from "react";

const ToggleButton = ({ onToggle, title, color }) => {
  const [position, setPosition] = useState(false);
  const [style, setStyle] = useState({
    width: "40px",
    height: "20px",
    display: "flex",
    justifyContent: "flex-start",
    border: `5px solid grey`,
    borderRadius: "10px",
  });

  useEffect(() => {
    if (position) {
      setStyle({
        width: "40px",
        height: "20px",
        display: "flex",
        justifyContent: "flex-end",
        border: `5px solid ${color}`,
        borderRadius: "10px",
      });
    }
    if (!position) {
      setStyle({
        width: "40px",
        height: "20px",
        display: "flex",
        justifyContent: "flex-start",
        border: `5px solid grey`,
        borderRadius: "10px",
      });
    }
  }, [position]);

  const toggle = () => {
    setPosition(!position);
    onToggle(position);
  };

  return (
    <div className="toggleButton">
      <div className="toggleBox" style={style} onClick={() => toggle()}>
        <div
          className="toggle"
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: `${color}`,
            color: `${color}`,
          }}
          onClick={() => toggle()}
        >
          .
        </div>
      </div>
      <p className="toggleTitle">{title}</p>
    </div>
  );
};

export default ToggleButton;
