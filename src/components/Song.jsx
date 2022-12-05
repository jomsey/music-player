import Icon from "../ui/Icon";


export default function Song({song,onSongClick,playing,current}) {
  return (
    <div className={`song ${current?"active":""}`} onClick={onSongClick}>
        <div> <Icon name={"music-note"}/> <small>{song.name}</small></div>
        <Icon name={playing?"pause-circle":"play-circle"}/>
    </div>
  )
}
