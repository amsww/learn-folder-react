import React,{useState,useRef,useEffect} from 'react';
import './Header.css';
import MoreT from './MoreT';
import LoginT from './LoginT';
import './MoreT_LoginT.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Header ({setInputValue})  {

    const [search, setSearch] = useState("");
    const inputRef = useRef("");
    const dropdownOne=useRef("");
    const [isFocus,setIsFocus]=useState(false);

    const searchFunction=()=>{
        inputRef.current.value="";
        setInputValue(search)
    }

    

    return (
        <div className='header' >
            <div className='header_one '>
                <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
                <div className='header_one_down flex' >
                    <span style={{fontSize:"11px",color:"white",fontStyle:"italic",marginLeft:"2px"}}>Explore </span>
                    <span style={{fontSize:"11px",color:"#f9e107",fontStyle:"italic",marginLeft:"2px"}}>plus</span>
                    <span><img style={{width:"10px",marginLeft:"2px"}} src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt=""/></span>
                </div>
            </div>
            <div className='header_two'>
                <input ref={inputRef} onChange={e=>setSearch(e.target.value)} type={"text"} placeholder='Search for products brands and more'/>
                <button className='button_input'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
                  </button>
            </div>
            <div className='groupedDiv'>
            <div className='whythis relative header_three flex flex-col'  >
              <button  class='loginButton absolute text-blue-600 bg-white'   >Login</button>
            <div className='testing'><LoginT /></div>
            </div>


            <div className='header_four flex-col relative'>
              <div class="flex">
              <p class="text-white mb-1">More</p>
              <KeyboardArrowDownIcon className='testingTwoDrop' style={{fill:"white"}}/>
              </div>
              <div className='testingTwo absolute w-56' style={{marginTop:"43px",boxShadow:"0px 8px 16px 0px rgba(0,0,0,0.2)"}}><MoreT /></div>
            </div>


            <div className='header_five'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            <p >Cart</p>
            </div>
        </div>
            </div>
    )
}


export default Header
