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

  const handleVideoDownload = async () => {
    try {
      // Check if online
      if (!isOnline || !isServerAvailable) {
        alert("Cannot download video while offline. Please connect to the internet and try again.");
        return;
      }

      // Show loading indicator
      const button = document.getElementById('download-video-btn');
      const originalText = button.textContent;
      button.textContent = 'Downloading...';
      button.disabled = true;

      // Fetch video from server
      const response = await fetch('/api/video');

      if (!response.ok) {
        throw new Error('Failed to download video');
      }

      // Create a downloadable blob
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'comics-video.mp4';
      document.body.appendChild(a);
      a.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // Reset button
      button.textContent = originalText;
      button.disabled = false;
    } catch (err) {
      console.error("Error downloading video:", err);
      alert("Failed to download video. Please try again later.");

      // Reset button on error
      const button = document.getElementById('download-video-btn');
      if (button) {
        button.textContent = 'Download Video';
        button.disabled = false;
      }
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
              onClick={handleVideoDownload}
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
