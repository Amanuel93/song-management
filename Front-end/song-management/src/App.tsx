// src/App.tsx
// SongList.tsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from './store';
// import { fetchSongsStart } from './slices/songSlices'; // Adjust import path as necessary
// import  {Button}  from './components/Stylels/Button.styled';
// import { Container } from './components/Stylels/Container';
// import { Songcard,SongTitle,Songcontainer,Songaction } from './components/Stylels/Container';
// import Navbar from './components/Navbar';
// import { MdEdit } from "react-icons/md";
// import { MdDeleteOutline } from "react-icons/md";

// const SongList: React.FC = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const { songs, loading, error,currentPage} = useSelector((state: RootState) => state.songs);
//   const baseUrl = 'http://localhost:5000/';

//   useEffect(() => {
//     dispatch(fetchSongsStart({page:1}));
//   }, [dispatch]);

//   const handleLoadMore = () => {
//     dispatch(fetchSongsStart({ page: currentPage + 1 }));
//   };

//   // if (loading) return <p>Loading...</p>;
//   if (loading && currentPage === 1) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//     <Navbar/>
//     <Container color="#212f3d">
//       <h1>Album songs</h1>
//       <ul className='songList'>
//         {songs.map(song => (
//           <li key={song._id}>  
//           <Songcontainer>
//             <Songcard>
//               <img 
//                 src={`${baseUrl}${song.image}`} 
//                 alt="song image"
//                 style={{
//                 width: '50px', /* Set the width */
//                 height: '50px', /* Maintain aspect ratio */
//                 borderRadius: '100%', /* Add rounded corners */
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' /* Add a shadow */
//               }}
//               /> 
//               <SongTitle>
//                <h3>{song.title}</h3>
//                <p>{song.artist}</p>
//               </SongTitle>
//             </Songcard> 
//             <SongTitle>
//               <Songaction>
//                <h3><MdEdit/></h3>
//                <h3><MdDeleteOutline/></h3>
//               </Songaction>
//             </SongTitle>
//           </Songcontainer>
//           </li>
//         ))}
//       </ul>
//        {loading && <p>Loading more songs...</p>}
//         {!loading && (
//           <Button onClick={handleLoadMore}>
//             Load More
//           </Button>
//         )}
//     </Container>
//     </>
  
//   );
// };

// export default SongList;


// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import SongList from "./components/Songlist";
// import Layout from "./components/Layout";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // Parent layout component
//     children: [
//       {
//         path: "/",
//         element: <SongList />, // Child component for Home
//       },
//       // {
//       //   path: "about",
//       //   element: <About />, 
//       // },
//       // {
//       //   path: "contact",
//       //   element: <Contact />,
//       // },
//     ],
//   },
// ]);

// const rootElement = document.getElementById("root");

// if (rootElement) {
//   ReactDOM.createRoot(rootElement).render(
//     <React.StrictMode>
//       <RouterProvider router={router} />
//     </React.StrictMode>
//   );
// } else {
//   console.error("Root element not found");
// }

// export default App;
