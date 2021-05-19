import './sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import SidebarMenu from './SidebarMenu';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Sidebar = () => {
    return (
        <div className = "sidebar">
            <SidebarMenu title = "Home" Icon = {HomeIcon}/>
            <SidebarMenu title = "Trending" Icon = {WhatshotIcon}/>
            <SidebarMenu title = "Subscription"  Icon = {SubscriptionsIcon}/>
            <hr/>
            <SidebarMenu title = "Library"  Icon = {VideoLibraryIcon}/>
            <SidebarMenu title = "History"  Icon = {HistoryIcon}/> 
            <SidebarMenu title = "Your Videos"  Icon = {OndemandVideoIcon}/>
            <SidebarMenu title = "Watch Later"  Icon = {WatchLaterIcon}/>
            <SidebarMenu title = "Liked Videos"  Icon = {ThumbUpAltIcon}/>
            <SidebarMenu title = "Show More"  Icon = {ExpandMoreIcon}/>
        </div>
    )
}

export default Sidebar
