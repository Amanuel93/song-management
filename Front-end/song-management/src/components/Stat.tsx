import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsMusicNoteList } from 'react-icons/bs';
import { fetchStatisticsStart } from '../slices/songSlices';
import { RootState } from '../store';
import { Container, Title, Card, StatTitle, List, StatValue, Error } from '../components/Stylels/StatisticsStyle';

const StatisticsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { statistics, error, loading } = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    dispatch(fetchStatisticsStart());
  }, [dispatch]);

  return (
    <Container>
      <Title>
        <BsMusicNoteList />
        Music Statistics
      </Title>
      {loading && <p>Loading...</p>}
      {error && <Error>{error}</Error>}
      {statistics && (
        <List>
          <Card>
            <StatTitle>Total Songs</StatTitle>
            <StatValue>{statistics.totalSongs}</StatValue>
          </Card>
          <Card>
            <StatTitle>Total Artists</StatTitle>
            <StatValue>{statistics.totalArtists}</StatValue>
          </Card>
          <Card>
            <StatTitle>Total Albums</StatTitle>
            <StatValue>{statistics.totalAlbums}</StatValue>
          </Card>
          <Card>
            <StatTitle>Total Genres</StatTitle>
            <StatValue>{statistics.totalGenres}</StatValue>
          </Card>
          <Card>
            <StatTitle>Songs Per Genre</StatTitle>
            {statistics.songsPerGenre.map((genre) => (
              <div key={genre._id}>
                <StatValue>{genre._id}: {genre.count}</StatValue>
              </div>
            ))}
          </Card>
          <Card>
            <StatTitle>Songs Per Artist</StatTitle>
            {statistics.songsPerArtist.map((artist) => (
              <div key={artist.artist}>
                <StatValue>{artist.artist}: {artist.songs} songs, {artist.albums} albums</StatValue>
              </div>
            ))}
          </Card>
          <Card>
            <StatTitle>Songs Per Album</StatTitle>
            {statistics.songsPerAlbum.map((album) => (
              <div key={album._id}>
                <StatValue>{album._id}: {album.count}</StatValue>
              </div>
            ))}
          </Card>
        </List>
      )}
    </Container>
  );
};

export default StatisticsPage;
