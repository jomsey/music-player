import React from "react";
import "./SongControlers.css"
import Icon from "../ui/Icon";
import { AppContext } from "../App";


export default function SongControlers({list}) {
  const {songPlaying,setSongPlaying,
         songsList,songIndex,setSongIndex,
         setCurrentSongPlaying} = React.useContext(AppContext);

  
  const handlePlayState=()=>{
    songPlaying?setSongPlaying(false):setSongPlaying(true);
    
  }
  
  const handlePlayNextSong=()=>{
    songIndex >= songsList.length-1?setSongIndex(0):setSongIndex(songIndex+1);
    setCurrentSongPlaying(songsList[songIndex])
  }

  const handlePlayPreviousSong=()=>{
    songIndex <= 0?setSongIndex(songsList.length - 1):setSongIndex(songIndex-1);
    setCurrentSongPlaying(songsList[songIndex])
  }
 
  return (
    <div className="song-controlers">
         <Icon name="skip-backward"   onIconClick={handlePlayPreviousSong}/>
         <Icon name={`${songPlaying?"pause-circle":"play-circle"}`}
               onIconClick={handlePlayState}
               extraClasses="play"/>
         <Icon name="skip-forward"  onIconClick={handlePlayNextSong}/>   
    </div>
  )
}
