"use client"
import React, {useEffect, useRef} from "react";
import styles from "./BestAppEver.module.css";
import SearchForm from "./SearchForm";
import ActionPanel from "./ActionPanel";
import DisplayArea from "./DisplayArea";
import Title from "./Title";
import ChartComponent from "@/components/BestAppEver/ChartComponent";
import ConnectionStatus from "@/components/BestAppEver/ConnectionStatus";
import { useComics } from "@/context/ComicsProvider";
import { handleComicClick as handleComicClickImported } from './handleComicClick';
import NewComicIndicator from "@/components/BestAppEver/NewComicIndicator";
import { useAuth } from "@/context/AuthProvider";
import SuspiciousUsersList from "@/components/BestAppEver/SuspiciousUsersList";

const BestAppEver = () => {
  const { user } = useAuth();
  const [searchValue,setSearchValue] = React.useState("");
  const [selectedComicIndex,setSelectedComicIndex] = React.useState(null);
  const [comicIndex, setComicIndex] = React.useState(null);
  const [selectedPublisher, setSelectedPublisher] = React.useState('');

  const {comicsState, deleteComic,updateFilters , isOnline, isServerAvailable, checkStatus, pendingChanges} = useComics();

  const [showNewComicIndicator, setShowNewComicIndicator] = React.useState(false);
  const previousLength = useRef(comicsState.length);
  useEffect(() => {
    updateFilters({publisher: selectedPublisher});
  },[selectedPublisher])

  const filteredComics = comicsState.filter((comic) =>
      comic.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const renderLoginStatus = () => {
    if (user) {
      return (
          <div className={styles.loginStatus}>
          <span className={user.isAdmin ? styles.adminBadge : styles.userBadge}>
            {user.isAdmin ? '👑 Admin' : '👤 User'}: {user.name}
          </span>
          </div>
      );
    }
    else {
      return (
          <div className={styles.loginStatus}>
            <span className={styles.notLoggedInBadge}>Not logged in</span>
          </div>
      );
    }
  };

  useEffect(() => {
    if (comicsState.length > 0) {
      if (previousLength.current < comicsState.length) {
        setShowNewComicIndicator(true);
      }

      previousLength.current = comicsState.length;
    }
  }, [comicsState]);

  const handleComicClick = (index) => {
    handleComicClickImported(index, filteredComics, comicsState, setSelectedComicIndex, setComicIndex);
  };

  useEffect(() => {
    console.log("Selected comic index has been updated:", selectedComicIndex);
  }, [selectedComicIndex]);


  const handleDeleteComic = () => {
    if (typeof comicIndex === "number") {
      deleteComic(comicIndex);
    } else {
      console.error("Index is not a number:", comicIndex);
    }
  };

const renderSuspiciousList= () =>{
    if (user && user.isAdmin) {
      return <SuspiciousUsersList/>;
    }
    else
      return '';
  }
  return (
  <div>
    <div className={styles.container}>

      <Title/>
      <div>
            {renderLoginStatus()}
            <ConnectionStatus isOnline={isOnline} isServerAvailable={isServerAvailable} checkStatus={checkStatus} pendingChanges={pendingChanges} />
            <NewComicIndicator isVisible={showNewComicIndicator}
                onAnimationEnd={() => setShowNewComicIndicator(false)}
            />
            {renderSuspiciousList()}
        <div className={styles.buttonContainer} >
          <button
              id="download-video-btn"
              className={styles.downloadButton}
              disabled={!isOnline || !isServerAvailable}
          >
            Download Surprise Video
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.mainSection}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
              <div className={styles.controlPanel}>
                <SearchForm setValue={setSearchValue}/>
                <ActionPanel comics={comicsState} setPublisher={setSelectedPublisher} onDeleteComic={handleDeleteComic} selectedComic={comicIndex}/>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <DisplayArea comics={filteredComics} onComicClick={handleComicClick} selectedComicIndex={selectedComicIndex}/>
            </div>
          </div>
        </div>
      </div>
      <ChartComponent className={styles.chartContainer}/>

    </div>

  </div>

);
};

export default BestAppEver;
