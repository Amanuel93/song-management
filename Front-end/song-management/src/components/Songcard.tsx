import React from 'react'
import { Flex } from './Stylels/Container'
import { MdEdit,MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { deleteSongStart } from '../slices/songSlices';
import { Link } from 'react-router-dom';

type SongProps = {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
    image: string;
  };

const Songcard: React.FC<SongProps>  = ({_id,title, artist,image }) => {
     const dispatch: AppDispatch = useDispatch();
     const handleDelete = () => {
     dispatch(deleteSongStart({id: _id}));
    };

  return (
    <Flex content="space-around" width='100%'>
      <Flex>
        <img src={image} />
        <Flex direction='column' items="flex-start">
            <p>{title}</p>
            <p>{artist}</p>
        </Flex>
      </Flex>
      <Flex>
        <Link to = {`update/${_id}`}>
         <span><MdEdit style={{color:'white'}}/></span>
        </Link>
        <span><MdDeleteOutline onClick={handleDelete} style={{color:'red' , cursor:'pointer'}}/></span>
      </Flex>
    </Flex>
  )
}

export default Songcard;