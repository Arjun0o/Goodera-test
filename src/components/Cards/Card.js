import React from "react";
import styles from "./Cards.module.css";

const roles = [
  {
    role: "Executive Producer",
    data:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    role: "Executive Producer",
    data:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    role: "Executive Producer",
    data:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    role: "Executive Producer",
    data:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    role: "Executive Producer",
    data:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    role: "Executive Producer",
    data:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

export const Card = () => {
  return (
    <div className={styles.wrapper}>
      {roles.map((role) => (
        <div className={styles.card}>
          <div className={styles.displayPicture}></div>
          <div>
            <h2 className={styles.role}>{role.role}</h2>
            <p className={styles.data}>{role.data}</p>
            <button className={styles.button}>View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};
