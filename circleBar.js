import React from "react";

const circleBar = ({ size, strokeWidth, progress }) => {
  // HOOKS / PROPS
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // RENDER
  return (
    <svg className="circular-progress" width={size} height={size}>
      <circle
        className="progress-background"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        className="progress-bar"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
      />
    </svg>
  );
};

export default circleBar;
