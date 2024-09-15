import { Nav } from './Stylels/styles'
import Addis from '../assets/Addis-software.jpg'
import { Button } from './Stylels/Button.styled';
import { Link } from 'react-router-dom';

interface LinkItem {
  name: string;
  link: string;
}

const links: LinkItem[] = [
  { name: "Create", link: "create" },
  { name: "Stat", link: "statistics" },
  
];

const Navbar = () => {
  return (
   <Nav>
     <Link to='/'>
      <img src={Addis} alt="Addis software logo" className='logo'/>
     </Link>
     <ul className='links'>
      {
       links.map((item) => (
         <Link to={item.link} key={item.name}>
           <Button>{item.name}</Button>
         </Link>
      ))
      }  
     </ul>
   </Nav>
  )
}
export default Navbar