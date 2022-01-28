import FileDownloadIcon from '@mui/icons-material/FileDownload';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import './MoreT_LoginT.css';


const MoreT = () => {

    return (
              <div className="moret" >
      <div className="moret_one" >
        <NotificationsIcon style={{margin:"10px",fill:"#2874f0"}} />
        <p style={{fontSize:"14px"}}> Notification Preferences</p>
      </div>
      <hr />
      <div className="moret_one">
        <CardGiftcardIcon style={{margin:"10px",fill:"#2874f0"}} />
        <p style={{fontSize:"14px"}}> Sell on Flipkart</p>
      </div>
      <hr />
      <div className="moret_one" >
        <HelpCenterIcon style={{margin:"10px",fill:"#2874f0"}} />
        <p style={{fontSize:"14px"}}>24*7 Customer Care</p>
      </div>
      <hr/>
      <div className="moret_one" >
        <TrendingUpIcon style={{margin:"10px",fill:"#2874f0"}}/>
        <p style={{fontSize:"14px"}}> Advertise</p>
      </div>
      <hr />
      <div className="moret_one" >
        <FileDownloadIcon style={{margin:"10px",fill:"#2874f0"}}/>
        <p style={{fontSize:"14px"}}> Download app</p>
      </div>
        </div>
    )
}

export default MoreT;
