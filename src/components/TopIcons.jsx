import Icon from "../ui/Icon";
import React from "react";
import { AppContext } from "../App";
import "./TopIcons.css";


export default function TopIcons() {
  
  const {setThemesVisible,setAboutAuthorVisible} = React.useContext(AppContext)

  const handleAboutAuthorOpen=()=>{
    setAboutAuthorVisible(true)
  }

  const handleThemesOpen=()=>{
   setThemesVisible(true)
  }
  return (
    <div className="top-icons">
        <Icon name="three-dots-vertical" onIconClick={handleAboutAuthorOpen}/>
        <Icon name="gear" onIconClick={handleThemesOpen}/>
    </div>
  )
}
