import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='heading flex flex-col sm:ml-5 sm:mt-5 sm:h-8 sm:flex sm:flex-row justify-between'>
        <div className='logo justify-center flex sm:flex sm:w-36 '>
      <div className='justify-center items-center bg-gradient-to-r from-purple-600 to-red-600 w-10 h-10 rounded-md'></div>
      <span className='sm:mt-2 ml-2 mt-2 sm:ml-2 sm:text-lg'>Log</span>
        </div>
        <div className='navigation mx-auto sm:-mx-0 flex flex-row sm:ml-28 sm:flex'>
        <a className='home mt-1 cursor-pointer relative '>Home
        <ul className='category hidden pl-4 shadow-md absolute bg-white w-20'>
          <li className='hover:bg-gray-400 active:bg-gray-600 mt-2 ml-1'>Help</li>
          <li className='hover:bg-gray-400 active:bg-gray-600 mt-2 ml-1'>Help</li>
          <li className='hover:bg-gray-400 active:bg-gray-600 ml-1'>Help</li>
        </ul>
        </a>
        <a className='sm:ml-6 ml-4 mt-1 cursor-pointer' >Profile</a>
        <a className='sm:ml-6 ml-4 mt-1 cursor-pointer'>Contact</a>
        <a className='sm:ml-6 ml-4 mt-1 cursor-pointer'>SIgn</a>
        <div className='sm:ml ml-4 mr-3 cursor-pointer flex bg-violet-500 p-1 rounded-xl hover:bg-violet-700 active:bg-purple-900'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <p className='sm:ml-1 text-white'>cart</p>
        </div>
        </div>
      </div>
      <div className='body sm:flex sm:justify-between'>
        <div className='sm:flex-col sm:mt-44 sm:ml-8'>
      <h1 className='mt-4 sm:text-3xl sm:mb-2'>Explore More</h1>
      <p className='sm:w-80 sm:mb-4 sm:tracking-wide'>In our store, you enjoy latest trendy items at lowest price! we enjoy to give you exciting discounts !</p>
      <button className= 'p-3 mt-3 rounded-full text-slate-100 font-extrabold hover:bg-violet-700 active:bg-black bg-violet-600'>Shop Now</button>
        </div>
      <div className='mt-6'>
        <img className='w-150px' src={process.env.PUBLIC_URL + 'tailwindcss.png'} />
      </div>
      </div>
      <div className='flex flex-row justify-between mx-11 my-7'>
        <h1 className='text-xl font-bold'>Mens Collections</h1>
        <div className='flex '>
        <a classname='mr-2' >View more </a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </div>
    </div>
  );
}


export default App;
