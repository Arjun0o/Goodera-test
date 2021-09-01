import React from "react";
import styles from "./Main.module.css";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Card } from "./Cards/Card";
import { ReactComponent as Job } from "../assets/Job.svg";

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menuWrapper}>
        <div className={styles.navigation}>
          <div className={styles.menuContainer}>
            <Job style={{ marginRight: "6px" }} />
            <p className={styles.jobHuntText}> JobHunt</p>
            <p className={styles.jobText}>Find Jobs</p>
            <p className={styles.menuItems}> Upskill Yourself</p>
          </div>
          <div className={styles.menuContainer}>
            <p className={styles.menuItems}> Post a Job</p>
            <p className={styles.menuItems}> Sign in</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.findJobText}>Find Your Dream Job</h1>
          <p className={styles.browseText}>
            Browse through thousands of full-time or part-time jobs near you
          </p>
        </div>
      </div>
      <div className={styles.resultWrapper}>
        <SearchBar />
        <Card />
      </div>
    </div>
  );
};
