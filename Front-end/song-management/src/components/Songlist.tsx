import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchSongsStart,fetchFilteredSongsStart } from '../slices/songSlices'; // Adjust import path as necessary
import  {Button}  from '../components/Stylels/Button.styled';
import { Songcontainer } from './Stylels/Container';
import Songcard from './Songcard';
import { GiMusicSpell } from "react-icons/gi";
import { Flex } from './Stylels/Container';
import { Search } from './Stylels/styles';

const SongList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { songs, loading, error,currentPage} = useSelector((state: RootState) => state.songs);
  const baseUrl = 'http://localhost:5000/';

  // State to handle search input
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchSongsStart({page:1}));
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm === '') {
      dispatch(fetchSongsStart({ page: 1 }));
    } else {
      dispatch(fetchFilteredSongsStart({ search: searchTerm, page: 1, limit: 5 }));
    }
  }, [searchTerm, dispatch]);



  const handleLoadMore = () => {
    dispatch(fetchSongsStart({ page: currentPage + 1 }));
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update search term state when user types in the search input
    setSearchTerm(e.target.value);
  };


  // if (loading) return <p>Loading...</p>;
//   if (loading && currentPage === 1) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

const songList = songs || [];
console.log(songs);

  return (
    <Songcontainer>
        <Flex>
          <GiMusicSpell size={50} color="#ecf0f1" className='icon'/>
            <h1>Addis Song</h1>
          <GiMusicSpell size={50} color="#ecf0f1" className='icon'/>
        </Flex>
        <Search>
         <input
           type="text"
           placeholder="Filter by Genre,artist"
           value={searchTerm}
           onChange={handleSearchInput}
         />
         {/* <IoSearchOutline className='search'/> */}
       </Search>
      <ul className='songList'>
        {
            loading
             ?
             <p>Loading</p>
             :
         songList.map(song => (
          <li key={song._id}>  
            <Songcard {...song} image={`${baseUrl}${song.image}`}/>
          </li>
        ))
        }
      </ul>
       {/* {loading && <p>Loading more songs...</p>} */}
        {!loading && (
          <Button onClick={handleLoadMore} width="200px">
            {loading ? "Loading more " : "Load More"}
          </Button>
        )}
    </Songcontainer>
  );
};

export default SongList;