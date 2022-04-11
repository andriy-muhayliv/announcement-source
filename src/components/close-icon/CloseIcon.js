import React from "react";
import styles from "./CloseIcon.module.css";

const CloseIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50px"
        height="50px"
        className={`${className} ${styles.close} cursor-pointer`}
        onClick={onClick}
      >
        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
      </svg>
    </>
  );
};

export default CloseIcon;