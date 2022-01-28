import React,{useRef} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import BorderBottomIcon from '@mui/icons-material/BorderBottom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import './MoreT_LoginT.css';

const LoginT = () => {


    return (
        <div  className='loginT_one ' style={{width:"235px",marginTop:"8px"}}>
            <div className="login_top login_elements" style={{margin:"15px 0px 5px 0px",display:"flex",marginTop:"20px"}}>
            <p style={{marginRight:"10px",fontSize:"14px"}}>New customer? </p>
            <p className='hTAg_one' style={{marginRight:"50px",fontSize:"14px"}} > Sign Up</p>
            </div>
            <hr />
            <div className='login_elements' style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <AccountCircleIcon style={{margin:"10px",fill:"#2874f0"}}/>
            <p style={{fontSize:"14px"}}> My Profile</p>
            </div>
            <hr/>
            <div className='login_elements text-xs' style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <AddIcon style={{margin:"10px",fill:"#2874f0"}}/>
            <p style={{fontSize:"14px"}}> Flipkart Plus Zone</p>
            </div>
            <hr/>
            <div className='login_elements' style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <BorderBottomIcon style={{margin:"10px",fill:"#2874f0"}}/>
            <p style={{fontSize:"14px"}}> Orders</p>
            </div>
            <hr/>
            <div className='login_elements' style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <FavoriteIcon style={{margin:"10px",fill:"#2874f0"}}/>
            <p style={{fontSize:"14px"}}> Wish List</p>
            </div>
            <hr/>
            <div className='login_elements' style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <EmojiEventsIcon style={{margin:"10px",fill:"#2874f0"}}/>
            <p style={{fontSize:"14px"}}> Rewards</p>
            </div>
            <hr/>
            <div className='login_elements' style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <AccountCircleIcon style={{margin:"10px",fill:"#2874f0"}}/>
            <p style={{fontSize:"14px"}}> Gift Cards</p>
            </div>
        </div>
    )
}

export default LoginT;
