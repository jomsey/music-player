import Icon from "../ui/Icon";
import Theme from "./Theme";
import React from 'react'
import {themes} from "../utils/themes"
import { AppContext } from "../App";
import  "./Themes.css";


export default function Themes({visible}) {
 
  const [AppThemes,setAppThemes] = React.useState(themes)
  const {setThemesVisible} = React.useContext(AppContext)


  const handleThemesClose=()=>{
    setThemesVisible(false)
  }

  const handleSelectTheme=(id)=>{
      const updatedThemes = themes.map(theme=>{

      if(theme.id === id){
           const selectedTheme = {...theme,selected:true}
           localStorage.setItem("theme",theme.source)
           return selectedTheme
      }
           return theme
      })
   
    setAppThemes(updatedThemes)
 
  }

  //this is the default theme
  if(localStorage.getItem("theme")===null)localStorage.setItem("theme","/t3.jpg");
  
  return (
    <div className={`${visible?"themes themes-visible":"themes"}`}>
        <div className="overlay"></div>
        <Icon name="arrow-left" extraClasses={"themes-close"} onIconClick={handleThemesClose}/>
        {AppThemes.map(theme=> <Theme source={theme.source} 
                                      selected={theme.source===localStorage.getItem("theme")}
                                      key={theme.id}
                                      onThemeClick={()=>handleSelectTheme(theme.id)} />)}
    </div>
  )
}
