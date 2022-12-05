import React from 'react'
import TopIcons from './components/TopIcons'
import PlayArea from './components/PlayArea'
import SongsList from './components/SongsList'
import AboutAuthor from './components/AboutAuthor'
import Themes from './components/Themes'
import { songs } from "./utils/songs";
import './App.css'


export const  AppContext = React.createContext({});


function App() {
  let [songIndex,setSongIndex] = React.useState(0);
  const songsList = songs;
  const [songPlaying,setSongPlaying]=React.useState(false);
  const [themesVisible,setThemesVisible] = React.useState(false);
  const [songsListVisible,setSongsListVisible] = React.useState(false);
  const [aboutAuthorVisible,setAboutAuthorVisible] = React.useState(false);
  const [currenSongPlaying,setCurrentSongPlaying] = React.useState(songsList[songIndex]);
  const currentTheme = localStorage.getItem("theme") || "/src/assets/themes/t3.jpg";
  
  
  
 


  return (
    <AppContext.Provider value={{songsListVisible,setSongsListVisible,
                                 aboutAuthorVisible,setAboutAuthorVisible,
                                 themesVisible,setThemesVisible,
                                 songPlaying,setSongPlaying,
                                 songsList,
                                 currenSongPlaying,setCurrentSongPlaying,
                                 songIndex,setSongIndex}}>

    <div className="App"  style={{backgroundImage:`url(${currentTheme})`}}>
       <TopIcons/>
       <PlayArea/>
       <SongsList visible={songsListVisible}/>
       <AboutAuthor visible={aboutAuthorVisible}/>
       <Themes visible={themesVisible} />
    </div>
    </AppContext.Provider>
  )
}

export default App
