import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSongByIdStart, updateSongStart } from '../slices/songSlices'; // Import your actions
import { RootState } from '../store';
import { FormContainer, Title, Form, Input, FileInput, Button } from '../components/Stylels/Formstyle';
import { FormHandle } from '../components/Stylels/Container';

const UpdateSongForm: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract song ID from URL params
  const dispatch = useDispatch();
  
  // Fetch the song when the component mounts
  useEffect(() => {
    if (id) {
      dispatch(fetchSongByIdStart({ id }));
    }
  }, [dispatch, id]);

  // Get the song data from the Redux state
  const { song, loading } = useSelector((state: RootState) => state.songs);
  
  // Initialize form data with the fetched song data
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    album: '',
    image: null as File | null,
  });

  // Update form data when the song data is fetched
  useEffect(() => {
    if (song) {
      setFormData({
        title: song.title || '',
        artist: song.artist || '',
        genre: song.genre || '',
        album: song.album || '',
        image: null,
      });
    }
    console.log(song)
  }, [song]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file changes
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

    // Create form data object to handle image file upload
    const updatedSong = new FormData();
    updatedSong.append('title', formData.title);
    updatedSong.append('artist', formData.artist);
    updatedSong.append('genre', formData.genre);
    updatedSong.append('album', formData.album);
    if (formData.image) {
      updatedSong.append('image', formData.image);
    }

    // Ensure id is defined before dispatching
    if (id) {
      dispatch(updateSongStart({ id, data: updatedSong }));
    }
  };

  return (
    <FormHandle>
      <FormContainer>
        <Title>Update Song</Title>
        {!loading ? (
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="title"
              placeholder={formData.title}
              value={formData.title}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="artist"
              placeholder={formData.artist}
              value={formData.artist}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="genre"
              placeholder={formData.genre}
              value={formData.genre}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name={formData.album}
              placeholder={formData.album || 'Enter album name'}
              value={formData.album}
              onChange={handleChange}
              required
            />
            <FileInput
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
            <Button type="submit">Update Song</Button>
          </Form>
        ) : (
          <p>Loading...</p>
        )}
      </FormContainer>
    </FormHandle>
  );
};

export default UpdateSongForm;
