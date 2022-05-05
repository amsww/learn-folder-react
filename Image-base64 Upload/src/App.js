// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleImageChange = (e) => {
//     setSelectedFiles([]);
//     if (e.target.files) {
//       const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
//       setSelectedFiles((prevImages) => prevImages.concat(filesArray));
//       Array.from(e.target.files).map(
//         (file) => URL.revokeObjectURL(file)
//       );
//     }
//   };

//   const renderPhotos = (source) => {
//     return source.map((photo) => {
//       return <img className="p-2" src={photo} alt="" key={photo} style={{ width: "20%", height: "180px" }} />;
//     });
//   };


//   function uploadToServer(e) {
//     e.preventDefault();
//     var files = e.target[0].files;
//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       formData.append('file[]', files[i])
//     }
//     axios({
//       url: 'http://127.0.0.1:8000/api/upload',
//       method: "POST",
//       data: formData
//     }).then((res) => {
//       console.log(res);
//     })
//   }
//   return (
//     <div className="app p-5">
//       <form onSubmit={(e) => uploadToServer(e)} encType="multipart/form-data">
//         <div>
//           <input className="ml-2" type="file" id="file" name="file[]" multiple onChange={handleImageChange} />
//           <div className="result">{renderPhotos(selectedFiles)}</div>
//           <input type="submit" name=""></input>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// const App = () => {
//   const [selectedImage, setSelectedImage] = useState();

//   const imageChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedImage(e.target.files[0]);
//       console.log(e.target.files[0])
//     }
//   };

//   // const removeSelectedImage = () => {
//   //   setSelectedImage();
//   // };

//   return (
//     <>
//       <div style={styles.container}>
//         <input
//           accept="image/*"
//           type="file"
//           onChange={imageChange}
//         />

//         {selectedImage && (
//           <div style={styles.preview}>
//             <img
//               src={URL.createObjectURL(selectedImage)}
//               style={styles.image}
//               alt="Thumb"
//             />
//             {/* <button onClick={removeSelectedImage} style={styles.delete}>
//               Upload
//             </button> */}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default App;


// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 50,
//   },
//   preview: {
//     marginTop: 50,
//     display: "flex",
//     flexDirection: "column",
//   },
//   image: { maxWidth: "100%", maxHeight: 320 },
//   delete: {
//     cursor: "pointer",
//     padding: 15,
//     background: "green",
//     color: "white",
//     border: "none",
//   },
// };

// import logo from './logo.svg';
// import { useState } from 'react';
// import './App.css';

// function App() {

//   const [image,setImage] = useState({img:""});

//   const selectedHandler = events => {
//     setImage({img:events.target.files[0]})
//   }

//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log(image)
//   }

//   return (
//     <div className="App">
//       <form onSubmit={submitHandler}>
//      <input type={"file"} name='file' onChange={selectedHandler} />
//      <input type={"submit"} value={"upload"} />
//       </form>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

	const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));


			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) 
			);
		}
    localStorage.setItem(0,Array)
	};

	const renderPhotos = (source) => {
		console.log(source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};

	return (
		<div className="app">
			<div className='mainApp'>
				<input type="file" id="file" multiple onChange={handleImageChange} />
			</div>
				<div className="result">{renderPhotos(selectedFiles)}</div>
		</div>
	);
};

export default App;