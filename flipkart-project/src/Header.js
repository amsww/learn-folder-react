import React,{useState,useRef} from 'react';
// import MoreT from './MoreT';
// import LoginT from './LoginT';
// import './MoreT_LoginT.css';
import './Header.css'

function Header ({setInputValue})  {

    const [search, setSearch] = useState("");
    const inputRef = useRef("");
    const [isOpen,setIsOpen]=useState(false)

    const searchFunction=()=>{
        inputRef.current.value="";
        setInputValue(search)
    }
    

    return (
        <div className='header' >
            <div className='header_one '>
                <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
                <div className='header_one_down flex' >
                    <span className='ml-0' style={{fontSize:"11px",color:"white",fontStyle:"italic"}}>Explore </span>
                    <span className='ml-1' style={{fontSize:"11px",color:"#f9e107",fontStyle:"italic"}}> Plus </span>
                    <span className='ml-1'><img style={{width:"10px"}} src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt=""/></span>
                </div>
            </div>
            <div className='header_two hidden sm:flex'>
                <input ref={inputRef} onChange={e=>setSearch(e.target.value)} type={"text"} placeholder='search for products brands and more'/>
                <svg onClick={()=>searchFunction()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </div>
            <div className='header_three'>
            <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
            Login
            </button>
            </div>
            <div className='header_four'>
            <div class="p-10">

  <div class="dropdown inline-block relative">
    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      <span class="mr-1">Dropdown</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
      <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
    </ul>
  </div>

</div>            
            </div>
            <div className='header_five'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            <p >Cart</p>
            </div>
        </div>
    )
}

export default Header