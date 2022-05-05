import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App sm:mt-48 sm:flex mx-auto w-full">
        <div className='left sm:mr-32' style={{width:"420px"}}>
          <img className='w-64 mx-auto' src={process.env.PUBLIC_URL + 'facebook.svg'} />
          <p className='text-2xl hidden sm:block  ml-12 text-left'>Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className='right-mt-18 flex flex-col bg-white p-5 border rounded-md shadow-xl' style={{width:"400px"}}>
            <input className='px-4 mb-4 h-12 w-full border border-gray-300' type='text' placeholder='Email adress or phone number'/>
            <input className='px-4 h-12 w-full mb-4 border border-gray-300' type='password' placeholder='Password' />
            <button className='w-full h-12 bg-blue-600 mb-4 rounded-sm text-white text-2xl hover:bg-blue-700' type='button'>Log In</button>
            <span className='text-blue-500 mb-4 cursor-pointer'>Forgotten password?</span>
            <hr className='mb-4'/>
            <button className='mb-4 text-lg bg-green-500 hover:bg-green-600 w-3/4 mx-auto h-12 rounded-md text-white font-medium' type='button' >Create New Account</button>

        </div>
    </div>
  );
}

export default App;
