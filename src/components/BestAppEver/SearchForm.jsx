"use client";
import React, {useRef, useState} from "react";
import styles from "./BestAppEver.module.css";
import ActionButton from "./ActionButton";

const SearchForm = ({setValue}) => {
    const inputRef = useRef();

    const handleButtonClick = () => {
        const inputValue = inputRef.current.value;
        setValue(inputValue);
        console.log(inputValue);
    }

    return (
    <form className={styles.searchContainer} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchInput" className={styles["visually-hidden"]}>
        Search
      </label>
      <input
        id="searchInput"
        type="text"
        ref={inputRef}
        className={styles.searchField}
        aria-label="Search input"
      />
      <ActionButton label="Search" onClick={handleButtonClick} />
    </form>
);
};

export default SearchForm;
