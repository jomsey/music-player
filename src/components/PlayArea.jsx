import "./PlayArea.css"
import React from "react";
import Icon from "../ui/Icon";
import { AppContext } from "../App";
import Progress from "../ui/Progress";
import SongControlers from "./SongControlers";
import diskPic from "../assets/disk-bg.webp";


export default function PlayArea() {
  
  const {setSongsListVisible,songPlaying,
        currenSongPlaying} = React.useContext(AppContext);
  
  const handleMusicListOpen = ()=>{
    setSongsListVisible(true)
  }
  
  return (
    <div className="play-area">
        <div className={`${songPlaying?"disk song-playing":"disk"}`}>
        <div className="overlay"></div>
        <img src={diskPic} alt="" />
        </div>

        <div className="controls">

            <div className="overlay"></div>
            
            <div> <h5 className="song-name">{currenSongPlaying.name}</h5>
            <small>{currenSongPlaying.artist}</small></div>
            <Progress/>
            <SongControlers/>

            <div className="bottom">
              <Icon name="music-note-list" onIconClick={handleMusicListOpen}/>
              <Icon name="shuffle"/>
            </div>
        </div>

    </div>
  )
}
