import {useState,useContext} from "react"
import { AppContext } from "../App";
import Icon from "../ui/Icon";
import Song from "./Song";
import "./SongsList.css";


export default function SongsList({visible}) {
  const {setSongsListVisible,setSongPlaying,
         songsList:songs,setCurrentSongPlaying,
         currenSongPlaying, songPlaying} = useContext(AppContext);
         
  const [appSongs,setAppSongs] = useState(songs);
  
  const handleClose=()=>{
   setSongsListVisible(false)

  }
 
  const handlePlayState=(id)=>{
    const updatedSongsList=songs.map(song=>{
      if(song.id === id){
        const nowPlaying = {...song,playing:true}
        setCurrentSongPlaying(nowPlaying)
        return nowPlaying};
     
      return song
    })

    setAppSongs(updatedSongsList)

    setSongPlaying(true)

  }

  return (
    <div className={`${visible?"songs-list visible":"songs-list"}`}>
        <div className="overlay"></div>
        <div className="top-icons">
        <Icon name="x-lg" onIconClick={handleClose}/>
        <Icon name="repeat-1" />
        </div>
        <div className="songs">
           {appSongs.map(song=><Song song={song} 
                                  key={song.id}
                                  current={song.id===currenSongPlaying.id}
                                  playing = { songPlaying && song.id===currenSongPlaying.id}
                                  onSongClick={()=>handlePlayState(song.id)}/>)}
        </div>
    </div>
  )
}
