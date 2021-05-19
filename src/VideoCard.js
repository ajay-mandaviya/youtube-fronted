import Avatar from '@material-ui/core/Avatar';
import './videocard.css'
const VideoCard = ({img  , title ,channel , views , timestamp ,  channelImage}) =>{    
    return (
        <div className = "card">
            <img className = "img" src = {img}  alt  = ""/>
            <div className = "info">
                <Avatar  className = "avatar" src= {channelImage} alt = {channel}/>
            <div className = "text">
                    <h4>{title}</h4>
                    <p>{channel}</p>  
                    <p>
                        {views} {timestamp}
                    </p>
            </div>
            </div>
        </div>
    )
}
export default VideoCard