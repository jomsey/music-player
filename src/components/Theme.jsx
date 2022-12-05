import Icon from "../ui/Icon";


const Theme = ({selected,source,onThemeClick}) => {
    return (
        <div className="theme" onClick={onThemeClick}>
            <img src={source} alt=""  />
            {selected && 
                <div className="selected-theme">
                    <div className="overlay"></div>
                    <Icon name="check2"/>
               </div>
        }
        </div>
    );
}

export default Theme;
