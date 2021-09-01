import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

export const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <Search />
        <input className={styles.input} placeholder="Job title or keyword" />
      </div>
      <div className={styles.inputContainer}>
        <Location />
        <input className={styles.input} placeholder="Select Location" />
        <Arrow />
      </div>

      <button className={styles.button}>Search</button>
    </div>
  );
};
