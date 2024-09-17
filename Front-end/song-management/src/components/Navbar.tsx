// import { Nav } from './Stylels/styles'
// import Addis from '../assets/Addis-software.jpg'
// import { Button } from './Stylels/Button.styled';
// import { Link } from 'react-router-dom';

// interface LinkItem {
//   name: string;
//   link: string;
// }

// const links: LinkItem[] = [
//   { name: "Create", link: "create" },
//   { name: "Stat", link: "statistics" },
  
// ];

// const Navbar = () => {
//   return (
//    <Nav>
//      <Link to='/'>
//       <img src={Addis} alt="Addis software logo" className='logo'/>
//      </Link>
//      <ul className='links'>
//       {
//        links.map((item) => (
//          <Link to={item.link} key={item.name}>
//            <Button>{item.name}</Button>
//          </Link>
//       ))
//       }  
//      </ul>
//    </Nav>
//   )
// }
// export default Navbar

import { Nav } from './Stylels/styles';
import Addis from '../assets/Addis-software.jpg';
import { Button } from './Stylels/Button.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetSuccessState } from '../slices/songSlices';

interface LinkItem {
  name: string;
  link: string;
}

const links: LinkItem[] = [
  { name: "Create", link: "create" },
  { name: "Stat", link: "statistics" },
];

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle Create button click and reset song state before navigating
  const handleCreateClick = () => {
    dispatch(resetSuccessState()); // Reset the success/error state in Redux
    navigate('/create'); // Navigate to the create form
  };

  return (
    <Nav>
      <Link to='/'>
        <img src={Addis} alt="Addis software logo" className='logo' />
      </Link>
      <ul className='links'>
        {
          links.map((item) => (
            item.name === "Create" ? (
              <Button key={item.name} onClick={handleCreateClick}>
                {item.name}
              </Button>
            ) : (
              <Link to={item.link} key={item.name}>
                <Button>{item.name}</Button>
              </Link>
            )
          ))
        }
      </ul>
    </Nav>
  );
};

export default Navbar;
