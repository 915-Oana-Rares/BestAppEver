import React from "react";
import styles from "./BestAppEver.module.css";

const ActionButton = ({ label , onClick}) => {
  return <button type='button' onClick={onClick} className={styles.actionButton}>{label}</button>;
};

export default ActionButton;
