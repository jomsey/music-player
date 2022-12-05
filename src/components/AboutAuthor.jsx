import "./AboutAuthor.css"
import Icon from "../ui/Icon";
import { useState,useContext} from 'react'
import { AppContext } from "../App";



export default function AboutAuthor({visible}) {

  const {setAboutAuthorVisible} = useContext(AppContext)

  const handleClose=()=>{
  setAboutAuthorVisible(false)
  }
  
  return (
    <div className={`${visible?"author open-abt-author":"author"}`}>
    <Icon name="x-lg" extraClasses={"abt-author-close"} onIconClick={handleClose}/>
    <div className="info"> <h1>Music Player</h1>
    <span>created by</span>
    <small >Muwanguzi Joseph</small>
    </div>
    <div className="social-pack">
    <Icon name="facebook"/>
    <Icon name="github"/>
    </div>
  </div>
  )
}
