import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSongStart } from '../slices/songSlices'; // Adjust the import path accordingly
import { FormContainer,Title,Form,Input,FileInput,Button } from '../components/Stylels/Formstyle';
import { FormHandle } from '../components/Stylels/Container';
const SongForm: React.FC = () => {
  const dispatch = useDispatch();

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

    // Reset form fields
    setFormData({
      title: '',
      artist: '',
      genre: '',
      album: '',
      image: null,
    });
  };

  return (
    <FormHandle>
    <FormContainer>
      <Title>Create a New Song</Title>
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
