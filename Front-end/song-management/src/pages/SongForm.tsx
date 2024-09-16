// import React, { useState } from 'react';
// import { useDispatch,useSelector } from 'react-redux';
// import { RootState } from '../store';
// import { createSongStart } from '../slices/songSlices';
// import { FormContainer,Title,Form,Input,FileInput,Button } from '../components/Stylels/Formstyle';
// import { FormHandle } from '../components/Stylels/Container';
// import { useNavigate } from "react-router-dom";

// const SongForm: React.FC = () => {
//   const dispatch = useDispatch();

//   const { success, error } = useSelector((state: RootState) => state.songs);
//   const navigate = useNavigate();
  
//   // Form state
//   const [formData, setFormData] = useState({
//     title: '',
//     artist: '',
//     genre: '',
//     album: '',
//     image: null as File | null,
//   });

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle file change
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData({
//         ...formData,
//         image: e.target.files[0],
//       });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Create form data object to handle the image file upload
//     const newSong = new FormData();
//     newSong.append('title', formData.title);
//     newSong.append('artist', formData.artist);
//     newSong.append('genre', formData.genre);
//     newSong.append('album', formData.album);
//     if (formData.image) {
//       newSong.append('image', formData.image);
//     }

//     // Dispatch create song action
//     dispatch(createSongStart(newSong));

//     // Reset form fields
//     setFormData({
//       title: '',
//       artist: '',
//       genre: '',
//       album: '',
//       image: null,
//     });
//     if (success) {
//       alert('Song created successfully!');
//       navigate('/');
//     }
//   };

//   return (
//     <FormHandle>
//     <FormContainer>
//       <Title>Create a New Song</Title>
//       {error && <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , color: 'white' }}>Couldn't create song, try again!</p>}
//       <Form onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           type="text"
//           name="artist"
//           placeholder="Artist"
//           value={formData.artist}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           type="text"
//           name="genre"
//           placeholder="Genre"
//           value={formData.genre}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           type="text"
//           name="album"
//           placeholder="Album"
//           value={formData.album}
//           onChange={handleChange}
//           required
//         />
//         <FileInput
//           type="file"
//           name="image"
//           accept="image/*"
//           onChange={handleFileChange}
//           required
//         />
//         <Button type="submit">Create Song</Button>
//       </Form>
//      </FormContainer>
//     </FormHandle>
//   );
// };

// export default SongForm;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { createSongStart } from '../slices/songSlices';
import { FormContainer, Title, Form, Input, FileInput, Button } from '../components/Stylels/Formstyle';
import { FormHandle } from '../components/Stylels/Container';
import { useNavigate } from "react-router-dom";

const SongForm: React.FC = () => {
  const dispatch = useDispatch();
  const { success, error } = useSelector((state: RootState) => state.songs);
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    album: '',
    image: null as File | null,
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create form data object to handle the image file upload
    const newSong = new FormData();
    newSong.append('title', formData.title);
    newSong.append('artist', formData.artist);
    newSong.append('genre', formData.genre);
    newSong.append('album', formData.album);
    if (formData.image) {
      newSong.append('image', formData.image);
    }

    // Dispatch create song action
    dispatch(createSongStart(newSong));
  };

  // Use useEffect to watch for successful song creation and navigate afterwards
  useEffect(() => {
    if (success) {
      alert('Song created successfully!');
      navigate('/');  // Navigate to the home page after successful creation
    }
  }, [success, navigate]);

  // Reset form fields if the song is successfully created
  useEffect(() => {
    if (success) {
      setFormData({
        title: '',
        artist: '',
        genre: '',
        album: '',
        image: null,
      });
    }
  }, [success]);

  return (
    <FormHandle>
      <FormContainer>
        <Title>Create a New Song</Title>
        {error && <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>Couldn't create song, try again!</p>}
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="artist"
            placeholder="Artist"
            value={formData.artist}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="genre"
            placeholder="Genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="album"
            placeholder="Album"
            value={formData.album}
            onChange={handleChange}
            required
          />
          <FileInput
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <Button type="submit">Create Song</Button>
        </Form>
      </FormContainer>
    </FormHandle>
  );
};

export default SongForm;

